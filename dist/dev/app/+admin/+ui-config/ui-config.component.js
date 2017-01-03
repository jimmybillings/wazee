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
var config_service_1 = require('../services/config.service');
var api_config_1 = require('../../shared/services/api.config');
var ui_config_1 = require('../../shared/services/ui.config');
var UiConfigComponent = (function () {
    function UiConfigComponent(router, apiConfig, uiConfig, route, configService) {
        this.router = router;
        this.apiConfig = apiConfig;
        this.uiConfig = uiConfig;
        this.route = route;
        this.configService = configService;
        this.typeSelect = ['text', 'date', 'checkbox', 'email', 'password', 'select', 'radio', 'table header'];
    }
    UiConfigComponent.prototype.ngOnInit = function () {
        this.portal = this.apiConfig.getPortal();
        this.routeSubscription = this.routeChanges();
    };
    UiConfigComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    UiConfigComponent.prototype.routeChanges = function () {
        var _this = this;
        return this.route.params.subscribe(function (params) {
            _this.sites = [];
            _this.siteName = params['site'];
            if (_this.portal !== 'core' && !(_this.portal === _this.siteName)) {
                _this.router.navigate(['admin/ui-config/', _this.portal]);
            }
            else {
                _this.getConfig();
                _this.configService.getUiConfigIndex().take(1).subscribe(function (data) {
                    data.reduce(function (previous, current) {
                        previous.push(current.siteName);
                        return previous;
                    }, _this.sites);
                });
            }
        });
    };
    UiConfigComponent.prototype.getConfig = function () {
        var _this = this;
        this.configService.showUiConfig(this.siteName).take(1).subscribe(function (data) {
            _this.config = data;
            _this.components = data.components;
        });
    };
    UiConfigComponent.prototype.goToSite = function (siteName) {
        this.router.navigate(['admin/ui-config/', siteName]);
    };
    UiConfigComponent.prototype.show = function (component) {
        this.reset();
        this.currentComponent = component;
        this.subComponents = this.components[component].config;
    };
    UiConfigComponent.prototype.buildForm = function (configOption) {
        this.configOptions = null;
        this.form = this.subComponents[configOption];
    };
    UiConfigComponent.prototype.showSubItems = function (configOption) {
        this.currentOption = configOption;
        this.configOptions = this.subComponents[configOption].items;
    };
    UiConfigComponent.prototype.buildSubItemForm = function (configOptionIndex) {
        this.form = this.configOptions[configOptionIndex];
    };
    UiConfigComponent.prototype.removeItem = function (itemIndex) {
        this.configOptions.splice(itemIndex, 1);
        this.update(this.config);
        this.form = null;
    };
    UiConfigComponent.prototype.addItem = function (form) {
        var blankForm = { name: '', label: '', type: '', value: '', validation: '' };
        if (['text', 'email', 'password', 'date'].indexOf(form.type) > -1) {
            blankForm.type = form.type;
        }
        else if (['radio', 'select', 'checkbox'].indexOf(form.type) > -1) {
            blankForm.type = form.type;
            Object.assign(blankForm, { options: '' });
        }
        else {
            blankForm = { name: '', label: '' };
        }
        this.form = blankForm;
        this.configOptions.push(this.form);
    };
    UiConfigComponent.prototype.onSubmit = function () {
        this.update(this.config);
        this.reset();
    };
    UiConfigComponent.prototype.reset = function () {
        this.currentComponent = null;
        this.currentOption = null;
        this.subComponents = null;
        this.configOptions = null;
        this.form = null;
    };
    UiConfigComponent.prototype.update = function (formValue) {
        var _this = this;
        this.configService.updateUiConfig(formValue).take(1).subscribe(function (res) {
            _this.uiConfig.set(res.json());
        });
    };
    UiConfigComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-ui-config',
            templateUrl: 'ui-config.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, api_config_1.ApiConfig, ui_config_1.UiConfig, router_1.ActivatedRoute, config_service_1.ConfigService])
    ], UiConfigComponent);
    return UiConfigComponent;
}());
exports.UiConfigComponent = UiConfigComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK3VpLWNvbmZpZy91aS1jb25maWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsK0JBQThCLDRCQUE0QixDQUFDLENBQUE7QUFDM0QsMkJBQTBCLGtDQUFrQyxDQUFDLENBQUE7QUFDN0QsMEJBQXlCLGlDQUFpQyxDQUFDLENBQUE7QUFTM0Q7SUFlRSwyQkFBbUIsTUFBYyxFQUN4QixTQUFvQixFQUNwQixRQUFrQixFQUNsQixLQUFxQixFQUNyQixhQUE0QjtRQUpsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVNLHdDQUFZLEdBQW5CO1FBQUEsaUJBZ0JDO1FBZkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDdkMsS0FBSSxDQUFD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LElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVNLGtDQUFNLEdBQWIsVUFBYyxTQUE0QjtRQUExQyxpQkFJQztRQUhDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQ2pFLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTVISDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsZ0JBQWdCO1NBQzlCLENBQUM7O3lCQUFBO0lBeUhGLHdCQUFDO0FBQUQsQ0F2SEEsQUF1SEMsSUFBQTtBQXZIWSx5QkFBaUIsb0JBdUg3QixDQUFBIiwiZmlsZSI6ImFwcC8rYWRtaW4vK3VpLWNvbmZpZy91aS1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVWlDb25maWdJbnRlcmZhY2UsXG4gIFRhYmxlSGVhZGVycyxcbiAgVWlDb21wb25lbnRzXG59IGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL2FkbWluLmludGVyZmFjZSc7XG5pbXBvcnQgeyBGb3JtRmllbGRzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvZm9ybXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaUNvbmZpZyB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuY29uZmlnJztcbmltcG9ydCB7IFVpQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VpLmNvbmZpZyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYWRtaW4tdWktY29uZmlnJyxcbiAgdGVtcGxhdGVVcmw6ICd1aS1jb25maWcuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgVWlDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBwb3J0YWw6IHN0cmluZztcbiAgcHVibGljIHNpdGVOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBjb25maWdUeXBlOiBzdHJpbmc7XG4gIHB1YmxpYyBzaXRlczogQXJyYXk8c3RyaW5nPjtcbiAgcHVibGljIGN1cnJlbnRPcHRpb246IHN0cmluZztcbiAgcHVibGljIGN1cnJlbnRDb21wb25lbnQ6IHN0cmluZztcbiAgcHVibGljIHR5cGVTZWxlY3Q6IEFycmF5PHN0cmluZz47XG4gIHB1YmxpYyBjb25maWc6IFVpQ29uZmlnSW50ZXJmYWNlO1xuICBwdWJsaWMgY29tcG9uZW50czogVWlDb21wb25lbnRzO1xuICBwdWJsaWMgc3ViQ29tcG9uZW50czogYW55O1xuICBwdWJsaWMgZm9ybTogVGFibGVIZWFkZXJzIHwgRm9ybUZpZWxkcztcbiAgcHVibGljIGNvbmZpZ09wdGlvbnM6IEFycmF5PGFueT47XG4gIHByaXZhdGUgcm91dGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIGFwaUNvbmZpZzogQXBpQ29uZmlnLFxuICAgIHB1YmxpYyB1aUNvbmZpZzogVWlDb25maWcsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMudHlwZVNlbGVjdCA9IFsndGV4dCcsICdkYXRlJywgJ2NoZWNrYm94JywgJ2VtYWlsJywgJ3Bhc3N3b3JkJywgJ3NlbGVjdCcsICdyYWRpbycsICd0YWJsZSBoZWFkZXInXTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucG9ydGFsID0gdGhpcy5hcGlDb25maWcuZ2V0UG9ydGFsKCk7XG4gICAgdGhpcy5yb3V0ZVN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGVDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnJvdXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgcm91dGVDaGFuZ2VzKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5zaXRlcyA9IFtdO1xuICAgICAgdGhpcy5zaXRlTmFtZSA9IHBhcmFtc1snc2l0ZSddO1xuICAgICAgaWYgKHRoaXMucG9ydGFsICE9PSAnY29yZScgJiYgISh0aGlzLnBvcnRhbCA9PT0gdGhpcy5zaXRlTmFtZSkpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhZG1pbi91aS1jb25maWcvJywgdGhpcy5wb3J0YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgICAgIHRoaXMuY29uZmlnU2VydmljZS5nZXRVaUNvbmZpZ0luZGV4KCkudGFrZSgxKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgZGF0YS5yZWR1Y2UoKHByZXZpb3VzOiBBcnJheTxzdHJpbmc+LCBjdXJyZW50OiBVaUNvbmZpZ0ludGVyZmFjZSkgPT4ge1xuICAgICAgICAgICAgcHJldmlvdXMucHVzaChjdXJyZW50LnNpdGVOYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cztcbiAgICAgICAgICB9LCB0aGlzLnNpdGVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnU2VydmljZS5zaG93VWlDb25maWcodGhpcy5zaXRlTmFtZSkudGFrZSgxKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmNvbmZpZyA9IGRhdGE7XG4gICAgICB0aGlzLmNvbXBvbmVudHMgPSBkYXRhLmNvbXBvbmVudHM7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ29Ub1NpdGUoc2l0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnYWRtaW4vdWktY29uZmlnLycsIHNpdGVOYW1lXSk7XG4gIH1cblxuICBwdWJsaWMgc2hvdyhjb21wb25lbnQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgdGhpcy5zdWJDb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzW2NvbXBvbmVudF0uY29uZmlnO1xuICB9XG5cbiAgcHVibGljIGJ1aWxkRm9ybShjb25maWdPcHRpb246IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnT3B0aW9ucyA9IG51bGw7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5zdWJDb21wb25lbnRzW2NvbmZpZ09wdGlvbl07XG4gIH1cblxuICBwdWJsaWMgc2hvd1N1Ykl0ZW1zKGNvbmZpZ09wdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50T3B0aW9uID0gY29uZmlnT3B0aW9uO1xuICAgIHRoaXMuY29uZmlnT3B0aW9ucyA9IHRoaXMuc3ViQ29tcG9uZW50c1tjb25maWdPcHRpb25dLml0ZW1zO1xuICB9XG5cbiAgcHVibGljIGJ1aWxkU3ViSXRlbUZvcm0oY29uZmlnT3B0aW9uSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuY29uZmlnT3B0aW9uc1tjb25maWdPcHRpb25JbmRleF07XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlSXRlbShpdGVtSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnT3B0aW9ucy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLmNvbmZpZyk7XG4gICAgdGhpcy5mb3JtID0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBhZGRJdGVtKGZvcm06IGFueSk6IHZvaWQge1xuICAgIGxldCBibGFua0Zvcm06IGFueSA9IHsgbmFtZTogJycsIGxhYmVsOiAnJywgdHlwZTogJycsIHZhbHVlOiAnJywgdmFsaWRhdGlvbjogJycgfTtcbiAgICBpZiAoWyd0ZXh0JywgJ2VtYWlsJywgJ3Bhc3N3b3JkJywgJ2RhdGUnXS5pbmRleE9mKGZvcm0udHlwZSkgPiAtMSkge1xuICAgICAgYmxhbmtGb3JtLnR5cGUgPSBmb3JtLnR5cGU7XG4gICAgfSBlbHNlIGlmIChbJ3JhZGlvJywgJ3NlbGVjdCcsICdjaGVja2JveCddLmluZGV4T2YoZm9ybS50eXBlKSA+IC0xKSB7XG4gICAgICBibGFua0Zvcm0udHlwZSA9IGZvcm0udHlwZTtcbiAgICAgIE9iamVjdC5hc3NpZ24oYmxhbmtGb3JtLCB7IG9wdGlvbnM6ICcnIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBibGFua0Zvcm0gPSB7IG5hbWU6ICcnLCBsYWJlbDogJycgfTtcbiAgICB9XG4gICAgdGhpcy5mb3JtID0gYmxhbmtGb3JtO1xuICAgIHRoaXMuY29uZmlnT3B0aW9ucy5wdXNoKHRoaXMuZm9ybSk7XG4gIH1cblxuICBwdWJsaWMgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUodGhpcy5jb25maWcpO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudE9wdGlvbiA9IG51bGw7XG4gICAgdGhpcy5zdWJDb21wb25lbnRzID0gbnVsbDtcbiAgICB0aGlzLmNvbmZpZ09wdGlvbnMgPSBudWxsO1xuICAgIHRoaXMuZm9ybSA9IG51bGw7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGZvcm1WYWx1ZTogVWlDb25maWdJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ1NlcnZpY2UudXBkYXRlVWlDb25maWcoZm9ybVZhbHVlKS50YWtlKDEpLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICB0aGlzLnVpQ29uZmlnLnNldChyZXMuanNvbigpKTtcbiAgICB9KTtcbiAgfVxufVxuIl19
