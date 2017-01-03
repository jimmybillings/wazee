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
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(user, uiConfig) {
        this.user = user;
        this.uiConfig = uiConfig;
        this.successfullySubmitted = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configSubscription =
            this.uiConfig.get('forgotPassword').subscribe(function (config) {
                return _this.config = config.config;
            });
    };
    ForgotPasswordComponent.prototype.ngOnDestroy = function () {
        this.configSubscription.unsubscribe();
    };
    ForgotPasswordComponent.prototype.onSubmit = function (user) {
        this.user.forgotPassword(user).subscribe();
        this.successfullySubmitted = true;
    };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'forgot-password-component',
            templateUrl: 'forgot-password.html',
        }), 
        __metadata('design:paramtypes', [user_data_service_1.User, ui_config_1.UiConfig])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rdXNlci1tYW5hZ2VtZW50Lytmb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBRTdELGtDQUFxQiwrQkFBK0IsQ0FBQyxDQUFBO0FBQ3JELDBCQUF5QixpQ0FBaUMsQ0FBQyxDQUFBO0FBUTNEO0lBTUUsaUNBQ1MsSUFBVSxFQUNWLFFBQWtCO1FBRGxCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTnBCLDBCQUFxQixHQUFZLEtBQUssQ0FBQztJQU85QyxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGtCQUFrQjtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQVc7Z0JBQ3hELE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTTtZQUEzQixDQUEyQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVNLDBDQUFRLEdBQWYsVUFBZ0IsSUFBWTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUE5Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDOzsrQkFBQTtJQTJCRiw4QkFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6QlksK0JBQXVCLDBCQXlCbkMsQ0FBQSIsImZpbGUiOiJhcHAvK3VzZXItbWFuYWdlbWVudC8rZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLmRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBVaUNvbmZpZyB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91aS5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdmb3Jnb3QtcGFzc3dvcmQtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdmb3Jnb3QtcGFzc3dvcmQuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBjb25maWc6IGFueTtcbiAgcHVibGljIHN1Y2Nlc3NmdWxseVN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2VydmVyRXJyb3JzOiBhbnk7XG4gIHByaXZhdGUgY29uZmlnU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHVzZXI6IFVzZXIsXG4gICAgcHVibGljIHVpQ29uZmlnOiBVaUNvbmZpZykge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWdTdWJzY3JpcHRpb24gPVxuICAgICAgdGhpcy51aUNvbmZpZy5nZXQoJ2ZvcmdvdFBhc3N3b3JkJykuc3Vic2NyaWJlKChjb25maWc6IGFueSkgPT5cbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcuY29uZmlnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY29uZmlnU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgb25TdWJtaXQodXNlcjogT2JqZWN0KTogdm9pZCB7XG4gICAgdGhpcy51c2VyLmZvcmdvdFBhc3N3b3JkKHVzZXIpLnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3VjY2Vzc2Z1bGx5U3VibWl0dGVkID0gdHJ1ZTtcbiAgfVxufVxuIl19
