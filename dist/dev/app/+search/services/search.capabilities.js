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
var ui_state_1 = require('../../shared/services/ui.state');
var SearchCapabilities = (function () {
    function SearchCapabilities(currentUser, uiState) {
        this.currentUser = currentUser;
        this.uiState = uiState;
    }
    SearchCapabilities.prototype.userHas = function (permission) {
        return this.currentUser.hasPermission(permission);
    };
    SearchCapabilities = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser, ui_state_1.UiState])
    ], SearchCapabilities);
    return SearchCapabilities;
}());
exports.SearchCapabilities = SearchCapabilities;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc2VhcmNoL3NlcnZpY2VzL3NlYXJjaC5jYXBhYmlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxtQ0FBNEIsMENBQTBDLENBQUMsQ0FBQTtBQUN2RSx5QkFBd0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUl6RDtJQUNFLDRCQUFtQixXQUF3QixFQUFTLE9BQWdCO1FBQWpELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUFJLENBQUM7SUFFbEUsb0NBQU8sR0FBZCxVQUFlLFVBQWtCO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBTkg7UUFBQyxpQkFBVSxFQUFFOzswQkFBQTtJQU9iLHlCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSwwQkFBa0IscUJBTTlCLENBQUEiLCJmaWxlIjoiYXBwLytzZWFyY2gvc2VydmljZXMvc2VhcmNoLmNhcGFiaWxpdGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBVaVN0YXRlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VpLnN0YXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoQ2FwYWJpbGl0aWVzIHtcbiAgY29uc3RydWN0b3IocHVibGljIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlciwgcHVibGljIHVpU3RhdGU6IFVpU3RhdGUpIHsgfVxuXG4gIHB1YmxpYyB1c2VySGFzKHBlcm1pc3Npb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRVc2VyLmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbik7XG4gIH1cbn1cbiJdfQ==
