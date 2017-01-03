/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './about.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/router/src/router_module';
import * as import4 from './about-routing.module';
import * as import5 from '@angular/common/src/localization';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from './about.component.ngfactory';
import * as import8 from '@angular/core/src/i18n/tokens';
import * as import9 from './about.component';
import * as import10 from '@angular/router/src/router_config_loader';
class AboutModuleInjector extends import0.NgModuleInjector<import1.AboutModule> {
  _CommonModule_0:import2.CommonModule;
  _RouterModule_1:import3.RouterModule;
  _AboutRoutingModule_2:import4.AboutRoutingModule;
  _AboutModule_3:import1.AboutModule;
  __NgLocalization_4:import5.NgLocaleLocalization;
  __ROUTES_5:any[];
  constructor(parent:import6.Injector) {
    super(parent,[import7.AboutComponentNgFactory],([] as any[]));
  }
  get _NgLocalization_4():import5.NgLocaleLocalization {
    if ((this.__NgLocalization_4 == null)) { (this.__NgLocalization_4 = new import5.NgLocaleLocalization(this.parent.get(import8.LOCALE_ID))); }
    return this.__NgLocalization_4;
  }
  get _ROUTES_5():any[] {
        if ((this.__ROUTES_5 == null)) { (this.__ROUTES_5 = [[{
          path: 'about',
          component: import9.AboutComponent
        }
    ]]); }
    return this.__ROUTES_5;
  }
  createInternal():import1.AboutModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD,(null as any)));
    this._AboutRoutingModule_2 = new import4.AboutRoutingModule();
    this._AboutModule_3 = new import1.AboutModule();
    return this._AboutModule_3;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.RouterModule)) { return this._RouterModule_1; }
    if ((token === import4.AboutRoutingModule)) { return this._AboutRoutingModule_2; }
    if ((token === import1.AboutModule)) { return this._AboutModule_3; }
    if ((token === import5.NgLocalization)) { return this._NgLocalization_4; }
    if ((token === import10.ROUTES)) { return this._ROUTES_5; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const AboutModuleNgFactory:import0.NgModuleFactory<import1.AboutModule> = new import0.NgModuleFactory(AboutModuleInjector,import1.AboutModule);