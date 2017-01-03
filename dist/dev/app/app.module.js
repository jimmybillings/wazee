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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var app_routes_1 = require('./app.routes');
var home_module_1 = require('./+home/home.module');
var user_management_module_1 = require('./+user-management/user-management.module');
var content_module_1 = require('./+content/content.module');
var search_module_1 = require('./+search/search.module');
var asset_module_1 = require('./+asset/asset.module');
var admin_module_1 = require('./+admin/admin.module');
var collection_module_1 = require('./+collection/collection.module');
var application_module_1 = require('./application/application.module');
var shared_module_1 = require('./shared/shared.module');
var app_component_1 = require('./app.component');
var store_1 = require('@ngrx/store');
var wazee_1 = require('./imports/wazee');
var app_not_found_component_1 = require('./app.not-found.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(app_routes_1.APP_ROUTES),
                shared_module_1.SharedModule.forRoot(),
                home_module_1.HomeModule,
                search_module_1.SearchModule,
                asset_module_1.AssetModule,
                collection_module_1.CollectionModule,
                content_module_1.ContentModule,
                user_management_module_1.UserManagementModule,
                admin_module_1.AdminModule,
                application_module_1.ApplicationModule,
                store_1.StoreModule.provideStore(wazee_1.WAZEE_STORES)
            ],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/',
                },
                {
                    provide: Window,
                    useValue: window
                }],
            declarations: [app_component_1.AppComponent, app_not_found_component_1.NotFoundComponent],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsMkJBQTJCLGNBQWMsQ0FBQyxDQUFBO0FBRTFDLDRCQUEyQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2pELHVDQUFxQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ2pGLCtCQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELDZCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELDZCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELGtDQUFpQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ25FLG1DQUFrQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3JFLDhCQUE2Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3RELDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixhQUFhLENBQUMsQ0FBQTtBQUMxQyxzQkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyx3Q0FBa0MsMkJBQTJCLENBQUMsQ0FBQTtBQTZCOUQ7SUFBQTtJQUF5QixDQUFDO0lBM0IxQjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxnQ0FBYTtnQkFDYixxQkFBWSxDQUFDLE9BQU8sQ0FBQyx1QkFBVSxDQUFDO2dCQUNoQyw0QkFBWSxDQUFDLE9BQU8sRUFBRTtnQkFDdEIsd0JBQVU7Z0JBQ1YsNEJBQVk7Z0JBQ1osMEJBQVc7Z0JBQ1gsb0NBQWdCO2dCQUNoQiw4QkFBYTtnQkFDYiw2Q0FBb0I7Z0JBQ3BCLDBCQUFXO2dCQUVYLHNDQUFpQjtnQkFDakIsbUJBQVcsQ0FBQyxZQUFZLENBQUMsb0JBQVksQ0FBQzthQUN2QztZQUNELFNBQVMsRUFBRSxDQUFDO29CQUNWLE9BQU8sRUFBRSxzQkFBYTtvQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLE1BQU07b0JBQ2YsUUFBUSxFQUFFLE1BQU07aUJBQ2pCLENBQUM7WUFDRixZQUFZLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLDJDQUFpQixDQUFDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDMUIsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFQUF9ST1VURVMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuXG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi8raG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyTWFuYWdlbWVudE1vZHVsZSB9IGZyb20gJy4vK3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQubW9kdWxlJztcbmltcG9ydCB7IENvbnRlbnRNb2R1bGUgfSBmcm9tICcuLytjb250ZW50L2NvbnRlbnQubW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaE1vZHVsZSB9IGZyb20gJy4vK3NlYXJjaC9zZWFyY2gubW9kdWxlJztcbmltcG9ydCB7IEFzc2V0TW9kdWxlIH0gZnJvbSAnLi8rYXNzZXQvYXNzZXQubW9kdWxlJztcbmltcG9ydCB7IEFkbWluTW9kdWxlIH0gZnJvbSAnLi8rYWRtaW4vYWRtaW4ubW9kdWxlJztcbmltcG9ydCB7IENvbGxlY3Rpb25Nb2R1bGUgfSBmcm9tICcuLytjb2xsZWN0aW9uL2NvbGxlY3Rpb24ubW9kdWxlJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uTW9kdWxlIH0gZnJvbSAnLi9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBXQVpFRV9TVE9SRVMgfSBmcm9tICcuL2ltcG9ydHMvd2F6ZWUnO1xuaW1wb3J0IHsgQ29tbWVyY2VNb2R1bGUgfSBmcm9tICcuLytjb21tZXJjZS9jb21tZXJjZS5tb2R1bGUnO1xuaW1wb3J0IHsgTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL2FwcC5ub3QtZm91bmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoQVBQX1JPVVRFUyksXG4gICAgU2hhcmVkTW9kdWxlLmZvclJvb3QoKSxcbiAgICBIb21lTW9kdWxlLFxuICAgIFNlYXJjaE1vZHVsZSxcbiAgICBBc3NldE1vZHVsZSxcbiAgICBDb2xsZWN0aW9uTW9kdWxlLFxuICAgIENvbnRlbnRNb2R1bGUsXG4gICAgVXNlck1hbmFnZW1lbnRNb2R1bGUsXG4gICAgQWRtaW5Nb2R1bGUsXG4gICAgLy8gQ29tbWVyY2VNb2R1bGUsXG4gICAgQXBwbGljYXRpb25Nb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUucHJvdmlkZVN0b3JlKFdBWkVFX1NUT1JFUylcbiAgXSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXG4gICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogV2luZG93LFxuICAgIHVzZVZhbHVlOiB3aW5kb3dcbiAgfV0sXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudCwgTm90Rm91bmRDb21wb25lbnRdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=
