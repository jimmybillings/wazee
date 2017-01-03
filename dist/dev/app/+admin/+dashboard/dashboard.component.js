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
var DashboardComponent = (function () {
    function DashboardComponent(currentUser) {
        this.currentUser = currentUser;
    }
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-dashboard',
            templateUrl: 'dashboard.html'
        }), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsbUNBQTRCLDBDQUEwQyxDQUFDLENBQUE7QUFXdkU7SUFDRSw0QkFBbUIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDO0lBVmxEO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSxnQkFBZ0I7U0FDOUIsQ0FBQzs7MEJBQUE7SUFPRix5QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksMEJBQWtCLHFCQUU5QixDQUFBIiwiZmlsZSI6ImFwcC8rYWRtaW4vK2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LXVzZXIubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhZG1pbi1kYXNoYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJ2Rhc2hib2FyZC5odG1sJ1xufSlcblxuLyoqXG4gKiBEYXNoYm9hcmQgQ29tcG9uZW50IC0gQ3JlYXRlcyBhbiBhZG1pbiBkYXNoYm9hcmQuIEl0IGlzIGluc3RhbnRpYXRlZCB3aXRoIHRoZSBjdXJyZW50IHVzZXJcbiAqL1xuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjdXJyZW50VXNlcjogQ3VycmVudFVzZXIpIHsgfVxufVxuIl19
