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
var wz_notification_component_1 = require('./wz.notification.component');
var router_1 = require('@angular/router');
var ui_config_1 = require('../../services/ui.config');
var WzNotificationService = (function () {
    function WzNotificationService(renderer, resolver, router, uiConfig) {
        var _this = this;
        this.renderer = renderer;
        this.resolver = resolver;
        this.router = router;
        this.uiConfig = uiConfig;
        this.notficationStrategy = [];
        this.configSubscription = this.uiConfig.get('global').subscribe(function (config) {
            if (config.config)
                _this.notficationStrategy = config.config.notifications.items || [];
        });
    }
    WzNotificationService.prototype.ngOnDestroy = function () {
        this.configSubscription.unsubscribe();
    };
    WzNotificationService.prototype.initialize = function (target) {
        this.target = target;
    };
    WzNotificationService.prototype.check = function (state) {
        var activeNotification = this.notficationStrategy.filter(function (notification) { return (state.indexOf(notification.type) > 0); });
        if (activeNotification.length > 0)
            this.create(activeNotification[0].trString);
    };
    WzNotificationService.prototype.create = function (notice, target) {
        var _this = this;
        if (target === void 0) { target = this.target; }
        var componentFactory = this.resolver.resolveComponentFactory(wz_notification_component_1.WzNotificationComponent);
        this.cmpRef = target.createComponent(componentFactory);
        this.cmpRef.instance.notice = notice;
        this.destroyOnClick = setTimeout(function () {
            _this.viewRef = _this.renderer.listenGlobal('body', 'click', function () { return _this.destroy(); });
        }, 200);
        this.setDestroyTimer = setTimeout(function () { return _this.destroy(); }, 4900);
    };
    WzNotificationService.prototype.destroy = function () {
        this.cmpRef.destroy();
        this.viewRef();
        clearTimeout(this.setDestroyTimer);
        clearTimeout(this.destroyOnClick);
    };
    WzNotificationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ComponentFactoryResolver, router_1.Router, ui_config_1.UiConfig])
    ], WzNotificationService);
    return WzNotificationService;
}());
exports.WzNotificationService = WzNotificationService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1ub3RpZmljYXRpb24vd3oubm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwRyxlQUFlLENBQUMsQ0FBQTtBQUMxSCwwQ0FBd0MsNkJBQTZCLENBQUMsQ0FBQTtBQUN0RSx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6QywwQkFBd0IsMEJBQTBCLENBQUMsQ0FBQTtBQUluRDtJQVFFLCtCQUNVLFFBQWtCLEVBQ2xCLFFBQWtDLEVBQ25DLE1BQWMsRUFDZCxRQUFrQjtRQVo3QixpQkErQ0M7UUF0Q1csYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNuQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVJwQix3QkFBbUIsR0FBUSxFQUFFLENBQUM7UUFTbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQVc7WUFDMUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFBQyxLQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUN4RixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFTSwwQ0FBVSxHQUFqQixVQUFrQixNQUF3QjtRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU0scUNBQUssR0FBWixVQUFhLEtBQWE7UUFDeEIsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFVBQUMsWUFBaUIsSUFBSyxPQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FBQztRQUN4SCxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRU0sc0NBQU0sR0FBYixVQUFjLE1BQVcsRUFBRSxNQUFzQztRQUFqRSxpQkFRQztRQVIwQixzQkFBc0MsR0FBdEMsU0FBMkIsSUFBSSxDQUFDLE1BQU07UUFDL0QsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLG1EQUF1QixDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQztZQUMvQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQztRQUNuRixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sdUNBQU8sR0FBZDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUEvQ0g7UUFBQyxpQkFBVSxFQUFFOzs2QkFBQTtJQWdEYiw0QkFBQztBQUFELENBL0NBLEFBK0NDLElBQUE7QUEvQ1ksNkJBQXFCLHdCQStDakMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvbXBvbmVudHMvd3otbm90aWZpY2F0aW9uL3d6Lm5vdGlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50UmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFJlbmRlcmVyLCBPbkRlc3Ryb3ksIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFd6Tm90aWZpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi93ei5ub3RpZmljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVaUNvbmZpZ30gZnJvbSAnLi4vLi4vc2VydmljZXMvdWkuY29uZmlnJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV3pOb3RpZmljYXRpb25TZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHVibGljIGNtcFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHB1YmxpYyB2aWV3UmVmOiBhbnk7XG4gIHB1YmxpYyBzZXREZXN0cm95VGltZXI6IGFueTtcbiAgcHVibGljIG5vdGZpY2F0aW9uU3RyYXRlZ3k6IGFueSA9IFtdO1xuICBwdWJsaWMgZGVzdHJveU9uQ2xpY2s6IGFueTtcbiAgcHJpdmF0ZSBjb25maWdTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSB0YXJnZXQ6IFZpZXdDb250YWluZXJSZWY7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHVpQ29uZmlnOiBVaUNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnU3Vic2NyaXB0aW9uID0gdGhpcy51aUNvbmZpZy5nZXQoJ2dsb2JhbCcpLnN1YnNjcmliZSgoY29uZmlnOiBhbnkpID0+IHtcbiAgICAgIGlmIChjb25maWcuY29uZmlnKSB0aGlzLm5vdGZpY2F0aW9uU3RyYXRlZ3kgPSBjb25maWcuY29uZmlnLm5vdGlmaWNhdGlvbnMuaXRlbXMgfHwgW107XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbmZpZ1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemUodGFyZ2V0OiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gIH1cblxuICBwdWJsaWMgY2hlY2soc3RhdGU6IHN0cmluZykge1xuICAgIGxldCBhY3RpdmVOb3RpZmljYXRpb24gPSB0aGlzLm5vdGZpY2F0aW9uU3RyYXRlZ3kuZmlsdGVyKChub3RpZmljYXRpb246IGFueSkgPT4gKHN0YXRlLmluZGV4T2Yobm90aWZpY2F0aW9uLnR5cGUpID4gMCkpO1xuICAgIGlmIChhY3RpdmVOb3RpZmljYXRpb24ubGVuZ3RoID4gMCkgdGhpcy5jcmVhdGUoYWN0aXZlTm90aWZpY2F0aW9uWzBdLnRyU3RyaW5nKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUobm90aWNlOiBhbnksIHRhcmdldDogVmlld0NvbnRhaW5lclJlZiA9IHRoaXMudGFyZ2V0KSB7XG4gICAgbGV0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFd6Tm90aWZpY2F0aW9uQ29tcG9uZW50KTtcbiAgICB0aGlzLmNtcFJlZiA9IHRhcmdldC5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gICAgdGhpcy5jbXBSZWYuaW5zdGFuY2Uubm90aWNlID0gbm90aWNlO1xuICAgIHRoaXMuZGVzdHJveU9uQ2xpY2sgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudmlld1JlZiA9IHRoaXMucmVuZGVyZXIubGlzdGVuR2xvYmFsKCdib2R5JywgJ2NsaWNrJywgKCkgPT4gdGhpcy5kZXN0cm95KCkpO1xuICAgIH0sIDIwMCk7XG4gICAgdGhpcy5zZXREZXN0cm95VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGVzdHJveSgpLCA0OTAwKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRoaXMuY21wUmVmLmRlc3Ryb3koKTtcbiAgICB0aGlzLnZpZXdSZWYoKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5zZXREZXN0cm95VGltZXIpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmRlc3Ryb3lPbkNsaWNrKTtcbiAgfVxufVxuIl19
