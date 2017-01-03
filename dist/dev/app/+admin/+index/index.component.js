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
var current_user_model_1 = require('../../shared/services/current-user.model');
var admin_service_1 = require('../services/admin.service');
var ui_config_1 = require('../../shared/services/ui.config');
var ui_state_1 = require('../../shared/services/ui.state');
var IndexComponent = (function () {
    function IndexComponent(currentUser, adminService, route, uiConfig, uiState, router) {
        this.currentUser = currentUser;
        this.adminService = adminService;
        this.route = route;
        this.uiConfig = uiConfig;
        this.uiState = uiState;
        this.router = router;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.routeSubscription = this.routeChanges();
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    IndexComponent.prototype.routeChanges = function () {
        var _this = this;
        return this.route.params.subscribe(function (params) {
            _this.toggleFlag = params['d'];
            _this.buildRouteParams(params);
            _this.resourceType = _this.route.snapshot.url[1].path;
            _this.currentComponent = _this.resourceType.charAt(0).toUpperCase() + _this.resourceType.slice(1);
            _this.uiConfig.get('admin' + _this.currentComponent)
                .take(1).subscribe(function (config) {
                _this.config = config.config;
            });
        });
    };
    IndexComponent.prototype.getIndex = function () {
        this.adminService.getResourceIndex(this.params, this.resourceType);
    };
    IndexComponent.prototype.navigateToPageUrl = function (i) {
        this.updateRouteParams({ i: i });
        this.router.navigate(['/admin/resource/' + this.resourceType, this.params]);
    };
    IndexComponent.prototype.navigateToSortUrl = function (sortParams) {
        var params = Object.assign(this.updateRouteParams(sortParams), { 'i': 1 });
        this.router.navigate(['/admin/resource/' + this.resourceType, params]);
    };
    IndexComponent.prototype.navigateToFilterUrl = function (filterParams) {
        var searchTerms = this.adminService.buildSearchParameters(filterParams);
        var params = Object.assign(this.updateRouteParams(searchTerms), { 'i': 1 });
        this.router.navigate(['/admin/resource/' + this.resourceType, params]);
    };
    IndexComponent.prototype.mergeFormValues = function (resource) {
        this.resource = resource;
        this.formItems = this.config.editForm.items.map(function (field) {
            field.value = resource[field.name];
            return field;
        });
    };
    IndexComponent.prototype.onEditSubmit = function (data) {
        var _this = this;
        Object.assign(this.resource, data);
        this.adminService.putResource(this.resourceType, this.resource).take(1).subscribe(function (data) {
            _this.getIndex();
        });
    };
    IndexComponent.prototype.onNewSubmit = function (data) {
        var _this = this;
        this.adminService.postResource(this.resourceType, data).take(1).subscribe(function (data) {
            _this.getIndex();
        });
    };
    IndexComponent.prototype.buildRouteParams = function (params) {
        var s, d, i, n, fields, values;
        s = params['s'] || 'createdOn';
        d = params['d'];
        i = params['i'] || '1';
        n = params['n'] || '10';
        fields = (params['fields'] === 'true') ? '' : params['fields'];
        values = (params['values'] === 'true') ? '' : params['values'];
        this.params = { i: i, n: n, s: s, d: d, fields: fields, values: values };
    };
    IndexComponent.prototype.updateRouteParams = function (dynamicParams) {
        return Object.assign(this.params, dynamicParams);
    };
    IndexComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-index',
            templateUrl: 'index.html',
        }), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser, admin_service_1.AdminService, router_1.ActivatedRoute, ui_config_1.UiConfig, ui_state_1.UiState, router_1.Router])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK2luZGV4L2luZGV4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBQzdELHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pELG1DQUE0QiwwQ0FBMEMsQ0FBQyxDQUFBO0FBQ3ZFLDhCQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBSXpELDBCQUF5QixpQ0FBaUMsQ0FBQyxDQUFBO0FBQzNELHlCQUF3QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBVXpEO0lBVUUsd0JBQW1CLFdBQXdCLEVBQ2xDLFlBQTBCLEVBQzFCLEtBQXFCLEVBQ3JCLFFBQWtCLEVBQ2xCLE9BQWdCLEVBQ2hCLE1BQWM7UUFMSixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNsQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFNUIsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVNLHFDQUFZLEdBQW5CO1FBQUEsaUJBV0M7UUFWQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN2QyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsS0FB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TSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQW5HSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLFlBQVk7U0FDMUIsQ0FBQzs7c0JBQUE7SUFnR0YscUJBQUM7QUFBRCxDQTlGQSxBQThGQyxJQUFBO0FBOUZZLHNCQUFjLGlCQThGMUIsQ0FBQSIsImZpbGUiOiJhcHAvK2FkbWluLytpbmRleC9pbmRleC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBVaUNvbXBvbmVudHNBLFxuICBBZG1pblVybFBhcmFtcyxcbiAgQWRtaW5Gb3JtUGFyYW1zXG59IGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL2FkbWluLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBBZG1pblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hZG1pbi5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1GaWVsZHMgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9mb3Jtcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9hZG1pbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVWlDb25maWcgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdWkuY29uZmlnJztcbmltcG9ydCB7IFVpU3RhdGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdWkuc3RhdGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYWRtaW4taW5kZXgnLFxuICB0ZW1wbGF0ZVVybDogJ2luZGV4Lmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIEluZGV4Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgcGFyYW1zOiBBZG1pblVybFBhcmFtcztcbiAgcHVibGljIHRvZ2dsZUZsYWc6IHN0cmluZztcbiAgcHVibGljIHJlc291cmNlVHlwZTogc3RyaW5nO1xuICBwdWJsaWMgY3VycmVudENvbXBvbmVudDogc3RyaW5nO1xuICBwdWJsaWMgZm9ybUl0ZW1zOiBBcnJheTxGb3JtRmllbGRzPjtcbiAgcHVibGljIGNvbmZpZzogYW55O1xuICBwdWJsaWMgcmVzb3VyY2U6IFVzZXIgfCBBY2NvdW50O1xuICBwcml2YXRlIHJvdXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlcixcbiAgICBwdWJsaWMgYWRtaW5TZXJ2aWNlOiBBZG1pblNlcnZpY2UsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgdWlDb25maWc6IFVpQ29uZmlnLFxuICAgIHB1YmxpYyB1aVN0YXRlOiBVaVN0YXRlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZVN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGVDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgcm91dGVDaGFuZ2VzKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy50b2dnbGVGbGFnID0gcGFyYW1zWydkJ107XG4gICAgICB0aGlzLmJ1aWxkUm91dGVQYXJhbXMocGFyYW1zKTtcbiAgICAgIHRoaXMucmVzb3VyY2VUeXBlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbMV0ucGF0aDtcbiAgICAgIHRoaXMuY3VycmVudENvbXBvbmVudCA9IHRoaXMucmVzb3VyY2VUeXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5yZXNvdXJjZVR5cGUuc2xpY2UoMSk7XG4gICAgICB0aGlzLnVpQ29uZmlnLmdldCgnYWRtaW4nICsgdGhpcy5jdXJyZW50Q29tcG9uZW50KVxuICAgICAgICAudGFrZSgxKS5zdWJzY3JpYmUoKGNvbmZpZzogVWlDb21wb25lbnRzQSkgPT4ge1xuICAgICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnLmNvbmZpZztcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SW5kZXgoKTogdm9pZCB7XG4gICAgdGhpcy5hZG1pblNlcnZpY2UuZ2V0UmVzb3VyY2VJbmRleCh0aGlzLnBhcmFtcywgdGhpcy5yZXNvdXJjZVR5cGUpO1xuICB9XG5cbiAgcHVibGljIG5hdmlnYXRlVG9QYWdlVXJsKGk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUm91dGVQYXJhbXMoeyBpIH0pO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL3Jlc291cmNlLycgKyB0aGlzLnJlc291cmNlVHlwZSwgdGhpcy5wYXJhbXNdKTtcbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvU29ydFVybChzb3J0UGFyYW1zOiBBZG1pblVybFBhcmFtcyk6IHZvaWQge1xuICAgIGxldCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHRoaXMudXBkYXRlUm91dGVQYXJhbXMoc29ydFBhcmFtcyksIHsgJ2knOiAxIH0pO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL3Jlc291cmNlLycgKyB0aGlzLnJlc291cmNlVHlwZSwgcGFyYW1zXSk7XG4gIH1cblxuICBwdWJsaWMgbmF2aWdhdGVUb0ZpbHRlclVybChmaWx0ZXJQYXJhbXM6IEFkbWluRm9ybVBhcmFtcyk6IHZvaWQge1xuICAgIGxldCBzZWFyY2hUZXJtcyA9IHRoaXMuYWRtaW5TZXJ2aWNlLmJ1aWxkU2VhcmNoUGFyYW1ldGVycyhmaWx0ZXJQYXJhbXMpO1xuICAgIGxldCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHRoaXMudXBkYXRlUm91dGVQYXJhbXMoc2VhcmNoVGVybXMpLCB7ICdpJzogMSB9KTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9yZXNvdXJjZS8nICsgdGhpcy5yZXNvdXJjZVR5cGUsIHBhcmFtc10pO1xuICB9XG5cbiAgcHVibGljIG1lcmdlRm9ybVZhbHVlcyhyZXNvdXJjZTogVXNlciB8IEFjY291bnQpOiB2b2lkIHtcbiAgICB0aGlzLnJlc291cmNlID0gcmVzb3VyY2U7XG4gICAgdGhpcy5mb3JtSXRlbXMgPSB0aGlzLmNvbmZpZy5lZGl0Rm9ybS5pdGVtcy5tYXAoKGZpZWxkOiBGb3JtRmllbGRzKSA9PiB7XG4gICAgICBmaWVsZC52YWx1ZSA9IHJlc291cmNlW2ZpZWxkLm5hbWVdO1xuICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uRWRpdFN1Ym1pdChkYXRhOiBVc2VyIHwgQWNjb3VudCk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5yZXNvdXJjZSwgZGF0YSk7XG4gICAgdGhpcy5hZG1pblNlcnZpY2UucHV0UmVzb3VyY2UodGhpcy5yZXNvdXJjZVR5cGUsIHRoaXMucmVzb3VyY2UpLnRha2UoMSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5nZXRJbmRleCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uTmV3U3VibWl0KGRhdGE6IFVzZXIgfCBBY2NvdW50KTogdm9pZCB7XG4gICAgdGhpcy5hZG1pblNlcnZpY2UucG9zdFJlc291cmNlKHRoaXMucmVzb3VyY2VUeXBlLCBkYXRhKS50YWtlKDEpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuZ2V0SW5kZXgoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBidWlsZFJvdXRlUGFyYW1zKHBhcmFtczogQWRtaW5VcmxQYXJhbXMpOiB2b2lkIHtcbiAgICBsZXQgczogc3RyaW5nLCBkOiBzdHJpbmcsIGk6IHN0cmluZywgbjogc3RyaW5nLCBmaWVsZHM6IHN0cmluZywgdmFsdWVzOiBzdHJpbmc7XG4gICAgcyA9IHBhcmFtc1sncyddIHx8ICdjcmVhdGVkT24nO1xuICAgIGQgPSBwYXJhbXNbJ2QnXTtcbiAgICBpID0gcGFyYW1zWydpJ10gfHwgJzEnO1xuICAgIG4gPSBwYXJhbXNbJ24nXSB8fCAnMTAnO1xuICAgIC8vIEhhY2sgYmVjYXVzZSBicm93c2VyIG1ha2VzIGVtcHR5IHZhbHVlcyAndHJ1ZScgaW4gdGhlIHVybFxuICAgIGZpZWxkcyA9IChwYXJhbXNbJ2ZpZWxkcyddID09PSAndHJ1ZScpID8gJycgOiBwYXJhbXNbJ2ZpZWxkcyddO1xuICAgIHZhbHVlcyA9IChwYXJhbXNbJ3ZhbHVlcyddID09PSAndHJ1ZScpID8gJycgOiBwYXJhbXNbJ3ZhbHVlcyddO1xuICAgIHRoaXMucGFyYW1zID0geyBpLCBuLCBzLCBkLCBmaWVsZHMsIHZhbHVlcyB9O1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSb3V0ZVBhcmFtcyhkeW5hbWljUGFyYW1zOiBBZG1pblVybFBhcmFtcykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMucGFyYW1zLCBkeW5hbWljUGFyYW1zKTtcbiAgfVxufVxuIl19
