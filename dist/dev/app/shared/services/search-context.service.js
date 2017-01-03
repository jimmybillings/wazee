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
var store_1 = require('@ngrx/store');
var initSearchContext = {
    q: null,
    i: 1,
    n: 100,
    sortId: 0
};
exports.searchContext = function (state, action) {
    if (state === void 0) { state = initSearchContext; }
    switch (action.type) {
        case 'SEARCHCONTEXT.CREATE':
            return Object.assign({}, action.payload);
        case 'SEARCHCONTEXT.UDPATE':
            return Object.assign({}, state, action.payload);
        case 'SEARCHCONTEXT.RESET':
            return Object.assign({}, initSearchContext);
        case 'SEARCHCONTEXT.REMOVE':
            return Object.assign({}, Object.keys(state).reduce(function (result, key) {
                if (key !== action.payload)
                    result[key] = state[key];
                return result;
            }, {}));
        default:
            return state;
    }
};
var SearchContext = (function () {
    function SearchContext(router, store) {
        this.router = router;
        this.store = store;
        this.data = this.store.select('searchContext');
    }
    SearchContext.prototype.new = function (params) {
        this.create = params;
        this.go();
    };
    Object.defineProperty(SearchContext.prototype, "state", {
        get: function () {
            var s;
            this.data.take(1).subscribe(function (state) { return s = state; });
            return s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchContext.prototype, "remove", {
        set: function (param) {
            this.store.dispatch({ type: 'SEARCHCONTEXT.REMOVE', payload: param });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchContext.prototype, "update", {
        set: function (params) {
            this.store.dispatch({ type: 'SEARCHCONTEXT.UDPATE', payload: this.decodeParams(params) });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchContext.prototype, "create", {
        set: function (params) {
            this.store.dispatch({ type: 'SEARCHCONTEXT.CREATE', payload: this.decodeParams(params) });
        },
        enumerable: true,
        configurable: true
    });
    SearchContext.prototype.go = function () {
        this.router.navigate(['/search', this.state]);
    };
    SearchContext.prototype.decodeParams = function (params) {
        var decodedParams = {};
        var d = JSON.parse(JSON.stringify(params));
        for (var param in d) {
            if (d[param] === '' || params[param] === 'true') {
                delete d[param];
                return d;
            }
            decodedParams[param] = decodeURIComponent(params[param]);
        }
        return decodedParams;
    };
    SearchContext = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, store_1.Store])
    ], SearchContext);
    return SearchContext;
}());
exports.SearchContext = SearchContext;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvc2VhcmNoLWNvbnRleHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHVCQUFzQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3hDLHNCQUE0QyxhQUFhLENBQUMsQ0FBQTtBQUcxRCxJQUFNLGlCQUFpQixHQUFRO0lBQzdCLENBQUMsRUFBRSxJQUFJO0lBQ1AsQ0FBQyxFQUFFLENBQUM7SUFDSixDQUFDLEVBQUUsR0FBRztJQUNOLE1BQU0sRUFBRSxDQUFDO0NBQ1YsQ0FBQztBQUVXLHFCQUFhLEdBQXVCLFVBQUMsS0FBOEIsRUFBRSxNQUFjO0lBQTlDLHFCQUE4QixHQUE5Qix5QkFBOEI7SUFDOUUsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxzQkFBc0I7WUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxLQUFLLHNCQUFzQjtZQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxLQUFLLHFCQUFxQjtZQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUM5QyxLQUFLLHNCQUFzQjtZQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFXLEVBQUUsR0FBUTtnQkFDdkUsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFH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YXJlZC9zZXJ2aWNlcy9zZWFyY2gtY29udGV4dC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvblJlZHVjZXIsIEFjdGlvbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5jb25zdCBpbml0U2VhcmNoQ29udGV4dDogYW55ID0ge1xuICBxOiBudWxsLFxuICBpOiAxLFxuICBuOiAxMDAsXG4gIHNvcnRJZDogMFxufTtcblxuZXhwb3J0IGNvbnN0IHNlYXJjaENvbnRleHQ6IEFjdGlvblJlZHVjZXI8YW55PiA9IChzdGF0ZTogYW55ID0gaW5pdFNlYXJjaENvbnRleHQsIGFjdGlvbjogQWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRUFSQ0hDT05URVhULkNSRUFURSc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLnBheWxvYWQpO1xuICAgIGNhc2UgJ1NFQVJDSENPTlRFWFQuVURQQVRFJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xuICAgIGNhc2UgJ1NFQVJDSENPTlRFWFQuUkVTRVQnOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRTZWFyY2hDb250ZXh0KTtcbiAgICBjYXNlICdTRUFSQ0hDT05URVhULlJFTU9WRSc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgT2JqZWN0LmtleXMoc3RhdGUpLnJlZHVjZSgocmVzdWx0OiBhbnksIGtleTogYW55KSA9PiB7XG4gICAgICAgIGlmIChrZXkgIT09IGFjdGlvbi5wYXlsb2FkKSByZXN1bHRba2V5XSA9IHN0YXRlW2tleV07XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LCB7fSkpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb250ZXh0IHtcbiAgcHVibGljIGRhdGE6IE9ic2VydmFibGU8YW55PjtcbiAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgc3RvcmU6IFN0b3JlPGFueT4pIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnN0b3JlLnNlbGVjdCgnc2VhcmNoQ29udGV4dCcpO1xuICB9XG5cbiAgcHVibGljIG5ldyhwYXJhbXM6IE9iamVjdCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlID0gcGFyYW1zO1xuICAgIHRoaXMuZ28oKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3RhdGUoKTogYW55IHtcbiAgICBsZXQgczogYW55O1xuICAgIHRoaXMuZGF0YS50YWtlKDEpLnN1YnNjcmliZShzdGF0ZSA9PiBzID0gc3RhdGUpO1xuICAgIHJldHVybiBzO1xuICB9XG5cbiAgcHVibGljIHNldCByZW1vdmUocGFyYW06IGFueSkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnU0VBUkNIQ09OVEVYVC5SRU1PVkUnLCBwYXlsb2FkOiBwYXJhbSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgdXBkYXRlKHBhcmFtczogYW55KSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdTRUFSQ0hDT05URVhULlVEUEFURScsIHBheWxvYWQ6IHRoaXMuZGVjb2RlUGFyYW1zKHBhcmFtcykgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0IGNyZWF0ZShwYXJhbXM6IGFueSkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnU0VBUkNIQ09OVEVYVC5DUkVBVEUnLCBwYXlsb2FkOiB0aGlzLmRlY29kZVBhcmFtcyhwYXJhbXMpIH0pO1xuICB9XG5cbiAgcHVibGljIGdvKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3NlYXJjaCcsIHRoaXMuc3RhdGVdKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVjb2RlUGFyYW1zKHBhcmFtczogYW55KSB7XG4gICAgbGV0IGRlY29kZWRQYXJhbXM6IGFueSA9IHt9O1xuICAgIGxldCBkOiBhbnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgIGZvciAobGV0IHBhcmFtIGluIGQpIHtcbiAgICAgIGlmIChkW3BhcmFtXSA9PT0gJycgfHwgcGFyYW1zW3BhcmFtXSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGRlbGV0ZSBkW3BhcmFtXTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgICB9XG4gICAgICBkZWNvZGVkUGFyYW1zW3BhcmFtXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJhbXNbcGFyYW1dKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlY29kZWRQYXJhbXM7XG4gIH1cbn1cbiJdfQ==
