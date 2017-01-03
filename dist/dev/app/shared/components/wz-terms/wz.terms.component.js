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
var WzTermsComponent = (function () {
    function WzTermsComponent() {
        this.close = new core_1.EventEmitter();
    }
    WzTermsComponent.prototype.agreeToTerms = function () {
        var agreeCheckbox = document.querySelector('.md-checkbox-layout');
        if (agreeCheckbox)
            agreeCheckbox.click();
        this.close.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzTermsComponent.prototype, "terms", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzTermsComponent.prototype, "close", void 0);
    WzTermsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-terms',
            templateUrl: 'wz.terms.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WzTermsComponent);
    return WzTermsComponent;
}());
exports.WzTermsComponent = WzTermsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei10ZXJtcy93ei50ZXJtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1RCxlQUFlLENBQUMsQ0FBQTtBQVF2RTtJQUFBO1FBRVksVUFBSyxHQUFRLElBQUksbUJBQVksRUFBRSxDQUFDO0lBTzVDLENBQUM7SUFMUSx1Q0FBWSxHQUFuQjtRQUNFLElBQUksYUFBYSxHQUFvQixRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkYsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQVBEO1FBQUMsWUFBSyxFQUFFOzttREFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzttREFBQTtJQVJYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsZUFBZTtTQUM3QixDQUFDOzt3QkFBQTtJQVdGLHVCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSx3QkFBZ0IsbUJBUzVCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL3d6LXRlcm1zL3d6LnRlcm1zLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3d6LXRlcm1zJyxcbiAgdGVtcGxhdGVVcmw6ICd3ei50ZXJtcy5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFd6VGVybXNDb21wb25lbnQge1xuICBASW5wdXQoKSB0ZXJtczogYW55O1xuICBAT3V0cHV0KCkgY2xvc2U6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgYWdyZWVUb1Rlcm1zKCk6IHZvaWQge1xuICAgIGxldCBhZ3JlZUNoZWNrYm94ID0gPEhUTUxGb3JtRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWQtY2hlY2tib3gtbGF5b3V0Jyk7XG4gICAgaWYgKGFncmVlQ2hlY2tib3gpIGFncmVlQ2hlY2tib3guY2xpY2soKTtcbiAgICB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgfVxufSJdfQ==
