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
var forms_1 = require('@angular/forms');
var translate_service_1 = require('../services/translate.service');
var router_1 = require('@angular/router');
var config_service_1 = require('../services/config.service');
var TranslationComponent = (function () {
    function TranslationComponent(fb, trService, route, router, config) {
        this.fb = fb;
        this.trService = trService;
        this.route = route;
        this.router = router;
        this.config = config;
        this.sites = [];
        this.langs = ['en', 'fr', 'de'];
    }
    TranslationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSites();
        this.routeSubscription = this.route.params.subscribe(function (params) {
            _this.site = params['site'];
            _this.lang = params['lang'];
            _this.trService.getTrStrings(_this.site, _this.lang)
                .take(1).subscribe(function (data) {
                _this.strings = data;
                _this.setForm();
            });
        });
    };
    TranslationComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    TranslationComponent.prototype.goToSite = function (site) {
        this.router.navigate(['admin/translations/', site, this.lang]);
    };
    TranslationComponent.prototype.goToLang = function (lang) {
        this.router.navigate(['admin/translations/', this.site, lang]);
    };
    TranslationComponent.prototype.setForm = function () {
        this.trStringForm = this.fb.group({ text: [JSON.stringify(this.strings, undefined, 4), forms_1.Validators.required] });
    };
    TranslationComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        this.trService.put(this.trStringForm.value.text, this.site, this.lang)
            .take(1).subscribe(function (res) {
            _this.trStringForm.controls['text'].setValue(res.text);
        }, function (err) {
        });
    };
    TranslationComponent.prototype.getSites = function () {
        var _this = this;
        this.config.getUiConfigIndex().take(1).subscribe(function (data) {
            return data.reduce(function (previous, current) {
                previous.push(current.siteName);
                return previous;
            }, _this.sites);
        });
    };
    TranslationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'translation-component',
            templateUrl: 'translation.html',
            styles: [".translation {\n              display: block;\n              padding-top:40px;\n            }\n            textarea {\n              width:100%;\n              border: 2px solid lightgrey;\n              padding:20px;\n              display: block;\n              unicode-bidi: embed;\n              white-space: pre;\n            }"
            ]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, translate_service_1.TranslateService, router_1.ActivatedRoute, router_1.Router, config_service_1.ConfigService])
    ], TranslationComponent);
    return TranslationComponent;
}());
exports.TranslationComponent = TranslationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK3RyYW5zbGF0aW9uL3RyYW5zbGF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBQzdELHNCQUFnRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pGLGtDQUFpQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ2pFLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpELCtCQUE4Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBcUIzRDtJQVNFLDhCQUNTLEVBQWUsRUFDZixTQUEyQixFQUMzQixLQUFxQixFQUNyQixNQUFjLEVBQ2QsTUFBcUI7UUFKckIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDekQsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDO2lCQUM5QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBUztnQkFDM0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVNLHVDQUFRLEdBQWYsVUFBZ0IsSUFBWTtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU0sdUNBQVEsR0FBZixVQUFnQixJQUFZO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTSxzQ0FBTyxHQUFkO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakgsQ0FBQztJQUVNLHVDQUFRLEdBQWYsVUFBZ0IsS0FBVTtRQUExQixpQkFRQztRQVBDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ25FLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ04sS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RSxDQUFDLEVBQUUsVUFBQyxHQUFHO1FBRVAsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sdUNBQVEsR0FBaEI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBUztZQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQXVCLEVBQUUsT0FBWTtnQkFDdkQsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDbEIsQ0FBQyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFwRkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixNQUFNLEVBQUUsQ0FBQyw4VUFXRzthQUNYO1NBQ0YsQ0FBQzs7NEJBQUE7SUFvRUYsMkJBQUM7QUFBRCxDQWxFQSxBQWtFQyxJQUFBO0FBbEVZLDRCQUFvQix1QkFrRWhDLENBQUEiLCJmaWxlIjoiYXBwLythZG1pbi8rdHJhbnNsYXRpb24vdHJhbnNsYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3RyYW5zbGF0aW9uLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAndHJhbnNsYXRpb24uaHRtbCcsXG4gIHN0eWxlczogW2AudHJhbnNsYXRpb24ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6NDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB1bmljb2RlLWJpZGk6IGVtYmVkO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgICAgICAgICAgfWBcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgc2l0ZXM6IEFycmF5PHN0cmluZz47XG4gIHB1YmxpYyBsYW5nczogQXJyYXk8c3RyaW5nPjtcbiAgcHJpdmF0ZSBzdHJpbmdzOiBhbnk7XG4gIHByaXZhdGUgc2l0ZTogc3RyaW5nO1xuICBwcml2YXRlIGxhbmc6IHN0cmluZztcbiAgcHJpdmF0ZSB0clN0cmluZ0Zvcm06IEZvcm1Hcm91cDtcbiAgcHJpdmF0ZSByb3V0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHVibGljIHRyU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5zaXRlcyA9IFtdO1xuICAgIHRoaXMubGFuZ3MgPSBbJ2VuJywgJ2ZyJywgJ2RlJ107XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdldFNpdGVzKCk7XG4gICAgdGhpcy5yb3V0ZVN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5zaXRlID0gcGFyYW1zWydzaXRlJ107XG4gICAgICB0aGlzLmxhbmcgPSBwYXJhbXNbJ2xhbmcnXTtcbiAgICAgIHRoaXMudHJTZXJ2aWNlLmdldFRyU3RyaW5ncyh0aGlzLnNpdGUsIHRoaXMubGFuZylcbiAgICAgICAgLnRha2UoMSkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLnN0cmluZ3MgPSBkYXRhO1xuICAgICAgICAgIHRoaXMuc2V0Rm9ybSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMucm91dGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnb1RvU2l0ZShzaXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2FkbWluL3RyYW5zbGF0aW9ucy8nLCBzaXRlLCB0aGlzLmxhbmddKTtcbiAgfVxuXG4gIHB1YmxpYyBnb1RvTGFuZyhsYW5nOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2FkbWluL3RyYW5zbGF0aW9ucy8nLCB0aGlzLnNpdGUsIGxhbmddKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMudHJTdHJpbmdGb3JtID0gdGhpcy5mYi5ncm91cCh7IHRleHQ6IFtKU09OLnN0cmluZ2lmeSh0aGlzLnN0cmluZ3MsIHVuZGVmaW5lZCwgNCksIFZhbGlkYXRvcnMucmVxdWlyZWRdIH0pO1xuICB9XG5cbiAgcHVibGljIG9uU3VibWl0KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMudHJTZXJ2aWNlLnB1dCh0aGlzLnRyU3RyaW5nRm9ybS52YWx1ZS50ZXh0LCB0aGlzLnNpdGUsIHRoaXMubGFuZylcbiAgICAgIC50YWtlKDEpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAoPEZvcm1Db250cm9sPnRoaXMudHJTdHJpbmdGb3JtLmNvbnRyb2xzWyd0ZXh0J10pLnNldFZhbHVlKHJlcy50ZXh0KTtcbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgLy8gZG8gc29tZXRoaW5nIGhlcmVcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaXRlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZy5nZXRVaUNvbmZpZ0luZGV4KCkudGFrZSgxKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGEucmVkdWNlKChwcmV2aW91czogQXJyYXk8c3RyaW5nPiwgY3VycmVudDogYW55KSA9PiB7XG4gICAgICAgIHByZXZpb3VzLnB1c2goY3VycmVudC5zaXRlTmFtZSk7XG4gICAgICAgIHJldHVybiBwcmV2aW91cztcbiAgICAgIH0sIHRoaXMuc2l0ZXMpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
