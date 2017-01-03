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
var user_data_service_1 = require('../services/user.data.service');
var ui_config_1 = require('../../shared/services/ui.config');
var document_service_1 = require('../services/document.service');
var RegisterComponent = (function () {
    function RegisterComponent(user, uiConfig, document) {
        this.user = user;
        this.uiConfig = uiConfig;
        this.document = document;
        this.serverErrors = null;
        this.successfullySubmitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeTos = this.document.downloadActiveTosDocument();
        this.configSubscription =
            this.uiConfig.get('register').subscribe(function (config) {
                return _this.config = config.config;
            });
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.configSubscription.unsubscribe();
    };
    RegisterComponent.prototype.onSubmit = function (user) {
        var _this = this;
        Object.assign(user, { termsAgreedTo: this.document.activeVersionId });
        this.user.create(user).take(1).subscribe(function (res) {
            _this.successfullySubmitted = true;
            _this.newUser = res;
        }, (function (Error) {
            _this.serverErrors = Error.json();
        }));
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register-component',
            templateUrl: 'register.html'
        }), 
        __metadata('design:paramtypes', [user_data_service_1.User, ui_config_1.UiConfig, document_service_1.DocumentService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rdXNlci1tYW5hZ2VtZW50LytyZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUU3RCxrQ0FBcUIsK0JBQStCLENBQUMsQ0FBQTtBQUVyRCwwQkFBeUIsaUNBQWlDLENBQUMsQ0FBQTtBQUUzRCxpQ0FBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQVcvRDtJQVFFLDJCQUNTLElBQVUsRUFDVixRQUFrQixFQUNqQixRQUF5QjtRQUYxQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQVQ1QixpQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsMEJBQXFCLEdBQVksS0FBSyxDQUFDO0lBUTlDLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsa0JBQWtCO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQVc7Z0JBQ2xELE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTTtZQUEzQixDQUEyQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVNLG9DQUFRLEdBQWYsVUFBZ0IsSUFBUztRQUF6QixpQkFRQztRQVBDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBYTtZQUNyRCxLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLENBQUMsRUFBRSxDQUFDLFVBQUEsS0FBSztZQUNQLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBdkNIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSxlQUFlO1NBQzdCLENBQUM7O3lCQUFBO0lBb0NGLHdCQUFDO0FBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtBQWxDWSx5QkFBaUIsb0JBa0M3QixDQUFBIiwiZmlsZSI6ImFwcC8rdXNlci1tYW5hZ2VtZW50LytyZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXIuZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgVWlDb25maWcgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdWkuY29uZmlnJztcbmltcG9ydCB7IFNlcnZlckVycm9ycyB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL2Zvcm1zLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEb2N1bWVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kb2N1bWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4Jztcbi8qKlxuICogUmVnaXN0cmF0aW9uIHBhZ2UgY29tcG9uZW50IC0gcmVuZGVycyByZWdpc3RyYXRpb24gcGFnZSBhbmQgaGFuZGxlcyBzdWJtaXRpbmcgcmVnaXN0YXRpb24gZm9ybS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncmVnaXN0ZXItY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgY29uZmlnOiBhbnk7XG4gIHB1YmxpYyBzZXJ2ZXJFcnJvcnM6IFNlcnZlckVycm9ycyA9IG51bGw7XG4gIHB1YmxpYyBuZXdVc2VyOiBhbnk7XG4gIHB1YmxpYyBzdWNjZXNzZnVsbHlTdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGFjdGl2ZVRvczogT2JzZXJ2YWJsZTxhbnk+O1xuICBwcml2YXRlIGNvbmZpZ1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB1c2VyOiBVc2VyLFxuICAgIHB1YmxpYyB1aUNvbmZpZzogVWlDb25maWcsXG4gICAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnRTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRvcyA9IHRoaXMuZG9jdW1lbnQuZG93bmxvYWRBY3RpdmVUb3NEb2N1bWVudCgpO1xuICAgIHRoaXMuY29uZmlnU3Vic2NyaXB0aW9uID1cbiAgICAgIHRoaXMudWlDb25maWcuZ2V0KCdyZWdpc3RlcicpLnN1YnNjcmliZSgoY29uZmlnOiBhbnkpID0+XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnLmNvbmZpZyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbmZpZ1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIG9uU3VibWl0KHVzZXI6IGFueSk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24odXNlciwgeyB0ZXJtc0FncmVlZFRvOiB0aGlzLmRvY3VtZW50LmFjdGl2ZVZlcnNpb25JZCB9KTtcbiAgICB0aGlzLnVzZXIuY3JlYXRlKHVzZXIpLnRha2UoMSkuc3Vic2NyaWJlKChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnN1Y2Nlc3NmdWxseVN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICB0aGlzLm5ld1VzZXIgPSByZXM7XG4gICAgfSwgKEVycm9yID0+IHtcbiAgICAgIHRoaXMuc2VydmVyRXJyb3JzID0gRXJyb3IuanNvbigpO1xuICAgIH0pKTtcbiAgfVxufVxuIl19
