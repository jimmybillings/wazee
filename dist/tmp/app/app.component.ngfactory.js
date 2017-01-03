"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('./app.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import4 = require('@angular/core/src/metadata/view');
var import5 = require('@angular/core/src/linker/view_type');
var import6 = require('@angular/core/src/change_detection/constants');
var import7 = require('@angular/core/src/linker/component_factory');
var import8 = require('./shared/toolbar/toolbar.component');
var import9 = require('./shared/toolbar/toolbar.component.ngfactory');
var import10 = require('./shared/navbar/navbar.component');
var import11 = require('./shared/navbar/navbar.component.ngfactory');
var import12 = require('@angular/core/src/linker/view_container');
var import13 = require('../node_modules/@angular/router/src/directives/router_outlet.ngfactory');
var import14 = require('@angular/router/src/router_outlet_map');
var import15 = require('@angular/core/src/linker/component_factory_resolver');
var import16 = require('@angular/router/src/directives/router_outlet');
var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent() {
        this._changed = false;
        this.context = new import0.AppComponent();
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
exports.Wrapper_AppComponent = Wrapper_AppComponent;
var renderType_AppComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'sd-app', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent();
        this.compView_0.create(this._AppComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent_Host0;
}(import1.AppView));
exports.AppComponentNgFactory = new import7.ComponentFactory('sd-app', View_AppComponent_Host0, import0.AppComponent);
var styles_AppComponent = [];
var renderType_AppComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AppComponent, {});
var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent0, renderType_AppComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'sd-toolbar', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_0 = new import9.View_ToolbarComponent0(this.viewUtils, this, 0, this._el_0);
        this._ToolbarComponent_0_3 = new import9.Wrapper_ToolbarComponent();
        this.compView_0.create(this._ToolbarComponent_0_3.context);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_2 = import3.createRenderElement(this.renderer, parentRenderNode, 'sd-navbar', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import11.View_NavbarComponent0(this.viewUtils, this, 2, this._el_2);
        this._NavbarComponent_2_3 = new import11.Wrapper_NavbarComponent();
        this.compView_2.create(this._NavbarComponent_2_3.context);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_4 = import3.createRenderElement(this.renderer, parentRenderNode, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_4 = new import12.ViewContainer(4, null, this, this._el_4);
        this._RouterOutlet_4_5 = new import13.Wrapper_RouterOutlet(this.parentView.injectorGet(import14.RouterOutletMap, this.parentIndex), this._vc_4.vcRef, this.parentView.injectorGet(import15.ComponentFactoryResolver, this.parentIndex), null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5
        ]), null);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import8.ToolbarComponent) && (0 === requestNodeIndex))) {
            return this._ToolbarComponent_0_3.context;
        }
        if (((token === import10.NavbarComponent) && (2 === requestNodeIndex))) {
            return this._NavbarComponent_2_3.context;
        }
        if (((token === import16.RouterOutlet) && (4 === requestNodeIndex))) {
            return this._RouterOutlet_4_5.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ToolbarComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._NavbarComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this._RouterOutlet_4_5.ngDoCheck(this, this._el_4, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
        this.compView_0.destroy();
        this.compView_2.destroy();
        this._RouterOutlet_4_5.ngOnDestroy();
    };
    return View_AppComponent0;
}(import1.AppView));
exports.View_AppComponent0 = View_AppComponent0;
