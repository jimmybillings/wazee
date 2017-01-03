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
var ui_config_1 = require('../../shared/services/ui.config');
var config_service_1 = require('../services/config.service');
var router_1 = require('@angular/router');
var ConfigComponent = (function () {
    function ConfigComponent(uiConfig, configService, router) {
        this.uiConfig = uiConfig;
        this.configService = configService;
        this.router = router;
    }
    ConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uiConfig.get('configuration').take(1).subscribe(function (config) {
            _this.headers = config.config.tableHeaders.items;
        });
        this.uiConfigs = this.configService.getUiConfigIndex();
        this.siteConfigs = this.configService.getSiteConfigIndex();
    };
    ConfigComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-config',
            templateUrl: 'config.html'
        }), 
        __metadata('design:paramtypes', [ui_config_1.UiConfig, config_service_1.ConfigService, router_1.Router])
    ], ConfigComponent);
    return ConfigComponent;
}());
exports.ConfigComponent = ConfigComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK2NvbmZpZy9jb25maWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsMEJBQXlCLGlDQUFpQyxDQUFDLENBQUE7QUFFM0QsK0JBQThCLDRCQUE0QixDQUFDLENBQUE7QUFDM0QsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFTekM7SUFLRSx5QkFBbUIsUUFBa0IsRUFDNUIsYUFBNEIsRUFDNUIsTUFBYztRQUZKLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFNUIsa0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDekQsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBckJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDOzt1QkFBQTtJQWtCRixzQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksdUJBQWUsa0JBZ0IzQixDQUFBIiwiZmlsZSI6ImFwcC8rYWRtaW4vK2NvbmZpZy9jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VpLmNvbmZpZyc7XG5pbXBvcnQgeyBUYWJsZUhlYWRlcnMsIEFkbWluU2l0ZVJlc3BvbnNlLCBBZG1pblVpUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9hZG1pbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FkbWluLWNvbmZpZycsXG4gIHRlbXBsYXRlVXJsOiAnY29uZmlnLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHVpQ29uZmlnczogT2JzZXJ2YWJsZTxBZG1pblVpUmVzcG9uc2U+O1xuICBwdWJsaWMgc2l0ZUNvbmZpZ3M6IE9ic2VydmFibGU8QWRtaW5TaXRlUmVzcG9uc2U+O1xuICBwdWJsaWMgaGVhZGVyczogQXJyYXk8VGFibGVIZWFkZXJzPjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdWlDb25maWc6IFVpQ29uZmlnLFxuICAgIHB1YmxpYyBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51aUNvbmZpZy5nZXQoJ2NvbmZpZ3VyYXRpb24nKS50YWtlKDEpLnN1YnNjcmliZShjb25maWcgPT4ge1xuICAgICAgdGhpcy5oZWFkZXJzID0gY29uZmlnLmNvbmZpZy50YWJsZUhlYWRlcnMuaXRlbXM7XG4gICAgfSk7XG4gICAgdGhpcy51aUNvbmZpZ3MgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0VWlDb25maWdJbmRleCgpO1xuICAgIHRoaXMuc2l0ZUNvbmZpZ3MgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0U2l0ZUNvbmZpZ0luZGV4KCk7XG4gIH1cbn1cbiJdfQ==
