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
var collections_component_1 = require('./+index/collections.component');
var collection_show_component_1 = require('./+show/collection-show.component');
var shared_module_1 = require('../shared/shared.module');
var router_1 = require('@angular/router');
var collection_routes_1 = require('./collection.routes');
var collection_show_resolver_1 = require('../+collection/services/collection-show.resolver');
var collection_guard_1 = require('./services/collection-guard');
var wz_collection_item_list_component_1 = require('./components/wz.collection-item-list.component');
var CollectionModule = (function () {
    function CollectionModule() {
    }
    CollectionModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, router_1.RouterModule.forChild(collection_routes_1.COLLECTION_ROUTES)],
            declarations: [
                collections_component_1.CollectionsComponent,
                collection_show_component_1.CollectionShowComponent,
                wz_collection_item_list_component_1.WzCollectionItemListComponent],
            exports: [collections_component_1.CollectionsComponent, collection_show_component_1.CollectionShowComponent],
            providers: [collection_show_resolver_1.CollectionShowResolver, collection_guard_1.CollectionGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], CollectionModule);
    return CollectionModule;
}());
exports.CollectionModule = CollectionModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29sbGVjdGlvbi9jb2xsZWN0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHNDQUFxQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3RFLDBDQUF3QyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQzVFLDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLGtDQUFrQyxxQkFBcUIsQ0FBQyxDQUFBO0FBQ3hELHlDQUF1QyxrREFBa0QsQ0FBQyxDQUFBO0FBQzFGLGlDQUFnQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlELGtEQUE4QyxnREFBZ0QsQ0FBQyxDQUFBO0FBVy9GO0lBQUE7SUFBZ0MsQ0FBQztJQVZqQztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLDRCQUFZLEVBQUUscUJBQVksQ0FBQyxRQUFRLENBQUMscUNBQWlCLENBQUMsQ0FBQztZQUNqRSxZQUFZLEVBQUU7Z0JBQ1osNENBQW9CO2dCQUNwQixtREFBdUI7Z0JBQ3ZCLGlFQUE2QixDQUFDO1lBQ2hDLE9BQU8sRUFBRSxDQUFDLDRDQUFvQixFQUFFLG1EQUF1QixDQUFDO1lBQ3hELFNBQVMsRUFBRSxDQUFDLGlEQUFzQixFQUFFLGtDQUFlLENBQUM7U0FDckQsQ0FBQzs7d0JBQUE7SUFFOEIsdUJBQUM7QUFBRCxDQUFoQyxBQUFpQyxJQUFBO0FBQXBCLHdCQUFnQixtQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC8rY29sbGVjdGlvbi9jb2xsZWN0aW9uLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vK2luZGV4L2NvbGxlY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uU2hvd0NvbXBvbmVudCB9IGZyb20gJy4vK3Nob3cvY29sbGVjdGlvbi1zaG93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ09MTEVDVElPTl9ST1VURVMgfSBmcm9tICcuL2NvbGxlY3Rpb24ucm91dGVzJztcbmltcG9ydCB7IENvbGxlY3Rpb25TaG93UmVzb2x2ZXIgfSBmcm9tICcuLi8rY29sbGVjdGlvbi9zZXJ2aWNlcy9jb2xsZWN0aW9uLXNob3cucmVzb2x2ZXInO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkd1YXJkIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb2xsZWN0aW9uLWd1YXJkJztcbmltcG9ydCB7IFd6Q29sbGVjdGlvbkl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3d6LmNvbGxlY3Rpb24taXRlbS1saXN0LmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQ09MTEVDVElPTl9ST1VURVMpXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29sbGVjdGlvbnNDb21wb25lbnQsXG4gICAgQ29sbGVjdGlvblNob3dDb21wb25lbnQsXG4gICAgV3pDb2xsZWN0aW9uSXRlbUxpc3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ29sbGVjdGlvbnNDb21wb25lbnQsIENvbGxlY3Rpb25TaG93Q29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbQ29sbGVjdGlvblNob3dSZXNvbHZlciwgQ29sbGVjdGlvbkd1YXJkXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25Nb2R1bGUgeyB9XG4iXX0=
