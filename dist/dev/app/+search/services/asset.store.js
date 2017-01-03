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
var initAssets = {
    items: [],
    pagination: {
        hasNextPage: false,
        hasPreviousPage: false,
        numberOfPages: 0,
        pageSize: 100,
        totalCount: 0,
        currentPage: 1
    }
};
exports.assets = function (state, action) {
    if (state === void 0) { state = initAssets; }
    switch (action.type) {
        case 'SEARCH':
            return Object.assign({}, action.payload);
        case 'SEARCH.RESET':
            return Object.assign({}, initAssets);
        case 'SEARCH.CLEAR_ASSETS':
            return Object.assign({}, state, state.items = []);
        default:
            return state;
    }
};
var AssetStore = (function () {
    function AssetStore(store) {
        this.store = store;
    }
    Object.defineProperty(AssetStore.prototype, "data", {
        get: function () {
            return this.store.select('assets');
        },
        enumerable: true,
        configurable: true
    });
    AssetStore.prototype.storeAssets = function (payload) {
        this.store.dispatch({
            type: 'SEARCH', payload: {
                'items': payload.items,
                'pagination': {
                    'totalCount': payload.totalCount,
                    'currentPage': payload.currentPage + 1,
                    'hasNextPage': payload.hasNextPage,
                    'hasPreviousPage': payload.hasPreviousPage,
                    'numberOfPages': payload.numberOfPages,
                    'pageSize': payload.pageSize
                }
            }
        });
    };
    AssetStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store])
    ], AssetStore);
    return AssetStore;
}());
exports.AssetStore = AssetStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc2VhcmNoL3NlcnZpY2VzL2Fzc2V0LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0Msc0JBQTZDLGFBQWEsQ0FBQyxDQUFBO0FBRzNELElBQU0sVUFBVSxHQUFRO0lBQ3RCLEtBQUssRUFBRSxFQUFFO0lBQ1QsVUFBVSxFQUFFO1FBQ1YsV0FBVyxFQUFFLEtBQUs7UUFDbEIsZUFBZSxFQUFFLEtBQUs7UUFDdEIsYUFBYSxFQUFFLENBQUM7UUFDaEIsUUFBUSxFQUFFLEdBQUc7UUFDYixVQUFVLEVBQUUsQ0FBQztRQUNiLFdBQVcsRUFBRSxDQUFDO0tBQ2Y7Q0FDRixDQUFDO0FBRVcsY0FBTSxHQUF1QixVQUFDLEtBQXVCLEVBQUUsTUFBYztJQUF2QyxxQkFBdUIsR0FBdkIsa0JBQXVCO0lBRWhFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssUUFBUTtZQUNYLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsS0FBSyxjQUFjO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2QyxLQUFLLHFCQUFxQjtZQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEQ7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFHRjtJQUVFLG9CQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQUksQ0FBQztJQUUxQyxzQkFBVyw0QkFBSTthQUFmO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBRU0sZ0NBQVcsR0FBbEIsVUFBbUIsT0FBWTtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNsQixJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRTtnQkFDdkIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLO2dCQUN0QixZQUFZLEVBQUU7b0JBQ1osWUFBWSxFQUFFLE9BQU8sQ0FBQyxVQUFVO29CQUNoQyxhQUFhLEVBQUUsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDO29CQUN0QyxhQUFhLEVBQUUsT0FBTyxDQUFDLFdBQVc7b0JBQ2xDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxlQUFlO29CQUMxQyxlQUFlLEVBQUUsT0FBTyxDQUFDLGFBQWE7b0JBQ3RDLFVBQVUsRUFBRSxPQUFPLENBQUMsUUFBUTtpQkFDN0I7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUF2Qkg7UUFBQyxpQkFBVSxFQUFFOztrQkFBQTtJQXdCYixpQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2Qlksa0JBQVUsYUF1QnRCLENBQUEiLCJmaWxlIjoiYXBwLytzZWFyY2gvc2VydmljZXMvYXNzZXQuc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uUmVkdWNlciwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5jb25zdCBpbml0QXNzZXRzOiBhbnkgPSB7XG4gIGl0ZW1zOiBbXSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGhhc05leHRQYWdlOiBmYWxzZSxcbiAgICBoYXNQcmV2aW91c1BhZ2U6IGZhbHNlLFxuICAgIG51bWJlck9mUGFnZXM6IDAsXG4gICAgcGFnZVNpemU6IDEwMCxcbiAgICB0b3RhbENvdW50OiAwLFxuICAgIGN1cnJlbnRQYWdlOiAxXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhc3NldHM6IEFjdGlvblJlZHVjZXI8YW55PiA9IChzdGF0ZTogYW55ID0gaW5pdEFzc2V0cywgYWN0aW9uOiBBY3Rpb24pID0+IHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0VBUkNIJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgY2FzZSAnU0VBUkNILlJFU0VUJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0QXNzZXRzKTtcbiAgICBjYXNlICdTRUFSQ0guQ0xFQVJfQVNTRVRTJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgc3RhdGUuaXRlbXMgPSBbXSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFzc2V0U3RvcmUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHsgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdCgnYXNzZXRzJyk7XG4gIH1cblxuICBwdWJsaWMgc3RvcmVBc3NldHMocGF5bG9hZDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VBUkNIJywgcGF5bG9hZDoge1xuICAgICAgICAnaXRlbXMnOiBwYXlsb2FkLml0ZW1zLFxuICAgICAgICAncGFnaW5hdGlvbic6IHtcbiAgICAgICAgICAndG90YWxDb3VudCc6IHBheWxvYWQudG90YWxDb3VudCxcbiAgICAgICAgICAnY3VycmVudFBhZ2UnOiBwYXlsb2FkLmN1cnJlbnRQYWdlICsgMSxcbiAgICAgICAgICAnaGFzTmV4dFBhZ2UnOiBwYXlsb2FkLmhhc05leHRQYWdlLFxuICAgICAgICAgICdoYXNQcmV2aW91c1BhZ2UnOiBwYXlsb2FkLmhhc1ByZXZpb3VzUGFnZSxcbiAgICAgICAgICAnbnVtYmVyT2ZQYWdlcyc6IHBheWxvYWQubnVtYmVyT2ZQYWdlcyxcbiAgICAgICAgICAncGFnZVNpemUnOiBwYXlsb2FkLnBhZ2VTaXplXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSJdfQ==
