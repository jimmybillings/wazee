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
var api_service_1 = require('../../../../services/api.service');
var api_interface_1 = require('../../../../interfaces/api.interface');
var WzInputSuggestionsComponent = (function () {
    function WzInputSuggestionsComponent(renderer, api, detector) {
        this.renderer = renderer;
        this.api = api;
        this.detector = detector;
        this.newSuggestion = new core_1.EventEmitter();
        this.suggestions = [];
        this.userInput = '';
    }
    WzInputSuggestionsComponent.prototype.ngOnInit = function () {
        this.clickCatcher = this.renderer.listenGlobal('body', 'click', this.closeSuggestions.bind(this));
        this.suggestionChangeListener();
    };
    WzInputSuggestionsComponent.prototype.ngOnDestroy = function () {
        this.clickCatcher();
        this.destroySubscription();
    };
    WzInputSuggestionsComponent.prototype.destroySubscription = function () {
        if (this.inputSubscription)
            this.inputSubscription.unsubscribe();
    };
    WzInputSuggestionsComponent.prototype.suggestionChangeListener = function () {
        var _this = this;
        if (this.fControl) {
            this.inputSubscription = this.fControl.valueChanges
                .filter(function (value) { return value !== _this.activeSuggestion; })
                .switchMap(function (query) {
                _this.activeSuggestion = null;
                if (query && query.length > 1) {
                    return _this.query(query);
                }
                else {
                    _this.closeSuggestions();
                    return [];
                }
            })
                .map(function (response) { return (response['items'] || response['list'] || []).map(function (item) { return item.name || item; }); })
                .do(function (suggestions) {
                _this.suggestions = _this.normalizeSuggestions(suggestions);
                _this.userInput = _this.fControl.value;
            })
                .subscribe(function () { return _this.detector.markForCheck(); });
        }
    };
    WzInputSuggestionsComponent.prototype.closeSuggestions = function () {
        this.activeSuggestion = null;
        this.suggestions = [];
        this.detector.markForCheck();
    };
    WzInputSuggestionsComponent.prototype.selectSuggestion = function (suggestion) {
        this.fControl.setValue(suggestion);
        this.newSuggestion.emit(this.activeSuggestion);
        this.closeSuggestions();
    };
    WzInputSuggestionsComponent.prototype.parseSuggestion = function (suggestion) {
        return suggestion
            .split(this.userInput)
            .join('<strong>' + this.userInput + '</strong>');
    };
    WzInputSuggestionsComponent.prototype.inputKeyDown = function (event) {
        if (event.which === 9 || event.keyCode === 9) {
            this.closeSuggestions();
        }
        else if (event.which === 38 || event.keyCode === 38) {
            this.upKey(event);
            event.preventDefault();
        }
        else if (event.which === 40 || event.keyCode === 40) {
            this.downKey(event);
            event.preventDefault();
        }
        else if ((event.which === 10 || event.which === 13 ||
            event.keyCode === 10 || event.keyCode === 13)
            && this.suggestions.length > 1) {
            this.enterKey(event);
            event.preventDefault();
        }
    };
    WzInputSuggestionsComponent.prototype.upKey = function (event) {
        var activeSuggestionIndex = this.suggestions.indexOf(this.activeSuggestion);
        if (activeSuggestionIndex === -1) {
            this.setActiveSuggestion(this.suggestions[0]);
            return;
        }
        var suggestion;
        suggestion = (activeSuggestionIndex === 0) ?
            this.suggestions[this.suggestions.length - 1] :
            this.suggestions[activeSuggestionIndex - 1];
        this.setActiveSuggestion(suggestion);
    };
    WzInputSuggestionsComponent.prototype.downKey = function (event) {
        var activeSuggestionIndex = this.suggestions.indexOf(this.activeSuggestion);
        if (activeSuggestionIndex === -1) {
            this.setActiveSuggestion(this.suggestions[1]);
            return;
        }
        var suggestion;
        suggestion = (activeSuggestionIndex === (this.suggestions.length - 1)) ?
            this.suggestions[0] :
            this.suggestions[activeSuggestionIndex + 1];
        this.setActiveSuggestion(suggestion);
    };
    WzInputSuggestionsComponent.prototype.enterKey = function (event) {
        if (this.activeSuggestion) {
            this.selectSuggestion(this.activeSuggestion);
        }
        else {
            this.newSuggestion.emit();
            this.closeSuggestions();
        }
    };
    WzInputSuggestionsComponent.prototype.setActiveSuggestion = function (suggestion) {
        this.activeSuggestion = suggestion;
        this.fControl.setValue(suggestion);
        this.detector.markForCheck();
    };
    WzInputSuggestionsComponent.prototype.normalizeSuggestions = function (suggestions) {
        if (!this.isCollection()) {
            var index = suggestions.indexOf(this.fControl.value);
            if (index > -1)
                suggestions.splice(index, 1);
        }
        suggestions.unshift(this.fControl.value);
        return suggestions;
    };
    WzInputSuggestionsComponent.prototype.isCollection = function () {
        return (this.rawField.endPoint.indexOf('collection') > -1);
    };
    WzInputSuggestionsComponent.prototype.buildParams = function () {
        var queryParamsArray = this.rawField.queryParams.split(',').map(function (item) { return item.trim(); });
        var queryParams = {};
        for (var i = 0; i < (queryParamsArray.length / 2); i++) {
            queryParams[queryParamsArray[0]] = queryParamsArray[1];
            queryParamsArray.splice(0, 1);
        }
        return queryParams;
    };
    WzInputSuggestionsComponent.prototype.query = function (query) {
        return this.api.get(api_interface_1.Api.Assets, this.rawField.endPoint, { parameters: Object.assign({}, this.buildParams(), { text: query }, { q: query }) });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormControl)
    ], WzInputSuggestionsComponent.prototype, "fControl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzInputSuggestionsComponent.prototype, "rawField", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzInputSuggestionsComponent.prototype, "newSuggestion", void 0);
    WzInputSuggestionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-input-suggestions',
            template: "<ng-content></ng-content>\n            <div class=\"suggestions-menu\" *ngIf=\"suggestions.length > 1\" [ngClass]=\"{'revealed': suggestions.length > 1}\">\n              <div *ngIf=\"rawField.suggestionHeading\" (click)=\"closeSuggestions()\" md-line class=\"heading\">{{ rawField.suggestionHeading | translate}}</div>\n              <md-list>\n                <md-list-item *ngFor=\"let suggestion of suggestions\">\n                  <button *ngIf=\"!isCollection()\" (click)=\"selectSuggestion(suggestion)\" [ngClass]=\"{'active': activeSuggestion == suggestion}\" [innerHTML]=\"parseSuggestion(suggestion)\">\n                  </button>\n                  <button *ngIf=\"isCollection()\" (click)=\"selectSuggestion(suggestion)\" [ngClass]=\"{'active': activeSuggestion == suggestion}\">\n                    {{suggestion}}\n                  </button>\n                </md-list-item>\n              </md-list>\n            </div>",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: ['md-list-item:first-child{ display: none;}']
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, api_service_1.ApiService, core_1.ChangeDetectorRef])
    ], WzInputSuggestionsComponent);
    return WzInputSuggestionsComponent;
}());
exports.WzInputSuggestionsComponent = WzInputSuggestionsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1mb3JtL2NvbXBvbmVudHMvd3otaW5wdXQtc3VnZ2VzdGlvbnMvd3otaW5wdXQtc3VnZ2VzdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0ksZUFBZSxDQUFDLENBQUE7QUFDaEosc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFFN0MsNEJBQTJCLGtDQUFrQyxDQUFDLENBQUE7QUFDOUQsOEJBQWlDLHNDQUFzQyxDQUFDLENBQUE7QUFzQnhFO0lBYUkscUNBQ1ksUUFBa0IsRUFDbEIsR0FBZSxFQUNmLFFBQTJCO1FBRjNCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGFBQVEsR0FBUixRQUFRLENBQW1CO1FBWjdCLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFdEMsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBSy9CLGNBQVMsR0FBVyxFQUFFLENBQUM7SUFLWSxDQUFDO0lBRTVDLDhDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxpREFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTSx5REFBbUIsR0FBMUI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckUsQ0FBQztJQUVNLDhEQUF3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QUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDckQsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRU8sMkNBQUssR0FBYixVQUFjLEtBQWE7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUNmLG1CQUFHLENBQUMsTUFBTSxFQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUN0QixFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUN2RixDQUFDO0lBQ04sQ0FBQztJQWpMRDtRQUFDLFlBQUssRUFBRTs7aUVBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7aUVBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7c0VBQUE7SUF4QmI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLDI2QkFZSztZQUNmLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLE1BQU0sRUFBRSxDQUFDLDJDQUEyQyxDQUFDO1NBQ3hELENBQUM7O21DQUFBO0lBc0xGLGtDQUFDO0FBQUQsQ0FwTEEsQUFvTEMsSUFBQTtBQXBMWSxtQ0FBMkIsOEJBb0x2QyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1mb3JtL2NvbXBvbmVudHMvd3otaW5wdXQtc3VnZ2VzdGlvbnMvd3otaW5wdXQtc3VnZ2VzdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgUmVuZGVyZXIsIE9uRGVzdHJveSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaSwgQXBpUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi8uLi9pbnRlcmZhY2VzL2FwaS5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnd3otaW5wdXQtc3VnZ2VzdGlvbnMnLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Z2dlc3Rpb25zLW1lbnVcIiAqbmdJZj1cInN1Z2dlc3Rpb25zLmxlbmd0aCA+IDFcIiBbbmdDbGFzc109XCJ7J3JldmVhbGVkJzogc3VnZ2VzdGlvbnMubGVuZ3RoID4gMX1cIj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInJhd0ZpZWxkLnN1Z2dlc3Rpb25IZWFkaW5nXCIgKGNsaWNrKT1cImNsb3NlU3VnZ2VzdGlvbnMoKVwiIG1kLWxpbmUgY2xhc3M9XCJoZWFkaW5nXCI+e3sgcmF3RmllbGQuc3VnZ2VzdGlvbkhlYWRpbmcgfCB0cmFuc2xhdGV9fTwvZGl2PlxuICAgICAgICAgICAgICA8bWQtbGlzdD5cbiAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBzdWdnZXN0aW9uIG9mIHN1Z2dlc3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWlzQ29sbGVjdGlvbigpXCIgKGNsaWNrKT1cInNlbGVjdFN1Z2dlc3Rpb24oc3VnZ2VzdGlvbilcIiBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IGFjdGl2ZVN1Z2dlc3Rpb24gPT0gc3VnZ2VzdGlvbn1cIiBbaW5uZXJIVE1MXT1cInBhcnNlU3VnZ2VzdGlvbihzdWdnZXN0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNDb2xsZWN0aW9uKClcIiAoY2xpY2spPVwic2VsZWN0U3VnZ2VzdGlvbihzdWdnZXN0aW9uKVwiIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogYWN0aXZlU3VnZ2VzdGlvbiA9PSBzdWdnZXN0aW9ufVwiPlxuICAgICAgICAgICAgICAgICAgICB7e3N1Z2dlc3Rpb259fVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgIDwvbWQtbGlzdD5cbiAgICAgICAgICAgIDwvZGl2PmAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgc3R5bGVzOiBbJ21kLWxpc3QtaXRlbTpmaXJzdC1jaGlsZHsgZGlzcGxheTogbm9uZTt9J11cbn0pXG5cbmV4cG9ydCBjbGFzcyBXeklucHV0U3VnZ2VzdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBmQ29udHJvbDogRm9ybUNvbnRyb2w7XG4gICAgQElucHV0KCkgcmF3RmllbGQ6IGFueTtcbiAgICBAT3V0cHV0KCkgbmV3U3VnZ2VzdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHB1YmxpYyBzdWdnZXN0aW9uczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIHB1YmxpYyBhY3RpdmVTdWdnZXN0aW9uOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIGNsaWNrQ2F0Y2hlcjogYW55O1xuICAgIHByaXZhdGUgaW5wdXRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIHVzZXJJbnB1dDogc3RyaW5nID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgICAgIHByaXZhdGUgYXBpOiBBcGlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jbGlja0NhdGNoZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnYm9keScsICdjbGljaycsIHRoaXMuY2xvc2VTdWdnZXN0aW9ucy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5zdWdnZXN0aW9uQ2hhbmdlTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5jbGlja0NhdGNoZXIoKTtcbiAgICAgICAgdGhpcy5kZXN0cm95U3Vic2NyaXB0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3lTdWJzY3JpcHRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0U3Vic2NyaXB0aW9uKSB0aGlzLmlucHV0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN1Z2dlc3Rpb25DaGFuZ2VMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZkNvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTdWJzY3JpcHRpb24gPSB0aGlzLmZDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlOiBzdHJpbmcpID0+IHZhbHVlICE9PSB0aGlzLmFjdGl2ZVN1Z2dlc3Rpb24pXG4gICAgICAgICAgICAgICAgLnN3aXRjaE1hcCgocXVlcnk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVN1Z2dlc3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnkgJiYgcXVlcnkubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcnkocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gKHJlc3BvbnNlWydpdGVtcyddIHx8IHJlc3BvbnNlWydsaXN0J10gfHwgW10pLm1hcCgoaXRlbTogYW55KSA9PiBpdGVtLm5hbWUgfHwgaXRlbSkpXG4gICAgICAgICAgICAgICAgLmRvKChzdWdnZXN0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gdGhpcy5ub3JtYWxpemVTdWdnZXN0aW9ucyhzdWdnZXN0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcklucHV0ID0gdGhpcy5mQ29udHJvbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kZXRlY3Rvci5tYXJrRm9yQ2hlY2soKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VTdWdnZXN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVTdWdnZXN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdWdnZXN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmRldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RTdWdnZXN0aW9uKHN1Z2dlc3Rpb246IHN0cmluZykge1xuICAgICAgICB0aGlzLmZDb250cm9sLnNldFZhbHVlKHN1Z2dlc3Rpb24pO1xuICAgICAgICB0aGlzLm5ld1N1Z2dlc3Rpb24uZW1pdCh0aGlzLmFjdGl2ZVN1Z2dlc3Rpb24pO1xuICAgICAgICB0aGlzLmNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGFyc2VTdWdnZXN0aW9uKHN1Z2dlc3Rpb246IHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3VnZ2VzdGlvblxuICAgICAgICAgICAgLnNwbGl0KHRoaXMudXNlcklucHV0KVxuICAgICAgICAgICAgLmpvaW4oJzxzdHJvbmc+JyArIHRoaXMudXNlcklucHV0ICsgJzwvc3Ryb25nPicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnB1dEtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSA5IHx8IGV2ZW50LmtleUNvZGUgPT09IDkpIHtcbiAgICAgICAgICAgIC8vIFRBQlxuICAgICAgICAgICAgdGhpcy5jbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQud2hpY2ggPT09IDM4IHx8IGV2ZW50LmtleUNvZGUgPT09IDM4KSB7XG4gICAgICAgICAgICAvLyBVUFxuICAgICAgICAgICAgdGhpcy51cEtleShldmVudCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LndoaWNoID09PSA0MCB8fCBldmVudC5rZXlDb2RlID09PSA0MCkge1xuICAgICAgICAgICAgLy8gRE9XTlxuICAgICAgICAgICAgdGhpcy5kb3duS2V5KGV2ZW50KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGV2ZW50LndoaWNoID09PSAxMCB8fCBldmVudC53aGljaCA9PT0gMTMgfHxcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDEwIHx8IGV2ZW50LmtleUNvZGUgPT09IDEzKVxuICAgICAgICAgICAgJiYgdGhpcy5zdWdnZXN0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAvLyBFTlRFUlxuICAgICAgICAgICAgdGhpcy5lbnRlcktleShldmVudCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cEtleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAvLyBGaW5kIHRoZSBhY3RpdmUgc3VnZ2VzdGlvbiBpbiB0aGUgbGlzdFxuICAgICAgICBsZXQgYWN0aXZlU3VnZ2VzdGlvbkluZGV4ID0gdGhpcy5zdWdnZXN0aW9ucy5pbmRleE9mKHRoaXMuYWN0aXZlU3VnZ2VzdGlvbik7XG5cbiAgICAgICAgLy8gSWYgbm90IGZvdW5kLCB0aGVuIGFjdGl2YXRlIHRoZSBmaXJzdCBzdWdnZXN0aW9uXG4gICAgICAgIGlmIChhY3RpdmVTdWdnZXN0aW9uSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVN1Z2dlc3Rpb24odGhpcy5zdWdnZXN0aW9uc1swXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3VnZ2VzdGlvbjogc3RyaW5nO1xuICAgICAgICAvLyBEZXRlcm1pbmUgdG8gZGVjcmVtZW50IHVwIHRoZSBzdWdnZXN0aW9uIGxpc3Qgb3IgcmVzdCB0byB0aGUgbGFzdC5cbiAgICAgICAgc3VnZ2VzdGlvbiA9IChhY3RpdmVTdWdnZXN0aW9uSW5kZXggPT09IDApID9cbiAgICAgICAgICAgIC8vIE9uIHRoZSBmaXJzdCBzZWxlY3Rpb24gc28gZ28gdG8gdGhlIGxhc3RcbiAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnNbdGhpcy5zdWdnZXN0aW9ucy5sZW5ndGggLSAxXSA6XG4gICAgICAgICAgICAvLyBTdGlsbCBtb3JlIHN1Z2dlc3Rpb24gYmV0d2VlbiBoZXJlIGFuZCB0aGUgZmlyc3Qgc28ga2VlcCBkZWNyZW1lbnRpbmdcbiAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnNbYWN0aXZlU3VnZ2VzdGlvbkluZGV4IC0gMV07XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlU3VnZ2VzdGlvbihzdWdnZXN0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRvd25LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgLy8gRmluZCB0aGUgYWN0aXZlIHN1Z2dlc3Rpb24gaW4gdGhlIGxpc3RcbiAgICAgICAgbGV0IGFjdGl2ZVN1Z2dlc3Rpb25JbmRleCA9IHRoaXMuc3VnZ2VzdGlvbnMuaW5kZXhPZih0aGlzLmFjdGl2ZVN1Z2dlc3Rpb24pO1xuXG4gICAgICAgIC8vIElmIG5vdCBmb3VuZCwgdGhlbiBhY3RpdmF0ZSB0aGUgZmlyc3Qgc3VnZ2VzdGlvblxuICAgICAgICBpZiAoYWN0aXZlU3VnZ2VzdGlvbkluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVTdWdnZXN0aW9uKHRoaXMuc3VnZ2VzdGlvbnNbMV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN1Z2dlc3Rpb246IHN0cmluZztcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRvIGluY3JlbWVudCBkb3duIHRoZSBzdWdnZXN0aW9uIGxpc3Qgb3IgcmVzZXQgdG8gdGhlIGZpcnN0LlxuICAgICAgICBzdWdnZXN0aW9uID0gKGFjdGl2ZVN1Z2dlc3Rpb25JbmRleCA9PT0gKHRoaXMuc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMSkpID9cbiAgICAgICAgICAgIC8vIE9uIGxhc3Qgc3VnZ2VzdGlvbiBzbyByZXNldCB0byB0aGUgZmlyc3QuXG4gICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zWzBdIDpcbiAgICAgICAgICAgIC8vIE5vdCBvbiB0aGUgbGFzdCBzdWdnZXN0aW9uIHNvIGtlZXAgaW5jcmVtZW50aW5nIHNlbGVjdGVkIHN1Z2dlc3Rpb25cbiAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnNbYWN0aXZlU3VnZ2VzdGlvbkluZGV4ICsgMV07XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlU3VnZ2VzdGlvbihzdWdnZXN0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVudGVyS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vIFNlbGVjdCB0aGUgYWN0aXZlIHN1Z2dlc3Rpb24gIFxuICAgICAgICBpZiAodGhpcy5hY3RpdmVTdWdnZXN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdFN1Z2dlc3Rpb24odGhpcy5hY3RpdmVTdWdnZXN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmV3U3VnZ2VzdGlvbi5lbWl0KCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0QWN0aXZlU3VnZ2VzdGlvbihzdWdnZXN0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVTdWdnZXN0aW9uID0gc3VnZ2VzdGlvbjtcbiAgICAgICAgdGhpcy5mQ29udHJvbC5zZXRWYWx1ZShzdWdnZXN0aW9uKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5vcm1hbGl6ZVN1Z2dlc3Rpb25zKHN1Z2dlc3Rpb25zOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0NvbGxlY3Rpb24oKSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gc3VnZ2VzdGlvbnMuaW5kZXhPZih0aGlzLmZDb250cm9sLnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSBzdWdnZXN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VnZ2VzdGlvbnMudW5zaGlmdCh0aGlzLmZDb250cm9sLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHN1Z2dlc3Rpb25zO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNDb2xsZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMucmF3RmllbGQuZW5kUG9pbnQuaW5kZXhPZignY29sbGVjdGlvbicpID4gLTEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRQYXJhbXMoKSB7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtc0FycmF5OiBBcnJheTxzdHJpbmc+ID0gdGhpcy5yYXdGaWVsZC5xdWVyeVBhcmFtcy5zcGxpdCgnLCcpLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBpdGVtLnRyaW0oKSk7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtczogYW55ID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHF1ZXJ5UGFyYW1zQXJyYXkubGVuZ3RoIC8gMik7IGkrKykge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXNbcXVlcnlQYXJhbXNBcnJheVswXV0gPSBxdWVyeVBhcmFtc0FycmF5WzFdO1xuICAgICAgICAgICAgcXVlcnlQYXJhbXNBcnJheS5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgcXVlcnkocXVlcnk6IHN0cmluZyk6IE9ic2VydmFibGU8QXBpUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLmdldChcbiAgICAgICAgICAgIEFwaS5Bc3NldHMsXG4gICAgICAgICAgICB0aGlzLnJhd0ZpZWxkLmVuZFBvaW50LFxuICAgICAgICAgICAgeyBwYXJhbWV0ZXJzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmJ1aWxkUGFyYW1zKCksIHsgdGV4dDogcXVlcnkgfSwgeyBxOiBxdWVyeSB9KSB9XG4gICAgICAgICk7XG4gICAgfVxufSJdfQ==
