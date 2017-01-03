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
var collectionOptionsState = {
    currentFilter: { 'id': 0, 'name': 'COLLECTION.INDEX.FILTER_DD_MENU.ALL', 'value': 'all', 'access': { 'accessLevel': 'all' } },
    currentSort: { 'id': 0, 'name': 'COLLECTION.INDEX.SORT_DD_MENU.DATE_MOD_NEWEST', 'value': 'modNewest', 'sort': { 's': 'lastUpdated', 'd': true } },
    currentSearchQuery: { 'q': '' }
};
exports.collectionOptions = function (state, action) {
    if (state === void 0) { state = collectionOptionsState; }
    switch (action.type) {
        case 'RESET_OPTIONS':
            return Object.assign({}, action.payload);
        case 'UPDATE_OPTIONS':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
var CollectionContextService = (function () {
    function CollectionContextService(store) {
        this.store = store;
        this.data = store.select('collectionOptions');
    }
    CollectionContextService.prototype.updateCollectionOptions = function (options) {
        this.store.dispatch({ type: 'UPDATE_OPTIONS', payload: options });
    };
    CollectionContextService.prototype.resetCollectionOptions = function () {
        this.store.dispatch({ type: 'RESET_OPTIONS', payload: collectionOptionsState });
    };
    CollectionContextService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store])
    ], CollectionContextService);
    return CollectionContextService;
}());
exports.CollectionContextService = CollectionContextService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvY29sbGVjdGlvbi1jb250ZXh0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxzQkFBNkMsYUFBYSxDQUFDLENBQUE7QUFHM0QsSUFBTSxzQkFBc0IsR0FBUTtJQUNsQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxxQ0FBcUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsRUFBRTtJQUM3SCxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSwrQ0FBK0MsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFDO0lBQ2pKLGtCQUFrQixFQUFFLEVBQUMsR0FBRyxFQUFFLEVBQUUsRUFBQztDQUM5QixDQUFDO0FBRVcseUJBQWlCLEdBQXVCLFVBQUMsS0FBOEIsRUFBRSxNQUFjO0lBQTlDLHFCQUE4QixHQUE5Qiw4QkFBOEI7SUFDbEYsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxlQUFlO1lBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsS0FBSyxnQkFBZ0I7WUFDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQ7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFHRjtJQUdFLGtDQUFtQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSwwREFBdUIsR0FBOUIsVUFBK0IsT0FBWTtRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0seURBQXNCLEdBQTdCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQWRIO1FBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7SUFlYiwrQkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksZ0NBQXdCLDJCQWNwQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvY29sbGVjdGlvbi1jb250ZXh0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uUmVkdWNlciwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICBmcm9tICdyeGpzL1J4JztcblxuY29uc3QgY29sbGVjdGlvbk9wdGlvbnNTdGF0ZTogYW55ID0ge1xuICBjdXJyZW50RmlsdGVyOiB7ICdpZCc6IDAsICduYW1lJzogJ0NPTExFQ1RJT04uSU5ERVguRklMVEVSX0REX01FTlUuQUxMJywgJ3ZhbHVlJzogJ2FsbCcsICdhY2Nlc3MnOiB7ICdhY2Nlc3NMZXZlbCc6ICdhbGwnIH0gfSxcbiAgY3VycmVudFNvcnQ6IHsgJ2lkJzogMCwgJ25hbWUnOiAnQ09MTEVDVElPTi5JTkRFWC5TT1JUX0REX01FTlUuREFURV9NT0RfTkVXRVNUJywgJ3ZhbHVlJzogJ21vZE5ld2VzdCcsICdzb3J0JzogeyAncyc6ICdsYXN0VXBkYXRlZCcsICdkJzogdHJ1ZSB9fSxcbiAgY3VycmVudFNlYXJjaFF1ZXJ5OiB7J3EnOiAnJ31cbn07XG5cbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uT3B0aW9uczogQWN0aW9uUmVkdWNlcjxhbnk+ID0gKHN0YXRlID0gY29sbGVjdGlvbk9wdGlvbnNTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JFU0VUX09QVElPTlMnOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGFjdGlvbi5wYXlsb2FkKTtcbiAgICBjYXNlICdVUERBVEVfT1BUSU9OUyc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbkNvbnRleHRTZXJ2aWNlIHtcbiAgcHVibGljIGRhdGE6IE9ic2VydmFibGU8YW55PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPGFueT4pIHtcbiAgICB0aGlzLmRhdGEgPSBzdG9yZS5zZWxlY3QoJ2NvbGxlY3Rpb25PcHRpb25zJyk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlQ29sbGVjdGlvbk9wdGlvbnMob3B0aW9uczogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfT1BUSU9OUycsIHBheWxvYWQ6IG9wdGlvbnMgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXRDb2xsZWN0aW9uT3B0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ1JFU0VUX09QVElPTlMnLCBwYXlsb2FkOiBjb2xsZWN0aW9uT3B0aW9uc1N0YXRlIH0pO1xuICB9XG59XG4iXX0=
