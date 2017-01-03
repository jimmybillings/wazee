"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('./shared.module');
var import2 = require('@angular/common/src/common_module');
var import3 = require('@angular/router/src/router_module');
var import4 = require('@angular/forms/src/directives');
var import5 = require('@angular/forms/src/form_providers');
var import6 = require('@angular/common/src/localization');
var import7 = require('@angular/forms/src/directives/radio_control_value_accessor');
var import9 = require('@angular/core/src/i18n/tokens');
var SharedModuleInjector = (function (_super) {
    __extends(SharedModuleInjector, _super);
    function SharedModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(SharedModuleInjector.prototype, "_NgLocalization_5", {
        get: function () {
            if ((this.__NgLocalization_5 == null)) {
                (this.__NgLocalization_5 = new import6.NgLocaleLocalization(this.parent.get(import9.LOCALE_ID)));
            }
            return this.__NgLocalization_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedModuleInjector.prototype, "_RadioControlRegistry_6", {
        get: function () {
            if ((this.__RadioControlRegistry_6 == null)) {
                (this.__RadioControlRegistry_6 = new import7.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_6;
        },
        enumerable: true,
        configurable: true
    });
    SharedModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD, null));
        this._InternalFormsSharedModule_2 = new import4.InternalFormsSharedModule();
        this._FormsModule_3 = new import5.FormsModule();
        this._SharedModule_4 = new import1.SharedModule();
        return this._SharedModule_4;
    };
    SharedModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.RouterModule)) {
            return this._RouterModule_1;
        }
        if ((token === import4.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_2;
        }
        if ((token === import5.FormsModule)) {
            return this._FormsModule_3;
        }
        if ((token === import1.SharedModule)) {
            return this._SharedModule_4;
        }
        if ((token === import6.NgLocalization)) {
            return this._NgLocalization_5;
        }
        if ((token === import7.RadioControlRegistry)) {
            return this._RadioControlRegistry_6;
        }
        return notFoundResult;
    };
    SharedModuleInjector.prototype.destroyInternal = function () {
    };
    return SharedModuleInjector;
}(import0.NgModuleInjector));
exports.SharedModuleNgFactory = new import0.NgModuleFactory(SharedModuleInjector, import1.SharedModule);
