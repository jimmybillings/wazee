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
var InitUiState = {
    headerIsExpanded: false,
    showFixedHeader: false,
    loading: false,
    filtersAreAvailable: false
};
exports.uiState = function (state, action) {
    if (state === void 0) { state = InitUiState; }
    switch (action.type) {
        case 'UI.STATE.INITIALIZE':
            return Object.assign({}, state);
        case 'UI.STATE.UPDATE':
            return Object.assign({}, state, action.payload);
        case 'UI.STATE.RESET':
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};
var UiState = (function () {
    function UiState(store) {
        this.store = store;
        this.data = this.store.select('uiState');
    }
    UiState.prototype.reset = function () {
        this.store.dispatch({ type: 'UI.STATE.RESET', payload: InitUiState });
    };
    UiState.prototype.update = function (payload) {
        this.store.dispatch({ type: 'UI.STATE.UPDATE', payload: payload });
    };
    UiState.prototype.loading = function (state) {
        var _this = this;
        this.data.take(1).subscribe(function (s) { return _this.update({ loading: state }); });
    };
    UiState.prototype.headerIsExpanded = function () {
        return this.data.map(function (data) { return data.headerIsExpanded; });
    };
    UiState.prototype.checkRouteForSearchBar = function (currentState) {
        if (currentState === '/') {
            this.update({ headerIsExpanded: false });
            return;
        }
        var showSearchBar = ['user/forgot-password', 'user/register', 'user/login', 'user/reset-password', 'admin', 'notification']
            .filter(function (state) { return currentState.indexOf(state) > -1; }).length === 0;
        this.update({ headerIsExpanded: showSearchBar });
    };
    UiState.prototype.checkForFilters = function (currentState) {
        if (this.state.headerIsExpanded === false) {
            this.update({ filtersAreAvailable: false });
            return;
        }
        var showFilters = currentState.indexOf('search') > -1;
        this.update({ filtersAreAvailable: showFilters });
    };
    UiState.prototype.showFixedHeader = function (offset) {
        var isfixed;
        this.data.take(1).subscribe(function (state) { return isfixed = state.showFixedHeader; });
        var setFixed = (offset > 111) ? true : false;
        if (setFixed !== isfixed)
            this.update({ showFixedHeader: !isfixed });
    };
    Object.defineProperty(UiState.prototype, "state", {
        get: function () {
            var s;
            this.data.take(1).subscribe(function (state) { return s = state; });
            return s;
        },
        enumerable: true,
        configurable: true
    });
    UiState = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store])
    ], UiState);
    return UiState;
}());
exports.UiState = UiState;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvdWkuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQyxzQkFBNEMsYUFBYSxDQUFDLENBQUE7QUFFMUQsSUFBTSxXQUFXLEdBQVE7SUFDdkIsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixlQUFlLEVBQUUsS0FBSztJQUN0QixPQUFPLEVBQUUsS0FBSztJQUNkLG1CQUFtQixFQUFFLEtBQUs7Q0FDM0IsQ0FBQztBQUVXLGVBQU8sR0FBdUIsVUFBQyxLQUFtQixFQUFFLE1BQWM7SUFBbkMscUJBQW1CLEdBQW5CLG1CQUFtQjtJQUU3RCxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLHFCQUFxQjtZQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEMsS0FBSyxpQkFBaUI7WUFDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsS0FBSyxnQkFBZ0I7WUFDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQztZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUdGO0lBR0UsaUJBQW1CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sdUJBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFF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QUMsR0FBRyxLQUFLLEVBQVQsQ0FBUyxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7OztPQUFBO0lBdERIO1FBQUMsaUJBQVUsRUFBRTs7ZUFBQTtJQXVEYixjQUFDO0FBQUQsQ0F0REEsQUFzREMsSUFBQTtBQXREWSxlQUFPLFVBc0RuQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvdWkuc3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb25SZWR1Y2VyLCBBY3Rpb259IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuY29uc3QgSW5pdFVpU3RhdGU6IGFueSA9IHtcbiAgaGVhZGVySXNFeHBhbmRlZDogZmFsc2UsXG4gIHNob3dGaXhlZEhlYWRlcjogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBmaWx0ZXJzQXJlQXZhaWxhYmxlOiBmYWxzZVxufTtcblxuZXhwb3J0IGNvbnN0IHVpU3RhdGU6IEFjdGlvblJlZHVjZXI8YW55PiA9IChzdGF0ZSA9IEluaXRVaVN0YXRlLCBhY3Rpb246IEFjdGlvbikgPT4ge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdVSS5TVEFURS5JTklUSUFMSVpFJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XG4gICAgY2FzZSAnVUkuU1RBVEUuVVBEQVRFJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xuICAgIGNhc2UgJ1VJLlNUQVRFLlJFU0VUJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVpU3RhdGUge1xuICBwdWJsaWMgZGF0YTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8YW55Pikge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuc3RvcmUuc2VsZWN0KCd1aVN0YXRlJyk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdVSS5TVEFURS5SRVNFVCcsIHBheWxvYWQ6IEluaXRVaVN0YXRlIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShwYXlsb2FkOiBPYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ1VJLlNUQVRFLlVQREFURScsIHBheWxvYWQ6IHBheWxvYWQgfSk7XG4gIH1cblxuICBwdWJsaWMgbG9hZGluZyhzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGF0YS50YWtlKDEpLnN1YnNjcmliZShzID0+IHRoaXMudXBkYXRlKHsgbG9hZGluZzogc3RhdGV9KSk7XG4gIH1cblxuICBwdWJsaWMgaGVhZGVySXNFeHBhbmRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1hcChkYXRhID0+IGRhdGEuaGVhZGVySXNFeHBhbmRlZCk7XG4gIH1cblxuICBwdWJsaWMgY2hlY2tSb3V0ZUZvclNlYXJjaEJhcihjdXJyZW50U3RhdGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09ICcvJykge1xuICAgICAgdGhpcy51cGRhdGUoeyBoZWFkZXJJc0V4cGFuZGVkOiBmYWxzZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNob3dTZWFyY2hCYXIgPSBbJ3VzZXIvZm9yZ290LXBhc3N3b3JkJywgJ3VzZXIvcmVnaXN0ZXInLCAndXNlci9sb2dpbicsICd1c2VyL3Jlc2V0LXBhc3N3b3JkJywgJ2FkbWluJywgJ25vdGlmaWNhdGlvbiddXG4gICAgICAuZmlsdGVyKChzdGF0ZSkgPT4gY3VycmVudFN0YXRlLmluZGV4T2Yoc3RhdGUpID4gLTEpLmxlbmd0aCA9PT0gMDtcbiAgICB0aGlzLnVwZGF0ZSh7IGhlYWRlcklzRXhwYW5kZWQ6IHNob3dTZWFyY2hCYXIgfSk7XG4gIH1cblxuICBwdWJsaWMgY2hlY2tGb3JGaWx0ZXJzKGN1cnJlbnRTdGF0ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGVhZGVySXNFeHBhbmRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMudXBkYXRlKHsgZmlsdGVyc0FyZUF2YWlsYWJsZTogZmFsc2UgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzaG93RmlsdGVycyA9IGN1cnJlbnRTdGF0ZS5pbmRleE9mKCdzZWFyY2gnKSA+IC0xO1xuICAgIHRoaXMudXBkYXRlKHsgZmlsdGVyc0FyZUF2YWlsYWJsZTogc2hvd0ZpbHRlcnMgfSk7XG4gIH1cblxuICBwdWJsaWMgc2hvd0ZpeGVkSGVhZGVyKG9mZnNldDogYW55KTogdm9pZCB7XG4gICAgbGV0IGlzZml4ZWQ6IGJvb2xlYW47XG4gICAgdGhpcy5kYXRhLnRha2UoMSkuc3Vic2NyaWJlKHN0YXRlID0+IGlzZml4ZWQgPSBzdGF0ZS5zaG93Rml4ZWRIZWFkZXIpO1xuICAgIGxldCBzZXRGaXhlZDogYm9vbGVhbiA9IChvZmZzZXQgPiAxMTEpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGlmIChzZXRGaXhlZCAhPT0gaXNmaXhlZCkgdGhpcy51cGRhdGUoeyBzaG93Rml4ZWRIZWFkZXI6ICFpc2ZpeGVkIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgc3RhdGUoKTogYW55IHtcbiAgICBsZXQgczogYW55O1xuICAgIHRoaXMuZGF0YS50YWtlKDEpLnN1YnNjcmliZShzdGF0ZSA9PiBzID0gc3RhdGUpO1xuICAgIHJldHVybiBzO1xuICB9XG59XG4iXX0=
