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
var asset_service_1 = require('../../shared/services/asset.service');
var current_user_model_1 = require('../../shared/services/current-user.model');
var AssetResolver = (function () {
    function AssetResolver(asset, currentUser) {
        this.asset = asset;
        this.currentUser = currentUser;
    }
    AssetResolver.prototype.resolve = function (route, state) {
        if (route.params['share_key']) {
            return this.asset.getData(route.params['name'], route.params['share_key']);
        }
        else {
            return this.asset.getData(route.params['name']);
        }
    };
    AssetResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [asset_service_1.AssetService, current_user_model_1.CurrentUser])
    ], AssetResolver);
    return AssetResolver;
}());
exports.AssetResolver = AssetResolver;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYXNzZXQvc2VydmljZXMvYXNzZXQucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQyw4QkFBNkIscUNBQXFDLENBQUMsQ0FBQTtBQUVuRSxtQ0FBNEIsMENBQTBDLENBQUMsQ0FBQTtBQUd2RTtJQUNFLHVCQUFvQixLQUFtQixFQUFVLFdBQXVCO1FBQXBELFVBQUssR0FBTCxLQUFLLENBQWM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtJQUN4RSxDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLEtBQTZCLEVBQUUsS0FBMEI7UUFDL0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNILENBQUM7SUFYSDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBWWIsb0JBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLHFCQUFhLGdCQVd6QixDQUFBIiwiZmlsZSI6ImFwcC8rYXNzZXQvc2VydmljZXMvYXNzZXQucmVzb2x2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBBc3NldFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXNzZXQuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBc3NldFJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhc3NldDogQXNzZXRTZXJ2aWNlLCBwcml2YXRlIGN1cnJlbnRVc2VyOkN1cnJlbnRVc2VyKSB7XG4gIH1cblxuICByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKHJvdXRlLnBhcmFtc1snc2hhcmVfa2V5J10pIHtcbiAgICAgIHJldHVybiB0aGlzLmFzc2V0LmdldERhdGEocm91dGUucGFyYW1zWyduYW1lJ10sIHJvdXRlLnBhcmFtc1snc2hhcmVfa2V5J10pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5hc3NldC5nZXREYXRhKHJvdXRlLnBhcmFtc1snbmFtZSddKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
