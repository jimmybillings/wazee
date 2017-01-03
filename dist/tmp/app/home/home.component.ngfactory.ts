/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './home.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../shared/name-list/name-list.service';
import * as import9 from './home.component.css.shim.ngstyle';
import * as import10 from '../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import11 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import12 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import13 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/forms/src/directives/default_value_accessor';
import * as import20 from '@angular/forms/src/directives/control_value_accessor';
import * as import21 from '@angular/forms/src/directives/ng_model';
import * as import22 from '@angular/forms/src/directives/ng_control';
import * as import23 from '@angular/forms/src/directives/ng_control_status';
import * as import24 from '@angular/forms/src/directives/ng_form';
import * as import25 from '@angular/forms/src/directives/control_container';
import * as import26 from '@angular/common/src/directives/ng_for';
import * as import27 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_HomeComponent {
  /*private*/ _eventHandler:Function;
  context:import0.HomeComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.HomeComponent(p0);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_HomeComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_HomeComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.HomeComponent>;
  _HomeComponent_0_3:Wrapper_HomeComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HomeComponent_Host0,renderType_HomeComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'sd-home',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_HomeComponent0(this.viewUtils,this,0,this._el_0);
    this._HomeComponent_0_3 = new Wrapper_HomeComponent(this.injectorGet(import8.NameListService,this.parentIndex));
    this.compView_0.create(this._HomeComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._HomeComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HomeComponent) && (0 === requestNodeIndex))) { return this._HomeComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HomeComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const HomeComponentNgFactory:import7.ComponentFactory<import0.HomeComponent> = new import7.ComponentFactory<import0.HomeComponent>('sd-home',View_HomeComponent_Host0,import0.HomeComponent);
const styles_HomeComponent:any[] = [import9.styles];
var renderType_HomeComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_HomeComponent,{});
export class View_HomeComponent0 extends import1.AppView<import0.HomeComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _NgForm_3_3:import10.Wrapper_NgForm;
  _ControlContainer_3_4:any;
  _NgControlStatusGroup_3_5:import11.Wrapper_NgControlStatusGroup;
  _text_4:any;
  _el_5:any;
  _DefaultValueAccessor_5_3:import12.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_5_4:any[];
  _NgModel_5_5:import13.Wrapper_NgModel;
  _NgControl_5_6:any;
  _NgControlStatus_5_7:import11.Wrapper_NgControlStatus;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _anchor_13:any;
  /*private*/ _vc_13:import14.ViewContainer;
  _TemplateRef_13_5:any;
  _NgFor_13_6:import15.Wrapper_NgFor;
  _text_14:any;
  _text_15:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HomeComponent0,renderType_HomeComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'p',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Howdy! Here\'s a list of awesome computer scientists. Do you know any others? Add to the list yourself.',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'form',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._NgForm_3_3 = new import10.Wrapper_NgForm((null as any),(null as any));
    this._ControlContainer_3_4 = this._NgForm_3_3.context;
    this._NgControlStatusGroup_3_5 = new import11.Wrapper_NgControlStatusGroup(this._ControlContainer_3_4);
    this._text_4 = this.renderer.createText(this._el_3,'\n  ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'input',new import3.InlineArray4(4,'name','newName','placeholder','Awesome Computer Scientist'),(null as any));
    this._DefaultValueAccessor_5_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer,new import16.ElementRef(this._el_5));
    this._NG_VALUE_ACCESSOR_5_4 = [this._DefaultValueAccessor_5_3.context];
    this._NgModel_5_5 = new import13.Wrapper_NgModel(this._ControlContainer_3_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_5_4);
    this._NgControl_5_6 = this._NgModel_5_5.context;
    this._NgControlStatus_5_7 = new import11.Wrapper_NgControlStatus(this._NgControl_5_6);
    this._text_6 = this.renderer.createText(this._el_3,'\n  ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_3,'button',new import3.InlineArray2(2,'type','submit'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'Add',(null as any));
    this._text_9 = this.renderer.createText(this._el_3,'\n',(null as any));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,parentRenderNode,'ul',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'\n  ',(null as any));
    this._anchor_13 = this.renderer.createTemplateAnchor(this._el_11,(null as any));
    this._vc_13 = new import14.ViewContainer(13,11,this,this._anchor_13);
    this._TemplateRef_13_5 = new import17.TemplateRef_(this,13,this._anchor_13);
    this._NgFor_13_6 = new import15.Wrapper_NgFor(this._vc_13.vcRef,this._TemplateRef_13_5,this.parentView.injectorGet(import18.IterableDiffers,this.parentIndex),this.ref);
    this._text_14 = this.renderer.createText(this._el_11,'\n',(null as any));
    this._text_15 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_3,new import3.InlineArray4(4,'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_3));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_5));
    this._NgModel_5_5.subscribe(this,this.eventHandler(this.handleEvent_5),true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
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
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.DefaultValueAccessor) && (5 === requestNodeIndex))) { return this._DefaultValueAccessor_5_3.context; }
    if (((token === import20.NG_VALUE_ACCESSOR) && (5 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_5_4; }
    if (((token === import21.NgModel) && (5 === requestNodeIndex))) { return this._NgModel_5_5.context; }
    if (((token === import22.NgControl) && (5 === requestNodeIndex))) { return this._NgControl_5_6; }
    if (((token === import23.NgControlStatus) && (5 === requestNodeIndex))) { return this._NgControlStatus_5_7.context; }
    if (((token === import24.NgForm) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._NgForm_3_3.context; }
    if (((token === import25.ControlContainer) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._ControlContainer_3_4; }
    if (((token === import23.NgControlStatusGroup) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._NgControlStatusGroup_3_5.context; }
    if (((token === import17.TemplateRef) && (13 === requestNodeIndex))) { return this._TemplateRef_13_5; }
    if (((token === import26.NgFor) && (13 === requestNodeIndex))) { return this._NgFor_13_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NgForm_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this._NgControlStatusGroup_3_5.ngDoCheck(this,this._el_3,throwOnChange);
    this._DefaultValueAccessor_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    const currVal_5_1_0:any = 'newName';
    this._NgModel_5_5.check_name(currVal_5_1_0,throwOnChange,false);
    const currVal_5_1_1:any = this.context.newName;
    this._NgModel_5_5.check_model(currVal_5_1_1,throwOnChange,false);
    this._NgModel_5_5.ngDoCheck(this,this._el_5,throwOnChange);
    this._NgControlStatus_5_7.ngDoCheck(this,this._el_5,throwOnChange);
    const currVal_13_0_0:any = this.context.names;
    this._NgFor_13_6.check_ngForOf(currVal_13_0_0,throwOnChange,false);
    this._NgFor_13_6.ngDoCheck(this,this._anchor_13,throwOnChange);
    this._vc_13.detectChangesInNestedViews(throwOnChange);
    this._NgControlStatusGroup_3_5.checkHost(this,this,this._el_3,throwOnChange);
    this._NgControlStatus_5_7.checkHost(this,this,this._el_5,throwOnChange);
  }
  destroyInternal():void {
    this._vc_13.destroyNestedViews();
    this._NgModel_5_5.ngOnDestroy();
    this._NgForm_3_3.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 13)) { return new View_HomeComponent1(this.viewUtils,this,13,this._anchor_13,this._vc_13); }
    return (null as any);
  }
  handleEvent_3(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._NgForm_3_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'submit')) {
      const pd_sub_0:any = ((<any>this.context.addName()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_5_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.context.newName = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_HomeComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import14.ViewContainer) {
    super(View_HomeComponent1,renderType_HomeComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import27.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'',this.context.$implicit,'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}