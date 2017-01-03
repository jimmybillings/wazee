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
var AdminCapabilities = (function () {
    function AdminCapabilities(currentUser) {
        this.currentUser = currentUser;
    }
    AdminCapabilities.prototype.viewAdmin = function () {
        return this.userHas('Root');
    };
    AdminCapabilities.prototype.userHas = function (permission) {
        return this.currentUser.hasPermission(permission);
    };
    AdminCapabilities = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser])
    ], AdminCapabilities);
    return AdminCapabilities;
}());
exports.AdminCapabilities = AdminCapabilities;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vc2VydmljZXMvYWRtaW4uY2FwYWJpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsbUNBQTRCLDBDQUEwQyxDQUFDLENBQUE7QUFHdkU7SUFDRSwyQkFBbUIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDO0lBRXpDLHFDQUFTLEdBQWhCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLG1DQUFPLEdBQWQsVUFBZSxVQUFrQjtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQVZIO1FBQUMsaUJBQVUsRUFBRTs7eUJBQUE7SUFXYix3QkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlkseUJBQWlCLG9CQVU3QixDQUFBIiwiZmlsZSI6ImFwcC8rYWRtaW4vc2VydmljZXMvYWRtaW4uY2FwYWJpbGl0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvY3VycmVudC11c2VyLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkbWluQ2FwYWJpbGl0aWVzIHtcbiAgY29uc3RydWN0b3IocHVibGljIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlcikgeyB9XG5cbiAgcHVibGljIHZpZXdBZG1pbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy51c2VySGFzKCdSb290Jyk7XG4gIH1cblxuICBwdWJsaWMgdXNlckhhcyhwZXJtaXNzaW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VXNlci5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb24pO1xuICB9XG59XG4iXX0=
