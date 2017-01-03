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
var store_1 = require('@ngrx/store');
var api_service_1 = require('./api.service');
var api_interface_1 = require('../interfaces/api.interface');
var current_user_model_1 = require('./current-user.model');
var defaultPreferences = {
    displayFilterCounts: false,
    collectionTrayIsOpen: false,
    searchIsOpen: true,
    sortId: 0,
    displayFilterTree: false
};
exports.userPreferences = function (state, action) {
    if (state === void 0) { state = defaultPreferences; }
    switch (action.type) {
        case 'USER_PREFS.UPDATE_PREFERENCES':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
var UserPreferenceService = (function () {
    function UserPreferenceService(currentUser, store, api) {
        this.currentUser = currentUser;
        this.store = store;
        this.api = api;
        this.data = this.store.select('userPreferences');
    }
    Object.defineProperty(UserPreferenceService.prototype, "state", {
        get: function () {
            var s;
            this.data.take(1).subscribe(function (state) { return s = state; });
            return s;
        },
        enumerable: true,
        configurable: true
    });
    UserPreferenceService.prototype.getPrefs = function () {
        var _this = this;
        this.get().take(1).subscribe(function (response) {
            if (!response['prefs'])
                _this.updateStore();
            _this.set(response['prefs']);
        });
    };
    UserPreferenceService.prototype.toggleSearch = function () {
        this.update({ searchIsOpen: !this.state.searchIsOpen });
    };
    UserPreferenceService.prototype.closeSearch = function () {
        this.update({ searchIsOpen: false });
    };
    UserPreferenceService.prototype.toggleCollectionTray = function () {
        this.update({ collectionTrayIsOpen: !this.state.collectionTrayIsOpen });
    };
    UserPreferenceService.prototype.openCollectionTray = function () {
        this.update({ collectionTrayIsOpen: true });
    };
    UserPreferenceService.prototype.updateSortPreference = function (sortId) {
        this.update({ sortId: sortId });
    };
    UserPreferenceService.prototype.toggleFilterCount = function () {
        this.update({ displayFilterCounts: !this.state.displayFilterCounts });
    };
    UserPreferenceService.prototype.toggleFilterTree = function () {
        this.update({ displayFilterTree: !this.state.displayFilterTree });
    };
    UserPreferenceService.prototype.set = function (preferences) {
        this.updateStore(this.formatResponse(preferences));
    };
    UserPreferenceService.prototype.reset = function () {
        this.updateStore();
    };
    UserPreferenceService.prototype.formatResponse = function (preferences) {
        for (var prefKey in preferences) {
            var newValue = this.stringToBool(preferences[prefKey]);
            preferences[prefKey] = newValue;
        }
        return preferences;
    };
    UserPreferenceService.prototype.get = function () {
        return this.api.get(api_interface_1.Api.Identities, 'userPreferences');
    };
    UserPreferenceService.prototype.update = function (params) {
        this.updateStore(params);
        if (!this.currentUser.loggedIn())
            return;
        this.put(params).take(1).subscribe();
    };
    UserPreferenceService.prototype.put = function (params) {
        var body = this.formatBody(params);
        return this.api.put(api_interface_1.Api.Identities, 'userPreferences/item', { body: body });
    };
    UserPreferenceService.prototype.updateStore = function (data) {
        if (data === void 0) { data = defaultPreferences; }
        this.store.dispatch({ type: 'USER_PREFS.UPDATE_PREFERENCES', payload: data });
    };
    UserPreferenceService.prototype.formatBody = function (preferences) {
        for (var preference in preferences) {
            return {
                key: preference,
                value: preferences[preference]
            };
        }
        ;
    };
    UserPreferenceService.prototype.stringToBool = function (value) {
        switch (value) {
            case 'true':
                return true;
            case 'false':
                return false;
            default:
                return value;
        }
        ;
    };
    UserPreferenceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser, store_1.Store, api_service_1.ApiService])
    ], UserPreferenceService);
    return UserPreferenceService;
}());
exports.UserPreferenceService = UserPreferenceService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvdXNlci1wcmVmZXJlbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxzQkFBNkMsYUFBYSxDQUFDLENBQUE7QUFFM0QsNEJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUFvQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQ2xELG1DQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBRW5ELElBQU0sa0JBQWtCLEdBQVE7SUFDOUIsbUJBQW1CLEVBQUUsS0FBSztJQUMxQixvQkFBb0IsRUFBRSxLQUFLO0lBQzNCLFlBQVksRUFBRSxJQUFJO0lBQ2xCLE1BQU0sRUFBRSxDQUFDO0lBQ1QsaUJBQWlCLEVBQUUsS0FBSztDQUN6QixDQUFDO0FBRVcsdUJBQWUsR0FBdUIsVUFBQyxLQUEwQixFQUFFLE1BQWM7SUFBMUMscUJBQTBCLEdBQTFCLDBCQUEwQjtJQUM1RSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLCtCQUErQjtZQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRDtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUdGO0lBR0UsK0JBQ1MsV0FBd0IsRUFDeEIsS0FBaUIsRUFDakIsR0FBZTtRQUZmLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHNCQUFXLHdDQUFLO2FBQWhCO1lBQ0Us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QUFBLENBQUM7SUFDSixDQUFDO0lBekdIO1FBQUMsaUJBQVUsRUFBRTs7NkJBQUE7SUEwR2IsNEJBQUM7QUFBRCxDQXpHQSxBQXlHQyxJQUFBO0FBekdZLDZCQUFxQix3QkF5R2pDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy91c2VyLXByZWZlcmVuY2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb25SZWR1Y2VyLCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBcGkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2FwaS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tICcuL2N1cnJlbnQtdXNlci5tb2RlbCc7XG5cbmNvbnN0IGRlZmF1bHRQcmVmZXJlbmNlczogYW55ID0ge1xuICBkaXNwbGF5RmlsdGVyQ291bnRzOiBmYWxzZSxcbiAgY29sbGVjdGlvblRyYXlJc09wZW46IGZhbHNlLFxuICBzZWFyY2hJc09wZW46IHRydWUsXG4gIHNvcnRJZDogMCxcbiAgZGlzcGxheUZpbHRlclRyZWU6IGZhbHNlXG59O1xuXG5leHBvcnQgY29uc3QgdXNlclByZWZlcmVuY2VzOiBBY3Rpb25SZWR1Y2VyPGFueT4gPSAoc3RhdGUgPSBkZWZhdWx0UHJlZmVyZW5jZXMsIGFjdGlvbjogQWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdVU0VSX1BSRUZTLlVQREFURV9QUkVGRVJFTkNFUyc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclByZWZlcmVuY2VTZXJ2aWNlIHtcbiAgcHVibGljIGRhdGE6IE9ic2VydmFibGU8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyLFxuICAgIHB1YmxpYyBzdG9yZTogU3RvcmU8YW55PixcbiAgICBwdWJsaWMgYXBpOiBBcGlTZXJ2aWNlKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5zdG9yZS5zZWxlY3QoJ3VzZXJQcmVmZXJlbmNlcycpO1xuICB9XG5cbiAgcHVibGljIGdldCBzdGF0ZSgpOiBhbnkge1xuICAgIGxldCBzOiBhbnk7XG4gICAgdGhpcy5kYXRhLnRha2UoMSkuc3Vic2NyaWJlKHN0YXRlID0+IHMgPSBzdGF0ZSk7XG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJlZnMoKTogdm9pZCB7XG4gICAgdGhpcy5nZXQoKS50YWtlKDEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBpZiAoIXJlc3BvbnNlWydwcmVmcyddKSB0aGlzLnVwZGF0ZVN0b3JlKCk7XG4gICAgICB0aGlzLnNldChyZXNwb25zZVsncHJlZnMnXSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKHsgc2VhcmNoSXNPcGVuOiAhdGhpcy5zdGF0ZS5zZWFyY2hJc09wZW4gfSk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VTZWFyY2goKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoeyBzZWFyY2hJc09wZW46IGZhbHNlIH0pO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUNvbGxlY3Rpb25UcmF5KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKHsgY29sbGVjdGlvblRyYXlJc09wZW46ICF0aGlzLnN0YXRlLmNvbGxlY3Rpb25UcmF5SXNPcGVuIH0pO1xuICB9XG5cbiAgcHVibGljIG9wZW5Db2xsZWN0aW9uVHJheSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSh7IGNvbGxlY3Rpb25UcmF5SXNPcGVuOiB0cnVlIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVNvcnRQcmVmZXJlbmNlKHNvcnRJZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoeyBzb3J0SWQ6IHNvcnRJZCB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVGaWx0ZXJDb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSh7IGRpc3BsYXlGaWx0ZXJDb3VudHM6ICF0aGlzLnN0YXRlLmRpc3BsYXlGaWx0ZXJDb3VudHMgfSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlRmlsdGVyVHJlZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSh7IGRpc3BsYXlGaWx0ZXJUcmVlOiAhdGhpcy5zdGF0ZS5kaXNwbGF5RmlsdGVyVHJlZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQocHJlZmVyZW5jZXM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU3RvcmUodGhpcy5mb3JtYXRSZXNwb25zZShwcmVmZXJlbmNlcykpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0UmVzcG9uc2UocHJlZmVyZW5jZXM6IGFueSk6IGFueSB7XG4gICAgZm9yIChsZXQgcHJlZktleSBpbiBwcmVmZXJlbmNlcykge1xuICAgICAgbGV0IG5ld1ZhbHVlOiBhbnkgPSB0aGlzLnN0cmluZ1RvQm9vbChwcmVmZXJlbmNlc1twcmVmS2V5XSk7XG4gICAgICBwcmVmZXJlbmNlc1twcmVmS2V5XSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcHJlZmVyZW5jZXM7XG4gIH1cblxuICBwcml2YXRlIGdldCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFwaS5nZXQoQXBpLklkZW50aXRpZXMsICd1c2VyUHJlZmVyZW5jZXMnKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKHBhcmFtczogYW55KTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTdG9yZShwYXJhbXMpO1xuICAgIGlmICghdGhpcy5jdXJyZW50VXNlci5sb2dnZWRJbigpKSByZXR1cm47XG4gICAgdGhpcy5wdXQocGFyYW1zKS50YWtlKDEpLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwdXQocGFyYW1zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBib2R5OiBhbnkgPSB0aGlzLmZvcm1hdEJvZHkocGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5hcGkucHV0KEFwaS5JZGVudGl0aWVzLCAndXNlclByZWZlcmVuY2VzL2l0ZW0nLCB7IGJvZHk6IGJvZHkgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0b3JlKGRhdGE6IGFueSA9IGRlZmF1bHRQcmVmZXJlbmNlcyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnVVNFUl9QUkVGUy5VUERBVEVfUFJFRkVSRU5DRVMnLCBwYXlsb2FkOiBkYXRhIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRCb2R5KHByZWZlcmVuY2VzOiBhbnkpOiBhbnkge1xuICAgIGZvciAobGV0IHByZWZlcmVuY2UgaW4gcHJlZmVyZW5jZXMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleTogcHJlZmVyZW5jZSxcbiAgICAgICAgdmFsdWU6IHByZWZlcmVuY2VzW3ByZWZlcmVuY2VdXG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHN0cmluZ1RvQm9vbCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB8IHN0cmluZyB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAndHJ1ZSc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnZmFsc2UnOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgfVxufVxuIl19
