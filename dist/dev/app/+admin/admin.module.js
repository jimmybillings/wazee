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
var admin_component_1 = require('./admin.component');
var config_component_1 = require('./+config/config.component');
var dashboard_component_1 = require('./+dashboard/dashboard.component');
var index_component_1 = require('./+index/index.component');
var secret_config_component_1 = require('./+secret-config/secret-config.component');
var translation_component_1 = require('./+translation/translation.component');
var site_config_component_1 = require('./+site-config/site-config.component');
var ui_config_component_1 = require('./+ui-config/ui-config.component');
var shared_module_1 = require('../shared/shared.module');
var admin_service_1 = require('./services/admin.service');
var config_service_1 = require('./services/config.service');
var translate_service_1 = require('./services/translate.service');
var admin_routes_1 = require('./admin.routes');
var router_1 = require('@angular/router');
var admin_auth_guard_1 = require('./services/admin.auth.guard');
var admin_store_1 = require('./services/admin.store');
var admin_index_resolver_1 = require('./services/admin-index.resolver');
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, router_1.RouterModule.forChild(admin_routes_1.ADMIN_ROUTES)],
            declarations: [
                admin_component_1.AdminComponent,
                config_component_1.ConfigComponent,
                dashboard_component_1.DashboardComponent,
                index_component_1.IndexComponent,
                secret_config_component_1.SecretConfigComponent,
                translation_component_1.TranslationComponent,
                site_config_component_1.SiteConfigComponent,
                ui_config_component_1.UiConfigComponent],
            exports: [admin_component_1.AdminComponent],
            providers: [admin_service_1.AdminService, config_service_1.ConfigService, translate_service_1.TranslateService, admin_auth_guard_1.AdminAuthGuard, admin_store_1.AdminStore, admin_index_resolver_1.AdminIndexResolver],
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vYWRtaW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQsaUNBQWdDLDRCQUE0QixDQUFDLENBQUE7QUFDN0Qsb0NBQW1DLGtDQUFrQyxDQUFDLENBQUE7QUFDdEUsZ0NBQStCLDBCQUEwQixDQUFDLENBQUE7QUFDMUQsd0NBQXNDLDBDQUEwQyxDQUFDLENBQUE7QUFDakYsc0NBQXFDLHNDQUFzQyxDQUFDLENBQUE7QUFDNUUsc0NBQW9DLHNDQUFzQyxDQUFDLENBQUE7QUFDM0Usb0NBQWtDLGtDQUFrQyxDQUFDLENBQUE7QUFDckUsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsOEJBQTZCLDBCQUEwQixDQUFDLENBQUE7QUFDeEQsK0JBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsa0NBQWlDLDhCQUE4QixDQUFDLENBQUE7QUFDaEUsNkJBQTZCLGdCQUFnQixDQUFDLENBQUE7QUFDOUMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsaUNBQStCLDZCQUE2QixDQUFDLENBQUE7QUFDN0QsNEJBQTJCLHdCQUF3QixDQUFDLENBQUE7QUFDcEQscUNBQW1DLGlDQUFpQyxDQUFDLENBQUE7QUFpQnJFO0lBQUE7SUFBMkIsQ0FBQztJQWY1QjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLDRCQUFZLEVBQUUscUJBQVksQ0FBQyxRQUFRLENBQUMsMkJBQVksQ0FBQyxDQUFDO1lBQzVELFlBQVksRUFBRTtnQkFDWixnQ0FBYztnQkFDZCxrQ0FBZTtnQkFDZix3Q0FBa0I7Z0JBQ2xCLGdDQUFjO2dCQUNkLCtDQUFxQjtnQkFDckIsNENBQW9CO2dCQUNwQiwyQ0FBbUI7Z0JBQ25CLHVDQUFpQixDQUFDO1lBQ3BCLE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDekIsU0FBUyxFQUFFLENBQUMsNEJBQVksRUFBRSw4QkFBYSxFQUFFLG9DQUFnQixFQUFFLGlDQUFjLEVBQUUsd0JBQVUsRUFBRSx5Q0FBa0IsQ0FBQztTQUMzRyxDQUFDOzttQkFBQTtJQUV5QixrQkFBQztBQUFELENBQTNCLEFBQTRCLElBQUE7QUFBZixtQkFBVyxjQUFJLENBQUEiLCJmaWxlIjoiYXBwLythZG1pbi9hZG1pbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maWdDb21wb25lbnQgfSBmcm9tICcuLytjb25maWcvY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuLytkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmRleENvbXBvbmVudCB9IGZyb20gJy4vK2luZGV4L2luZGV4LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWNyZXRDb25maWdDb21wb25lbnQgfSBmcm9tICcuLytzZWNyZXQtY29uZmlnL3NlY3JldC1jb25maWcuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi8rdHJhbnNsYXRpb24vdHJhbnNsYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFNpdGVDb25maWdDb21wb25lbnQgfSBmcm9tICcuLytzaXRlLWNvbmZpZy9zaXRlLWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlDb25maWdDb21wb25lbnQgfSBmcm9tICcuLyt1aS1jb25maWcvdWktY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBBZG1pblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FkbWluLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQURNSU5fUk9VVEVTIH0gZnJvbSAnLi9hZG1pbi5yb3V0ZXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFkbWluQXV0aEd1YXJkIH0gZnJvbSAnLi9zZXJ2aWNlcy9hZG1pbi5hdXRoLmd1YXJkJztcbmltcG9ydCB7IEFkbWluU3RvcmUgfSBmcm9tICcuL3NlcnZpY2VzL2FkbWluLnN0b3JlJztcbmltcG9ydCB7IEFkbWluSW5kZXhSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvYWRtaW4taW5kZXgucmVzb2x2ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQURNSU5fUk9VVEVTKV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFkbWluQ29tcG9uZW50LFxuICAgIENvbmZpZ0NvbXBvbmVudCxcbiAgICBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgSW5kZXhDb21wb25lbnQsXG4gICAgU2VjcmV0Q29uZmlnQ29tcG9uZW50LFxuICAgIFRyYW5zbGF0aW9uQ29tcG9uZW50LFxuICAgIFNpdGVDb25maWdDb21wb25lbnQsXG4gICAgVWlDb25maWdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWRtaW5Db21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtBZG1pblNlcnZpY2UsIENvbmZpZ1NlcnZpY2UsIFRyYW5zbGF0ZVNlcnZpY2UsIEFkbWluQXV0aEd1YXJkLCBBZG1pblN0b3JlLCBBZG1pbkluZGV4UmVzb2x2ZXJdLFxufSlcblxuZXhwb3J0IGNsYXNzIEFkbWluTW9kdWxlIHsgfVxuIl19
