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
var store_1 = require('@ngrx/store');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var api_config_1 = require('./api.config');
require('rxjs/add/operator/take');
var initialState = {
    lang: ''
};
var MULTILINGUAL_ACTIONS = {
    LANG_CHANGE: '[Multilingual] LANG_CHANGE'
};
exports.multilingualActionReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case MULTILINGUAL_ACTIONS.LANG_CHANGE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
var MultilingualService = (function () {
    function MultilingualService(translate, apiConfig, store) {
        this.translate = translate;
        this.apiConfig = apiConfig;
        this.store = store;
        this.baseUrl = this.apiConfig.baseUrl();
        this.setLanguage('en');
        this.getTranslationStrings();
    }
    MultilingualService.prototype.getTranslationStrings = function () {
        var _this = this;
        this.translate.setDefaultLang('en');
        this.store.select('i18n').subscribe(function (state) {
            if (_this.translate.getLangs() && (_this.translate.getLangs().indexOf(state.lang) > -1)) {
                _this.translate.use(state.lang);
            }
            else {
                _this.translate.reloadLang(state.lang).take(1).subscribe(function () {
                    setTimeout(function () { return _this.translate.use(state.lang); }, 0);
                });
            }
        });
    };
    MultilingualService.prototype.setLanguage = function (lang) {
        lang = this.baseUrl.split(':/')[1] + "api/identities/v1/translation/" + portal + "/" + lang;
        this.store.dispatch({ type: MULTILINGUAL_ACTIONS.LANG_CHANGE, payload: { lang: lang } });
    };
    MultilingualService.SUPPORTED_LANGUAGES = [
        { code: 'en', title: 'English' },
        { code: 'fr', title: 'French' },
        { code: 'de', title: 'German' }
    ];
    MultilingualService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService, api_config_1.ApiConfig, store_1.Store])
    ], MultilingualService);
    return MultilingualService;
}());
exports.MultilingualService = MultilingualService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvbXVsdGlsaW5ndWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxzQkFBMkMsYUFBYSxDQUFDLENBQUE7QUFDekQsOEJBQStCLDZCQUE2QixDQUFDLENBQUE7QUFFN0QsMkJBQXdCLGNBQWMsQ0FBQyxDQUFBO0FBQ3ZDLFFBQU8sd0JBQXdCLENBQUMsQ0FBQTtBQUloQyxJQUFNLFlBQVksR0FBdUI7SUFDdkMsSUFBSSxFQUFFLEVBQUU7Q0FDVCxDQUFDO0FBR0YsSUFBTSxvQkFBb0IsR0FBUTtJQUNoQyxXQUFXLEVBQUUsNEJBQTRCO0NBQzFDLENBQUM7QUFHVyxpQ0FBeUIsR0FBc0MsVUFBQyxLQUF3QyxFQUFFLE1BQWM7SUFBeEQscUJBQXdDLEdBQXhDLG9CQUF3QztJQUNuSCxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLG9CQUFvQixDQUFDLFdBQVc7WUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQ7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFJRjtJQVlFLDZCQUNVLFNBQTJCLEVBQzNCLFNBQW9CLEVBQ3JCLEtBQWlCO1FBRmhCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0sbURBQXFCLEdBQTVCO1FBQUEsaUJBY0M7UUFaQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUF5QjtZQUU1RCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO29CQUN0RCxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBOUIsQ0FBOEIsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEQsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0seUNBQVcsR0FBbEIsVUFBbUIsSUFBWTtRQUM3QixJQUFJLEdBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNDQUFpQyxNQUFNLFNBQUksSUFBTSxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsRUFBRSxVQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQXJDYSx1Q0FBbUIsR0FBaUI7UUFDaEQsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7UUFDL0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7S0FDaEMsQ0FBQztJQVJKO1FBQUMsaUJBQVUsRUFBRTs7MkJBQUE7SUEwQ2IsMEJBQUM7QUFBRCxDQXpDQSxBQXlDQyxJQUFBO0FBekNZLDJCQUFtQixzQkF5Qy9CLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9tdWx0aWxpbmd1YWwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N0b3JlLCBBY3Rpb25SZWR1Y2VyLCBBY3Rpb259IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnbmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlJztcbmltcG9ydCB7SUxhbmcsIE11bHRpbGluZ3VhbFN0YXRlSX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9sYW5ndWFnZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtBcGlDb25maWd9IGZyb20gJy4vYXBpLmNvbmZpZyc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3Rha2UnO1xuXG5kZWNsYXJlIGxldCBwb3J0YWw6IHN0cmluZztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBNdWx0aWxpbmd1YWxTdGF0ZUkgPSB7XG4gIGxhbmc6ICcnXG59O1xuXG4vLyBhY3Rpb25zXG5jb25zdCBNVUxUSUxJTkdVQUxfQUNUSU9OUzogYW55ID0ge1xuICBMQU5HX0NIQU5HRTogJ1tNdWx0aWxpbmd1YWxdIExBTkdfQ0hBTkdFJ1xufTtcblxuLy8gQWN0aW9uUmVkdWNlclxuZXhwb3J0IGNvbnN0IG11bHRpbGluZ3VhbEFjdGlvblJlZHVjZXI6IEFjdGlvblJlZHVjZXI8TXVsdGlsaW5ndWFsU3RhdGVJPiA9IChzdGF0ZTogTXVsdGlsaW5ndWFsU3RhdGVJID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBNVUxUSUxJTkdVQUxfQUNUSU9OUy5MQU5HX0NIQU5HRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbi8vIHNlcnZpY2VcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aWxpbmd1YWxTZXJ2aWNlIHtcbiAgLy8gZGVmYXVsdCBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXG4gIC8vIHNlZSBtYWluLnRzIGJvb3RzdHJhcCBmb3IgZXhhbXBsZSBvZiBob3cgdG8gcHJvdmlkZSBkaWZmZXJlbnQgdmFsdWVcbiAgcHVibGljIHN0YXRpYyBTVVBQT1JURURfTEFOR1VBR0VTOiBBcnJheTxJTGFuZz4gPSBbXG4gICAgeyBjb2RlOiAnZW4nLCB0aXRsZTogJ0VuZ2xpc2gnIH0sXG4gICAgeyBjb2RlOiAnZnInLCB0aXRsZTogJ0ZyZW5jaCcgfSxcbiAgICB7IGNvZGU6ICdkZScsIHRpdGxlOiAnR2VybWFuJyB9XG4gIF07XG5cbiAgcHVibGljIHBvcnRhbDogc3RyaW5nO1xuICBwdWJsaWMgYmFzZVVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXBpQ29uZmlnOiBBcGlDb25maWcsXG4gICAgcHVibGljIHN0b3JlOiBTdG9yZTxhbnk+KSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5hcGlDb25maWcuYmFzZVVybCgpO1xuICAgIHRoaXMuc2V0TGFuZ3VhZ2UoJ2VuJyk7XG4gICAgdGhpcy5nZXRUcmFuc2xhdGlvblN0cmluZ3MoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUcmFuc2xhdGlvblN0cmluZ3MoKTogdm9pZCB7XG4gICAgLy8gdGhpcyBsYW5ndWFnZSB3aWxsIGJlIHVzZWQgYXMgYSBmYWxsYmFjayB3aGVuIGEgdHJhbnNsYXRpb24gaXNuJ3QgZm91bmQgaW4gdGhlIGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICB0aGlzLnRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZW4nKTtcbiAgICAvLyBzdWJzY3JpYmUgdG8gY2hhbmdlc1xuICAgIHRoaXMuc3RvcmUuc2VsZWN0KCdpMThuJykuc3Vic2NyaWJlKChzdGF0ZTogTXVsdGlsaW5ndWFsU3RhdGVJKSA9PiB7XG4gICAgICAvLyB1cGRhdGUgbmcyLXRyYW5zbGF0ZSB3aGljaCB3aWxsIGNhdXNlIHRyYW5zbGF0aW9ucyB0byBvY2N1ciB3aGVyZXZlciB0aGUgVHJhbnNsYXRlUGlwZSBpcyB1c2VkIGluIHRoZSB2aWV3XG4gICAgICBpZiAodGhpcy50cmFuc2xhdGUuZ2V0TGFuZ3MoKSAmJiAodGhpcy50cmFuc2xhdGUuZ2V0TGFuZ3MoKS5pbmRleE9mKHN0YXRlLmxhbmcpID4gLTEpKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlLnVzZShzdGF0ZS5sYW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlLnJlbG9hZExhbmcoc3RhdGUubGFuZykudGFrZSgxKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy50cmFuc2xhdGUudXNlKHN0YXRlLmxhbmcpLCAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0TGFuZ3VhZ2UobGFuZzogc3RyaW5nKSB7XG4gICAgbGFuZyA9IGAke3RoaXMuYmFzZVVybC5zcGxpdCgnOi8nKVsxXX1hcGkvaWRlbnRpdGllcy92MS90cmFuc2xhdGlvbi8ke3BvcnRhbH0vJHtsYW5nfWA7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6IE1VTFRJTElOR1VBTF9BQ1RJT05TLkxBTkdfQ0hBTkdFLCBwYXlsb2FkOiB7IGxhbmcgfSB9KTtcbiAgfVxufVxuIl19
