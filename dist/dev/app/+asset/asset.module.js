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
var asset_component_1 = require('./asset.component');
var shared_module_1 = require('../shared/shared.module');
var asset_detail_component_1 = require('./components/asset-detail.component');
var asset_data_component_1 = require('./components/asset-data.component');
var asset_share_component_1 = require('./components/asset-share.component');
var asset_share_link_component_1 = require('./components/asset-share-link.component');
var AssetModule = (function () {
    function AssetModule() {
    }
    AssetModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule],
            declarations: [asset_component_1.AssetComponent, asset_detail_component_1.AssetDetailComponent, asset_data_component_1.AssetDataComponent, asset_share_component_1.AssetShareComponent, asset_share_link_component_1.AssetShareLinkComponent],
            exports: [asset_component_1.AssetComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AssetModule);
    return AssetModule;
}());
exports.AssetModule = AssetModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYXNzZXQvYXNzZXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsdUNBQXFDLHFDQUFxQyxDQUFDLENBQUE7QUFDM0UscUNBQW1DLG1DQUFtQyxDQUFDLENBQUE7QUFDdkUsc0NBQW9DLG9DQUFvQyxDQUFDLENBQUE7QUFDekUsMkNBQXdDLHlDQUF5QyxDQUFDLENBQUE7QUFTbEY7SUFBQTtJQUEyQixDQUFDO0lBTjVCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN2QixZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLDZDQUFvQixFQUFFLHlDQUFrQixFQUFFLDJDQUFtQixFQUFFLG9EQUF1QixDQUFDO1lBQ3RILE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDNUIsQ0FBQzs7bUJBQUE7SUFFeUIsa0JBQUM7QUFBRCxDQUEzQixBQUE0QixJQUFBO0FBQWYsbUJBQVcsY0FBSSxDQUFBIiwiZmlsZSI6ImFwcC8rYXNzZXQvYXNzZXQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFzc2V0Q29tcG9uZW50IH0gZnJvbSAnLi9hc3NldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQXNzZXREZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXNzZXQtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBc3NldERhdGFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXNzZXQtZGF0YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXNzZXRTaGFyZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hc3NldC1zaGFyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXNzZXRTaGFyZUxpbmtDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXNzZXQtc2hhcmUtbGluay5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1NoYXJlZE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQXNzZXRDb21wb25lbnQsIEFzc2V0RGV0YWlsQ29tcG9uZW50LCBBc3NldERhdGFDb21wb25lbnQsIEFzc2V0U2hhcmVDb21wb25lbnQsIEFzc2V0U2hhcmVMaW5rQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbQXNzZXRDb21wb25lbnRdLFxufSlcblxuZXhwb3J0IGNsYXNzIEFzc2V0TW9kdWxlIHsgfVxuIl19
