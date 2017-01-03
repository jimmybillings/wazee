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
var api_service_1 = require('../../shared/services/api.service');
var api_interface_1 = require('../../shared/interfaces/api.interface');
var TranslateService = (function () {
    function TranslateService(api) {
        this.api = api;
    }
    TranslateService.prototype.getTrStrings = function (site, lang) {
        return this.api.get(api_interface_1.Api.Identities, "translation/" + site + "/" + lang + ".json");
    };
    TranslateService.prototype.put = function (text, siteName, language) {
        var _this = this;
        return this.api.get(api_interface_1.Api.Identities, 'translation/searchFields', { parameters: { fields: 'siteName,language', values: siteName + "," + language } }).flatMap(function (response) {
            var id = response['items'][0].id;
            var name = siteName + "_" + language;
            var newText = { id: id, siteName: siteName, language: language, name: name, text: text };
            return _this.api.put(api_interface_1.Api.Identities, "translation/" + id, { body: newText });
        });
    };
    TranslateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], TranslateService);
    return TranslateService;
}());
exports.TranslateService = TranslateService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vc2VydmljZXMvdHJhbnNsYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUczQyw0QkFBMkIsbUNBQW1DLENBQUMsQ0FBQTtBQUMvRCw4QkFBb0IsdUNBQXVDLENBQUMsQ0FBQTtBQUc1RDtJQUNFLDBCQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFJLENBQUM7SUFFakMsdUNBQVksR0FBbkIsVUFBb0IsSUFBWSxFQUFFLElBQVk7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFHLENBQUMsVUFBVSxFQUFFLGlCQUFlLElBQUksU0FBSSxJQUFJLFVBQU8sQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTSw4QkFBRyxHQUFWLFVBQVcsSUFBUyxFQUFFLFFBQWdCLEVBQUUsUUFBZ0I7UUFBeEQsaUJBWUM7UUFYQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ2pCLG1CQUFHLENBQUMsVUFBVSxFQUNkLDBCQUEwQixFQUMxQixFQUFFLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUssUUFBUSxTQUFJLFFBQVUsRUFBRSxFQUFFLENBQ25GLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtZQUNoQixJQUFNLEVBQUUsR0FBVyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzNDLElBQU0sSUFBSSxHQUFjLFFBQVEsU0FBSSxRQUFVLENBQUM7WUFDL0MsSUFBTSxPQUFPLEdBQVEsRUFBRSxNQUFFLEVBQUUsa0JBQVEsRUFBRSxrQkFBUSxFQUFFLFVBQUksRUFBRSxVQUFJLEVBQUUsQ0FBQztZQUU1RCxNQUFNLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQUcsQ0FBQyxVQUFVLEVBQUUsaUJBQWUsRUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDOUUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBcEJIO1FBQUMsaUJBQVUsRUFBRTs7d0JBQUE7SUFxQmIsdUJBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLHdCQUFnQixtQkFvQjVCLENBQUEiLCJmaWxlIjoiYXBwLythZG1pbi9zZXJ2aWNlcy90cmFuc2xhdGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBcGkgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9hcGkuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpU2VydmljZSkgeyB9XG5cbiAgcHVibGljIGdldFRyU3RyaW5ncyhzaXRlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBpLmdldChBcGkuSWRlbnRpdGllcywgYHRyYW5zbGF0aW9uLyR7c2l0ZX0vJHtsYW5nfS5qc29uYCk7XG4gIH1cblxuICBwdWJsaWMgcHV0KHRleHQ6IGFueSwgc2l0ZU5hbWU6IHN0cmluZywgbGFuZ3VhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBpLmdldChcbiAgICAgIEFwaS5JZGVudGl0aWVzLFxuICAgICAgJ3RyYW5zbGF0aW9uL3NlYXJjaEZpZWxkcycsXG4gICAgICB7IHBhcmFtZXRlcnM6IHsgZmllbGRzOiAnc2l0ZU5hbWUsbGFuZ3VhZ2UnLCB2YWx1ZXM6IGAke3NpdGVOYW1lfSwke2xhbmd1YWdlfWAgfSB9XG4gICAgKS5mbGF0TWFwKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IGlkOiBudW1iZXIgPSByZXNwb25zZVsnaXRlbXMnXVswXS5pZDtcbiAgICAgIGNvbnN0IG5hbWU6IHN0cmluZyA9IGAke3NpdGVOYW1lfV8ke2xhbmd1YWdlfWA7XG4gICAgICBjb25zdCBuZXdUZXh0OiBhbnkgPSB7IGlkLCBzaXRlTmFtZSwgbGFuZ3VhZ2UsIG5hbWUsIHRleHQgfTtcblxuICAgICAgcmV0dXJuIHRoaXMuYXBpLnB1dChBcGkuSWRlbnRpdGllcywgYHRyYW5zbGF0aW9uLyR7aWR9YCwgeyBib2R5OiBuZXdUZXh0IH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
