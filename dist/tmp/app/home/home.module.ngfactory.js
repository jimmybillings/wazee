"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('./home.module');
var import2 = require('@angular/common/src/common_module');
var import3 = require('@angular/router/src/router_module');
var import4 = require('./home-routing.module');
var import5 = require('@angular/forms/src/directives');
var import6 = require('@angular/forms/src/form_providers');
var import7 = require('../shared/shared.module');
var import8 = require('@angular/common/src/localization');
var import9 = require('@angular/forms/src/directives/radio_control_value_accessor');
var import10 = require('../shared/name-list/name-list.service');
var import12 = require('./home.component.ngfactory');
var import13 = require('@angular/core/src/i18n/tokens');
var import14 = require('./home.component');
var import15 = require('@angular/http/src/http');
var import16 = require('@angular/router/src/router_config_loader');
var HomeModuleInjector = (function (_super) {
    __extends(HomeModuleInjector, _super);
    function HomeModuleInjector(parent) {
        _super.call(this, parent, [import12.HomeComponentNgFactory], []);
    }
    Object.defineProperty(HomeModuleInjector.prototype, "_NgLocalization_7", {
        get: function () {
            if ((this.__NgLocalization_7 == null)) {
                (this.__NgLocalization_7 = new import8.NgLocaleLocalization(this.parent.get(import13.LOCALE_ID)));
            }
            return this.__NgLocalization_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeModuleInjector.prototype, "_ROUTES_8", {
        get: function () {
            if ((this.__ROUTES_8 == null)) {
                (this.__ROUTES_8 = [[{
                            path: '',
                            component: import14.HomeComponent
                        }
                    ]]);
            }
            return this.__ROUTES_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeModuleInjector.prototype, "_RadioControlRegistry_9", {
        get: function () {
            if ((this.__RadioControlRegistry_9 == null)) {
                (this.__RadioControlRegistry_9 = new import9.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeModuleInjector.prototype, "_NameListService_10", {
        get: function () {
            if ((this.__NameListService_10 == null)) {
                (this.__NameListService_10 = new import10.NameListService(this.parent.get(import15.Http)));
            }
            return this.__NameListService_10;
        },
        enumerable: true,
        configurable: true
    });
    HomeModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD, null));
        this._HomeRoutingModule_2 = new import4.HomeRoutingModule();
        this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
        this._FormsModule_4 = new import6.FormsModule();
        this._SharedModule_5 = new import7.SharedModule();
        this._HomeModule_6 = new import1.HomeModule();
        return this._HomeModule_6;
    };
    HomeModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.RouterModule)) {
            return this._RouterModule_1;
        }
        if ((token === import4.HomeRoutingModule)) {
            return this._HomeRoutingModule_2;
        }
        if ((token === import5.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === import6.FormsModule)) {
            return this._FormsModule_4;
        }
        if ((token === import7.SharedModule)) {
            return this._SharedModule_5;
        }
        if ((token === import1.HomeModule)) {
            return this._HomeModule_6;
        }
        if ((token === import8.NgLocalization)) {
            return this._NgLocalization_7;
        }
        if ((token === import16.ROUTES)) {
            return this._ROUTES_8;
        }
        if ((token === import9.RadioControlRegistry)) {
            return this._RadioControlRegistry_9;
        }
        if ((token === import10.NameListService)) {
            return this._NameListService_10;
        }
        return notFoundResult;
    };
    HomeModuleInjector.prototype.destroyInternal = function () {
    };
    return HomeModuleInjector;
}(import0.NgModuleInjector));
exports.HomeModuleNgFactory = new import0.NgModuleFactory(HomeModuleInjector, import1.HomeModule);
