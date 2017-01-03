import { Observable } from 'rxjs/Rx';
import { Store, ActionReducer, Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { ApiService } from '../../shared/services/api.service';
import { Api, ApiOptions } from '../../shared/interfaces/api.interface';
import { CurrentUser } from '../../shared/services/current-user.model';

const initAsset: any = { clipData: [], common: [], primary: [], secondary: [], filter: '', name: '', price: 0 };

export const asset: ActionReducer<any> = (state = initAsset, action: Action) => {
  switch (action.type) {
    case 'SET_ASSET':
      return Object.assign({}, state, action.payload);
    case 'RESET':
      return Object.assign({}, initAsset);
    default:
      return state;
  }
};

@Injectable()
export class AssetService {
  public data: Observable<any>;
  public errorMessage: any;

  constructor(
    public store: Store<any>,
    public api: ApiService,
    private currentUser: CurrentUser) {
    this.data = this.store.select('asset');
  }

  public initialize(id: any): Observable<any> {
    return this.api.get(Api.Assets, `clip/${id}/clipDetail`)
      .do(response => this.set({ type: 'SET_ASSET', payload: response }));
  }

  public set(action: Action): void {
    this.store.dispatch(action);
  }

  public reset(): void {
    this.store.dispatch({ type: 'RESET' });
  }

  public downloadComp(id: any, compType: any): Observable<any> {
    return this.api.get(Api.Assets, `renditionType/downloadUrl/${id}`, { parameters: { type: compType } });
  }

  public getPrice(id: any, attributes?: any): Observable<any> {
    let formatedAttributes = attributes ? this.formatAttributes(attributes) : null;
    let parameters = formatedAttributes ? { region: 'AAA', attributes: formatedAttributes }  : { region: 'AAA' };
    return this.api.get(Api.Orders, `priceBook/price/${id}`, { parameters });
  }

  public getshareLink(id: any, accessStartDate: any, accessEndDate: any): Observable<any> {
    return this.api.post(
      Api.Identities,
      'accessInfo',
      { body: { type: 'asset', accessInfo: id, accessStartDate: accessStartDate, accessEndDate: accessEndDate } }
    );
  }

  public createShareLink(shareLink: any): Observable<any> {
    return this.api.post(Api.Identities, 'accessInfo', { body: shareLink });
  }

  public getData(id: any, share_token?: string): Observable<any> {
    let options: ApiOptions = { loading: true };
    if (share_token) options.overridingToken = share_token;
    return this.api.get(Api.Assets, 'clip/' + id + '/clipDetail', options)
      .do((res) => this.setActiveAsset(res));
  }

  public setActiveAsset(asset: any): void {
    this.set({
      type: 'SET_ASSET', payload: {
        assetId: asset.assetId,
        clipThumbnailUrl: asset.clipThumbnailUrl,
        clipUrl: asset.clipUrl,
        detailTypeMap: asset.detailTypeMap,
        hasDownloadableComp: asset.hasDownloadableComp,
        resourceClass: asset.resourceClass,
        transcodeTargets: asset.transcodeTargets || [],
        price: asset.price
      }
    });
  }

  public getPriceAttributes(priceModel: string): Observable<any> {
    priceModel = priceModel ? priceModel.split(' ').join('') : 'RightsManaged';
    return this.api.get(
      Api.Orders,
      'priceBook/priceAttributes',
      { parameters: { region: 'AAA', priceModel: priceModel } }
    ).map((data: any) => {
      data.list[0].primary = true;
      return data.list;
    });
  }

  public getSpeedviewData(assetId: number): Observable<any> {
    let path: string = this.currentUser.loggedIn() ? `assetInfo/view/SpeedView` : `assetInfo/anonymous/view/SpeedView`;
    return this.api.get(Api.Assets, `${path}/${assetId}`);
  }

  private formatAttributes(attrs: any): any {
    let formatted: Array<string> = [];
    for (let attr in attrs) {
      formatted.push(`${attr}:${attrs[attr]}`);
    }
    return formatted.join(',');
  }
}