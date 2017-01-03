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
var current_user_model_1 = require('../../shared/services/current-user.model');
var error_service_1 = require('../../shared/services/error.service');
var LoggedOutGuard = (function () {
    function LoggedOutGuard(currentUser, error) {
        this.currentUser = currentUser;
        this.error = error;
    }
    LoggedOutGuard.prototype.canActivate = function () {
        if (this.currentUser.loggedIn()) {
            return true;
        }
        else {
            this.error.handle({ status: 401 });
            return false;
        }
    };
    LoggedOutGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser, error_service_1.ErrorActions])
    ], LoggedOutGuard);
    return LoggedOutGuard;
}());
exports.LoggedOutGuard = LoggedOutGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rdXNlci1tYW5hZ2VtZW50L3NlcnZpY2VzL2xvZ2dlZC1vdXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQyxtQ0FBNEIsMENBQTBDLENBQUMsQ0FBQTtBQUN2RSw4QkFBNkIscUNBQXFDLENBQUMsQ0FBQTtBQUduRTtJQUNFLHdCQUNVLFdBQXdCLEVBQ3hCLEtBQW1CO1FBRG5CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWM7SUFBSSxDQUFDO0lBRWxDLG9DQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFiSDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBZWIscUJBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLHNCQUFjLGlCQWMxQixDQUFBIiwiZmlsZSI6ImFwcC8rdXNlci1tYW5hZ2VtZW50L3NlcnZpY2VzL2xvZ2dlZC1vdXQuZ3VhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LXVzZXIubW9kZWwnO1xuaW1wb3J0IHsgRXJyb3JBY3Rpb25zIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Vycm9yLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nZ2VkT3V0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyLFxuICAgIHByaXZhdGUgZXJyb3I6IEVycm9yQWN0aW9ucykgeyB9XG5cbiAgY2FuQWN0aXZhdGUoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFVzZXIubG9nZ2VkSW4oKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3IuaGFuZGxlKHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbn1cblxuXG4iXX0=
