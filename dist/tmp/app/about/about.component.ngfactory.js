"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('./about.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import4 = require('@angular/core/src/metadata/view');
var import5 = require('@angular/core/src/linker/view_type');
var import6 = require('@angular/core/src/change_detection/constants');
var import7 = require('@angular/core/src/linker/component_factory');
var import8 = require('./about.component.css.shim.ngstyle');
var Wrapper_AboutComponent = (function () {
    function Wrapper_AboutComponent() {
        this._changed = false;
        this.context = new import0.AboutComponent();
    }
    Wrapper_AboutComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AboutComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AboutComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AboutComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AboutComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AboutComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AboutComponent;
}());
exports.Wrapper_AboutComponent = Wrapper_AboutComponent;
var renderType_AboutComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AboutComponent_Host0 = (function (_super) {
    __extends(View_AboutComponent_Host0, _super);
    function View_AboutComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AboutComponent_Host0, renderType_AboutComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AboutComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'sd-about', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AboutComponent0(this.viewUtils, this, 0, this._el_0);
        this._AboutComponent_0_3 = new Wrapper_AboutComponent();
        this.compView_0.create(this._AboutComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AboutComponent_0_3.context);
    };
    View_AboutComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AboutComponent) && (0 === requestNodeIndex))) {
            return this._AboutComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AboutComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AboutComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AboutComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AboutComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AboutComponent_Host0;
}(import1.AppView));
exports.AboutComponentNgFactory = new import7.ComponentFactory('sd-about', View_AboutComponent_Host0, import0.AboutComponent);
var styles_AboutComponent = [import8.styles];
var renderType_AboutComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_AboutComponent, {});
var View_AboutComponent0 = (function (_super) {
    __extends(View_AboutComponent0, _super);
    function View_AboutComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AboutComponent0, renderType_AboutComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AboutComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Angular 2 Seed is a starter project that implements best practices in coding, building and testing Angular 2 apps.', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'h2', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, 'Features', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_6 = import3.createRenderElement(this.renderer, parentRenderNode, 'ul', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '\n  ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, 'Ready to go, statically typed build system using Gulp for working with TypeScript.', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n  ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_6, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, 'Production and development builds.', null);
        this._text_13 = this.renderer.createText(this._el_6, '\n  ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_6, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, 'Sample unit tests with Jasmine and Karma including code coverage via Istanbul.', null);
        this._text_16 = this.renderer.createText(this._el_6, '\n  ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_6, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, 'End-to-end tests with Protractor.', null);
        this._text_19 = this.renderer.createText(this._el_6, '\n  ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_6, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_21 = this.renderer.createText(this._el_20, 'Development server with live reload.', null);
        this._text_22 = this.renderer.createText(this._el_6, '\n  ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_6, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_24 = this.renderer.createText(this._el_23, 'TypeScript definition management using Types.', null);
        this._text_25 = this.renderer.createText(this._el_6, '\n  ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_6, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_27 = this.renderer.createText(this._el_26, 'Basic Service Worker, which implements "Cache then network strategy".', null);
        this._text_28 = this.renderer.createText(this._el_6, '\n', null);
        this._text_29 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._text_29
        ]), null);
        return null;
    };
    return View_AboutComponent0;
}(import1.AppView));
exports.View_AboutComponent0 = View_AboutComponent0;
