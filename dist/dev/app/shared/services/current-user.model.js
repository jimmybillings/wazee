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
var store_1 = require('@ngrx/store');
var core_1 = require('@angular/core');
exports.currentUser = function (state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case 'SET_USER':
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};
function isLoggedIn() {
    return !!localStorage.getItem('token');
}
exports.isLoggedIn = isLoggedIn;
var CurrentUser = (function () {
    function CurrentUser(store) {
        this.store = store;
        this.data = this.store.select('currentUser');
    }
    CurrentUser.prototype.get = function (profilePiece) {
        if (profilePiece === void 0) { profilePiece = ''; }
        return this.data.map(function (user) {
            return user[profilePiece];
        });
    };
    CurrentUser.prototype.set = function (user, token) {
        if (user === void 0) { user = null; }
        if (user)
            localStorage.setItem('currentUser', JSON.stringify(user));
        if (token)
            localStorage.setItem('token', token);
        this.store.dispatch({ type: 'SET_USER', payload: this._user() });
    };
    CurrentUser.prototype.destroy = function () {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        this.set();
    };
    CurrentUser.prototype.loggedInState = function () {
        return this.data.map(function (user) { return user.id > 0; });
    };
    CurrentUser.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    CurrentUser.prototype.fullName = function () {
        return this.data.map(function (user) { return (user.firstName + " " + user.lastName); });
    };
    CurrentUser.prototype.hasPermission = function (permission) {
        var hasPermission;
        this.data.map(function (user) {
            if (user.permissions) {
                return user.permissions;
            }
            else if (user.roles) {
                return user.roles[0].permissions || [];
            }
            else {
                return [];
            }
        }).take(1).subscribe(function (permissions) {
            hasPermission = permissions.indexOf(permission) > -1;
        });
        return hasPermission;
    };
    CurrentUser.prototype.hasPurchaseOnCredit = function () {
        var answer;
        this.data.take(1).subscribe(function (user) { return answer = (user.hasOwnProperty('purchaseOnCredit') ? user.purchaseOnCredit : false); });
        return answer;
    };
    CurrentUser.prototype._user = function () {
        return JSON.parse(localStorage.getItem('currentUser')) || this.mayflyUser();
    };
    CurrentUser.prototype.mayflyUser = function () {
        return {
            'lastUpdated': '',
            'createdOn': '',
            'id': 0,
            'emailAddress': '',
            'password': '',
            'firstName': '',
            'lastName': '',
            'siteName': '',
            'accountIds': [0],
            'permissions': [''],
            'purchaseOnCredit': false,
            'focusedCollection': null,
            'ownedCollections': null,
            'editableCollections': null,
            'accessibleCollections': null
        };
    };
    CurrentUser = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store])
    ], CurrentUser);
    return CurrentUser;
}());
exports.CurrentUser = CurrentUser;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvY3VycmVudC11c2VyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxzQkFBNkMsYUFBYSxDQUFDLENBQUE7QUFDM0QscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTlCLG1CQUFXLEdBQXVCLFVBQUMsS0FBVSxFQUFFLE1BQWM7SUFBMUIscUJBQVUsR0FBVixVQUFVO0lBRXhELE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssVUFBVTtZQUNiLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0M7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRjtJQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRmUsa0JBQVUsYUFFekIsQ0FBQTtBQU9EO0lBSUUscUJBQ1UsS0FBa0I7UUFBbEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSx5QkFBRyxHQUFWLFVBQVcsWUFBeUI7UUFBekIsNEJBQXlCLEdBQXpCLGlCQUF5QjtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFTO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0seUJBQUcsR0FBVixVQUFXLElBQWlCLEVBQUUsS0FBYTtRQUFoQyxvQkFBaUIsR0FBakIsV0FBaUI7UUFDMUIsRUFBRSxDQUFDLENB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RSxNQUFNLENBQUM7WUFDTCxhQUFhLEVBQUUsRUFBRTtZQUNqQixXQUFXLEVBQUUsRUFBRTtZQUNmLElBQUksRUFBRSxDQUFDO1lBQ1AsY0FBYyxFQUFFLEVBQUU7WUFDbEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxXQUFXLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxFQUFFO1lBQ2QsVUFBVSxFQUFFLEVBQUU7WUFDZCxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakIsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ25CLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLHFCQUFxQixFQUFFLElBQUk7WUFDM0IsdUJBQXVCLEVBQUUsSUFBSTtTQUM5QixDQUFDO0lBQ0osQ0FBQztJQXBGSDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBcUZiLGtCQUFDO0FBQUQsQ0FwRkEsQUFvRkMsSUFBQTtBQXBGWSxtQkFBVyxjQW9GdkIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb25SZWR1Y2VyLCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50VXNlcjogQWN0aW9uUmVkdWNlcjxhbnk+ID0gKHN0YXRlID0ge30sIGFjdGlvbjogQWN0aW9uKSA9PiB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NFVF9VU0VSJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24ucGF5bG9hZCk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNMb2dnZWRJbigpIHtcbiAgcmV0dXJuICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG59XG5cbi8qKlxuICogTW9kZWwgdGhhdCBkZXNjcmliZXMgY3VycmVudCB1c2VyLCBhbmQgcHJvdmlkZXMgIFxuICogbWV0aG9kcyBmb3IgcmV0cmlldmluZyB1c2VyIGF0dHJpYnV0ZXMuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXJyZW50VXNlciB7XG4gIHB1YmxpYyBwZXJtaXNzaW9uczogYW55O1xuICBwdWJsaWMgZGF0YTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPFVzZXI+KSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5zdG9yZS5zZWxlY3QoJ2N1cnJlbnRVc2VyJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0KHByb2ZpbGVQaWVjZTogc3RyaW5nID0gJycpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGEubWFwKCh1c2VyOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB1c2VyW3Byb2ZpbGVQaWVjZV07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0KHVzZXI6IFVzZXIgPSBudWxsLCB0b2tlbj86c3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHVzZXIpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICBpZiAodG9rZW4pIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ1NFVF9VU0VSJywgcGF5bG9hZDogdGhpcy5fdXNlcigpIH0pO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgdGhpcy5zZXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dnZWRJblN0YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5tYXAodXNlciA9PiB1c2VyLmlkID4gMCk7XG4gIH1cblxuICBwdWJsaWMgbG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gIH1cblxuICBwdWJsaWMgZnVsbE5hbWUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1hcCh1c2VyID0+IGAke3VzZXIuZmlyc3ROYW1lfSAke3VzZXIubGFzdE5hbWV9YCk7XG4gIH1cblxuICBwdWJsaWMgaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgaGFzUGVybWlzc2lvbjogYm9vbGVhbjtcbiAgICB0aGlzLmRhdGEubWFwKCh1c2VyOmFueSkgPT4ge1xuICAgICAgaWYgKHVzZXIucGVybWlzc2lvbnMpIHtcbiAgICAgICAgcmV0dXJuIHVzZXIucGVybWlzc2lvbnM7XG4gICAgICB9IGVsc2UgaWYgKHVzZXIucm9sZXMpIHtcbiAgICAgICAgcmV0dXJuIHVzZXIucm9sZXNbMF0ucGVybWlzc2lvbnMgfHwgW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSkudGFrZSgxKS5zdWJzY3JpYmUoKHBlcm1pc3Npb25zOmFueSkgPT4ge1xuICAgICAgICBoYXNQZXJtaXNzaW9uID0gcGVybWlzc2lvbnMuaW5kZXhPZihwZXJtaXNzaW9uKSA+IC0xO1xuICAgIH0pO1xuICAgIHJldHVybiBoYXNQZXJtaXNzaW9uO1xuICB9XG5cbiAgcHVibGljIGhhc1B1cmNoYXNlT25DcmVkaXQoKTogYm9vbGVhbiB7XG4gICAgbGV0IGFuc3dlcjogYm9vbGVhbjtcbiAgICB0aGlzLmRhdGEudGFrZSgxKS5zdWJzY3JpYmUodXNlciA9PiBhbnN3ZXIgPSAodXNlci5oYXNPd25Qcm9wZXJ0eSgncHVyY2hhc2VPbkNyZWRpdCcpID8gdXNlci5wdXJjaGFzZU9uQ3JlZGl0IDogZmFsc2UpKTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXNlcigpOiBVc2VyIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSkgfHwgdGhpcy5tYXlmbHlVc2VyKCk7XG4gIH1cblxuICBwcml2YXRlIG1heWZseVVzZXIoKTogVXNlciB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdsYXN0VXBkYXRlZCc6ICcnLFxuICAgICAgJ2NyZWF0ZWRPbic6ICcnLFxuICAgICAgJ2lkJzogMCxcbiAgICAgICdlbWFpbEFkZHJlc3MnOiAnJyxcbiAgICAgICdwYXNzd29yZCc6ICcnLFxuICAgICAgJ2ZpcnN0TmFtZSc6ICcnLFxuICAgICAgJ2xhc3ROYW1lJzogJycsXG4gICAgICAnc2l0ZU5hbWUnOiAnJyxcbiAgICAgICdhY2NvdW50SWRzJzogWzBdLFxuICAgICAgJ3Blcm1pc3Npb25zJzogWycnXSxcbiAgICAgICdwdXJjaGFzZU9uQ3JlZGl0JzogZmFsc2UsXG4gICAgICAnZm9jdXNlZENvbGxlY3Rpb24nOiBudWxsLFxuICAgICAgJ293bmVkQ29sbGVjdGlvbnMnOiBudWxsLFxuICAgICAgJ2VkaXRhYmxlQ29sbGVjdGlvbnMnOiBudWxsLFxuICAgICAgJ2FjY2Vzc2libGVDb2xsZWN0aW9ucyc6IG51bGxcbiAgICB9O1xuICB9XG59XG4iXX0=
