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
var user_management_component_1 = require('./user-management.component');
var login_component_1 = require('./+login/login.component');
var register_component_1 = require('./+register/register.component');
var profile_component_1 = require('./+profile/profile.component');
var forgot_password_component_1 = require('./+forgot-password/forgot-password.component');
var reset_password_component_1 = require('./+reset-password/reset-password.component');
var shared_module_1 = require('../shared/shared.module');
var user_data_service_1 = require('./services/user.data.service');
var user_management_routes_1 = require('./user-management.routes');
var router_1 = require('@angular/router');
var document_service_1 = require('./services/document.service');
var UserManagementModule = (function () {
    function UserManagementModule() {
    }
    UserManagementModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, router_1.RouterModule.forChild(user_management_routes_1.USER_ROUTES)],
            declarations: [user_management_component_1.UserManagementComponent, login_component_1.LoginComponent, register_component_1.RegisterComponent, profile_component_1.ProfileComponent, forgot_password_component_1.ForgotPasswordComponent, reset_password_component_1.ResetPasswordComponent],
            exports: [user_management_component_1.UserManagementComponent],
            providers: [user_data_service_1.User, document_service_1.DocumentService],
        }), 
        __metadata('design:paramtypes', [])
    ], UserManagementModule);
    return UserManagementModule;
}());
exports.UserManagementModule = UserManagementModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QywwQ0FBd0MsNkJBQTZCLENBQUMsQ0FBQTtBQUN0RSxnQ0FBK0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMxRCxtQ0FBa0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUNuRSxrQ0FBaUMsOEJBQThCLENBQUMsQ0FBQTtBQUNoRSwwQ0FBdUMsOENBQThDLENBQUMsQ0FBQTtBQUN0Rix5Q0FBdUMsNENBQTRDLENBQUMsQ0FBQTtBQUNwRiw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxrQ0FBcUIsOEJBQThCLENBQUMsQ0FBQTtBQUNwRCx1Q0FBNEIsMEJBQTBCLENBQUMsQ0FBQTtBQUN2RCx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxpQ0FBZ0MsNkJBQTZCLENBQUMsQ0FBQTtBQVM5RDtJQUFBO0lBQW9DLENBQUM7SUFQckM7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLHFCQUFZLENBQUMsUUFBUSxDQUFDLG9DQUFXLENBQUMsQ0FBQztZQUMzRCxZQUFZLEVBQUUsQ0FBQyxtREFBdUIsRUFBRSxnQ0FBYyxFQUFFLHNDQUFpQixFQUFFLG9DQUFnQixFQUFFLG1EQUF1QixFQUFFLGlEQUFzQixDQUFDO1lBQzdJLE9BQU8sRUFBRSxDQUFDLG1EQUF1QixDQUFDO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLHdCQUFJLEVBQUUsa0NBQWUsQ0FBQztTQUNyQyxDQUFDOzs0QkFBQTtJQUVrQywyQkFBQztBQUFELENBQXBDLEFBQXFDLElBQUE7QUFBeEIsNEJBQW9CLHVCQUFJLENBQUEiLCJmaWxlIjoiYXBwLyt1c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gJy4vdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vK2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vK3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi8rcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudH0gZnJvbSAnLi8rZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzZXRQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vK3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyLmRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBVU0VSX1JPVVRFUyB9IGZyb20gJy4vdXNlci1tYW5hZ2VtZW50LnJvdXRlcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRG9jdW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kb2N1bWVudC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoVVNFUl9ST1VURVMpXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtVc2VyTWFuYWdlbWVudENvbXBvbmVudCwgTG9naW5Db21wb25lbnQsIFJlZ2lzdGVyQ29tcG9uZW50LCBQcm9maWxlQ29tcG9uZW50LCBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCwgUmVzZXRQYXNzd29yZENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1VzZXJNYW5hZ2VtZW50Q29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtVc2VyLCBEb2N1bWVudFNlcnZpY2VdLFxufSlcblxuZXhwb3J0IGNsYXNzIFVzZXJNYW5hZ2VtZW50TW9kdWxlIHsgfVxuIl19
