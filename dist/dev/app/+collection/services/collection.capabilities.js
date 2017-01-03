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
var CollectionCapabilities = (function () {
    function CollectionCapabilities(currentUser, uiState) {
        this.currentUser = currentUser;
        this.uiState = uiState;
    }
    CollectionCapabilities.prototype.viewCollections = function () {
        return this.userHas('ViewCollections');
    };
    CollectionCapabilities.prototype.editCollections = function () {
        return this.userHas('EditCollections');
    };
    CollectionCapabilities.prototype.viewCollectionTray = function () {
        var _this = this;
        return this.uiState.headerIsExpanded().map(function (headerIsExpanded) {
            return headerIsExpanded && _this.userHas('ViewCollections');
        });
    };
    CollectionCapabilities.prototype.userHas = function (permission) {
        return this.currentUser.hasPermission(permission);
    };
    CollectionCapabilities = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser, ui_state_1.UiState])
    ], CollectionCapabilities);
    return CollectionCapabilities;
}());
exports.CollectionCapabilities = CollectionCapabilities;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29sbGVjdGlvbi9zZXJ2aWNlcy9jb2xsZWN0aW9uLmNhcGFiaWxpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLG1DQUE0QiwwQ0FBMEMsQ0FBQyxDQUFBO0FBQ3ZFLHlCQUF3QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBSXpEO0lBQ0UsZ0NBQW1CLFdBQXdCLEVBQVMsT0FBZ0I7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQUksQ0FBQztJQUVsRSxnREFBZSxHQUF0QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLGdEQUFlLEdBQXRCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sbURBQWtCLEdBQXpCO1FBQUEsaUJBSUM7UUFIQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFDLGdCQUFnQjtZQUMxRCxNQUFNLENBQUMsZ0JBQWdCLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHdDQUFPLEdBQWQsVUFBZSxVQUFrQjtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQXBCSDtRQUFDLGlCQUFVLEVBQUU7OzhCQUFBO0lBcUJiLDZCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSw4QkFBc0IseUJBb0JsQyxDQUFBIiwiZmlsZSI6ImFwcC8rY29sbGVjdGlvbi9zZXJ2aWNlcy9jb2xsZWN0aW9uLmNhcGFiaWxpdGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBVaVN0YXRlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VpLnN0YXRlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25DYXBhYmlsaXRpZXMge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyLCBwdWJsaWMgdWlTdGF0ZTogVWlTdGF0ZSkgeyB9XG5cbiAgcHVibGljIHZpZXdDb2xsZWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy51c2VySGFzKCdWaWV3Q29sbGVjdGlvbnMnKTtcbiAgfVxuXG4gIHB1YmxpYyBlZGl0Q29sbGVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlckhhcygnRWRpdENvbGxlY3Rpb25zJyk7XG4gIH1cblxuICBwdWJsaWMgdmlld0NvbGxlY3Rpb25UcmF5KCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnVpU3RhdGUuaGVhZGVySXNFeHBhbmRlZCgpLm1hcCgoaGVhZGVySXNFeHBhbmRlZCkgPT4ge1xuICAgICAgcmV0dXJuIGhlYWRlcklzRXhwYW5kZWQgJiYgdGhpcy51c2VySGFzKCdWaWV3Q29sbGVjdGlvbnMnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1c2VySGFzKHBlcm1pc3Npb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRVc2VyLmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbik7XG4gIH1cbn1cbiJdfQ==
