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
var forms_1 = require('@angular/forms');
var config_service_1 = require('../services/config.service');
var router_1 = require('@angular/router');
var SecretConfigComponent = (function () {
    function SecretConfigComponent(uiConfig, fb, configService, route) {
        this.uiConfig = uiConfig;
        this.fb = fb;
        this.configService = configService;
        this.route = route;
    }
    SecretConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubscription = this.route.params.subscribe(function (params) {
            _this.site = params['site'];
            _this.configService.showUiConfig(_this.site)
                .take(1).subscribe(function (data) {
                _this.config = data;
                _this.setForm();
            });
        });
    };
    SecretConfigComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    SecretConfigComponent.prototype.setForm = function () {
        this.configForm = this.fb.group({ config: [JSON.stringify(this.config, undefined, 4), forms_1.Validators.required] });
    };
    SecretConfigComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.configService.updateUiConfig(JSON.parse(form))
            .take(1).subscribe(function (res) {
            _this.uiConfig.set(res.json());
            _this.configForm.controls['config'].setValue(JSON.stringify(res.json(), undefined, 4));
        }, function (err) {
        });
    };
    SecretConfigComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'secret-config',
            templateUrl: 'secret-config.html',
            styles: [".secret-config {\n              display: block;\n              padding-top:40px;\n            }\n            textarea {\n              width:100%;\n              border: 2px solid lightgrey;\n              padding:20px;\n              display: block;\n              unicode-bidi: embed;\n              white-space: pre;\n            }"
            ]
        }), 
        __metadata('design:paramtypes', [ui_config_1.UiConfig, forms_1.FormBuilder, config_service_1.ConfigService, router_1.ActivatedRoute])
    ], SecretConfigComponent);
    return SecretConfigComponent;
}());
exports.SecretConfigComponent = SecretConfigComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK3NlY3JldC1jb25maWcvc2VjcmV0LWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCwwQkFBeUIsaUNBQWlDLENBQUMsQ0FBQTtBQUMzRCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRiwrQkFBOEIsNEJBQTRCLENBQUMsQ0FBQTtBQUMzRCx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQXVCakQ7SUFNRSwrQkFBbUIsUUFBa0IsRUFDNUIsRUFBZSxFQUNmLGFBQTRCLEVBQzVCLEtBQXFCO1FBSFgsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUM1QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Ysa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFBSSxDQUFDO0lBRW5DLHdDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3pELEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ3ZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFzQjtnQkFDeEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVNLHVDQUFPLEdBQWQ7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoSCxDQUFDO0lBRU0sd0NBQVEsR0FBZixVQUFnQixJQUFZO1FBQTVCLGlCQVFDO1FBUEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUNyQixLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkcsQ0FBQyxFQUFFLFVBQUMsR0FBRztRQUVQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXpESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxNQUFNLEVBQUUsQ0FBQyxnVkFXRzthQUNIO1NBQ1YsQ0FBQzs7NkJBQUE7SUF5Q0YsNEJBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBO0FBdkNZLDZCQUFxQix3QkF1Q2pDLENBQUEiLCJmaWxlIjoiYXBwLythZG1pbi8rc2VjcmV0LWNvbmZpZy9zZWNyZXQtY29uZmlnLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VpLmNvbmZpZyc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVaVN1YkNvbXBvbmVudHNBIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvYWRtaW4uaW50ZXJmYWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUngnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZWNyZXQtY29uZmlnJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWNyZXQtY29uZmlnLmh0bWwnLFxuICBzdHlsZXM6IFtgLnNlY3JldC1jb25maWcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6NDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB1bmljb2RlLWJpZGk6IGVtYmVkO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgICAgICAgICAgfWBcbiAgICAgICAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgU2VjcmV0Q29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbmZpZzogVWlTdWJDb21wb25lbnRzQTtcbiAgcHJpdmF0ZSBzaXRlOiBzdHJpbmc7XG4gIHByaXZhdGUgY29uZmlnRm9ybTogRm9ybUdyb3VwO1xuICBwcml2YXRlIHJvdXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHVpQ29uZmlnOiBVaUNvbmZpZyxcbiAgICBwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHB1YmxpYyBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGVTdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMuc2l0ZSA9IHBhcmFtc1snc2l0ZSddO1xuICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLnNob3dVaUNvbmZpZyh0aGlzLnNpdGUpXG4gICAgICAgIC50YWtlKDEpLnN1YnNjcmliZSgoZGF0YTogVWlTdWJDb21wb25lbnRzQSkgPT4ge1xuICAgICAgICAgIHRoaXMuY29uZmlnID0gZGF0YTtcbiAgICAgICAgICB0aGlzLnNldEZvcm0oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5yb3V0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHNldEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWdGb3JtID0gdGhpcy5mYi5ncm91cCh7IGNvbmZpZzogW0pTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnLCB1bmRlZmluZWQsIDQpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblN1Ym1pdChmb3JtOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ1NlcnZpY2UudXBkYXRlVWlDb25maWcoSlNPTi5wYXJzZShmb3JtKSlcbiAgICAgIC50YWtlKDEpLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgIHRoaXMudWlDb25maWcuc2V0KHJlcy5qc29uKCkpO1xuICAgICAgICAoPEZvcm1Db250cm9sPnRoaXMuY29uZmlnRm9ybS5jb250cm9sc1snY29uZmlnJ10pLnNldFZhbHVlKEpTT04uc3RyaW5naWZ5KHJlcy5qc29uKCksIHVuZGVmaW5lZCwgNCkpO1xuICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAvLyBkbyBzb21ldGhpbmcgaGVyZVxuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==
