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
var authentication_data_service_1 = require('../../shared/services/authentication.data.service');
var router_1 = require('@angular/router');
var current_user_model_1 = require('../../shared/services/current-user.model');
var ui_config_1 = require('../../shared/services/ui.config');
var document_service_1 = require('../services/document.service');
var pendo_service_1 = require('../../shared/services/pendo.service');
var LoginComponent = (function () {
    function LoginComponent(authentication, router, currentUser, document, uiConfig, route, pendo) {
        this.authentication = authentication;
        this.router = router;
        this.currentUser = currentUser;
        this.document = document;
        this.uiConfig = uiConfig;
        this.route = route;
        this.pendo = pendo;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubscription = this.route.params.subscribe(function (params) {
            if (params.newUser === 'true') {
                _this.firstTimeUser = true;
            }
        });
        this.activeTos = this.document.downloadActiveTosDocument();
        this.configSubscription =
            this.uiConfig.get('login').subscribe(function (config) {
                return _this.config = config.config;
            });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.configSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    };
    LoginComponent.prototype.onSubmit = function (user) {
        var _this = this;
        this.authentication.create(user).take(1).subscribe(function (res) {
            if (res.documentsRequiringAgreement && res.documentsRequiringAgreement.indexOf('TOS') > -1) {
                _this.termsDialog.show();
            }
            else {
                _this.router.navigate(['/']);
            }
            _this.currentUser.set(res.user, res.token.token);
            if (portal === 'commerce')
                _this.pendo.initialize(res.user);
        });
    };
    LoginComponent.prototype.agreeToTermsAndClose = function () {
        this.document.agreeUserToTerms();
        this.router.navigate(['/']);
    };
    __decorate([
        core_1.ViewChild('termsDialog'), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "termsDialog", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-component',
            templateUrl: 'login.html',
        }), 
        __metadata('design:paramtypes', [authentication_data_service_1.Authentication, router_1.Router, current_user_model_1.CurrentUser, document_service_1.DocumentService, ui_config_1.UiConfig, router_1.ActivatedRoute, pendo_service_1.PendoService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rdXNlci1tYW5hZ2VtZW50Lytsb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3RCxlQUFlLENBQUMsQ0FBQTtBQUV4RSw0Q0FBK0IsbURBQW1ELENBQUMsQ0FBQTtBQUNuRix1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCxtQ0FBNEIsMENBQTBDLENBQUMsQ0FBQTtBQUN2RSwwQkFBeUIsaUNBQWlDLENBQUMsQ0FBQTtBQUMzRCxpQ0FBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQUMvRCw4QkFBNkIscUNBQXFDLENBQUMsQ0FBQTtBQWNuRTtJQVFFLHdCQUNVLGNBQThCLEVBQzlCLE1BQWMsRUFDZCxXQUF3QixFQUN4QixRQUF5QixFQUN6QixRQUFrQixFQUNsQixLQUFxQixFQUNyQixLQUFtQjtRQU5uQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBYztJQUM3QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQVc7WUFDL0QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUM1QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsa0JBQWtCO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQVc7Z0JBQy9DLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTTtZQUEzQixDQUEyQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxpQ0FBUSxHQUFmLFVBQWdCLElBQVM7UUFBekIsaUJBVUM7UUFUQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUNyRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLElBQUksR0FBRyxDQUFDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNGLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QixDQUFDO1lBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUM7Z0JBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDZDQUFvQixHQUEzQjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQTlDRDtRQUFDLGdCQUFTLENBQUMsYUFBYSxDQUFDOzt1REFBQTtJQVYzQjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsWUFBWTtTQUMxQixDQUFDOztzQkFBQTtJQXFERixxQkFBQztBQUFELENBbkRBLEFBbURDLElBQUE7QUFuRFksc0JBQWMsaUJBbUQxQixDQUFBIiwiZmlsZSI6ImFwcC8rdXNlci1tYW5hZ2VtZW50Lytsb2dpbi9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb24gfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aGVudGljYXRpb24uZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvY3VycmVudC11c2VyLm1vZGVsJztcbmltcG9ydCB7IFVpQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VpLmNvbmZpZyc7XG5pbXBvcnQgeyBEb2N1bWVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kb2N1bWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFBlbmRvU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wZW5kby5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4Jztcbi8qKlxuICogTG9naW4gcGFnZSBjb21wb25lbnQgLSByZW5kZXJzIGxvZ2luIHBhZ2UgYW5kIGhhbmRsZXMgbG9naW4gZm9ybSBzdWJtaXNzaW9uXG4gKi9cblxuZGVjbGFyZSB2YXIgcG9ydGFsOiBzdHJpbmc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2xvZ2luLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnbG9naW4uaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBjb25maWc6IGFueTtcbiAgcHVibGljIGFjdGl2ZVRvczogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgZmlyc3RUaW1lVXNlcjogYm9vbGVhbjtcbiAgQFZpZXdDaGlsZCgndGVybXNEaWFsb2cnKSBwdWJsaWMgdGVybXNEaWFsb2c6IGFueTtcbiAgcHJpdmF0ZSBjb25maWdTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSByb3V0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb246IEF1dGhlbnRpY2F0aW9uLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBjdXJyZW50VXNlcjogQ3VycmVudFVzZXIsXG4gICAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdWlDb25maWc6IFVpQ29uZmlnLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcGVuZG86IFBlbmRvU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZVN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgIGlmIChwYXJhbXMubmV3VXNlciA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHRoaXMuZmlyc3RUaW1lVXNlciA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5hY3RpdmVUb3MgPSB0aGlzLmRvY3VtZW50LmRvd25sb2FkQWN0aXZlVG9zRG9jdW1lbnQoKTtcbiAgICB0aGlzLmNvbmZpZ1N1YnNjcmlwdGlvbiA9XG4gICAgICB0aGlzLnVpQ29uZmlnLmdldCgnbG9naW4nKS5zdWJzY3JpYmUoKGNvbmZpZzogYW55KSA9PlxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZy5jb25maWcpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jb25maWdTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnJvdXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgb25TdWJtaXQodXNlcjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5hdXRoZW50aWNhdGlvbi5jcmVhdGUodXNlcikudGFrZSgxKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5kb2N1bWVudHNSZXF1aXJpbmdBZ3JlZW1lbnQgJiYgcmVzLmRvY3VtZW50c1JlcXVpcmluZ0FncmVlbWVudC5pbmRleE9mKCdUT1MnKSA+IC0xKSB7XG4gICAgICAgIHRoaXMudGVybXNEaWFsb2cuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50VXNlci5zZXQocmVzLnVzZXIsIHJlcy50b2tlbi50b2tlbik7XG4gICAgICBpZiAocG9ydGFsID09PSAnY29tbWVyY2UnKSB0aGlzLnBlbmRvLmluaXRpYWxpemUocmVzLnVzZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFncmVlVG9UZXJtc0FuZENsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuZG9jdW1lbnQuYWdyZWVVc2VyVG9UZXJtcygpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgfVxufVxuIl19
