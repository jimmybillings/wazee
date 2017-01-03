"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('./app-routing.module');
var import2 = require('@angular/router/src/router_module');
var import3 = require('@angular/common/src/location/location');
var import4 = require('@angular/router/src/url_tree');
var import5 = require('@angular/router/src/router_outlet_map');
var import6 = require('@angular/core/src/linker/system_js_ng_module_factory_loader');
var import7 = require('@angular/router/src/router_preloader');
var import9 = require('@angular/common/src/location/platform_location');
var import10 = require('@angular/common/src/location/location_strategy');
var import11 = require('@angular/core/src/linker/compiler');
var import12 = require('@angular/core/src/application_ref');
var import13 = require('@angular/router/src/url_handling_strategy');
var import14 = require('@angular/router/src/route_reuse_strategy');
var import15 = require('@angular/router/src/router');
var import16 = require('@angular/core/src/linker/ng_module_factory_loader');
var import17 = require('@angular/router/src/router_config_loader');
var import18 = require('@angular/router/src/router_state');
var import19 = require('@angular/core/src/application_tokens');
var AppRoutingModuleInjector = (function (_super) {
    __extends(AppRoutingModuleInjector, _super);
    function AppRoutingModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_ROUTER_CONFIGURATION_3", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_3 == null)) {
                (this.__ROUTER_CONFIGURATION_3 = {});
            }
            return this.__ROUTER_CONFIGURATION_3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_LocationStrategy_4", {
        get: function () {
            if ((this.__LocationStrategy_4 == null)) {
                (this.__LocationStrategy_4 = import2.provideLocationStrategy(this.parent.get(import9.PlatformLocation), this.parent.get(import10.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_3));
            }
            return this.__LocationStrategy_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_Location_5", {
        get: function () {
            if ((this.__Location_5 == null)) {
                (this.__Location_5 = new import3.Location(this._LocationStrategy_4));
            }
            return this.__Location_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_UrlSerializer_6", {
        get: function () {
            if ((this.__UrlSerializer_6 == null)) {
                (this.__UrlSerializer_6 = new import4.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_RouterOutletMap_7", {
        get: function () {
            if ((this.__RouterOutletMap_7 == null)) {
                (this.__RouterOutletMap_7 = new import5.RouterOutletMap());
            }
            return this.__RouterOutletMap_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_NgModuleFactoryLoader_8", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_8 == null)) {
                (this.__NgModuleFactoryLoader_8 = new import6.SystemJsNgModuleLoader(this.parent.get(import11.Compiler), this.parent.get(import6.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_ROUTES_9", {
        get: function () {
            if ((this.__ROUTES_9 == null)) {
                (this.__ROUTES_9 = [[]]);
            }
            return this.__ROUTES_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_Router_10", {
        get: function () {
            if ((this.__Router_10 == null)) {
                (this.__Router_10 = import2.setupRouter(this.parent.get(import12.ApplicationRef), this._UrlSerializer_6, this._RouterOutletMap_7, this._Location_5, this, this._NgModuleFactoryLoader_8, this.parent.get(import11.Compiler), this._ROUTES_9, this._ROUTER_CONFIGURATION_3, this.parent.get(import13.UrlHandlingStrategy, null), this.parent.get(import14.RouteReuseStrategy, null)));
            }
            return this.__Router_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_ActivatedRoute_11", {
        get: function () {
            if ((this.__ActivatedRoute_11 == null)) {
                (this.__ActivatedRoute_11 = import2.rootRoute(this._Router_10));
            }
            return this.__ActivatedRoute_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_PreloadAllModules_15", {
        get: function () {
            if ((this.__PreloadAllModules_15 == null)) {
                (this.__PreloadAllModules_15 = new import7.PreloadAllModules());
            }
            return this.__PreloadAllModules_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_NgProbeToken_16", {
        get: function () {
            if ((this.__NgProbeToken_16 == null)) {
                (this.__NgProbeToken_16 = [import2.routerNgProbeToken()]);
            }
            return this.__NgProbeToken_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_ROUTER_INITIALIZER_17", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_17 == null)) {
                (this.__ROUTER_INITIALIZER_17 = import2.initialRouterNavigation(this._Router_10, this.parent.get(import12.ApplicationRef), this._RouterPreloader_14, this._ROUTER_CONFIGURATION_3));
            }
            return this.__ROUTER_INITIALIZER_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_18", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_18 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_18 = [this._ROUTER_INITIALIZER_17]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_18;
        },
        enumerable: true,
        configurable: true
    });
    AppRoutingModuleInjector.prototype.createInternal = function () {
        this._ROUTER_FORROOT_GUARD_0 = import2.provideForRootGuard(this.parent.get(import15.Router, null));
        this._RouterModule_1 = new import2.RouterModule(this._ROUTER_FORROOT_GUARD_0);
        this._AppRoutingModule_2 = new import1.AppRoutingModule();
        this._NoPreloading_12 = new import7.NoPreloading();
        this._PreloadingStrategy_13 = this._NoPreloading_12;
        this._RouterPreloader_14 = new import7.RouterPreloader(this._Router_10, this._NgModuleFactoryLoader_8, this.parent.get(import11.Compiler), this, this._PreloadingStrategy_13);
        return this._AppRoutingModule_2;
    };
    AppRoutingModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_0;
        }
        if ((token === import2.RouterModule)) {
            return this._RouterModule_1;
        }
        if ((token === import1.AppRoutingModule)) {
            return this._AppRoutingModule_2;
        }
        if ((token === import2.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_3;
        }
        if ((token === import10.LocationStrategy)) {
            return this._LocationStrategy_4;
        }
        if ((token === import3.Location)) {
            return this._Location_5;
        }
        if ((token === import4.UrlSerializer)) {
            return this._UrlSerializer_6;
        }
        if ((token === import5.RouterOutletMap)) {
            return this._RouterOutletMap_7;
        }
        if ((token === import16.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_8;
        }
        if ((token === import17.ROUTES)) {
            return this._ROUTES_9;
        }
        if ((token === import15.Router)) {
            return this._Router_10;
        }
        if ((token === import18.ActivatedRoute)) {
            return this._ActivatedRoute_11;
        }
        if ((token === import7.NoPreloading)) {
            return this._NoPreloading_12;
        }
        if ((token === import7.PreloadingStrategy)) {
            return this._PreloadingStrategy_13;
        }
        if ((token === import7.RouterPreloader)) {
            return this._RouterPreloader_14;
        }
        if ((token === import7.PreloadAllModules)) {
            return this._PreloadAllModules_15;
        }
        if ((token === import12.NgProbeToken)) {
            return this._NgProbeToken_16;
        }
        if ((token === import2.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_17;
        }
        if ((token === import19.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_18;
        }
        return notFoundResult;
    };
    AppRoutingModuleInjector.prototype.destroyInternal = function () {
        this._RouterPreloader_14.ngOnDestroy();
    };
    return AppRoutingModuleInjector;
}(import0.NgModuleInjector));
exports.AppRoutingModuleNgFactory = new import0.NgModuleFactory(AppRoutingModuleInjector, import1.AppRoutingModule);
