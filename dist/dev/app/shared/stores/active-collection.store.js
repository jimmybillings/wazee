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
exports.activeCollection = function (state, action) {
    if (state === void 0) { state = initialState(); }
    if (state === null)
        state = initialState();
    var updatedAssets;
    switch (action.type) {
        case 'UPDATE_ACTIVE_COLLECTION':
            return Object.assign({}, state, action.payload);
        case 'RESET_ACTIVE_COLLECTION':
            return Object.assign({}, initialState());
        case 'ADD_ASSET_TO_COLLECTION':
            if (state.assets) {
                updatedAssets = JSON.parse(JSON.stringify(state.assets));
                if (!updatedAssets.items)
                    updatedAssets.items = [];
                updatedAssets.items.unshift(action.payload);
            }
            else {
                updatedAssets = { items: [action.payload] };
            }
            return Object.assign({}, state, { assets: updatedAssets, assetsCount: updatedAssets.items.length });
        case 'REMOVE_ASSET_FROM_COLLECTION':
            if (!state.assets || !state.assets.items)
                return state;
            updatedAssets = JSON.parse(JSON.stringify(state.assets));
            updatedAssets.items = updatedAssets.items.filter(function (item) { return item.assetId !== action.payload.assetId; });
            return Object.assign({}, state, { assets: updatedAssets, assetsCount: updatedAssets.items.length });
        default:
            return state;
    }
};
var ActiveCollectionStore = (function () {
    function ActiveCollectionStore(store) {
        this.store = store;
    }
    Object.defineProperty(ActiveCollectionStore.prototype, "data", {
        get: function () {
            return this.store.select('activeCollection');
        },
        enumerable: true,
        configurable: true
    });
    ActiveCollectionStore.prototype.add = function (asset) {
        this.store.dispatch({ type: 'ADD_ASSET_TO_COLLECTION', payload: asset });
    };
    ActiveCollectionStore.prototype.remove = function (asset) {
        this.store.dispatch({ type: 'REMOVE_ASSET_FROM_COLLECTION', payload: asset });
    };
    ActiveCollectionStore.prototype.updateTo = function (collection) {
        this.store.dispatch({ type: 'UPDATE_ACTIVE_COLLECTION', payload: collectionSummary(collection) });
    };
    ActiveCollectionStore.prototype.reset = function () {
        this.store.dispatch({ type: 'RESET_ACTIVE_COLLECTION' });
    };
    ActiveCollectionStore.prototype.updateAssetsTo = function (assets) {
        if (!assets)
            assets = {};
        this.store.dispatch({
            type: 'UPDATE_ACTIVE_COLLECTION', payload: {
                assets: {
                    items: assets.items || [],
                    pagination: {
                        totalCount: assets.totalCount,
                        currentPage: assets.currentPage + 1,
                        pageSize: assets.pageSize,
                        hasNextPage: assets.hasNextPage,
                        hasPreviousPage: assets.hasPreviousPage,
                        numberOfPages: assets.numberOfPages
                    }
                }
            }
        });
    };
    Object.defineProperty(ActiveCollectionStore.prototype, "state", {
        get: function () {
            var s;
            this.data.take(1).subscribe(function (state) { return s = state; });
            return s;
        },
        enumerable: true,
        configurable: true
    });
    ActiveCollectionStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store])
    ], ActiveCollectionStore);
    return ActiveCollectionStore;
}());
exports.ActiveCollectionStore = ActiveCollectionStore;
function initialState() {
    return {
        createdOn: '',
        lastUpdated: '',
        id: null,
        siteName: '',
        name: '',
        owner: 0,
        email: '',
        userRole: '',
        editors: [],
        collectionThumbnail: {},
        assets: {
            items: [],
            pagination: {
                totalCount: 0,
                currentPage: 1,
                pageSize: 100,
                hasNextPage: false,
                hasPreviousPage: false,
                numberOfPages: 0
            },
        },
        tags: [],
        assetsCount: 0
    };
}
function collectionSummary(collection) {
    return {
        createdOn: collection.createdOn || '',
        lastUpdated: collection.lastUpdated || '',
        id: collection.id || null,
        siteName: collection.siteName || '',
        name: collection.name || '',
        owner: collection.owner || 0,
        email: collection.email || '',
        userRole: collection.userRole || '',
        editors: collection.editors || [],
        collectionThumbnail: collection.collectionThumbnail || {},
        tags: collection.tags || [],
        assetsCount: collection.assetsCount || 0
    };
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc3RvcmVzL2FjdGl2ZS1jb2xsZWN0aW9uLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0Msc0JBQTZDLGFBQWEsQ0FBQyxDQUFBO0FBSTlDLHdCQUFnQixHQUF1QixVQUFDLEtBQWtDLEVBQUUsTUFBYztJQUFsRCxxQkFBa0MsR0FBbEMsUUFBb0IsWUFBWSxFQUFFO0lBQ3JGLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUM7UUFBQyxLQUFLLEdBQUcsWUFBWSxFQUFFLENBQUM7SUFFM0MsSUFBSSxhQUFvQixDQUFDO0lBRXpCLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssMEJBQTBCO1lBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWxELEtBQUsseUJBQXlCO1lBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBRTNDLEtBQUsseUJBQXlCO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7b0JBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ25ELGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04s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UyxFQUFFLFVBQVUsQ0FBQyxTQUFTLElBQUksRUFBRTtRQUNyQyxXQUFXLEVBQUUsVUFBVSxDQUFDLFdBQVcsSUFBSSxFQUFFO1FBQ3pDLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRSxJQUFJLElBQUk7UUFDekIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLElBQUksRUFBRTtRQUNuQyxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFO1FBQzNCLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUM7UUFDNUIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUM3QixRQUFRLEVBQUUsVUFBVSxDQUFDLFFBQVEsSUFBSSxFQUFFO1FBQ25DLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTyxJQUFJLEVBQUU7UUFDakMsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLG1CQUFtQixJQUFJLEVBQUU7UUFDekQsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRTtRQUMzQixXQUFXLEVBQUUsVUFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDO0tBQ3pDLENBQUM7QUFDSixDQUFDIiwiZmlsZSI6ImFwcC9zaGFyZWQvc3RvcmVzL2FjdGl2ZS1jb2xsZWN0aW9uLnN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvblJlZHVjZXIsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgQ29sbGVjdGlvbiwgQ29sbGVjdGlvblN0b3JlLCBJdGVtcywgQXNzZXRzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jb2xsZWN0aW9uLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjb25zdCBhY3RpdmVDb2xsZWN0aW9uOiBBY3Rpb25SZWR1Y2VyPGFueT4gPSAoc3RhdGU6IENvbGxlY3Rpb24gPSBpbml0aWFsU3RhdGUoKSwgYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgaWYgKHN0YXRlID09PSBudWxsKSBzdGF0ZSA9IGluaXRpYWxTdGF0ZSgpO1xuXG4gIGxldCB1cGRhdGVkQXNzZXRzOiBJdGVtcztcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnVVBEQVRFX0FDVElWRV9DT0xMRUNUSU9OJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xuXG4gICAgY2FzZSAnUkVTRVRfQUNUSVZFX0NPTExFQ1RJT04nOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZSgpKTtcblxuICAgIGNhc2UgJ0FERF9BU1NFVF9UT19DT0xMRUNUSU9OJzpcbiAgICAgIGlmIChzdGF0ZS5hc3NldHMpIHtcbiAgICAgICAgdXBkYXRlZEFzc2V0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RhdGUuYXNzZXRzKSk7XG4gICAgICAgIGlmICghdXBkYXRlZEFzc2V0cy5pdGVtcykgdXBkYXRlZEFzc2V0cy5pdGVtcyA9IFtdO1xuICAgICAgICB1cGRhdGVkQXNzZXRzLml0ZW1zLnVuc2hpZnQoYWN0aW9uLnBheWxvYWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlZEFzc2V0cyA9IHsgaXRlbXM6IFthY3Rpb24ucGF5bG9hZF0gfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGFzc2V0czogdXBkYXRlZEFzc2V0cywgYXNzZXRzQ291bnQ6IHVwZGF0ZWRBc3NldHMuaXRlbXMubGVuZ3RoIH0pO1xuXG4gICAgY2FzZSAnUkVNT1ZFX0FTU0VUX0ZST01fQ09MTEVDVElPTic6XG4gICAgICBpZiAoIXN0YXRlLmFzc2V0cyB8fCAhc3RhdGUuYXNzZXRzLml0ZW1zKSByZXR1cm4gc3RhdGU7XG5cbiAgICAgIHVwZGF0ZWRBc3NldHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0YXRlLmFzc2V0cykpO1xuICAgICAgdXBkYXRlZEFzc2V0cy5pdGVtcyA9IHVwZGF0ZWRBc3NldHMuaXRlbXMuZmlsdGVyKChpdGVtOiBBc3NldHMpID0+IGl0ZW0uYXNzZXRJZCAhPT0gYWN0aW9uLnBheWxvYWQuYXNzZXRJZCk7XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBhc3NldHM6IHVwZGF0ZWRBc3NldHMsIGFzc2V0c0NvdW50OiB1cGRhdGVkQXNzZXRzLml0ZW1zLmxlbmd0aCB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3RpdmVDb2xsZWN0aW9uU3RvcmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxDb2xsZWN0aW9uU3RvcmU+KSB7IH1cblxuICBwdWJsaWMgZ2V0IGRhdGEoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoJ2FjdGl2ZUNvbGxlY3Rpb24nKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGQoYXNzZXQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnQUREX0FTU0VUX1RPX0NPTExFQ1RJT04nLCBwYXlsb2FkOiBhc3NldCB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoYXNzZXQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnUkVNT1ZFX0FTU0VUX0ZST01fQ09MTEVDVElPTicsIHBheWxvYWQ6IGFzc2V0IH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVRvKGNvbGxlY3Rpb246IENvbGxlY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9BQ1RJVkVfQ09MTEVDVElPTicsIHBheWxvYWQ6IGNvbGxlY3Rpb25TdW1tYXJ5KGNvbGxlY3Rpb24pIH0pO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnUkVTRVRfQUNUSVZFX0NPTExFQ1RJT04nIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUFzc2V0c1RvKGFzc2V0czogYW55KTogdm9pZCB7XG4gICAgaWYgKCFhc3NldHMpIGFzc2V0cyA9IHt9O1xuXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnVVBEQVRFX0FDVElWRV9DT0xMRUNUSU9OJywgcGF5bG9hZDoge1xuICAgICAgICBhc3NldHM6IHtcbiAgICAgICAgICBpdGVtczogYXNzZXRzLml0ZW1zIHx8IFtdLFxuICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIHRvdGFsQ291bnQ6IGFzc2V0cy50b3RhbENvdW50LFxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IGFzc2V0cy5jdXJyZW50UGFnZSArIDEsXG4gICAgICAgICAgICBwYWdlU2l6ZTogYXNzZXRzLnBhZ2VTaXplLFxuICAgICAgICAgICAgaGFzTmV4dFBhZ2U6IGFzc2V0cy5oYXNOZXh0UGFnZSxcbiAgICAgICAgICAgIGhhc1ByZXZpb3VzUGFnZTogYXNzZXRzLmhhc1ByZXZpb3VzUGFnZSxcbiAgICAgICAgICAgIG51bWJlck9mUGFnZXM6IGFzc2V0cy5udW1iZXJPZlBhZ2VzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0YXRlKCk6IGFueSB7XG4gICAgbGV0IHM6IGFueTtcbiAgICB0aGlzLmRhdGEudGFrZSgxKS5zdWJzY3JpYmUoc3RhdGUgPT4gcyA9IHN0YXRlKTtcbiAgICByZXR1cm4gcztcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0aWFsU3RhdGUoKTogQ29sbGVjdGlvbiB7XG4gIHJldHVybiB7XG4gICAgY3JlYXRlZE9uOiAnJyxcbiAgICBsYXN0VXBkYXRlZDogJycsXG4gICAgaWQ6IG51bGwsXG4gICAgc2l0ZU5hbWU6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIG93bmVyOiAwLFxuICAgIGVtYWlsOiAnJyxcbiAgICB1c2VyUm9sZTogJycsXG4gICAgZWRpdG9yczogW10sXG4gICAgY29sbGVjdGlvblRodW1ibmFpbDoge30gYXMgeyBuYW1lOiBzdHJpbmcsIHVybHM6IHsgaHR0cHM6IHN0cmluZyB9IH0sXG4gICAgYXNzZXRzOiB7XG4gICAgICBpdGVtczogW10sXG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIHRvdGFsQ291bnQ6IDAsXG4gICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICBwYWdlU2l6ZTogMTAwLFxuICAgICAgICBoYXNOZXh0UGFnZTogZmFsc2UsXG4gICAgICAgIGhhc1ByZXZpb3VzUGFnZTogZmFsc2UsXG4gICAgICAgIG51bWJlck9mUGFnZXM6IDBcbiAgICAgIH0sXG4gICAgfSxcbiAgICB0YWdzOiBbXSxcbiAgICBhc3NldHNDb3VudDogMFxuICB9O1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0aW9uU3VtbWFyeShjb2xsZWN0aW9uOiBhbnkpOiBDb2xsZWN0aW9uIHtcbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVkT246IGNvbGxlY3Rpb24uY3JlYXRlZE9uIHx8ICcnLFxuICAgIGxhc3RVcGRhdGVkOiBjb2xsZWN0aW9uLmxhc3RVcGRhdGVkIHx8ICcnLFxuICAgIGlkOiBjb2xsZWN0aW9uLmlkIHx8IG51bGwsXG4gICAgc2l0ZU5hbWU6IGNvbGxlY3Rpb24uc2l0ZU5hbWUgfHwgJycsXG4gICAgbmFtZTogY29sbGVjdGlvbi5uYW1lIHx8ICcnLFxuICAgIG93bmVyOiBjb2xsZWN0aW9uLm93bmVyIHx8IDAsXG4gICAgZW1haWw6IGNvbGxlY3Rpb24uZW1haWwgfHwgJycsXG4gICAgdXNlclJvbGU6IGNvbGxlY3Rpb24udXNlclJvbGUgfHwgJycsXG4gICAgZWRpdG9yczogY29sbGVjdGlvbi5lZGl0b3JzIHx8IFtdLFxuICAgIGNvbGxlY3Rpb25UaHVtYm5haWw6IGNvbGxlY3Rpb24uY29sbGVjdGlvblRodW1ibmFpbCB8fCB7fSxcbiAgICB0YWdzOiBjb2xsZWN0aW9uLnRhZ3MgfHwgW10sXG4gICAgYXNzZXRzQ291bnQ6IGNvbGxlY3Rpb24uYXNzZXRzQ291bnQgfHwgMFxuICB9O1xufVxuIl19
