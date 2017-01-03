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
var collections_service_1 = require('../../shared/services/collections.service');
var active_collection_service_1 = require('../../shared/services/active-collection.service');
var router_1 = require('@angular/router');
var current_user_model_1 = require('../../shared/services/current-user.model');
var ui_config_1 = require('../../shared/services/ui.config');
var collection_context_service_1 = require('../../shared/services/collection-context.service');
var ui_state_1 = require('../../shared/services/ui.state');
var CollectionsComponent = (function () {
    function CollectionsComponent(router, collections, collectionContext, activeCollection, currentUser, uiConfig, uiState) {
        this.router = router;
        this.collections = collections;
        this.collectionContext = collectionContext;
        this.activeCollection = activeCollection;
        this.currentUser = currentUser;
        this.uiConfig = uiConfig;
        this.uiState = uiState;
        this.collectionSearchIsShowing = false;
        this.collectionFilterIsShowing = false;
        this.collectionSortIsShowing = false;
        this.filterOptions = [];
        this.assetsForLink = [];
        this.sortOptions = [];
        this.filterOptions = [
            {
                'first': { 'id': 0, 'name': 'COLLECTION.INDEX.FILTER_DD_MENU.ALL', 'value': 'all', 'access': { 'accessLevel': 'all' } },
                'second': { 'id': 1, 'name': 'COLLECTION.INDEX.FILTER_DD_MENU.OWNER', 'value': 'owner', 'access': { 'accessLevel': 'owner' } }
            },
            {
                'first': { 'id': 2, 'name': 'COLLECTION.INDEX.FILTER_DD_MENU.EDITOR', 'value': 'editor', 'access': { 'accessLevel': 'editor' } },
                'second': { 'id': 3, 'name': 'COLLECTION.INDEX.FILTER_DD_MENU.VIEWER', 'value': 'viewer', 'access': { 'accessLevel': 'viewer' } }
            },
            {
                'first': { 'id': 4, 'name': 'COLLECTION.INDEX.FILTER_DD_MENU.RESEARCHER', 'value': 'researcher', 'access': { 'accessLevel': 'researcher' } }
            }
        ];
        this.sortOptions = [
            {
                'first': { 'id': 0, 'name': 'COLLECTION.INDEX.SORT_DD_MENU.DATE_MOD_NEWEST', 'value': 'modNewest', 'sort': { 's': 'lastUpdated', 'd': true } },
                'second': { 'id': 1, 'name': 'COLLECTION.INDEX.SORT_DD_MENU.DATE_MOD_OLDEST', 'value': 'modOldest', 'sort': { 's': 'lastUpdated', 'd': false } }
            },
            {
                'first': { 'id': 2, 'name': 'COLLECTION.INDEX.SORT_DD_MENU.DATE_CREATE_NEWEST', 'value': 'createNewest', 'sort': { 's': 'createdOn', 'd': true } },
                'second': { 'id': 3, 'name': 'COLLECTION.INDEX.SORT_DD_MENU.DATE_CREATE_OLDEST', 'value': 'createOldest', 'sort': { 's': 'createdOn', 'd': false } }
            },
            {
                'first': { 'id': 4, 'name': 'COLLECTION.INDEX.SORT_DD_MENU.LIST_COLL_ASC', 'value': 'alphaAsc', 'sort': { 's': 'name', 'd': false } },
                'second': { 'id': 5, 'name': 'COLLECTION.INDEX.SORT_DD_MENU.LIST_COLL_DESC', 'value': 'alphaDesc', 'sort': { 's': 'name', 'd': true } }
            }
        ];
    }
    CollectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uiConfig.get('global').take(1).subscribe(function (config) {
            _this.pageSize = config.config.pageSize.value;
        });
        this.optionsSubscription = this.collectionContext.data.subscribe(function (data) { return _this.options = data; });
    };
    CollectionsComponent.prototype.ngOnDestroy = function () {
        this.optionsSubscription.unsubscribe();
    };
    CollectionsComponent.prototype.toggleCollectionSearch = function () {
        this.collectionSearchIsShowing = !this.collectionSearchIsShowing;
    };
    CollectionsComponent.prototype.setCollectionForEdit = function (collection) {
        this.collectionForEdit = Object.assign({}, collection);
    };
    CollectionsComponent.prototype.selectActiveCollection = function (id) {
        this.activeCollection.load(id).subscribe();
    };
    CollectionsComponent.prototype.setCollectionForDelete = function (collection) {
        this.collectionForDelete = collection;
    };
    CollectionsComponent.prototype.deleteCollection = function (id) {
        this.collections.delete(id).subscribe();
    };
    CollectionsComponent.prototype.search = function (query) {
        this.collectionContext.updateCollectionOptions({ currentSearchQuery: query });
        this.collections.load(query, true).subscribe();
    };
    CollectionsComponent.prototype.onFilterCollections = function (filter) {
        this.collectionContext.updateCollectionOptions({ currentFilter: filter });
        this.collections.load(filter.access, true).subscribe();
    };
    CollectionsComponent.prototype.onSortCollections = function (sort) {
        this.collectionContext.updateCollectionOptions({ currentSort: sort });
        this.collections.load(sort.sort, true).subscribe();
    };
    CollectionsComponent.prototype.isActiveCollection = function (collectionId) {
        var isMatch;
        this.activeCollection.data.take(1)
            .map(function (activeCollection) { return activeCollection.id; })
            .subscribe(function (id) { return isMatch = id === collectionId; });
        return isMatch;
    };
    CollectionsComponent.prototype.getAssetsForLink = function (collectionId) {
        var _this = this;
        this.activeCollection.getItems(collectionId, { n: 100 }, false).subscribe(function (data) {
            _this.assetsForLink = data.items;
        });
    };
    CollectionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'collections-component',
            templateUrl: 'collections.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, collections_service_1.CollectionsService, collection_context_service_1.CollectionContextService, active_collection_service_1.ActiveCollectionService, current_user_model_1.CurrentUser, ui_config_1.UiConfig, ui_state_1.UiState])
    ], CollectionsComponent);
    return CollectionsComponent;
}());
exports.CollectionsComponent = CollectionsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29sbGVjdGlvbi8raW5kZXgvY29sbGVjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFFN0Qsb0NBQW1DLDJDQUEyQyxDQUFDLENBQUE7QUFDL0UsMENBQXdDLGlEQUFpRCxDQUFDLENBQUE7QUFDMUYsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsbUNBQTRCLDBDQUEwQyxDQUFDLENBQUE7QUFDdkUsMEJBQXlCLGlDQUFpQyxDQUFDLENBQUE7QUFFM0QsMkNBQXlDLGtEQUFrRCxDQUFDLENBQUE7QUFDNUYseUJBQXdCLGdDQUFnQyxDQUFDLENBQUE7QUFRekQ7SUFjRSw4QkFDUyxNQUFjLEVBQ2QsV0FBK0IsRUFDL0IsaUJBQTJDLEVBQzNDLGdCQUF5QyxFQUN6QyxXQUF3QixFQUN4QixRQUFrQixFQUNsQixPQUFnQjtRQU5oQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFDM0MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQUN6QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFqQmxCLDhCQUF5QixHQUFZLEtBQUssQ0FBQztRQUMzQyw4QkFBeUIsR0FBWSxLQUFLLENBQUM7UUFDM0MsNEJBQXVCLEdBQVksS0FBSyxDQUFDO1FBR3pDLGtCQUFhLEdBQWUsRUFBRSxDQUFDO1FBQy9CLGtCQUFhLEdBQWUsRUFBRSxDQUFDO1FBQy9CLGdCQUFXLEdBQWUsRUFBRSxDQUFDO1FBWWxDLElBQUksQ0FBQyxhQUFhLEdBQUc7WUFDbkI7Z0JBQ0UsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUscUNBQXFDLEVBQUUsT0FB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QUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLGtCQUFrQjtTQUNoQyxDQUFDOzs0QkFBQTtJQWlIRiwyQkFBQztBQUFELENBL0dBLEFBK0dDLElBQUE7QUEvR1ksNEJBQW9CLHVCQStHaEMsQ0FBQSIsImZpbGUiOiJhcHAvK2NvbGxlY3Rpb24vK2luZGV4L2NvbGxlY3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9jb2xsZWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvY29sbGVjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmVDb2xsZWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hY3RpdmUtY29sbGVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LXVzZXIubW9kZWwnO1xuaW1wb3J0IHsgVWlDb25maWcgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdWkuY29uZmlnJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2NvbGxlY3Rpb24tY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IFVpU3RhdGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdWkuc3RhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdjb2xsZWN0aW9ucy1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ2NvbGxlY3Rpb25zLmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgb3B0aW9uc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG4gIHB1YmxpYyBjb2xsZWN0aW9uU2VhcmNoSXNTaG93aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBjb2xsZWN0aW9uRmlsdGVySXNTaG93aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBjb2xsZWN0aW9uU29ydElzU2hvd2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcGFnZVNpemU6IHN0cmluZztcbiAgcHVibGljIGNvbGxlY3Rpb25Gb3JFZGl0OiBDb2xsZWN0aW9uO1xuICBwdWJsaWMgZmlsdGVyT3B0aW9uczogQXJyYXk8YW55PiA9IFtdO1xuICBwdWJsaWMgYXNzZXRzRm9yTGluazogQXJyYXk8YW55PiA9IFtdO1xuICBwdWJsaWMgc29ydE9wdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgcHVibGljIGNvbGxlY3Rpb25Gb3JEZWxldGU6IENvbGxlY3Rpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyBjb2xsZWN0aW9uczogQ29sbGVjdGlvbnNTZXJ2aWNlLFxuICAgIHB1YmxpYyBjb2xsZWN0aW9uQ29udGV4dDogQ29sbGVjdGlvbkNvbnRleHRTZXJ2aWNlLFxuICAgIHB1YmxpYyBhY3RpdmVDb2xsZWN0aW9uOiBBY3RpdmVDb2xsZWN0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyLFxuICAgIHB1YmxpYyB1aUNvbmZpZzogVWlDb25maWcsXG4gICAgcHVibGljIHVpU3RhdGU6IFVpU3RhdGUpIHtcblxuICAgIHRoaXMuZmlsdGVyT3B0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgJ2ZpcnN0JzogeyAnaWQnOiAwLCAnbmFtZSc6ICdDT0xMRUNUSU9OLklOREVYLkZJTFRFUl9ERF9NRU5VLkFMTCcsICd2YWx1ZSc6ICdhbGwnLCAnYWNjZXNzJzogeyAnYWNjZXNzTGV2ZWwnOiAnYWxsJyB9IH0sXG4gICAgICAgICdzZWNvbmQnOiB7ICdpZCc6IDEsICduYW1lJzogJ0NPTExFQ1RJT04uSU5ERVguRklMVEVSX0REX01FTlUuT1dORVInLCAndmFsdWUnOiAnb3duZXInLCAnYWNjZXNzJzogeyAnYWNjZXNzTGV2ZWwnOiAnb3duZXInIH0gfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2ZpcnN0JzogeyAnaWQnOiAyLCAnbmFtZSc6ICdDT0xMRUNUSU9OLklOREVYLkZJTFRFUl9ERF9NRU5VLkVESVRPUicsICd2YWx1ZSc6ICdlZGl0b3InLCAnYWNjZXNzJzogeyAnYWNjZXNzTGV2ZWwnOiAnZWRpdG9yJyB9IH0sXG4gICAgICAgICdzZWNvbmQnOiB7ICdpZCc6IDMsICduYW1lJzogJ0NPTExFQ1RJT04uSU5ERVguRklMVEVSX0REX01FTlUuVklFV0VSJywgJ3ZhbHVlJzogJ3ZpZXdlcicsICdhY2Nlc3MnOiB7ICdhY2Nlc3NMZXZlbCc6ICd2aWV3ZXInIH0gfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2ZpcnN0JzogeyAnaWQnOiA0LCAnbmFtZSc6ICdDT0xMRUNUSU9OLklOREVYLkZJTFRFUl9ERF9NRU5VLlJFU0VBUkNIRVInLCAndmFsdWUnOiAncmVzZWFyY2hlcicsICdhY2Nlc3MnOiB7ICdhY2Nlc3NMZXZlbCc6ICdyZXNlYXJjaGVyJyB9IH1cbiAgICAgIH1cbiAgICBdO1xuICAgIHRoaXMuc29ydE9wdGlvbnMgPSBbXG4gICAgICB7XG4gICAgICAgICdmaXJzdCc6IHsgJ2lkJzogMCwgJ25hbWUnOiAnQ09MTEVDVElPTi5JTkRFWC5TT1JUX0REX01FTlUuREFURV9NT0RfTkVXRVNUJywgJ3ZhbHVlJzogJ21vZE5ld2VzdCcsICdzb3J0JzogeyAncyc6ICdsYXN0VXBkYXRlZCcsICdkJzogdHJ1ZSB9IH0sXG4gICAgICAgICdzZWNvbmQnOiB7ICdpZCc6IDEsICduYW1lJzogJ0NPTExFQ1RJT04uSU5ERVguU09SVF9ERF9NRU5VLkRBVEVfTU9EX09MREVTVCcsICd2YWx1ZSc6ICdtb2RPbGRlc3QnLCAnc29ydCc6IHsgJ3MnOiAnbGFzdFVwZGF0ZWQnLCAnZCc6IGZhbHNlIH0gfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2ZpcnN0JzogeyAnaWQnOiAyLCAnbmFtZSc6ICdDT0xMRUNUSU9OLklOREVYLlNPUlRfRERfTUVOVS5EQVRFX0NSRUFURV9ORVdFU1QnLCAndmFsdWUnOiAnY3JlYXRlTmV3ZXN0JywgJ3NvcnQnOiB7ICdzJzogJ2NyZWF0ZWRPbicsICdkJzogdHJ1ZSB9IH0sXG4gICAgICAgICdzZWNvbmQnOiB7ICdpZCc6IDMsICduYW1lJzogJ0NPTExFQ1RJT04uSU5ERVguU09SVF9ERF9NRU5VLkRBVEVfQ1JFQVRFX09MREVTVCcsICd2YWx1ZSc6ICdjcmVhdGVPbGRlc3QnLCAnc29ydCc6IHsgJ3MnOiAnY3JlYXRlZE9uJywgJ2QnOiBmYWxzZSB9IH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdmaXJzdCc6IHsgJ2lkJzogNCwgJ25hbWUnOiAnQ09MTEVDVElPTi5JTkRFWC5TT1JUX0REX01FTlUuTElTVF9DT0xMX0FTQycsICd2YWx1ZSc6ICdhbHBoYUFzYycsICdzb3J0JzogeyAncyc6ICduYW1lJywgJ2QnOiBmYWxzZSB9IH0sXG4gICAgICAgICdzZWNvbmQnOiB7ICdpZCc6IDUsICduYW1lJzogJ0NPTExFQ1RJT04uSU5ERVguU09SVF9ERF9NRU5VLkxJU1RfQ09MTF9ERVNDJywgJ3ZhbHVlJzogJ2FscGhhRGVzYycsICdzb3J0JzogeyAncyc6ICduYW1lJywgJ2QnOiB0cnVlIH0gfVxuICAgICAgfVxuICAgIF07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVpQ29uZmlnLmdldCgnZ2xvYmFsJykudGFrZSgxKS5zdWJzY3JpYmUoY29uZmlnID0+IHtcbiAgICAgIHRoaXMucGFnZVNpemUgPSBjb25maWcuY29uZmlnLnBhZ2VTaXplLnZhbHVlO1xuICAgIH0pO1xuICAgIHRoaXMub3B0aW9uc1N1YnNjcmlwdGlvbiA9IHRoaXMuY29sbGVjdGlvbkNvbnRleHQuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLm9wdGlvbnMgPSBkYXRhKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9uc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUNvbGxlY3Rpb25TZWFyY2goKSB7XG4gICAgdGhpcy5jb2xsZWN0aW9uU2VhcmNoSXNTaG93aW5nID0gIXRoaXMuY29sbGVjdGlvblNlYXJjaElzU2hvd2luZztcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2xsZWN0aW9uRm9yRWRpdChjb2xsZWN0aW9uOiBhbnkpIHtcbiAgICB0aGlzLmNvbGxlY3Rpb25Gb3JFZGl0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29sbGVjdGlvbik7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0QWN0aXZlQ29sbGVjdGlvbihpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVDb2xsZWN0aW9uLmxvYWQoaWQpLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHNldENvbGxlY3Rpb25Gb3JEZWxldGUoY29sbGVjdGlvbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jb2xsZWN0aW9uRm9yRGVsZXRlID0gY29sbGVjdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGVDb2xsZWN0aW9uKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNvbGxlY3Rpb25zLmRlbGV0ZShpZCkuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgc2VhcmNoKHF1ZXJ5OiBhbnkpIHtcbiAgICB0aGlzLmNvbGxlY3Rpb25Db250ZXh0LnVwZGF0ZUNvbGxlY3Rpb25PcHRpb25zKHsgY3VycmVudFNlYXJjaFF1ZXJ5OiBxdWVyeSB9KTtcbiAgICB0aGlzLmNvbGxlY3Rpb25zLmxvYWQocXVlcnksIHRydWUpLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIG9uRmlsdGVyQ29sbGVjdGlvbnMoZmlsdGVyOiBhbnkpIHtcbiAgICB0aGlzLmNvbGxlY3Rpb25Db250ZXh0LnVwZGF0ZUNvbGxlY3Rpb25PcHRpb25zKHsgY3VycmVudEZpbHRlcjogZmlsdGVyIH0pO1xuICAgIHRoaXMuY29sbGVjdGlvbnMubG9hZChmaWx0ZXIuYWNjZXNzLCB0cnVlKS5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBvblNvcnRDb2xsZWN0aW9ucyhzb3J0OiBhbnkpIHtcbiAgICB0aGlzLmNvbGxlY3Rpb25Db250ZXh0LnVwZGF0ZUNvbGxlY3Rpb25PcHRpb25zKHsgY3VycmVudFNvcnQ6IHNvcnQgfSk7XG4gICAgdGhpcy5jb2xsZWN0aW9ucy5sb2FkKHNvcnQuc29ydCwgdHJ1ZSkuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgaXNBY3RpdmVDb2xsZWN0aW9uKGNvbGxlY3Rpb25JZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgbGV0IGlzTWF0Y2g6IGJvb2xlYW47XG4gICAgdGhpcy5hY3RpdmVDb2xsZWN0aW9uLmRhdGEudGFrZSgxKVxuICAgICAgLm1hcChhY3RpdmVDb2xsZWN0aW9uID0+IGFjdGl2ZUNvbGxlY3Rpb24uaWQpXG4gICAgICAuc3Vic2NyaWJlKGlkID0+IGlzTWF0Y2ggPSBpZCA9PT0gY29sbGVjdGlvbklkKTtcbiAgICByZXR1cm4gaXNNYXRjaDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBc3NldHNGb3JMaW5rKGNvbGxlY3Rpb25JZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVDb2xsZWN0aW9uLmdldEl0ZW1zKGNvbGxlY3Rpb25JZCwge246IDEwMH0sIGZhbHNlKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmFzc2V0c0ZvckxpbmsgPSBkYXRhLml0ZW1zO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
