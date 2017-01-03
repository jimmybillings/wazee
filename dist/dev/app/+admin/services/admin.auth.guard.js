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
var capabilities_service_1 = require('../../shared/services/capabilities.service');
var error_service_1 = require('../../shared/services/error.service');
var current_user_model_1 = require('../../shared/services/current-user.model');
var AdminAuthGuard = (function () {
    function AdminAuthGuard(userCan, error, currentUser) {
        this.userCan = userCan;
        this.error = error;
        this.currentUser = currentUser;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        if (this.userCan.viewAdmin()) {
            return true;
        }
        else if (!this.currentUser.loggedIn()) {
            this.error.handle({ status: 401 });
            return false;
        }
        else {
            this.error.handle({ status: 403 });
            return false;
        }
    };
    AdminAuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [capabilities_service_1.Capabilities, error_service_1.ErrorActions, current_user_model_1.CurrentUser])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());
exports.AdminAuthGuard = AdminAuthGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vc2VydmljZXMvYWRtaW4uYXV0aC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBRXZELHFDQUE2Qiw0Q0FBNEMsQ0FBQyxDQUFBO0FBQzFFLDhCQUE2QixxQ0FBcUMsQ0FBQyxDQUFBO0FBQ25FLG1DQUE0QiwwQ0FBMEMsQ0FBQyxDQUFBO0FBR3ZFO0lBQ0Usd0JBQW9CLE9BQXFCLEVBQVUsS0FBbUIsRUFBVSxXQUF3QjtRQUFwRixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUU3RyxvQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztJQWRIO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFlYixxQkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksc0JBQWMsaUJBYzFCLENBQUEiLCJmaWxlIjoiYXBwLythZG1pbi9zZXJ2aWNlcy9hZG1pbi5hdXRoLmd1YXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2FwYWJpbGl0aWVzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2NhcGFiaWxpdGllcy5zZXJ2aWNlJztcbmltcG9ydCB7IEVycm9yQWN0aW9ucyB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9lcnJvci5zZXJ2aWNlJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZG1pbkF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyQ2FuOiBDYXBhYmlsaXRpZXMsIHByaXZhdGUgZXJyb3I6IEVycm9yQWN0aW9ucywgcHJpdmF0ZSBjdXJyZW50VXNlcjogQ3VycmVudFVzZXIpIHsgfVxuXG4gIGNhbkFjdGl2YXRlKCkge1xuICAgIGlmKHRoaXMudXNlckNhbi52aWV3QWRtaW4oKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICghdGhpcy5jdXJyZW50VXNlci5sb2dnZWRJbigpKSB7XG4gICAgICB0aGlzLmVycm9yLmhhbmRsZSh7IHN0YXR1czogNDAxIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yLmhhbmRsZSh7IHN0YXR1czogNDAzIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19
