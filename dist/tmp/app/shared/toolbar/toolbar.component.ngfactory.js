"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('./toolbar.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import4 = require('@angular/core/src/metadata/view');
var import5 = require('@angular/core/src/linker/view_type');
var import6 = require('@angular/core/src/change_detection/constants');
var import7 = require('@angular/core/src/linker/component_factory');
var import8 = require('./toolbar.component.css.shim.ngstyle');
var Wrapper_ToolbarComponent = (function () {
    function Wrapper_ToolbarComponent() {
        this._changed = false;
        this.context = new import0.ToolbarComponent();
    }
    Wrapper_ToolbarComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ToolbarComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ToolbarComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_ToolbarComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ToolbarComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ToolbarComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ToolbarComponent;
}());
exports.Wrapper_ToolbarComponent = Wrapper_ToolbarComponent;
var renderType_ToolbarComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ToolbarComponent_Host0 = (function (_super) {
    __extends(View_ToolbarComponent_Host0, _super);
    function View_ToolbarComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ToolbarComponent_Host0, renderType_ToolbarComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_ToolbarComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'sd-toolbar', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ToolbarComponent0(this.viewUtils, this, 0, this._el_0);
        this._ToolbarComponent_0_3 = new Wrapper_ToolbarComponent();
        this.compView_0.create(this._ToolbarComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ToolbarComponent_0_3.context);
    };
    View_ToolbarComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ToolbarComponent) && (0 === requestNodeIndex))) {
            return this._ToolbarComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ToolbarComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ToolbarComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ToolbarComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ToolbarComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ToolbarComponent_Host0;
}(import1.AppView));
exports.ToolbarComponentNgFactory = new import7.ComponentFactory('sd-toolbar', View_ToolbarComponent_Host0, import0.ToolbarComponent);
var styles_ToolbarComponent = [import8.styles];
var renderType_ToolbarComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_ToolbarComponent, {});
var View_ToolbarComponent0 = (function (_super) {
    __extends(View_ToolbarComponent0, _super);
    function View_ToolbarComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ToolbarComponent0, renderType_ToolbarComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_ToolbarComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Angular Seed', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'more'), null);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4
        ]), null);
        return null;
    };
    return View_ToolbarComponent0;
}(import1.AppView));
exports.View_ToolbarComponent0 = View_ToolbarComponent0;
