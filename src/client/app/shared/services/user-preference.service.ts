import { Injectable } from '@angular/core';
import { Store, ActionReducer, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { Api } from '../interfaces/api.interface';
import { CurrentUser } from './current-user.model';

const defaultPreferences: any = {
  displayFilterCounts: false,
  collectionTrayIsOpen: false,
  searchIsOpen: true,
  sortId: 0,
  displayFilterTree: false
};

export const userPreferences: ActionReducer<any> = (state = defaultPreferences, action: Action) => {
  switch (action.type) {
    case 'USER_PREFS.UPDATE_PREFERENCES':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

@Injectable()
export class UserPreferenceService {
  public data: Observable<any>;

  constructor(
    public currentUser: CurrentUser,
    public store: Store<any>,
    public api: ApiService) {
    this.data = this.store.select('userPreferences');
  }

  public get state(): any {
    let s: any;
    this.data.take(1).subscribe(state => s = state);
    return s;
  }

  public getPrefs(): void {
    this.get().take(1).subscribe(response => {
      if (!response['prefs']) this.updateStore();
      this.set(response['prefs']);
    });
  }

  public toggleSearch(): void {
    this.update({ searchIsOpen: !this.state.searchIsOpen });
  }

  public closeSearch(): void {
    this.update({ searchIsOpen: false });
  }

  public toggleCollectionTray(): void {
    this.update({ collectionTrayIsOpen: !this.state.collectionTrayIsOpen });
  }

  public openCollectionTray(): void {
    this.update({ collectionTrayIsOpen: true });
  }

  public updateSortPreference(sortId: number): void {
    this.update({ sortId: sortId });
  }

  public toggleFilterCount(): void {
    this.update({ displayFilterCounts: !this.state.displayFilterCounts });
  }

  public toggleFilterTree(): void {
    this.update({ displayFilterTree: !this.state.displayFilterTree });
  }

  public set(preferences: any): void {
    this.updateStore(this.formatResponse(preferences));
  }

  public reset(): void {
    this.updateStore();
  }

  private formatResponse(preferences: any): any {
    for (let prefKey in preferences) {
      let newValue: any = this.stringToBool(preferences[prefKey]);
      preferences[prefKey] = newValue;
    }
    return preferences;
  }

  private get(): Observable<any> {
    return this.api.get(Api.Identities, 'userPreferences');
  }

  private update(params: any): void {
    this.updateStore(params);
    if (!this.currentUser.loggedIn()) return;
    this.put(params).take(1).subscribe();
  }

  private put(params: any): Observable<any> {
    let body: any = this.formatBody(params);
    return this.api.put(Api.Identities, 'userPreferences/item', { body: body });
  }

  private updateStore(data: any = defaultPreferences): void {
    this.store.dispatch({ type: 'USER_PREFS.UPDATE_PREFERENCES', payload: data });
  }

  private formatBody(preferences: any): any {
    for (let preference in preferences) {
      return {
        key: preference,
        value: preferences[preference]
      };
    };
  }

  private stringToBool(value: string): boolean | string {
    switch (value) {
      case 'true':
        return true;
      case 'false':
        return false;
      default:
        return value;
    };
  }
}
