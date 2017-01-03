"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('./home-routing.module');
var import2 = require('@angular/router/src/router_module');
var import4 = require('./home.component.ngfactory');
var import5 = require('./home.component');
var import6 = require('@angular/router/src/router_config_loader');
var HomeRoutingModuleInjector = (function (_super) {
    __extends(HomeRoutingModuleInjector, _super);
    function HomeRoutingModuleInjector(parent) {
        _super.call(this, parent, [import4.HomeComponentNgFactory], []);
    }
    Object.defineProperty(HomeRoutingModuleInjector.prototype, "_ROUTES_2", {
        get: function () {
            if ((this.__ROUTES_2 == null)) {
                (this.__ROUTES_2 = [[{
                            path: '',
                            component: import5.HomeComponent
                        }
                    ]]);
            }
            return this.__ROUTES_2;
        },
        enumerable: true,
        configurable: true
    });
    HomeRoutingModuleInjector.prototype.createInternal = function () {
        this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ROUTER_FORROOT_GUARD, null));
        this._HomeRoutingModule_1 = new import1.HomeRoutingModule();
        return this._HomeRoutingModule_1;
    };
    HomeRoutingModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.RouterModule)) {
            return this._RouterModule_0;
        }
        if ((token === import1.HomeRoutingModule)) {
            return this._HomeRoutingModule_1;
        }
        if ((token === import6.ROUTES)) {
            return this._ROUTES_2;
        }
        return notFoundResult;
    };
    HomeRoutingModuleInjector.prototype.destroyInternal = function () {
    };
    return HomeRoutingModuleInjector;
}(import0.NgModuleInjector));
exports.HomeRoutingModuleNgFactory = new import0.NgModuleFactory(HomeRoutingModuleInjector, import1.HomeRoutingModule);
