"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var WzListComponent = (function () {
    function WzListComponent() {
        this.sort = new core_1.EventEmitter();
        this.editForm = new core_1.EventEmitter();
        this.map = {
            'false': 'true',
            'true': 'false'
        };
    }
    WzListComponent.prototype.sortBy = function (attribute) {
        this.sort.emit({ 's': attribute, 'd': this.map[this.toggleFlag] });
    };
    WzListComponent.prototype.showEditForm = function (record) {
        this.editForm.emit(record);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzListComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzListComponent.prototype, "headers", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzListComponent.prototype, "toggleFlag", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzListComponent.prototype, "sort", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzListComponent.prototype, "editForm", void 0);
    WzListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-list',
            templateUrl: 'wz.list.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], WzListComponent);
    return WzListComponent;
}());
exports.WzListComponent = WzListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1saXN0L3d6Lmxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0YsZUFBZSxDQUFDLENBQUE7QUFlaEc7SUFRRTtRQUhVLFNBQUksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUMxQixhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFHdEMsSUFBSSxDQUFDLEdBQUcsR0FBRztZQUNULE9BQU8sRUFBRSxNQUFNO1lBQ2YsTUFBTSxFQUFFLE9BQU87U0FDaEIsQ0FBQztJQUNKLENBQUM7SUFFTSxnQ0FBTSxHQUFiLFVBQWMsU0FBaUI7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVNLHNDQUFZLEdBQW5CLFVBQW9CLE1BQVc7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQW5CRDtRQUFDLFlBQUssRUFBRTs7a0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7b0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7dURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7aURBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7cURBQUE7SUFuQlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxjQUFjO1lBQzNCLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7O3VCQUFBO0lBOEJGLHNCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSx1QkFBZSxrQkFzQjNCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL3d6LWxpc3Qvd3oubGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnd3otbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnd3oubGlzdC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbi8qKlxuICogV3pMaXN0IGNvbXBvbmVudCB0YWtlcyB0aHJlZSBpbnB1dHM6IFRoZSBjb2xsZWN0aW9uIG9mIGl0ZW1zIGFzIGFuIGFycmF5LCBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHNcbiAqIGEgdG9nZ2xlLCBlaXRoZXIgdHJ1ZSBvciBmYWxzZSwgYW5kIHRoZSBoZWFkZXJzIGZyb20gdGhlIFVJIGNvbmZpZyB0byBidWlsZCB0aGUgdGFibGUuIEl0IG91dHB1dHMgYVxuICogc29ydEJ5IGV2ZW50IHRoYXQgaW5jbHVkZXMgdGhlIGF0dHJpYnV0ZSB0byBzb3J0IGJ5LCBhbmQgdGhlIG9wcG9zaXRlIG9mIHRoZSB0b2dnbGUgZmxhZyB0aGF0IHdhc1xuICogcGFzc2VkIGluXG4gKi9cbmV4cG9ydCBjbGFzcyBXekxpc3RDb21wb25lbnQge1xuICBwdWJsaWMgbWFwOiBhbnk7XG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnk7XG4gIEBJbnB1dCgpIGhlYWRlcnM6IGFueTtcbiAgQElucHV0KCkgdG9nZ2xlRmxhZzogYW55O1xuICBAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGVkaXRGb3JtID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFwID0ge1xuICAgICAgJ2ZhbHNlJzogJ3RydWUnLFxuICAgICAgJ3RydWUnOiAnZmFsc2UnXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzb3J0QnkoYXR0cmlidXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnQuZW1pdCh7ICdzJzogYXR0cmlidXRlLCAnZCc6IHRoaXMubWFwW3RoaXMudG9nZ2xlRmxhZ10gfSk7XG4gIH1cblxuICBwdWJsaWMgc2hvd0VkaXRGb3JtKHJlY29yZDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5lZGl0Rm9ybS5lbWl0KHJlY29yZCk7XG4gIH1cbn1cbiJdfQ==
