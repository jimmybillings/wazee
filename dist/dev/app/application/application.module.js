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
var shared_module_1 = require('../shared/shared.module');
var app_nav_component_1 = require('./app-nav/app-nav.component');
var collection_tray_component_1 = require('./collection-tray/collection-tray.component');
var footer_component_1 = require('./footer/footer.component');
var collections_list_dd_component_1 = require('./collection-tray/components/collections-list-dd.component');
var ApplicationModule = (function () {
    function ApplicationModule() {
    }
    ApplicationModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule],
            declarations: [
                app_nav_component_1.AppNavComponent,
                collection_tray_component_1.CollectionTrayComponent,
                footer_component_1.FooterComponent,
                collections_list_dd_component_1.CollectionListDdComponent],
            exports: [app_nav_component_1.AppNavComponent, collection_tray_component_1.CollectionTrayComponent, footer_component_1.FooterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ApplicationModule);
    return ApplicationModule;
}());
exports.ApplicationModule = ApplicationModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxrQ0FBZ0MsNkJBQTZCLENBQUMsQ0FBQTtBQUM5RCwwQ0FBd0MsNkNBQTZDLENBQUMsQ0FBQTtBQUN0RixpQ0FBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUM1RCw4Q0FBMEMsNERBQTRELENBQUMsQ0FBQTtBQVl2RztJQUFBO0lBQWlDLENBQUM7SUFWbEM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3ZCLFlBQVksRUFBRTtnQkFDWixtQ0FBZTtnQkFDZixtREFBdUI7Z0JBQ3ZCLGtDQUFlO2dCQUNmLHlEQUF5QixDQUFDO1lBQzVCLE9BQU8sRUFBRSxDQUFDLG1DQUFlLEVBQUUsbURBQXVCLEVBQUUsa0NBQWUsQ0FBQztTQUNyRSxDQUFDOzt5QkFBQTtJQUUrQix3QkFBQztBQUFELENBQWpDLEFBQWtDLElBQUE7QUFBckIseUJBQWlCLG9CQUFJLENBQUEiLCJmaWxlIjoiYXBwL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBOYXZDb21wb25lbnQgfSBmcm9tICcuL2FwcC1uYXYvYXBwLW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sbGVjdGlvblRyYXlDb21wb25lbnQgfSBmcm9tICcuL2NvbGxlY3Rpb24tdHJheS9jb2xsZWN0aW9uLXRyYXkuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkxpc3REZENvbXBvbmVudCB9IGZyb20gJy4vY29sbGVjdGlvbi10cmF5L2NvbXBvbmVudHMvY29sbGVjdGlvbnMtbGlzdC1kZC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwTmF2Q29tcG9uZW50LFxuICAgIENvbGxlY3Rpb25UcmF5Q29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBDb2xsZWN0aW9uTGlzdERkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FwcE5hdkNvbXBvbmVudCwgQ29sbGVjdGlvblRyYXlDb21wb25lbnQsIEZvb3RlckNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbk1vZHVsZSB7IH1cbiJdfQ==
