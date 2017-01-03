"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('./about-routing.module');
var import2 = require('@angular/router/src/router_module');
var import4 = require('./about.component.ngfactory');
var import5 = require('./about.component');
var import6 = require('@angular/router/src/router_config_loader');
var AboutRoutingModuleInjector = (function (_super) {
    __extends(AboutRoutingModuleInjector, _super);
    function AboutRoutingModuleInjector(parent) {
        _super.call(this, parent, [import4.AboutComponentNgFactory], []);
    }
    Object.defineProperty(AboutRoutingModuleInjector.prototype, "_ROUTES_2", {
        get: function () {
            if ((this.__ROUTES_2 == null)) {
                (this.__ROUTES_2 = [[{
                            path: 'about',
                            component: import5.AboutComponent
                        }
                    ]]);
            }
            return this.__ROUTES_2;
        },
        enumerable: true,
        configurable: true
    });
    AboutRoutingModuleInjector.prototype.createInternal = function () {
        this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ROUTER_FORROOT_GUARD, null));
        this._AboutRoutingModule_1 = new import1.AboutRoutingModule();
        return this._AboutRoutingModule_1;
    };
    AboutRoutingModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.RouterModule)) {
            return this._RouterModule_0;
        }
        if ((token === import1.AboutRoutingModule)) {
            return this._AboutRoutingModule_1;
        }
        if ((token === import6.ROUTES)) {
            return this._ROUTES_2;
        }
        return notFoundResult;
    };
    AboutRoutingModuleInjector.prototype.destroyInternal = function () {
    };
    return AboutRoutingModuleInjector;
}(import0.NgModuleInjector));
exports.AboutRoutingModuleNgFactory = new import0.NgModuleFactory(AboutRoutingModuleInjector, import1.AboutRoutingModule);
