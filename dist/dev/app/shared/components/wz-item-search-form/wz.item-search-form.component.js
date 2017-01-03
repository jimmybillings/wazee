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
var forms_1 = require('@angular/forms');
var WzItemSearchFormComponent = (function () {
    function WzItemSearchFormComponent(fb) {
        this.fb = fb;
        this.query = new core_1.EventEmitter();
        this.closeSearch = new core_1.EventEmitter();
        this.setForm();
    }
    WzItemSearchFormComponent.prototype.setForm = function () {
        this.itemSearch = this.fb.group({ q: ['', forms_1.Validators.required] });
    };
    WzItemSearchFormComponent.prototype.onSubmit = function () {
        this.query.emit(this.itemSearch.value);
    };
    WzItemSearchFormComponent.prototype.resetSearch = function () {
        this.itemSearch.controls['q'].reset('');
        this.onSubmit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzItemSearchFormComponent.prototype, "currentSearchQuery", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzItemSearchFormComponent.prototype, "placeholderTxt", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzItemSearchFormComponent.prototype, "query", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzItemSearchFormComponent.prototype, "closeSearch", void 0);
    WzItemSearchFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-item-search-form',
            templateUrl: 'wz.item-search-form.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], WzItemSearchFormComponent);
    return WzItemSearchFormComponent;
}());
exports.WzItemSearchFormComponent = WzItemSearchFormComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1pdGVtLXNlYXJjaC1mb3JtL3d6Lml0ZW0tc2VhcmNoLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0YsZUFBZSxDQUFDLENBQUE7QUFDaEcsc0JBQW1ELGdCQUFnQixDQUFDLENBQUE7QUFTcEU7SUFPRSxtQ0FDUyxFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUpkLFVBQUssR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBSXpDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sMkNBQU8sR0FBZDtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLDRDQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSwrQ0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQXJCRDtRQUFDLFlBQUssRUFBRTs7eUVBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7cUVBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7NERBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7a0VBQUE7SUFaWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7O2lDQUFBO0lBMEJGLGdDQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQXhCWSxpQ0FBeUIsNEJBd0JyQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1pdGVtLXNlYXJjaC1mb3JtL3d6Lml0ZW0tc2VhcmNoLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd3ei1pdGVtLXNlYXJjaC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICd3ei5pdGVtLXNlYXJjaC1mb3JtLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIFd6SXRlbVNlYXJjaEZvcm1Db21wb25lbnQge1xuICBwdWJsaWMgaXRlbVNlYXJjaDogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBjdXJyZW50U2VhcmNoUXVlcnk6IGFueTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXJUeHQ6IGFueTtcbiAgQE91dHB1dCgpIHF1ZXJ5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2xvc2VTZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGZiOiBGb3JtQnVpbGRlcikge1xuICAgIHRoaXMuc2V0Rm9ybSgpO1xuICB9XG5cbiAgcHVibGljIHNldEZvcm0oKSB7XG4gICAgdGhpcy5pdGVtU2VhcmNoID0gdGhpcy5mYi5ncm91cCh7IHE6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSk7XG4gIH1cblxuICBwdWJsaWMgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5xdWVyeS5lbWl0KHRoaXMuaXRlbVNlYXJjaC52YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXRTZWFyY2goKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtU2VhcmNoLmNvbnRyb2xzWydxJ10ucmVzZXQoJycpO1xuICAgIHRoaXMub25TdWJtaXQoKTtcbiAgfVxufVxuIl19
