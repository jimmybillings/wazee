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
var collections_service_1 = require('../../../shared/services/collections.service');
var ui_config_1 = require('../../../shared/services/ui.config');
var collection_context_service_1 = require('../../../shared/services/collection-context.service');
var active_collection_service_1 = require('../../../shared/services/active-collection.service');
var ui_state_1 = require('../../../shared/services/ui.state');
var CollectionListDdComponent = (function () {
    function CollectionListDdComponent(router, collections, collectionContext, activeCollection, uiConfig) {
        this.router = router;
        this.collections = collections;
        this.collectionContext = collectionContext;
        this.activeCollection = activeCollection;
        this.uiConfig = uiConfig;
        this.close = new core_1.EventEmitter();
        this.collectionFilterIsShowing = false;
        this.collectionSortIsShowing = false;
        this.collectionSearchIsShowing = false;
    }
    CollectionListDdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uiConfig.get('global').take(1).subscribe(function (config) {
            _this.pageSize = config.config.pageSize.value;
        });
        this.optionsSubscription = this.collectionContext.data.subscribe(function (data) { return _this.options = data; });
    };
    CollectionListDdComponent.prototype.ngOnDestroy = function () {
        this.optionsSubscription.unsubscribe();
    };
    CollectionListDdComponent.prototype.closeCollectionsList = function () {
        this.close.emit();
    };
    CollectionListDdComponent.prototype.selectFocusedCollection = function (collection) {
        if (this.onCollectionShowPage()) {
            this.navigateToCollectionShow(collection.id);
        }
        else {
            this.activeCollection.load(collection.id).subscribe();
        }
    };
    CollectionListDdComponent.prototype.navigateToCollectionShow = function (assetId) {
        this.router.navigate(['/collection/', assetId, { i: 1, n: this.pageSize }]);
    };
    CollectionListDdComponent.prototype.navigateToCollectionsIndex = function () {
        this.router.navigate(['/collections']);
    };
    CollectionListDdComponent.prototype.applyFilter = function (filter) {
        this.collectionContext.updateCollectionOptions({ currentFilter: filter });
        this.collections.load(filter.access).subscribe();
        this.showCollectionFilter();
    };
    CollectionListDdComponent.prototype.applySort = function (sort) {
        this.collectionContext.updateCollectionOptions({ currentSort: sort });
        this.collections.load(sort.sort).subscribe();
        this.showCollectionSort();
    };
    CollectionListDdComponent.prototype.search = function (query) {
        this.collectionContext.updateCollectionOptions({ currentSearchQuery: query });
        this.collections.load(query).subscribe();
    };
    CollectionListDdComponent.prototype.showCollectionFilter = function () {
        this.collectionFilterIsShowing = !this.collectionFilterIsShowing;
    };
    CollectionListDdComponent.prototype.showCollectionSort = function () {
        this.collectionSortIsShowing = !this.collectionSortIsShowing;
    };
    CollectionListDdComponent.prototype.showCollectionSearch = function () {
        this.collectionSearchIsShowing = !this.collectionSearchIsShowing;
    };
    CollectionListDdComponent.prototype.onCollectionShowPage = function () {
        return (this.router.url.split('/')[1] === 'collection' && this.router.url.split('/')[2] !== undefined);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CollectionListDdComponent.prototype, "focusedCollection", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ui_state_1.UiState)
    ], CollectionListDdComponent.prototype, "uiState", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CollectionListDdComponent.prototype, "config", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CollectionListDdComponent.prototype, "close", void 0);
    CollectionListDdComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'collections-list-dd',
            templateUrl: 'collections-list-dd.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [router_1.Router, collections_service_1.CollectionsService, collection_context_service_1.CollectionContextService, active_collection_service_1.ActiveCollectionService, ui_config_1.UiConfig])
    ], CollectionListDdComponent);
    return CollectionListDdComponent;
}());
exports.CollectionListDdComponent = CollectionListDdComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9jb2xsZWN0aW9uLXRyYXkvY29tcG9uZW50cy9jb2xsZWN0aW9ucy1saXN0LWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1HLGVBQWUsQ0FBQyxDQUFBO0FBQ25ILHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLG9DQUFtQyw4Q0FBOEMsQ0FBQyxDQUFBO0FBQ2xGLDBCQUF5QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQzlELDJDQUF5QyxxREFBcUQsQ0FBQyxDQUFBO0FBQy9GLDBDQUF3QyxvREFBb0QsQ0FBQyxDQUFBO0FBRTdGLHlCQUF3QixtQ0FBbUMsQ0FBQyxDQUFBO0FBWTVEO0lBWUUsbUNBQ1MsTUFBYyxFQUNkLFdBQStCLEVBQy9CLGlCQUEyQyxFQUMzQyxnQkFBeUMsRUFDekMsUUFBa0I7UUFKbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBQzNDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFDekMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWJqQixVQUFLLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFJOUIsOEJBQXlCLEdBQVksS0FBSyxDQUFDO1FBQzNDLDRCQUF1QixHQUFZLEtBQUssQ0FBQztRQUN6Qyw4QkFBeUIsR0FBWSxLQUFLLENBQUM7SUFPcEIsQ0FBQztJQUUvQiw0Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNsRCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFuQixDQUFtQixDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVELCtDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVNLHdEQUFvQixHQUEzQjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLDJEQUF1QixHQUE5QixVQUErQixVQUFzQjtRQUNuRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4RCxDQUFDO0lBQ0gsQ0FBQztJQUVNLDREQUF3QixHQUEvQixVQUFnQyxPQUFlO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVNLDhEQUEwQixHQUFqQztRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sK0NBQVcsR0FBbEIsVUFBbUIsTUFBVztRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLDZDQUFTLEdBQWhCLFVBQWlCLElBQVM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTSwwQ0FBTSxHQUFiLFVBQWMsS0FBVTtRQUN0QixJQUFJLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFTSx3REFBb0IsR0FBM0I7UUFDRSxJQUFJLENBQUMseUJBQXlCLEdBQUcsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDbkUsQ0FBQztJQUVNLHNEQUFrQixHQUF6QjtRQUNFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztJQUMvRCxDQUFDO0lBRU0sd0RBQW9CLEdBQTNCO1FBQ0UsSUFBSSxDQUFDLHlCQUF5QixHQUFHLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ25FLENBQUM7SUFFTSx3REFBb0IsR0FBM0I7UUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBaEZEO1FBQUMsWUFBSyxFQUFFOzt3RUFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs4REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs2REFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzs0REFBQTtJQVhYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQzs7aUNBQUE7SUFvRkYsZ0NBQUM7QUFBRCxDQWxGQSxBQWtGQyxJQUFBO0FBbEZZLGlDQUF5Qiw0QkFrRnJDLENBQUEiLCJmaWxlIjoiYXBwL2FwcGxpY2F0aW9uL2NvbGxlY3Rpb24tdHJheS9jb21wb25lbnRzL2NvbGxlY3Rpb25zLWxpc3QtZGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9jb2xsZWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvY29sbGVjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBVaUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91aS5jb25maWcnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2NvbGxlY3Rpb24tY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2ZUNvbGxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FjdGl2ZS1jb2xsZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBVaVN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VpLnN0YXRlJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCByZW5kZXJzIGEgbGlzdCBvZiBjb2xsZWN0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdjb2xsZWN0aW9ucy1saXN0LWRkJyxcbiAgdGVtcGxhdGVVcmw6ICdjb2xsZWN0aW9ucy1saXN0LWRkLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25MaXN0RGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGZvY3VzZWRDb2xsZWN0aW9uOiBDb2xsZWN0aW9uO1xuICBASW5wdXQoKSB1aVN0YXRlOiBVaVN0YXRlO1xuICBASW5wdXQoKSBjb25maWc6IGFueTtcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgb3B0aW9uczogYW55O1xuICBwdWJsaWMgb3B0aW9uc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgcGFnZVNpemU6IHN0cmluZztcbiAgcHVibGljIGNvbGxlY3Rpb25GaWx0ZXJJc1Nob3dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGNvbGxlY3Rpb25Tb3J0SXNTaG93aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBjb2xsZWN0aW9uU2VhcmNoSXNTaG93aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyBjb2xsZWN0aW9uczogQ29sbGVjdGlvbnNTZXJ2aWNlLFxuICAgIHB1YmxpYyBjb2xsZWN0aW9uQ29udGV4dDogQ29sbGVjdGlvbkNvbnRleHRTZXJ2aWNlLFxuICAgIHB1YmxpYyBhY3RpdmVDb2xsZWN0aW9uOiBBY3RpdmVDb2xsZWN0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgdWlDb25maWc6IFVpQ29uZmlnKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudWlDb25maWcuZ2V0KCdnbG9iYWwnKS50YWtlKDEpLnN1YnNjcmliZShjb25maWcgPT4ge1xuICAgICAgdGhpcy5wYWdlU2l6ZSA9IGNvbmZpZy5jb25maWcucGFnZVNpemUudmFsdWU7XG4gICAgfSk7XG4gICAgdGhpcy5vcHRpb25zU3Vic2NyaXB0aW9uID0gdGhpcy5jb2xsZWN0aW9uQ29udGV4dC5kYXRhLnN1YnNjcmliZShkYXRhID0+IHRoaXMub3B0aW9ucyA9IGRhdGEpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VDb2xsZWN0aW9uc0xpc3QoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZS5lbWl0KCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Rm9jdXNlZENvbGxlY3Rpb24oY29sbGVjdGlvbjogQ29sbGVjdGlvbikge1xuICAgIGlmICh0aGlzLm9uQ29sbGVjdGlvblNob3dQYWdlKCkpIHtcbiAgICAgIHRoaXMubmF2aWdhdGVUb0NvbGxlY3Rpb25TaG93KGNvbGxlY3Rpb24uaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZUNvbGxlY3Rpb24ubG9hZChjb2xsZWN0aW9uLmlkKS5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmF2aWdhdGVUb0NvbGxlY3Rpb25TaG93KGFzc2V0SWQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NvbGxlY3Rpb24vJywgYXNzZXRJZCwgeyBpOiAxLCBuOiB0aGlzLnBhZ2VTaXplIH1dKTtcbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvQ29sbGVjdGlvbnNJbmRleCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jb2xsZWN0aW9ucyddKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUZpbHRlcihmaWx0ZXI6IGFueSkge1xuICAgIHRoaXMuY29sbGVjdGlvbkNvbnRleHQudXBkYXRlQ29sbGVjdGlvbk9wdGlvbnMoeyBjdXJyZW50RmlsdGVyOiBmaWx0ZXIgfSk7XG4gICAgdGhpcy5jb2xsZWN0aW9ucy5sb2FkKGZpbHRlci5hY2Nlc3MpLnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc2hvd0NvbGxlY3Rpb25GaWx0ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseVNvcnQoc29ydDogYW55KSB7XG4gICAgdGhpcy5jb2xsZWN0aW9uQ29udGV4dC51cGRhdGVDb2xsZWN0aW9uT3B0aW9ucyh7IGN1cnJlbnRTb3J0OiBzb3J0IH0pO1xuICAgIHRoaXMuY29sbGVjdGlvbnMubG9hZChzb3J0LnNvcnQpLnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc2hvd0NvbGxlY3Rpb25Tb3J0KCk7XG4gIH1cblxuICBwdWJsaWMgc2VhcmNoKHF1ZXJ5OiBhbnkpIHtcbiAgICB0aGlzLmNvbGxlY3Rpb25Db250ZXh0LnVwZGF0ZUNvbGxlY3Rpb25PcHRpb25zKHsgY3VycmVudFNlYXJjaFF1ZXJ5OiBxdWVyeSB9KTtcbiAgICB0aGlzLmNvbGxlY3Rpb25zLmxvYWQocXVlcnkpLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHNob3dDb2xsZWN0aW9uRmlsdGVyKCkge1xuICAgIHRoaXMuY29sbGVjdGlvbkZpbHRlcklzU2hvd2luZyA9ICF0aGlzLmNvbGxlY3Rpb25GaWx0ZXJJc1Nob3dpbmc7XG4gIH1cblxuICBwdWJsaWMgc2hvd0NvbGxlY3Rpb25Tb3J0KCkge1xuICAgIHRoaXMuY29sbGVjdGlvblNvcnRJc1Nob3dpbmcgPSAhdGhpcy5jb2xsZWN0aW9uU29ydElzU2hvd2luZztcbiAgfVxuXG4gIHB1YmxpYyBzaG93Q29sbGVjdGlvblNlYXJjaCgpIHtcbiAgICB0aGlzLmNvbGxlY3Rpb25TZWFyY2hJc1Nob3dpbmcgPSAhdGhpcy5jb2xsZWN0aW9uU2VhcmNoSXNTaG93aW5nO1xuICB9XG5cbiAgcHVibGljIG9uQ29sbGVjdGlvblNob3dQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5yb3V0ZXIudXJsLnNwbGl0KCcvJylbMV0gPT09ICdjb2xsZWN0aW9uJyAmJiB0aGlzLnJvdXRlci51cmwuc3BsaXQoJy8nKVsyXSAhPT0gdW5kZWZpbmVkKTtcbiAgfVxufVxuIl19
