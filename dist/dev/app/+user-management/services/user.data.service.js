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
var api_service_1 = require('../../shared/services/api.service');
var api_interface_1 = require('../../shared/interfaces/api.interface');
var User = (function () {
    function User(api) {
        this.api = api;
    }
    User.prototype.get = function () {
        return this.api.get(api_interface_1.Api.Identities, 'user/currentUser');
    };
    User.prototype.create = function (user) {
        return this.api.post(api_interface_1.Api.Identities, 'user/register', { body: user, loading: true });
    };
    User.prototype.forgotPassword = function (user) {
        return this.api.post(api_interface_1.Api.Identities, 'user/requestPasswordReset', { body: user, loading: true });
    };
    User.prototype.resetPassword = function (user, overridingToken) {
        return this.api.post(api_interface_1.Api.Identities, 'user/passwordReset', { body: user, overridingToken: overridingToken, loading: true });
    };
    User = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], User);
    return User;
}());
exports.User = User;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rdXNlci1tYW5hZ2VtZW50L3NlcnZpY2VzL3VzZXIuZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0MsNEJBQTJCLG1DQUFtQyxDQUFDLENBQUE7QUFDL0QsOEJBQW9CLHVDQUF1QyxDQUFDLENBQUE7QUFPNUQ7SUFDRSxjQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFJLENBQUM7SUFFakMsa0JBQUcsR0FBVjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBRyxDQUFDLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxxQkFBTSxHQUFiLFVBQWMsSUFBWTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQUcsQ0FBQyxVQUFVLEVBQUUsZUFBZSxFQUNsRCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUM5QixDQUFDO0lBQ0osQ0FBQztJQUVNLDZCQUFjLEdBQXJCLFVBQXNCLElBQVM7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFHLENBQUMsVUFBVSxFQUFFLDJCQUEyQixFQUM5RCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUM5QixDQUFDO0lBQ0osQ0FBQztJQUVNLDRCQUFhLEdBQXBCLFVBQXFCLElBQVMsRUFBRSxlQUF1QjtRQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQUcsQ0FBQyxVQUFVLEVBQUUsb0JBQW9CLEVBQ3ZELEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FDaEUsQ0FBQztJQUNKLENBQUM7SUF4Qkg7UUFBQyxpQkFBVSxFQUFFOztZQUFBO0lBeUJiLFdBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLFlBQUksT0F3QmhCLENBQUEiLCJmaWxlIjoiYXBwLyt1c2VyLW1hbmFnZW1lbnQvc2VydmljZXMvdXNlci5kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaSB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL2FwaS5pbnRlcmZhY2UnO1xuXG5cbi8qKlxuICogU2VydmljZSB0aGF0IHByb3ZpZGVzIGFwaSBhY2Nlc3MgcmVnaXN0ZXJpbmcgbmV3IHVzZXJzLiAgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2UpIHsgfVxuXG4gIHB1YmxpYyBnZXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KEFwaS5JZGVudGl0aWVzLCAndXNlci9jdXJyZW50VXNlcicpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSh1c2VyOiBPYmplY3QpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFwaS5wb3N0KEFwaS5JZGVudGl0aWVzLCAndXNlci9yZWdpc3RlcicsXG4gICAgICB7IGJvZHk6IHVzZXIsIGxvYWRpbmc6IHRydWUgfVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZm9yZ290UGFzc3dvcmQodXNlcjogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hcGkucG9zdChBcGkuSWRlbnRpdGllcywgJ3VzZXIvcmVxdWVzdFBhc3N3b3JkUmVzZXQnLFxuICAgICAgeyBib2R5OiB1c2VyLCBsb2FkaW5nOiB0cnVlIH1cbiAgICApO1xuICB9XG5cbiAgcHVibGljIHJlc2V0UGFzc3dvcmQodXNlcjogYW55LCBvdmVycmlkaW5nVG9rZW46IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBpLnBvc3QoQXBpLklkZW50aXRpZXMsICd1c2VyL3Bhc3N3b3JkUmVzZXQnLFxuICAgICAgeyBib2R5OiB1c2VyLCBvdmVycmlkaW5nVG9rZW46IG92ZXJyaWRpbmdUb2tlbiwgbG9hZGluZzogdHJ1ZSB9XG4gICAgKTtcbiAgfVxufVxuIl19
