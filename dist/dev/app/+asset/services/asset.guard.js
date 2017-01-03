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
var capabilities_service_1 = require('../../shared/services/capabilities.service');
var current_user_model_1 = require('../../shared/services/current-user.model');
var error_service_1 = require('../../shared/services/error.service');
var AssetGuard = (function () {
    function AssetGuard(userCan, currentUser, router, error) {
        this.userCan = userCan;
        this.currentUser = currentUser;
        this.router = router;
        this.error = error;
    }
    AssetGuard.prototype.canActivate = function (route, state) {
        if (!this.currentUser.loggedIn() && !route.params['share_key']) {
            return true;
        }
        else if (this.userCan.viewAssetDetails()) {
            return true;
        }
        else if (route.params['share_key']) {
            return true;
        }
        else {
            this.error.handle({ status: 403 });
            return false;
        }
    };
    AssetGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [capabilities_service_1.Capabilities, current_user_model_1.CurrentUser, router_1.Router, error_service_1.ErrorActions])
    ], AssetGuard);
    return AssetGuard;
}());
exports.AssetGuard = AssetGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYXNzZXQvc2VydmljZXMvYXNzZXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCx1QkFBb0YsaUJBQWlCLENBQUMsQ0FBQTtBQUN0RyxxQ0FBNkIsNENBQTRDLENBQUMsQ0FBQTtBQUMxRSxtQ0FBNEIsMENBQTBDLENBQUMsQ0FBQTtBQUN2RSw4QkFBNkIscUNBQXFDLENBQUMsQ0FBQTtBQUduRTtJQUNFLG9CQUNVLE9BQXFCLEVBQ3JCLFdBQXdCLEVBQ3hCLE1BQWMsRUFDZCxLQUFtQjtRQUhuQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFjO0lBQUksQ0FBQztJQUdsQyxnQ0FBVyxHQUFYLFVBQVksS0FBNkIsRUFBRSxLQUEwQjtRQUNuRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUcvRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXBDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFFTixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztJQXpCSDtRQUFDLGlCQUFVLEVBQUU7O2tCQUFBO0lBMEJiLGlCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSxrQkFBVSxhQXlCdEIsQ0FBQSIsImZpbGUiOiJhcHAvK2Fzc2V0L3NlcnZpY2VzL2Fzc2V0Lmd1YXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9ICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDYXBhYmlsaXRpZXMgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvY2FwYWJpbGl0aWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvY3VycmVudC11c2VyLm1vZGVsJztcbmltcG9ydCB7IEVycm9yQWN0aW9ucyB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9lcnJvci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFzc2V0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlckNhbjogQ2FwYWJpbGl0aWVzLFxuICAgIHByaXZhdGUgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBlcnJvcjogRXJyb3JBY3Rpb25zKSB7IH1cblxuXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIGlmICghdGhpcy5jdXJyZW50VXNlci5sb2dnZWRJbigpICYmICFyb3V0ZS5wYXJhbXNbJ3NoYXJlX2tleSddKSB7XG4gICAgICAvLyBMZXQgdGhlIGFwaSBkaWN0YXRlIGJhc2VkIG9uIHNpdGUtY29uZmlnIHdoZXRoZXIgb3IgXG4gICAgICAvLyBub3QgYSBsb2dnZWQgb3V0IHVzZXIgY2FuIHZpc2l0IHRoZSBjbGlwIGRldGFpbHMgcGFnZS5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZih0aGlzLnVzZXJDYW4udmlld0Fzc2V0RGV0YWlscygpKSB7XG4gICAgICAvLyBVc2VyIGhhcyBwZXJtaXNzaW9ucy5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZihyb3V0ZS5wYXJhbXNbJ3NoYXJlX2tleSddKSB7XG4gICAgICAvLyBBIE1heWZseSB1c2VyIHdpdGggYSBzaGFyZSB0b2tlbi5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1c2VyIGlzIGxvZ2dlZCBpbiBidXQgZG9lc24ndCBoYXZlIHBlcm1pc3Npb25cbiAgICAgIHRoaXMuZXJyb3IuaGFuZGxlKHtzdGF0dXM6IDQwM30pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19
