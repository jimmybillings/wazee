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
var router_1 = require('@angular/router');
var user_data_service_1 = require('../services/user.data.service');
var ui_config_1 = require('../../shared/services/ui.config');
var current_user_model_1 = require('../../shared/services/current-user.model');
var wz_notification_service_1 = require('../../shared/components/wz-notification/wz.notification.service');
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(user, uiConfig, route, router, currentUser, notification) {
        this.user = user;
        this.uiConfig = uiConfig;
        this.route = route;
        this.router = router;
        this.currentUser = currentUser;
        this.notification = notification;
        this.serverErrors = null;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configSubscription =
            this.uiConfig.get('resetPassword').subscribe(function (config) {
                return _this.config = config.config;
            });
    };
    ResetPasswordComponent.prototype.ngOnDestroy = function () {
        this.configSubscription.unsubscribe();
    };
    ResetPasswordComponent.prototype.onSubmit = function (user) {
        var _this = this;
        this.user.resetPassword({ newPassword: user.newPassword }, this.route.snapshot.queryParams['shareKey'])
            .subscribe(function (res) {
            _this.currentUser.set(res.user, res.token.token);
            _this.router.navigate(['/']);
            _this.notification.create('RESETPASSWORD.PASSWORD_CHANGED');
        }, function (error) {
            _this.serverErrors = error.json();
        });
    };
    ResetPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'reset-password-component',
            templateUrl: 'reset-password.html',
        }), 
        __metadata('design:paramtypes', [user_data_service_1.User, ui_config_1.UiConfig, router_1.ActivatedRoute, router_1.Router, current_user_model_1.CurrentUser, wz_notification_service_1.WzNotificationService])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rdXNlci1tYW5hZ2VtZW50LytyZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RCxrQ0FBcUIsK0JBQStCLENBQUMsQ0FBQTtBQUNyRCwwQkFBeUIsaUNBQWlDLENBQUMsQ0FBQTtBQUMzRCxtQ0FBNEIsMENBQTBDLENBQUMsQ0FBQTtBQUN2RSx3Q0FBc0MsaUVBQWlFLENBQUMsQ0FBQTtBQVN4RztJQUtFLGdDQUNVLElBQVUsRUFDVixRQUFrQixFQUNsQixLQUFxQixFQUNyQixNQUFjLEVBQ2QsV0FBd0IsRUFDeEIsWUFBbUM7UUFMbkMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQVR0QyxpQkFBWSxHQUFpQixJQUFJLENBQUM7SUFXekMsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxrQkFBa0I7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVztnQkFDdkQsT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNO1lBQTNCLENBQTJCLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0seUNBQVEsR0FBZixVQUFnQixJQUFTO1FBQXpCLGlCQVVDO1FBVEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNwRyxTQUFTLENBQ1YsVUFBQyxHQUFRO1lBQ1AsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzdELENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDUCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF6Q0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsV0FBVyxFQUFFLHFCQUFxQjtTQUNuQyxDQUFDOzs4QkFBQTtJQXNDRiw2QkFBQztBQUFELENBcENBLEFBb0NDLElBQUE7QUFwQ1ksOEJBQXNCLHlCQW9DbEMsQ0FBQSIsImZpbGUiOiJhcHAvK3VzZXItbWFuYWdlbWVudC8rcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLmRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBVaUNvbmZpZyB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91aS5jb25maWcnO1xuaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvY3VycmVudC11c2VyLm1vZGVsJztcbmltcG9ydCB7IFd6Tm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3d6LW5vdGlmaWNhdGlvbi93ei5ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2ZXJFcnJvcnMgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9mb3Jtcy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyZXNldC1wYXNzd29yZC1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ3Jlc2V0LXBhc3N3b3JkLmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBjb25maWc6IGFueTtcbiAgcHVibGljIHNlcnZlckVycm9yczogU2VydmVyRXJyb3JzID0gbnVsbDtcbiAgcHJpdmF0ZSBjb25maWdTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXI6IFVzZXIsXG4gICAgcHJpdmF0ZSB1aUNvbmZpZzogVWlDb25maWcsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlcixcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvbjogV3pOb3RpZmljYXRpb25TZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnU3Vic2NyaXB0aW9uID1cbiAgICAgIHRoaXMudWlDb25maWcuZ2V0KCdyZXNldFBhc3N3b3JkJykuc3Vic2NyaWJlKChjb25maWc6IGFueSkgPT5cbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcuY29uZmlnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY29uZmlnU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgb25TdWJtaXQodXNlcjogYW55KTogdm9pZCB7XG4gICAgdGhpcy51c2VyLnJlc2V0UGFzc3dvcmQoeyBuZXdQYXNzd29yZDogdXNlci5uZXdQYXNzd29yZCB9LCB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydzaGFyZUtleSddKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgIChyZXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyLnNldChyZXMudXNlciwgcmVzLnRva2VuLnRva2VuKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbi5jcmVhdGUoJ1JFU0VUUEFTU1dPUkQuUEFTU1dPUkRfQ0hBTkdFRCcpO1xuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2VydmVyRXJyb3JzID0gZXJyb3IuanNvbigpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==
