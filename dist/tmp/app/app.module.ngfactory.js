"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('./app.module');
var import2 = require('@angular/common/src/common_module');
var import3 = require('@angular/core/src/application_module');
var import4 = require('@angular/platform-browser/src/browser');
var import5 = require('@angular/http/src/http_module');
var import6 = require('@angular/router/src/router_module');
var import7 = require('./app-routing.module');
var import8 = require('./about/about-routing.module');
var import9 = require('./about/about.module');
var import10 = require('./home/home-routing.module');
var import11 = require('@angular/forms/src/directives');
var import12 = require('@angular/forms/src/form_providers');
var import13 = require('./shared/shared.module');
var import14 = require('./home/home.module');
var import15 = require('@angular/common/src/localization');
var import16 = require('@angular/core/src/application_init');
var import17 = require('@angular/core/src/testability/testability');
var import18 = require('@angular/core/src/application_ref');
var import19 = require('@angular/core/src/linker/compiler');
var import20 = require('@angular/platform-browser/src/dom/events/hammer_gestures');
var import21 = require('@angular/platform-browser/src/dom/events/event_manager');
var import22 = require('@angular/platform-browser/src/dom/shared_styles_host');
var import23 = require('@angular/platform-browser/src/dom/dom_renderer');
var import24 = require('@angular/platform-browser/src/security/dom_sanitization_service');
var import25 = require('@angular/core/src/animation/animation_queue');
var import26 = require('@angular/core/src/linker/view_utils');
var import27 = require('@angular/platform-browser/src/browser/title');
var import28 = require('@angular/http/src/backends/browser_xhr');
var import29 = require('@angular/http/src/base_response_options');
var import30 = require('@angular/http/src/backends/xhr_backend');
var import31 = require('@angular/http/src/base_request_options');
var import32 = require('@angular/common/src/location/location');
var import33 = require('@angular/router/src/url_tree');
var import34 = require('@angular/router/src/router_outlet_map');
var import35 = require('@angular/core/src/linker/system_js_ng_module_factory_loader');
var import36 = require('@angular/router/src/router_preloader');
var import37 = require('@angular/forms/src/directives/radio_control_value_accessor');
var import38 = require('./shared/name-list/name-list.service');
var import40 = require('./about/about.component.ngfactory');
var import41 = require('./home/home.component.ngfactory');
var import42 = require('./app.component.ngfactory');
var import43 = require('@angular/core/src/application_tokens');
var import44 = require('@angular/platform-browser/src/dom/events/dom_events');
var import45 = require('@angular/platform-browser/src/dom/events/key_events');
var import46 = require('@angular/core/src/zone/ng_zone');
var import47 = require('@angular/platform-browser/src/dom/debug/ng_probe');
var import48 = require('@angular/common/src/location/platform_location');
var import49 = require('./about/about.component');
var import50 = require('./home/home.component');
var import51 = require('@angular/router/src/url_handling_strategy');
var import52 = require('@angular/router/src/route_reuse_strategy');
var import53 = require('@angular/router/src/router');
var import54 = require('@angular/core/src/console');
var import55 = require('@angular/core/src/i18n/tokens');
var import56 = require('@angular/core/src/error_handler');
var import57 = require('@angular/platform-browser/src/dom/dom_tokens');
var import58 = require('@angular/platform-browser/src/dom/animation_driver');
var import59 = require('@angular/core/src/render/api');
var import60 = require('@angular/core/src/security');
var import61 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import62 = require('@angular/core/src/change_detection/differs/keyvalue_differs');
var import63 = require('@angular/http/src/interfaces');
var import64 = require('@angular/http/src/http');
var import65 = require('@angular/common/src/location/location_strategy');
var import66 = require('@angular/core/src/linker/ng_module_factory_loader');
var import67 = require('@angular/router/src/router_config_loader');
var import68 = require('@angular/router/src/router_state');
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            import40.AboutComponentNgFactory,
            import41.HomeComponentNgFactory,
            import42.AppComponentNgFactory
        ], [import42.AppComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_15", {
        get: function () {
            if ((this.__LOCALE_ID_15 == null)) {
                (this.__LOCALE_ID_15 = 'en-US');
            }
            return this.__LOCALE_ID_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_16", {
        get: function () {
            if ((this.__NgLocalization_16 == null)) {
                (this.__NgLocalization_16 = new import15.NgLocaleLocalization(this._LOCALE_ID_15));
            }
            return this.__NgLocalization_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_21", {
        get: function () {
            if ((this.__ApplicationRef_21 == null)) {
                (this.__ApplicationRef_21 = this._ApplicationRef__20);
            }
            return this.__ApplicationRef_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_22", {
        get: function () {
            if ((this.__Compiler_22 == null)) {
                (this.__Compiler_22 = new import19.Compiler());
            }
            return this.__Compiler_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_23", {
        get: function () {
            if ((this.__APP_ID_23 == null)) {
                (this.__APP_ID_23 = import43._appIdRandomProviderFactory());
            }
            return this.__APP_ID_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_24", {
        get: function () {
            if ((this.__DOCUMENT_24 == null)) {
                (this.__DOCUMENT_24 = import4._document());
            }
            return this.__DOCUMENT_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_25", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_25 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_25 = new import20.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_26", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_26 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_26 = [
                    new import44.DomEventsPlugin(),
                    new import45.KeyEventsPlugin(),
                    new import20.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_25)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_27", {
        get: function () {
            if ((this.__EventManager_27 == null)) {
                (this.__EventManager_27 = new import21.EventManager(this._EVENT_MANAGER_PLUGINS_26, this.parent.get(import46.NgZone)));
            }
            return this.__EventManager_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_28", {
        get: function () {
            if ((this.__DomSharedStylesHost_28 == null)) {
                (this.__DomSharedStylesHost_28 = new import22.DomSharedStylesHost(this._DOCUMENT_24));
            }
            return this.__DomSharedStylesHost_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_29", {
        get: function () {
            if ((this.__AnimationDriver_29 == null)) {
                (this.__AnimationDriver_29 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_30", {
        get: function () {
            if ((this.__DomRootRenderer_30 == null)) {
                (this.__DomRootRenderer_30 = new import23.DomRootRenderer_(this._DOCUMENT_24, this._EventManager_27, this._DomSharedStylesHost_28, this._AnimationDriver_29, this._APP_ID_23));
            }
            return this.__DomRootRenderer_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgProbeToken_31", {
        get: function () {
            if ((this.__NgProbeToken_31 == null)) {
                (this.__NgProbeToken_31 = [import6.routerNgProbeToken()]);
            }
            return this.__NgProbeToken_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_32", {
        get: function () {
            if ((this.__RootRenderer_32 == null)) {
                (this.__RootRenderer_32 = import47._createConditionalRootRenderer(this._DomRootRenderer_30, this.parent.get(import47.NgProbeToken, null), this._NgProbeToken_31));
            }
            return this.__RootRenderer_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_33", {
        get: function () {
            if ((this.__DomSanitizer_33 == null)) {
                (this.__DomSanitizer_33 = new import24.DomSanitizerImpl());
            }
            return this.__DomSanitizer_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_34", {
        get: function () {
            if ((this.__Sanitizer_34 == null)) {
                (this.__Sanitizer_34 = this._DomSanitizer_33);
            }
            return this.__Sanitizer_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_35", {
        get: function () {
            if ((this.__AnimationQueue_35 == null)) {
                (this.__AnimationQueue_35 = new import25.AnimationQueue(this.parent.get(import46.NgZone)));
            }
            return this.__AnimationQueue_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_36", {
        get: function () {
            if ((this.__ViewUtils_36 == null)) {
                (this.__ViewUtils_36 = new import26.ViewUtils(this._RootRenderer_32, this._Sanitizer_34, this._AnimationQueue_35));
            }
            return this.__ViewUtils_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_37", {
        get: function () {
            if ((this.__IterableDiffers_37 == null)) {
                (this.__IterableDiffers_37 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_38", {
        get: function () {
            if ((this.__KeyValueDiffers_38 == null)) {
                (this.__KeyValueDiffers_38 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_39", {
        get: function () {
            if ((this.__SharedStylesHost_39 == null)) {
                (this.__SharedStylesHost_39 = this._DomSharedStylesHost_28);
            }
            return this.__SharedStylesHost_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_40", {
        get: function () {
            if ((this.__Title_40 == null)) {
                (this.__Title_40 = new import27.Title());
            }
            return this.__Title_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_41", {
        get: function () {
            if ((this.__BrowserXhr_41 == null)) {
                (this.__BrowserXhr_41 = new import28.BrowserXhr());
            }
            return this.__BrowserXhr_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_42", {
        get: function () {
            if ((this.__ResponseOptions_42 == null)) {
                (this.__ResponseOptions_42 = new import29.BaseResponseOptions());
            }
            return this.__ResponseOptions_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_43", {
        get: function () {
            if ((this.__XSRFStrategy_43 == null)) {
                (this.__XSRFStrategy_43 = import5._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_44", {
        get: function () {
            if ((this.__XHRBackend_44 == null)) {
                (this.__XHRBackend_44 = new import30.XHRBackend(this._BrowserXhr_41, this._ResponseOptions_42, this._XSRFStrategy_43));
            }
            return this.__XHRBackend_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_45", {
        get: function () {
            if ((this.__RequestOptions_45 == null)) {
                (this.__RequestOptions_45 = new import31.BaseRequestOptions());
            }
            return this.__RequestOptions_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_46", {
        get: function () {
            if ((this.__Http_46 == null)) {
                (this.__Http_46 = import5.httpFactory(this._XHRBackend_44, this._RequestOptions_45));
            }
            return this.__Http_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BASE_HREF_47", {
        get: function () {
            if ((this.__APP_BASE_HREF_47 == null)) {
                (this.__APP_BASE_HREF_47 = '/');
            }
            return this.__APP_BASE_HREF_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_48", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_48 == null)) {
                (this.__ROUTER_CONFIGURATION_48 = {});
            }
            return this.__ROUTER_CONFIGURATION_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_49", {
        get: function () {
            if ((this.__LocationStrategy_49 == null)) {
                (this.__LocationStrategy_49 = import6.provideLocationStrategy(this.parent.get(import48.PlatformLocation), this._APP_BASE_HREF_47, this._ROUTER_CONFIGURATION_48));
            }
            return this.__LocationStrategy_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_50", {
        get: function () {
            if ((this.__Location_50 == null)) {
                (this.__Location_50 = new import32.Location(this._LocationStrategy_49));
            }
            return this.__Location_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_51", {
        get: function () {
            if ((this.__UrlSerializer_51 == null)) {
                (this.__UrlSerializer_51 = new import33.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_52", {
        get: function () {
            if ((this.__RouterOutletMap_52 == null)) {
                (this.__RouterOutletMap_52 = new import34.RouterOutletMap());
            }
            return this.__RouterOutletMap_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_53", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_53 == null)) {
                (this.__NgModuleFactoryLoader_53 = new import35.SystemJsNgModuleLoader(this._Compiler_22, this.parent.get(import35.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_54", {
        get: function () {
            if ((this.__ROUTES_54 == null)) {
                (this.__ROUTES_54 = [
                    [],
                    [{
                            path: 'about',
                            component: import49.AboutComponent
                        }
                    ],
                    [{
                            path: '',
                            component: import50.HomeComponent
                        }
                    ]
                ]);
            }
            return this.__ROUTES_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_55", {
        get: function () {
            if ((this.__Router_55 == null)) {
                (this.__Router_55 = import6.setupRouter(this._ApplicationRef_21, this._UrlSerializer_51, this._RouterOutletMap_52, this._Location_50, this, this._NgModuleFactoryLoader_53, this._Compiler_22, this._ROUTES_54, this._ROUTER_CONFIGURATION_48, this.parent.get(import51.UrlHandlingStrategy, null), this.parent.get(import52.RouteReuseStrategy, null)));
            }
            return this.__Router_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_56", {
        get: function () {
            if ((this.__ActivatedRoute_56 == null)) {
                (this.__ActivatedRoute_56 = import6.rootRoute(this._Router_55));
            }
            return this.__ActivatedRoute_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_60", {
        get: function () {
            if ((this.__PreloadAllModules_60 == null)) {
                (this.__PreloadAllModules_60 = new import36.PreloadAllModules());
            }
            return this.__PreloadAllModules_60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_61", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_61 == null)) {
                (this.__ROUTER_INITIALIZER_61 = import6.initialRouterNavigation(this._Router_55, this._ApplicationRef_21, this._RouterPreloader_59, this._ROUTER_CONFIGURATION_48));
            }
            return this.__ROUTER_INITIALIZER_61;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_62", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_62 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_62 = [this._ROUTER_INITIALIZER_61]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_62;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_63", {
        get: function () {
            if ((this.__RadioControlRegistry_63 == null)) {
                (this.__RadioControlRegistry_63 = new import37.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_63;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NameListService_64", {
        get: function () {
            if ((this.__NameListService_64 == null)) {
                (this.__NameListService_64 = new import38.NameListService(this._Http_46));
            }
            return this.__NameListService_64;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._HttpModule_3 = new import5.HttpModule();
        this._ROUTER_FORROOT_GUARD_4 = import6.provideForRootGuard(this.parent.get(import53.Router, null));
        this._RouterModule_5 = new import6.RouterModule(this._ROUTER_FORROOT_GUARD_4);
        this._AppRoutingModule_6 = new import7.AppRoutingModule();
        this._AboutRoutingModule_7 = new import8.AboutRoutingModule();
        this._AboutModule_8 = new import9.AboutModule();
        this._HomeRoutingModule_9 = new import10.HomeRoutingModule();
        this._InternalFormsSharedModule_10 = new import11.InternalFormsSharedModule();
        this._FormsModule_11 = new import12.FormsModule();
        this._SharedModule_12 = new import13.SharedModule();
        this._HomeModule_13 = new import14.HomeModule();
        this._AppModule_14 = new import1.AppModule();
        this._ErrorHandler_17 = import4.errorHandler();
        this._ApplicationInitStatus_18 = new import16.ApplicationInitStatus(this.parent.get(import16.APP_INITIALIZER, null));
        this._Testability_19 = new import17.Testability(this.parent.get(import46.NgZone));
        this._ApplicationRef__20 = new import18.ApplicationRef_(this.parent.get(import46.NgZone), this.parent.get(import54.Console), this, this._ErrorHandler_17, this, this._ApplicationInitStatus_18, this.parent.get(import17.TestabilityRegistry, null), this._Testability_19);
        this._NoPreloading_57 = new import36.NoPreloading();
        this._PreloadingStrategy_58 = this._NoPreloading_57;
        this._RouterPreloader_59 = new import36.RouterPreloader(this._Router_55, this._NgModuleFactoryLoader_53, this._Compiler_22, this, this._PreloadingStrategy_58);
        return this._AppModule_14;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.HttpModule)) {
            return this._HttpModule_3;
        }
        if ((token === import6.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_4;
        }
        if ((token === import6.RouterModule)) {
            return this._RouterModule_5;
        }
        if ((token === import7.AppRoutingModule)) {
            return this._AppRoutingModule_6;
        }
        if ((token === import8.AboutRoutingModule)) {
            return this._AboutRoutingModule_7;
        }
        if ((token === import9.AboutModule)) {
            return this._AboutModule_8;
        }
        if ((token === import10.HomeRoutingModule)) {
            return this._HomeRoutingModule_9;
        }
        if ((token === import11.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_10;
        }
        if ((token === import12.FormsModule)) {
            return this._FormsModule_11;
        }
        if ((token === import13.SharedModule)) {
            return this._SharedModule_12;
        }
        if ((token === import14.HomeModule)) {
            return this._HomeModule_13;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_14;
        }
        if ((token === import55.LOCALE_ID)) {
            return this._LOCALE_ID_15;
        }
        if ((token === import15.NgLocalization)) {
            return this._NgLocalization_16;
        }
        if ((token === import56.ErrorHandler)) {
            return this._ErrorHandler_17;
        }
        if ((token === import16.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_18;
        }
        if ((token === import17.Testability)) {
            return this._Testability_19;
        }
        if ((token === import18.ApplicationRef_)) {
            return this._ApplicationRef__20;
        }
        if ((token === import18.ApplicationRef)) {
            return this._ApplicationRef_21;
        }
        if ((token === import19.Compiler)) {
            return this._Compiler_22;
        }
        if ((token === import43.APP_ID)) {
            return this._APP_ID_23;
        }
        if ((token === import57.DOCUMENT)) {
            return this._DOCUMENT_24;
        }
        if ((token === import20.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_25;
        }
        if ((token === import21.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_26;
        }
        if ((token === import21.EventManager)) {
            return this._EventManager_27;
        }
        if ((token === import22.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_28;
        }
        if ((token === import58.AnimationDriver)) {
            return this._AnimationDriver_29;
        }
        if ((token === import23.DomRootRenderer)) {
            return this._DomRootRenderer_30;
        }
        if ((token === import18.NgProbeToken)) {
            return this._NgProbeToken_31;
        }
        if ((token === import59.RootRenderer)) {
            return this._RootRenderer_32;
        }
        if ((token === import24.DomSanitizer)) {
            return this._DomSanitizer_33;
        }
        if ((token === import60.Sanitizer)) {
            return this._Sanitizer_34;
        }
        if ((token === import25.AnimationQueue)) {
            return this._AnimationQueue_35;
        }
        if ((token === import26.ViewUtils)) {
            return this._ViewUtils_36;
        }
        if ((token === import61.IterableDiffers)) {
            return this._IterableDiffers_37;
        }
        if ((token === import62.KeyValueDiffers)) {
            return this._KeyValueDiffers_38;
        }
        if ((token === import22.SharedStylesHost)) {
            return this._SharedStylesHost_39;
        }
        if ((token === import27.Title)) {
            return this._Title_40;
        }
        if ((token === import28.BrowserXhr)) {
            return this._BrowserXhr_41;
        }
        if ((token === import29.ResponseOptions)) {
            return this._ResponseOptions_42;
        }
        if ((token === import63.XSRFStrategy)) {
            return this._XSRFStrategy_43;
        }
        if ((token === import30.XHRBackend)) {
            return this._XHRBackend_44;
        }
        if ((token === import31.RequestOptions)) {
            return this._RequestOptions_45;
        }
        if ((token === import64.Http)) {
            return this._Http_46;
        }
        if ((token === import65.APP_BASE_HREF)) {
            return this._APP_BASE_HREF_47;
        }
        if ((token === import6.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_48;
        }
        if ((token === import65.LocationStrategy)) {
            return this._LocationStrategy_49;
        }
        if ((token === import32.Location)) {
            return this._Location_50;
        }
        if ((token === import33.UrlSerializer)) {
            return this._UrlSerializer_51;
        }
        if ((token === import34.RouterOutletMap)) {
            return this._RouterOutletMap_52;
        }
        if ((token === import66.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_53;
        }
        if ((token === import67.ROUTES)) {
            return this._ROUTES_54;
        }
        if ((token === import53.Router)) {
            return this._Router_55;
        }
        if ((token === import68.ActivatedRoute)) {
            return this._ActivatedRoute_56;
        }
        if ((token === import36.NoPreloading)) {
            return this._NoPreloading_57;
        }
        if ((token === import36.PreloadingStrategy)) {
            return this._PreloadingStrategy_58;
        }
        if ((token === import36.RouterPreloader)) {
            return this._RouterPreloader_59;
        }
        if ((token === import36.PreloadAllModules)) {
            return this._PreloadAllModules_60;
        }
        if ((token === import6.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_61;
        }
        if ((token === import43.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_62;
        }
        if ((token === import37.RadioControlRegistry)) {
            return this._RadioControlRegistry_63;
        }
        if ((token === import38.NameListService)) {
            return this._NameListService_64;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__20.ngOnDestroy();
        this._RouterPreloader_59.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
exports.AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
