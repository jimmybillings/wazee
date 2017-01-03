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
var current_user_model_1 = require('../../../shared/services/current-user.model');
var ui_state_1 = require('../../../shared/services/ui.state');
var CartCapabilities = (function () {
    function CartCapabilities(currentUser, uiState) {
        this.currentUser = currentUser;
        this.uiState = uiState;
    }
    CartCapabilities.prototype.viewCartIcon = function () {
        var _this = this;
        return this.uiState.headerIsExpanded().map(function (headerIsExpanded) {
            return headerIsExpanded && _this.currentUser.loggedIn();
        });
    };
    CartCapabilities.prototype.purchaseOnCredit = function () {
        return this.currentUser.hasPurchaseOnCredit();
    };
    CartCapabilities.prototype.userHas = function (permission) {
        return this.currentUser.hasPermission(permission);
    };
    CartCapabilities = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser, ui_state_1.UiState])
    ], CartCapabilities);
    return CartCapabilities;
}());
exports.CartCapabilities = CartCapabilities;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK2NhcnQvc2VydmljZXMvY2FydC5jYXBhYmlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxtQ0FBNEIsNkNBQTZDLENBQUMsQ0FBQTtBQUUxRSx5QkFBd0IsbUNBQW1DLENBQUMsQ0FBQTtBQUc1RDtJQUNFLDBCQUFtQixXQUF3QixFQUFTLE9BQWdCO1FBQWpELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUFJLENBQUM7SUFFbEUsdUNBQVksR0FBbkI7UUFBQSxpQkFJQztRQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxDQUFDLFVBQUMsZ0JBQWdCO1lBQzFELE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDJDQUFnQixHQUF2QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVNLGtDQUFPLEdBQWQsVUFBZSxVQUFrQjtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQWhCSDtRQUFDLGlCQUFVLEVBQUU7O3dCQUFBO0lBaUJiLHVCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSx3QkFBZ0IsbUJBZ0I1QixDQUFBIiwiZmlsZSI6ImFwcC8rY29tbWVyY2UvK2NhcnQvc2VydmljZXMvY2FydC5jYXBhYmlsaXRpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LXVzZXIubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgVWlTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91aS5zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0Q2FwYWJpbGl0aWVzIHtcbiAgY29uc3RydWN0b3IocHVibGljIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlciwgcHVibGljIHVpU3RhdGU6IFVpU3RhdGUpIHsgfVxuXG4gIHB1YmxpYyB2aWV3Q2FydEljb24oKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMudWlTdGF0ZS5oZWFkZXJJc0V4cGFuZGVkKCkubWFwKChoZWFkZXJJc0V4cGFuZGVkKSA9PiB7XG4gICAgICByZXR1cm4gaGVhZGVySXNFeHBhbmRlZCAmJiB0aGlzLmN1cnJlbnRVc2VyLmxvZ2dlZEluKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcHVyY2hhc2VPbkNyZWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VXNlci5oYXNQdXJjaGFzZU9uQ3JlZGl0KCk7XG4gIH1cblxuICBwdWJsaWMgdXNlckhhcyhwZXJtaXNzaW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VXNlci5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb24pO1xuICB9XG59XG4iXX0=
