import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Store, ActionReducer, Action } from '@ngrx/store';
import { CurrentUser } from '../../shared/services/current-user.model';
import { ApiService } from '../../shared/services/api.service';
import { Api } from '../../shared/interfaces/api.interface';

const initFilters: any = {};
export const filters: ActionReducer<any> = (state: Array<any> = initFilters, action: Action) => {
  switch (action.type) {
    case 'FILTERS.SET_FILTERS':
      return Object.assign({}, JSON.parse(JSON.stringify(action.payload)));
    default:
      return state;
  }
};

@Injectable()
export class FilterService {
  public data: Observable<any>;
  public filterState: any;

  constructor(
    private api: ApiService,
    public store: Store<any>,
    public currentUser: CurrentUser
  ) {
    this.filterState = {};
    this.data = this.store.select('filters');
  }

  public get(params: any, counted: boolean): Observable<any> {
    let options = JSON.parse(JSON.stringify(Object.assign({}, params, { counted })));

    return this.api.get(
      Api.Assets,
      this.currentUser.loggedIn() ? 'filter/filterTree' : 'filter/anonymous/filterTree',
      { parameters: options, loading: true }
    ).do(response => {
      this.set(this.sanitize(response, null));
      this.checkLocalStorage(response);
    });
  }

  public set(filters: any): void {
    this.store.dispatch({ type: 'FILTERS.SET_FILTERS', payload: filters });
  }

  public sanitize(filter: any, parent: any) {
    if (parent) filter.parentId = parent.filterId;
    if (filter.subFilters) {
      filter.expanded = false;
      for (var l of filter.subFilters) this.sanitize(l, filter);
      return filter;
    }
    return filter;
  }

  public toggle(currentFilter: any, filter = this.filters) {
    if (filter.filterId === currentFilter) {
      if (filter.active) filter.filterValue = null;
      filter.active = !filter.active;
      filter = JSON.parse(JSON.stringify(filter));
    }
    if (filter.subFilters) {
      for (var l of filter.subFilters) this.toggle(currentFilter, l);
      return filter;
    }
  }

  public toggleExclusive(subFilter: any, filter = this.filters): void {
    if (filter.subFilters) {
      if (filter.filterId === subFilter.parentId) {
        for (let f of filter.subFilters) f.active = (f.filterId === subFilter.filterId) ? !f.active : false;
      }
      for (var l of filter.subFilters) this.toggleExclusive(subFilter, l);
      return filter;
    }
    return filter;
  }

  public active(activeFilters: any, filter = this.filters) {
    if (filter.subFilters) {
      for (var l of filter.subFilters) this.active(activeFilters, l);
      return filter;
    } else {
      if (filter.active) activeFilters.push(filter);
      return filter;
    }
  }

  public clear(filter = this.filters) {
    if (filter.subFilters) {
      for (var l of filter.subFilters) this.clear(l);
      return filter;
    } else {
      if (filter.active) filter.active = false;
      filter.filterValue = null;
      return filter;
    }
  }

  public addCustomValue(currentFilter: any, value: any, filter = this.filters): void {
    if (filter.subFilters) {
      for (let f of filter.subFilters) this.addCustomValue(currentFilter, value, f);
      return filter;
    } else {
      if (filter.filterId === currentFilter.filterId) {
        filter.active = true;
        filter.filterValue = value;
      }
      return filter;
    }
  }

  public checkLocalStorage(filterTree: any): void {
    if (!localStorage.getItem('filterState')) {
      localStorage.setItem('filterState', JSON.stringify(this.setFilterStateInLocalStorage(filterTree)));
    }
  }

  public setFilterStateInLocalStorage(filterTree: any): any {
    if (filterTree.subFilters) {
      for (let f of filterTree.subFilters) {
        if (f.type === 'None' || f.type === 'List') {
          this.filterState[f.name] = false;
        }
        this.setFilterStateInLocalStorage(f);
      }
    }
    return this.filterState;
  }

  private get filters() {
    let filters: any = {};
    this.data.take(1).subscribe(f => filters = f);
    return filters;
  }
}
