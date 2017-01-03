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
var router_1 = require('@angular/router');
var current_user_model_1 = require('./current-user.model');
exports.error = function (state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case 'UPDATE_ERROR':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
var ErrorService = (function () {
    function ErrorService(store) {
        this.store = store;
        this.data = this.store.select('error');
    }
    ErrorService.prototype.dispatch = function (error) {
        this.store.dispatch({ type: 'UPDATE_ERROR', payload: error });
    };
    ErrorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store])
    ], ErrorService);
    return ErrorService;
}());
exports.ErrorService = ErrorService;
var ErrorActions = (function () {
    function ErrorActions(error, router, currentUser) {
        this.error = error;
        this.router = router;
        this.currentUser = currentUser;
        this.callInProgress = false;
        this.error.data.subscribe(this.handle.bind(this));
    }
    ErrorActions.prototype.handle = function (error) {
        var _this = this;
        switch (error.status) {
            case 401:
                if (!this.callInProgress) {
                    this.callInProgress = true;
                    this.unAuthorized();
                    setTimeout(function () { return _this.callInProgress = false; }, 3000);
                }
                break;
            case 403:
                if (!this.callInProgress) {
                    this.callInProgress = true;
                    this.forbidden();
                    setTimeout(function () { return _this.callInProgress = false; }, 3000);
                }
                break;
            default:
                break;
        }
    };
    ErrorActions.prototype.unAuthorized = function () {
        var redirect;
        if (this.currentUser.loggedIn()) {
            this.currentUser.destroy();
            redirect = ['/user/login', { 'loggedOut': 'true' }];
        }
        else {
            if (this.router.url.indexOf('/user/login') > -1) {
                redirect = ['/user/login', { 'credentials': 'invalid' }];
            }
            else {
                redirect = ['/user/login', { 'requireLogin': 'true' }];
            }
        }
        this.router.navigate(redirect);
    };
    ErrorActions.prototype.forbidden = function () {
        this.router.navigate(['/user', { 'permission': 'required' }]);
    };
    ErrorActions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ErrorService, router_1.Router, current_user_model_1.CurrentUser])
    ], ErrorActions);
    return ErrorActions;
}());
exports.ErrorActions = ErrorActions;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvZXJyb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHNCQUE2QyxhQUFhLENBQUMsQ0FBQTtBQUMzRCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6QyxtQ0FBNEIsc0JBQXNCLENBQUMsQ0FBQTtBQUV0QyxhQUFLLEdBQXVCLFVBQUMsS0FBVSxFQUFFLE1BQWM7SUFBMUIscUJBQVUsR0FBVixVQUFVO0lBQ2xELE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssY0FBYztZQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRDtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUdGO0lBR0Usc0JBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sK0JBQVEsR0FBZixVQUFnQixLQUFVO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBVkg7UUFBQyxpQkFBVSxFQUFFOztvQkFBQTtJQVdiLG1CQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSxvQkFBWSxlQVV4QixDQUFBO0FBR0Q7SUFFRSxzQkFBb0IsS0FBbUIsRUFBVSxNQUFjLEVBQVUsV0FBd0I7UUFBN0UsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUR6RixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUV0QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU0sNkJBQU0sR0FBYixVQUFjLEtBQVU7UUFBeEIsaUJBbUJDO1FBbEJDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssR0FBRztnQkFDTixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUNwQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxFQUEzQixDQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dCQUNELEtBQUssQ0FBQztZQUNSLEtBQUssR0FBRztnQkFDTixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxFQUEzQixDQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dCQUNELEtBQUssQ0FBQztZQUNSO2dCQUNFLEtBQUssQ0FBQztRQUNWLENBQUM7SUFDSCxDQUFDO0lBRU0sbUNBQVksR0FBbkI7UUFFRSxJQUFJLFFBQWEsQ0FBQztRQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVoQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNCLFFBQVEsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUdOLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELFFBQVEsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQzNELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFFTixRQUFRLEdBQUcsQ0FBQyxhQUFhLEVBQUUsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUN6RCxDQUFDO1FBQ0gsQ0FBQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxnQ0FBUyxHQUFoQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBbkRIO1FBQUMsaUJBQVUsRUFBRTs7b0JBQUE7SUFvRGIsbUJBQUM7QUFBRCxDQW5EQSxBQW1EQyxJQUFBO0FBbkRZLG9CQUFZLGVBbUR4QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvblJlZHVjZXIsIEFjdGlvbiwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tICcuL2N1cnJlbnQtdXNlci5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBlcnJvcjogQWN0aW9uUmVkdWNlcjxhbnk+ID0gKHN0YXRlID0ge30sIGFjdGlvbjogQWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdVUERBVEVfRVJST1InOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVycm9yU2VydmljZSB7XG4gIHB1YmxpYyBkYXRhOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuc3RvcmUuc2VsZWN0KCdlcnJvcicpO1xuICB9XG5cbiAgcHVibGljIGRpc3BhdGNoKGVycm9yOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9FUlJPUicsIHBheWxvYWQ6IGVycm9yIH0pO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFcnJvckFjdGlvbnMge1xuICBwcml2YXRlIGNhbGxJblByb2dyZXNzOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXJyb3I6IEVycm9yU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjdXJyZW50VXNlcjogQ3VycmVudFVzZXIpIHtcbiAgICB0aGlzLmVycm9yLmRhdGEuc3Vic2NyaWJlKHRoaXMuaGFuZGxlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZShlcnJvcjogYW55KTogdm9pZCB7XG4gICAgc3dpdGNoIChlcnJvci5zdGF0dXMpIHtcbiAgICAgIGNhc2UgNDAxOlxuICAgICAgICBpZiAoIXRoaXMuY2FsbEluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICB0aGlzLmNhbGxJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnVuQXV0aG9yaXplZCgpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYWxsSW5Qcm9ncmVzcyA9IGZhbHNlLCAzMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDAzOlxuICAgICAgICBpZiAoIXRoaXMuY2FsbEluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICB0aGlzLmNhbGxJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmZvcmJpZGRlbigpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYWxsSW5Qcm9ncmVzcyA9IGZhbHNlLCAzMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1bkF1dGhvcml6ZWQoKTogdm9pZCB7XG5cbiAgICBsZXQgcmVkaXJlY3Q6IGFueTtcbiAgICBpZiAodGhpcy5jdXJyZW50VXNlci5sb2dnZWRJbigpKSB7XG4gICAgICAvLyBTRVNTSU9OIEhBUyBFWFBJUkVEXG4gICAgICB0aGlzLmN1cnJlbnRVc2VyLmRlc3Ryb3koKTtcbiAgICAgIHJlZGlyZWN0ID0gWycvdXNlci9sb2dpbicsIHsgJ2xvZ2dlZE91dCc6ICd0cnVlJyB9XTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBJTkNPUlJFQ1QgTE9HSU4gQVRURU1QVFxuICAgICAgaWYgKHRoaXMucm91dGVyLnVybC5pbmRleE9mKCcvdXNlci9sb2dpbicpID4gLTEpIHtcbiAgICAgICAgcmVkaXJlY3QgPSBbJy91c2VyL2xvZ2luJywgeyAnY3JlZGVudGlhbHMnOiAnaW52YWxpZCcgfV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSRVFVSVJFRCBUTyBCRSBMT0dHRUQgSU5cbiAgICAgICAgcmVkaXJlY3QgPSBbJy91c2VyL2xvZ2luJywgeyAncmVxdWlyZUxvZ2luJzogJ3RydWUnIH1dO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHJlZGlyZWN0KTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JiaWRkZW4oKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdXNlcicsIHsgJ3Blcm1pc3Npb24nOiAncmVxdWlyZWQnIH1dKTtcbiAgfVxufVxuIl19
