"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('./home.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import4 = require('@angular/core/src/metadata/view');
var import5 = require('@angular/core/src/linker/view_type');
var import6 = require('@angular/core/src/change_detection/constants');
var import7 = require('@angular/core/src/linker/component_factory');
var import8 = require('../shared/name-list/name-list.service');
var import9 = require('./home.component.css.shim.ngstyle');
var import10 = require('../../node_modules/@angular/forms/src/directives/ng_form.ngfactory');
var import11 = require('../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory');
var import12 = require('../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory');
var import13 = require('../../node_modules/@angular/forms/src/directives/ng_model.ngfactory');
var import14 = require('@angular/core/src/linker/view_container');
var import15 = require('../../node_modules/@angular/common/src/directives/ng_for.ngfactory');
var import16 = require('@angular/core/src/linker/element_ref');
var import17 = require('@angular/core/src/linker/template_ref');
var import18 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import19 = require('@angular/forms/src/directives/default_value_accessor');
var import20 = require('@angular/forms/src/directives/control_value_accessor');
var import21 = require('@angular/forms/src/directives/ng_model');
var import22 = require('@angular/forms/src/directives/ng_control');
var import23 = require('@angular/forms/src/directives/ng_control_status');
var import24 = require('@angular/forms/src/directives/ng_form');
var import25 = require('@angular/forms/src/directives/control_container');
var import26 = require('@angular/common/src/directives/ng_for');
var import27 = require('@angular/core/src/change_detection/change_detection_util');
var Wrapper_HomeComponent = (function () {
    function Wrapper_HomeComponent(p0) {
        this._changed = false;
        this.context = new import0.HomeComponent(p0);
    }
    Wrapper_HomeComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_HomeComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_HomeComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_HomeComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_HomeComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_HomeComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_HomeComponent;
}());
exports.Wrapper_HomeComponent = Wrapper_HomeComponent;
var renderType_HomeComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_HomeComponent_Host0 = (function (_super) {
    __extends(View_HomeComponent_Host0, _super);
    function View_HomeComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_HomeComponent_Host0, renderType_HomeComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_HomeComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'sd-home', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_HomeComponent0(this.viewUtils, this, 0, this._el_0);
        this._HomeComponent_0_3 = new Wrapper_HomeComponent(this.injectorGet(import8.NameListService, this.parentIndex));
        this.compView_0.create(this._HomeComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._HomeComponent_0_3.context);
    };
    View_HomeComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.HomeComponent) && (0 === requestNodeIndex))) {
            return this._HomeComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_HomeComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._HomeComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_HomeComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_HomeComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_HomeComponent_Host0;
}(import1.AppView));
exports.HomeComponentNgFactory = new import7.ComponentFactory('sd-home', View_HomeComponent_Host0, import0.HomeComponent);
var styles_HomeComponent = [import9.styles];
var renderType_HomeComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_HomeComponent, {});
var View_HomeComponent0 = (function (_super) {
    __extends(View_HomeComponent0, _super);
    function View_HomeComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_HomeComponent0, renderType_HomeComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_HomeComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Howdy! Here\'s a list of awesome computer scientists. Do you know any others? Add to the list yourself.', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'form', import3.EMPTY_INLINE_ARRAY, null);
        this._NgForm_3_3 = new import10.Wrapper_NgForm(null, null);
        this._ControlContainer_3_4 = this._NgForm_3_3.context;
        this._NgControlStatusGroup_3_5 = new import11.Wrapper_NgControlStatusGroup(this._ControlContainer_3_4);
        this._text_4 = this.renderer.createText(this._el_3, '\n  ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'input', new import3.InlineArray4(4, 'name', 'newName', 'placeholder', 'Awesome Computer Scientist'), null);
        this._DefaultValueAccessor_5_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_5));
        this._NG_VALUE_ACCESSOR_5_4 = [this._DefaultValueAccessor_5_3.context];
        this._NgModel_5_5 = new import13.Wrapper_NgModel(this._ControlContainer_3_4, null, null, this._NG_VALUE_ACCESSOR_5_4);
        this._NgControl_5_6 = this._NgModel_5_5.context;
        this._NgControlStatus_5_7 = new import11.Wrapper_NgControlStatus(this._NgControl_5_6);
        this._text_6 = this.renderer.createText(this._el_3, '\n  ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_3, 'button', new import3.InlineArray2(2, 'type', 'submit'), null);
        this._text_8 = this.renderer.createText(this._el_7, 'Add', null);
        this._text_9 = this.renderer.createText(this._el_3, '\n', null);
        this._text_10 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_11 = import3.createRenderElement(this.renderer, parentRenderNode, 'ul', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, '\n  ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._vc_13 = new import14.ViewContainer(13, 11, this, this._anchor_13);
        this._TemplateRef_13_5 = new import17.TemplateRef_(this, 13, this._anchor_13);
        this._NgFor_13_6 = new import15.Wrapper_NgFor(this._vc_13.vcRef, this._TemplateRef_13_5, this.parentView.injectorGet(import18.IterableDiffers, this.parentIndex), this.ref);
        this._text_14 = this.renderer.createText(this._el_11, '\n', null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_3, new import3.InlineArray4(4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_3));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_5));
        this._NgModel_5_5.subscribe(this, this.eventHandler(this.handleEvent_5), true);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._text_15
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_HomeComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import19.DefaultValueAccessor) && (5 === requestNodeIndex))) {
            return this._DefaultValueAccessor_5_3.context;
        }
        if (((token === import20.NG_VALUE_ACCESSOR) && (5 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_5_4;
        }
        if (((token === import21.NgModel) && (5 === requestNodeIndex))) {
            return this._NgModel_5_5.context;
        }
        if (((token === import22.NgControl) && (5 === requestNodeIndex))) {
            return this._NgControl_5_6;
        }
        if (((token === import23.NgControlStatus) && (5 === requestNodeIndex))) {
            return this._NgControlStatus_5_7.context;
        }
        if (((token === import24.NgForm) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._NgForm_3_3.context;
        }
        if (((token === import25.ControlContainer) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._ControlContainer_3_4;
        }
        if (((token === import23.NgControlStatusGroup) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._NgControlStatusGroup_3_5.context;
        }
        if (((token === import17.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import26.NgFor) && (13 === requestNodeIndex))) {
            return this._NgFor_13_6.context;
        }
        return notFoundResult;
    };
    View_HomeComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_3_3.ngDoCheck(this, this._el_3, throwOnChange);
        this._NgControlStatusGroup_3_5.ngDoCheck(this, this._el_3, throwOnChange);
        this._DefaultValueAccessor_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        var currVal_5_1_0 = 'newName';
        this._NgModel_5_5.check_name(currVal_5_1_0, throwOnChange, false);
        var currVal_5_1_1 = this.context.newName;
        this._NgModel_5_5.check_model(currVal_5_1_1, throwOnChange, false);
        this._NgModel_5_5.ngDoCheck(this, this._el_5, throwOnChange);
        this._NgControlStatus_5_7.ngDoCheck(this, this._el_5, throwOnChange);
        var currVal_13_0_0 = this.context.names;
        this._NgFor_13_6.check_ngForOf(currVal_13_0_0, throwOnChange, false);
        this._NgFor_13_6.ngDoCheck(this, this._anchor_13, throwOnChange);
        this._vc_13.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_3_5.checkHost(this, this, this._el_3, throwOnChange);
        this._NgControlStatus_5_7.checkHost(this, this, this._el_5, throwOnChange);
    };
    View_HomeComponent0.prototype.destroyInternal = function () {
        this._vc_13.destroyNestedViews();
        this._NgModel_5_5.ngOnDestroy();
        this._NgForm_3_3.ngOnDestroy();
    };
    View_HomeComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 13)) {
            return new View_HomeComponent1(this.viewUtils, this, 13, this._anchor_13, this._vc_13);
        }
        return null;
    };
    View_HomeComponent0.prototype.handleEvent_3 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_3_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'submit')) {
            var pd_sub_0 = (this.context.addName() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_HomeComponent0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_5_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.newName = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_HomeComponent0;
}(import1.AppView));
exports.View_HomeComponent0 = View_HomeComponent0;
var View_HomeComponent1 = (function (_super) {
    __extends(View_HomeComponent1, _super);
    function View_HomeComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_HomeComponent1, renderType_HomeComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import27.UNINITIALIZED;
    }
    View_HomeComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_HomeComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '', this.context.$implicit, '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_HomeComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_HomeComponent1;
}(import1.AppView));
