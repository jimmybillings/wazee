/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './about-routing.module';
import * as import2 from '@angular/router/src/router_module';
import * as import3 from '@angular/core/src/di/injector';
import * as import4 from './about.component.ngfactory';
import * as import5 from './about.component';
import * as import6 from '@angular/router/src/router_config_loader';
class AboutRoutingModuleInjector extends import0.NgModuleInjector<import1.AboutRoutingModule> {
  _RouterModule_0:import2.RouterModule;
  _AboutRoutingModule_1:import1.AboutRoutingModule;
  __ROUTES_2:any[];
  constructor(parent:import3.Injector) {
    super(parent,[import4.AboutComponentNgFactory],([] as any[]));
  }
  get _ROUTES_2():any[] {
        if ((this.__ROUTES_2 == null)) { (this.__ROUTES_2 = [[{
          path: 'about',
          component: import5.AboutComponent
        }
    ]]); }
    return this.__ROUTES_2;
  }
  createInternal():import1.AboutRoutingModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ROUTER_FORROOT_GUARD,(null as any)));
    this._AboutRoutingModule_1 = new import1.AboutRoutingModule();
    return this._AboutRoutingModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.AboutRoutingModule)) { return this._AboutRoutingModule_1; }
    if ((token === import6.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const AboutRoutingModuleNgFactory:import0.NgModuleFactory<import1.AboutRoutingModule> = new import0.NgModuleFactory(AboutRoutingModuleInjector,import1.AboutRoutingModule);