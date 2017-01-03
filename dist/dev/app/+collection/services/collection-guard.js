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
var CollectionGuard = (function () {
    function CollectionGuard(userCan, currentUser, router, error) {
        this.userCan = userCan;
        this.currentUser = currentUser;
        this.router = router;
        this.error = error;
    }
    CollectionGuard.prototype.canActivate = function () {
        if (this.currentUser.loggedIn() && this.userCan.viewCollections()) {
            return true;
        }
        else {
            if (this.currentUser.loggedIn() && !this.userCan.viewCollections()) {
                this.error.handle({ status: 403 });
            }
            else {
                this.error.handle({ status: 401 });
            }
            return false;
        }
    };
    CollectionGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [capabilities_service_1.Capabilities, current_user_model_1.CurrentUser, router_1.Router, error_service_1.ErrorActions])
    ], CollectionGuard);
    return CollectionGuard;
}());
exports.CollectionGuard = CollectionGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29sbGVjdGlvbi9zZXJ2aWNlcy9jb2xsZWN0aW9uLWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQscUNBQTZCLDRDQUE0QyxDQUFDLENBQUE7QUFDMUUsbUNBQTRCLDBDQUEwQyxDQUFDLENBQUE7QUFDdkUsOEJBQTZCLHFDQUFxQyxDQUFDLENBQUE7QUFHbkU7SUFDRSx5QkFDVSxPQUFxQixFQUNyQixXQUF3QixFQUN4QixNQUFjLEVBQ2QsS0FBbUI7UUFIbkIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBYztJQUFJLENBQUM7SUFFbEMscUNBQVcsR0FBWDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztZQUNyQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBbkJIO1FBQUMsaUJBQVUsRUFBRTs7dUJBQUE7SUFxQmIsc0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLHVCQUFlLGtCQW9CM0IsQ0FBQSIsImZpbGUiOiJhcHAvK2NvbGxlY3Rpb24vc2VydmljZXMvY29sbGVjdGlvbi1ndWFyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIgfSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2FwYWJpbGl0aWVzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2NhcGFiaWxpdGllcy5zZXJ2aWNlJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBFcnJvckFjdGlvbnMgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvZXJyb3Iuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlckNhbjogQ2FwYWJpbGl0aWVzLFxuICAgIHByaXZhdGUgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBlcnJvcjogRXJyb3JBY3Rpb25zKSB7IH1cblxuICBjYW5BY3RpdmF0ZSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50VXNlci5sb2dnZWRJbigpICYmIHRoaXMudXNlckNhbi52aWV3Q29sbGVjdGlvbnMoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRVc2VyLmxvZ2dlZEluKCkgJiYgIXRoaXMudXNlckNhbi52aWV3Q29sbGVjdGlvbnMoKSkge1xuICAgICAgICAgIHRoaXMuZXJyb3IuaGFuZGxlKHtzdGF0dXM6IDQwM30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lcnJvci5oYW5kbGUoe3N0YXR1czogNDAxfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbn1cblxuXG4iXX0=
