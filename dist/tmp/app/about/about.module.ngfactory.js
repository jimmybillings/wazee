"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('./about.module');
var import2 = require('@angular/common/src/common_module');
var import3 = require('@angular/router/src/router_module');
var import4 = require('./about-routing.module');
var import5 = require('@angular/common/src/localization');
var import7 = require('./about.component.ngfactory');
var import8 = require('@angular/core/src/i18n/tokens');
var import9 = require('./about.component');
var import10 = require('@angular/router/src/router_config_loader');
var AboutModuleInjector = (function (_super) {
    __extends(AboutModuleInjector, _super);
    function AboutModuleInjector(parent) {
        _super.call(this, parent, [import7.AboutComponentNgFactory], []);
    }
    Object.defineProperty(AboutModuleInjector.prototype, "_NgLocalization_4", {
        get: function () {
            if ((this.__NgLocalization_4 == null)) {
                (this.__NgLocalization_4 = new import5.NgLocaleLocalization(this.parent.get(import8.LOCALE_ID)));
            }
            return this.__NgLocalization_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutModuleInjector.prototype, "_ROUTES_5", {
        get: function () {
            if ((this.__ROUTES_5 == null)) {
                (this.__ROUTES_5 = [[{
                            path: 'about',
                            component: import9.AboutComponent
                        }
                    ]]);
            }
            return this.__ROUTES_5;
        },
        enumerable: true,
        configurable: true
    });
    AboutModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD, null));
        this._AboutRoutingModule_2 = new import4.AboutRoutingModule();
        this._AboutModule_3 = new import1.AboutModule();
        return this._AboutModule_3;
    };
    AboutModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.RouterModule)) {
            return this._RouterModule_1;
        }
        if ((token === import4.AboutRoutingModule)) {
            return this._AboutRoutingModule_2;
        }
        if ((token === import1.AboutModule)) {
            return this._AboutModule_3;
        }
        if ((token === import5.NgLocalization)) {
            return this._NgLocalization_4;
        }
        if ((token === import10.ROUTES)) {
            return this._ROUTES_5;
        }
        return notFoundResult;
    };
    AboutModuleInjector.prototype.destroyInternal = function () {
    };
    return AboutModuleInjector;
}(import0.NgModuleInjector));
exports.AboutModuleNgFactory = new import0.NgModuleFactory(AboutModuleInjector, import1.AboutModule);
