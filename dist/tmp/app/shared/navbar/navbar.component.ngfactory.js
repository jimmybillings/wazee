"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('./navbar.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import4 = require('@angular/core/src/metadata/view');
var import5 = require('@angular/core/src/linker/view_type');
var import6 = require('@angular/core/src/change_detection/constants');
var import7 = require('@angular/core/src/linker/component_factory');
var import8 = require('./navbar.component.css.shim.ngstyle');
var import9 = require('../../../node_modules/@angular/router/src/directives/router_link.ngfactory');
var import10 = require('../../../node_modules/@angular/router/src/directives/router_link_active.ngfactory');
var import11 = require('@angular/core/src/linker/query_list');
var import12 = require('@angular/router/src/router');
var import13 = require('@angular/router/src/router_state');
var import14 = require('@angular/common/src/location/location_strategy');
var import15 = require('@angular/core/src/linker/element_ref');
var import16 = require('@angular/router/src/directives/router_link');
var import17 = require('@angular/router/src/directives/router_link_active');
var Wrapper_NavbarComponent = (function () {
    function Wrapper_NavbarComponent() {
        this._changed = false;
        this.context = new import0.NavbarComponent();
    }
    Wrapper_NavbarComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NavbarComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_NavbarComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NavbarComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NavbarComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NavbarComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NavbarComponent;
}());
exports.Wrapper_NavbarComponent = Wrapper_NavbarComponent;
var renderType_NavbarComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_NavbarComponent_Host0 = (function (_super) {
    __extends(View_NavbarComponent_Host0, _super);
    function View_NavbarComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_NavbarComponent_Host0, renderType_NavbarComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_NavbarComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'sd-navbar', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_NavbarComponent0(this.viewUtils, this, 0, this._el_0);
        this._NavbarComponent_0_3 = new Wrapper_NavbarComponent();
        this.compView_0.create(this._NavbarComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._NavbarComponent_0_3.context);
    };
    View_NavbarComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.NavbarComponent) && (0 === requestNodeIndex))) {
            return this._NavbarComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_NavbarComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NavbarComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_NavbarComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_NavbarComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_NavbarComponent_Host0;
}(import1.AppView));
exports.NavbarComponentNgFactory = new import7.ComponentFactory('sd-navbar', View_NavbarComponent_Host0, import0.NavbarComponent);
var styles_NavbarComponent = [import8.styles];
var renderType_NavbarComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_NavbarComponent, {});
var View_NavbarComponent0 = (function (_super) {
    __extends(View_NavbarComponent0, _super);
    function View_NavbarComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_NavbarComponent0, renderType_NavbarComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._arr_17 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        this._map_18 = import3.pureProxy1(function (p0) {
            return { exact: p0 };
        });
        this._arr_19 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        this._arr_20 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        this._map_21 = import3.pureProxy1(function (p0) {
            return { exact: p0 };
        });
        this._arr_22 = import3.pureProxy1(function (p0) {
            return [p0];
        });
    }
    View_NavbarComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'nav', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_2_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router, this.parentIndex), this.parentView.injectorGet(import13.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import14.LocationStrategy, this.parentIndex));
        this._RouterLinkActive_2_4 = new import10.Wrapper_RouterLinkActive(this.parentView.injectorGet(import12.Router, this.parentIndex), new import15.ElementRef(this._el_2), this.renderer);
        this._query_RouterLink_2_0 = new import11.QueryList();
        this._query_RouterLinkWithHref_2_1 = new import11.QueryList();
        this._text_3 = this.renderer.createText(this._el_2, 'HOME', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_5_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router, this.parentIndex), this.parentView.injectorGet(import13.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import14.LocationStrategy, this.parentIndex));
        this._RouterLinkActive_5_4 = new import10.Wrapper_RouterLinkActive(this.parentView.injectorGet(import12.Router, this.parentIndex), new import15.ElementRef(this._el_5), this.renderer);
        this._query_RouterLink_5_0 = new import11.QueryList();
        this._query_RouterLinkWithHref_5_1 = new import11.QueryList();
        this._text_6 = this.renderer.createText(this._el_5, 'ABOUT', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_5));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_NavbarComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._RouterLinkWithHref_2_3.context;
        }
        if (((token === import17.RouterLinkActive) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._RouterLinkActive_2_4.context;
        }
        if (((token === import16.RouterLinkWithHref) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._RouterLinkWithHref_5_3.context;
        }
        if (((token === import17.RouterLinkActive) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._RouterLinkActive_5_4.context;
        }
        return notFoundResult;
    };
    View_NavbarComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this._arr_17('/');
        this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0, throwOnChange, false);
        this._RouterLinkWithHref_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_2_1_0 = this._map_18(true);
        this._RouterLinkActive_2_4.check_routerLinkActiveOptions(currVal_2_1_0, throwOnChange, false);
        var currVal_2_1_1 = this._arr_19('router-link-active');
        this._RouterLinkActive_2_4.check_routerLinkActive(currVal_2_1_1, throwOnChange, false);
        this._RouterLinkActive_2_4.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_5_0_0 = this._arr_20('/about');
        this._RouterLinkWithHref_5_3.check_routerLink(currVal_5_0_0, throwOnChange, false);
        this._RouterLinkWithHref_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        var currVal_5_1_0 = this._map_21(true);
        this._RouterLinkActive_5_4.check_routerLinkActiveOptions(currVal_5_1_0, throwOnChange, false);
        var currVal_5_1_1 = this._arr_22('router-link-active');
        this._RouterLinkActive_5_4.check_routerLinkActive(currVal_5_1_1, throwOnChange, false);
        this._RouterLinkActive_5_4.ngDoCheck(this, this._el_5, throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_2_0.dirty) {
                this._query_RouterLink_2_0.reset([]);
                this._RouterLinkActive_2_4.context.links = this._query_RouterLink_2_0;
                this._query_RouterLink_2_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_2_1.dirty) {
                this._query_RouterLinkWithHref_2_1.reset([this._RouterLinkWithHref_2_3.context]);
                this._RouterLinkActive_2_4.context.linksWithHrefs = this._query_RouterLinkWithHref_2_1;
                this._query_RouterLinkWithHref_2_1.notifyOnChanges();
            }
            if (this._query_RouterLink_5_0.dirty) {
                this._query_RouterLink_5_0.reset([]);
                this._RouterLinkActive_5_4.context.links = this._query_RouterLink_5_0;
                this._query_RouterLink_5_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_5_1.dirty) {
                this._query_RouterLinkWithHref_5_1.reset([this._RouterLinkWithHref_5_3.context]);
                this._RouterLinkActive_5_4.context.linksWithHrefs = this._query_RouterLinkWithHref_5_1;
                this._query_RouterLinkWithHref_5_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_2_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_5_4.context.ngAfterContentInit();
            }
        }
        this._RouterLinkWithHref_2_3.checkHost(this, this, this._el_2, throwOnChange);
        this._RouterLinkWithHref_5_3.checkHost(this, this, this._el_5, throwOnChange);
    };
    View_NavbarComponent0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_2_3.ngOnDestroy();
        this._RouterLinkActive_2_4.ngOnDestroy();
        this._RouterLinkWithHref_5_3.ngOnDestroy();
        this._RouterLinkActive_5_4.ngOnDestroy();
    };
    View_NavbarComponent0.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_2_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_NavbarComponent0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_5_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_NavbarComponent0;
}(import1.AppView));
exports.View_NavbarComponent0 = View_NavbarComponent0;
