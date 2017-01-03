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
exports.collections = function (state, action) {
    if (state === void 0) { state = initialState(); }
    if (state === null)
        state = initialState();
    var updatedItems;
    switch (action.type) {
        case 'REPLACE_COLLECTIONS':
            return Object.assign({}, action.payload ? action.payload : initialState());
        case 'ADD_COLLECTION':
            updatedItems = state.items ? JSON.parse(JSON.stringify(state.items)) : [];
            if (action.payload)
                updatedItems.push(action.payload);
            return Object.assign({}, state, { items: updatedItems });
        case 'UPDATE_COLLECTION':
            if (!state.items || !action.payload)
                return state;
            updatedItems = state.items.map(function (collection) {
                return collection.id === action.payload.id ? action.payload : collection;
            });
            return Object.assign({}, state, { items: updatedItems });
        case 'DELETE_COLLECTION':
            if (!state.items)
                return state;
            updatedItems = state.items.filter(function (collection) { return collection.id !== action.payload; });
            return Object.assign({}, state, { items: updatedItems });
        case 'DELETE_ALL_COLLECTIONS':
            return Object.assign({}, initialState());
        default:
            return state;
    }
};
var CollectionsStore = (function () {
    function CollectionsStore(store) {
        this.store = store;
    }
    Object.defineProperty(CollectionsStore.prototype, "data", {
        get: function () {
            return this.store.select('collections');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionsStore.prototype, "state", {
        get: function () {
            var s;
            this.data.take(1).subscribe(function (state) { return s = state; });
            return s;
        },
        enumerable: true,
        configurable: true
    });
    CollectionsStore.prototype.deleteAllCollections = function () {
        this.store.dispatch({ type: 'DELETE_ALL_COLLECTIONS' });
    };
    CollectionsStore.prototype.deleteCollectionWith = function (collectionId) {
        this.store.dispatch({ type: 'DELETE_COLLECTION', payload: collectionId });
    };
    CollectionsStore.prototype.add = function (newCollection) {
        this.store.dispatch({ type: 'ADD_COLLECTION', payload: newCollection });
    };
    CollectionsStore.prototype.update = function (collection) {
        this.store.dispatch({ type: 'UPDATE_COLLECTION', payload: collection });
    };
    CollectionsStore.prototype.replaceAllCollectionsWith = function (replacements) {
        replacements.items = replacements.items === undefined ? [] : replacements.items;
        this.store.dispatch({
            type: 'REPLACE_COLLECTIONS', payload: {
                items: replacements.items,
                pagination: {
                    totalCount: replacements.totalCount,
                    currentPage: replacements.currentPage + 1,
                    hasNextPage: replacements.hasNextPage,
                    hasPreviousPage: replacements.hasPreviousPage,
                    numberOfPages: replacements.numberOfPages,
                    pageSize: replacements.pageSize
                }
            }
        });
    };
    CollectionsStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store])
    ], CollectionsStore);
    return CollectionsStore;
}());
exports.CollectionsStore = CollectionsStore;
function initialState() {
    return {
        items: [],
        pagination: {
            totalCount: 0,
            currentPage: 1,
            pageSize: 100,
            hasNextPage: false,
            hasPreviousPage: false,
            numberOfPages: 0
        }
    };
}
;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc3RvcmVzL2NvbGxlY3Rpb25zLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0Msc0JBQTZDLGFBQWEsQ0FBQyxDQUFBO0FBSTlDLG1CQUFXLEdBQXVCLFVBQUMsS0FBbUMsRUFBRSxNQUFjO0lBQW5ELHFCQUFtQyxHQUFuQyxRQUFxQixZQUFZLEVBQUU7SUFDakYsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQztRQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsQ0FBQztJQUUzQyxJQUFJLFlBQTBCLENBQUM7SUFFL0IsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxxQkFBcUI7WUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBRTdFLEtBQUssZ0JBQWdCO1lBQ25CLFlBQVksR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDMUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV0RCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7UUFFM0QsS0FBSyxtQkFBbUI7WUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FB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RUFBRSxZQUFZLENBQUMsS0FBSztnQkFDekIsVUFBVSxFQUFFO29CQUNWLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVTtvQkFDbkMsV0FBVyxFQUFFLFlBQVksQ0FBQyxXQUFXLEdBQUcsQ0FBQztvQkFDekMsV0FBVyxFQUFFLFlBQVksQ0FBQyxXQUFXO29CQUNyQyxlQUFlLEVBQUUsWUFBWSxDQUFDLGVBQWU7b0JBQzdDLGFBQWEsRUFBRSxZQUFZLENBQUMsYUFBYTtvQkFDekMsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO2lCQUNoQzthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTdDSDtRQUFDLGlCQUFVLEVBQUU7O3dCQUFBO0lBOENiLHVCQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtBQTdDWSx3QkFBZ0IsbUJBNkM1QixDQUFBO0FBRUQ7SUFDRSxNQUFNLENBQUM7UUFDTCxLQUFLLEVBQUUsRUFBRTtRQUNULFVBQVUsRUFBRTtZQUNWLFVBQVUsRUFBRSxDQUFDO1lBQ2IsV0FBVyxFQUFFLENBQUM7WUFDZCxRQUFRLEVBQUUsR0FBRztZQUNiLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLGFBQWEsRUFBRSxDQUFDO1NBQ2pCO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFBQSxDQUFDIiwiZmlsZSI6ImFwcC9zaGFyZWQvc3RvcmVzL2NvbGxlY3Rpb25zLnN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvblJlZHVjZXIsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgQ29sbGVjdGlvbiwgQ29sbGVjdGlvbnMsIENvbGxlY3Rpb25TdG9yZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvY29sbGVjdGlvbi5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgY29sbGVjdGlvbnM6IEFjdGlvblJlZHVjZXI8YW55PiA9IChzdGF0ZTogQ29sbGVjdGlvbnMgPSBpbml0aWFsU3RhdGUoKSwgYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgaWYgKHN0YXRlID09PSBudWxsKSBzdGF0ZSA9IGluaXRpYWxTdGF0ZSgpO1xuXG4gIGxldCB1cGRhdGVkSXRlbXM6IENvbGxlY3Rpb25bXTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnUkVQTEFDRV9DT0xMRUNUSU9OUyc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLnBheWxvYWQgPyBhY3Rpb24ucGF5bG9hZCA6IGluaXRpYWxTdGF0ZSgpKTtcblxuICAgIGNhc2UgJ0FERF9DT0xMRUNUSU9OJzpcbiAgICAgIHVwZGF0ZWRJdGVtcyA9IHN0YXRlLml0ZW1zID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdGF0ZS5pdGVtcykpIDogW107XG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHVwZGF0ZWRJdGVtcy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGl0ZW1zOiB1cGRhdGVkSXRlbXMgfSk7XG5cbiAgICBjYXNlICdVUERBVEVfQ09MTEVDVElPTic6XG4gICAgICBpZiAoIXN0YXRlLml0ZW1zIHx8ICFhY3Rpb24ucGF5bG9hZCkgcmV0dXJuIHN0YXRlO1xuXG4gICAgICB1cGRhdGVkSXRlbXMgPSBzdGF0ZS5pdGVtcy5tYXAoKGNvbGxlY3Rpb246IENvbGxlY3Rpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkID8gYWN0aW9uLnBheWxvYWQgOiBjb2xsZWN0aW9uO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBpdGVtczogdXBkYXRlZEl0ZW1zIH0pO1xuXG4gICAgY2FzZSAnREVMRVRFX0NPTExFQ1RJT04nOlxuICAgICAgaWYgKCFzdGF0ZS5pdGVtcykgcmV0dXJuIHN0YXRlO1xuXG4gICAgICB1cGRhdGVkSXRlbXMgPSBzdGF0ZS5pdGVtcy5maWx0ZXIoKGNvbGxlY3Rpb246IENvbGxlY3Rpb24pID0+IGNvbGxlY3Rpb24uaWQgIT09IGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBpdGVtczogdXBkYXRlZEl0ZW1zIH0pO1xuXG4gICAgY2FzZSAnREVMRVRFX0FMTF9DT0xMRUNUSU9OUyc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlKCkpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25zU3RvcmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxDb2xsZWN0aW9uU3RvcmU+KSB7IH1cblxuICBwdWJsaWMgZ2V0IGRhdGEoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoJ2NvbGxlY3Rpb25zJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0YXRlKCk6IGFueSB7XG4gICAgbGV0IHM6IGFueTtcbiAgICB0aGlzLmRhdGEudGFrZSgxKS5zdWJzY3JpYmUoc3RhdGUgPT4gcyA9IHN0YXRlKTtcbiAgICByZXR1cm4gcztcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGVBbGxDb2xsZWN0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ0RFTEVURV9BTExfQ09MTEVDVElPTlMnIH0pO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZUNvbGxlY3Rpb25XaXRoKGNvbGxlY3Rpb25JZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdERUxFVEVfQ09MTEVDVElPTicsIHBheWxvYWQ6IGNvbGxlY3Rpb25JZCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGQobmV3Q29sbGVjdGlvbjogQ29sbGVjdGlvbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnQUREX0NPTExFQ1RJT04nLCBwYXlsb2FkOiBuZXdDb2xsZWN0aW9uIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShjb2xsZWN0aW9uOiBDb2xsZWN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfQ09MTEVDVElPTicsIHBheWxvYWQ6IGNvbGxlY3Rpb24gfSk7XG4gIH1cblxuICBwdWJsaWMgcmVwbGFjZUFsbENvbGxlY3Rpb25zV2l0aChyZXBsYWNlbWVudHM6IGFueSk6IHZvaWQge1xuICAgIHJlcGxhY2VtZW50cy5pdGVtcyA9IHJlcGxhY2VtZW50cy5pdGVtcyA9PT0gdW5kZWZpbmVkID8gW10gOiByZXBsYWNlbWVudHMuaXRlbXM7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnUkVQTEFDRV9DT0xMRUNUSU9OUycsIHBheWxvYWQ6IHtcbiAgICAgICAgaXRlbXM6IHJlcGxhY2VtZW50cy5pdGVtcyxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIHRvdGFsQ291bnQ6IHJlcGxhY2VtZW50cy50b3RhbENvdW50LFxuICAgICAgICAgIGN1cnJlbnRQYWdlOiByZXBsYWNlbWVudHMuY3VycmVudFBhZ2UgKyAxLFxuICAgICAgICAgIGhhc05leHRQYWdlOiByZXBsYWNlbWVudHMuaGFzTmV4dFBhZ2UsXG4gICAgICAgICAgaGFzUHJldmlvdXNQYWdlOiByZXBsYWNlbWVudHMuaGFzUHJldmlvdXNQYWdlLFxuICAgICAgICAgIG51bWJlck9mUGFnZXM6IHJlcGxhY2VtZW50cy5udW1iZXJPZlBhZ2VzLFxuICAgICAgICAgIHBhZ2VTaXplOiByZXBsYWNlbWVudHMucGFnZVNpemVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxTdGF0ZSgpOiBDb2xsZWN0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgaXRlbXM6IFtdLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIHRvdGFsQ291bnQ6IDAsXG4gICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgIHBhZ2VTaXplOiAxMDAsXG4gICAgICBoYXNOZXh0UGFnZTogZmFsc2UsXG4gICAgICBoYXNQcmV2aW91c1BhZ2U6IGZhbHNlLFxuICAgICAgbnVtYmVyT2ZQYWdlczogMFxuICAgIH1cbiAgfTtcbn07XG4iXX0=
