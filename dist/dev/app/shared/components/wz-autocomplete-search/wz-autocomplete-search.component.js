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
var ui_state_1 = require('../../services/ui.state');
var forms_1 = require('@angular/forms');
var wz_input_suggestions_component_1 = require('../wz-form/components/wz-input-suggestions/wz-input-suggestions.component');
var WzAutocompleteSearchComponent = (function () {
    function WzAutocompleteSearchComponent(fb) {
        this.fb = fb;
        this.searchContext = new core_1.EventEmitter();
        this.toggleFilterTree = new core_1.EventEmitter();
        this.formOptions = {
            'endPoint': 'search/thesaurusTerms',
            'queryParams': 'maxTerms, 10',
            'name': 'name',
            'type': 'suggestions'
        };
        this.searchForm = this.fb.group({ query: ['', forms_1.Validators.required] });
    }
    Object.defineProperty(WzAutocompleteSearchComponent.prototype, "state", {
        set: function (value) {
            this.updateSearchBoxValue(value);
        },
        enumerable: true,
        configurable: true
    });
    WzAutocompleteSearchComponent.prototype.toggleFilters = function () {
        this.toggleFilterTree.emit();
        document.querySelector('button.filter').click();
    };
    WzAutocompleteSearchComponent.prototype.onSubmit = function (query, searchTerm) {
        if (searchTerm === void 0) { searchTerm = false; }
        if (query) {
            query = (searchTerm) ? '"' + query + '"' : query;
            this.searchContext.emit(query);
        }
        else {
            this.searchContext.emit(this.searchForm.value.query);
        }
    };
    WzAutocompleteSearchComponent.prototype.updateSearchBoxValue = function (searchParams) {
        searchParams = searchParams.split(';');
        searchParams.shift();
        if (searchParams.length !== 0) {
            var obj_1 = {};
            searchParams.forEach(function (pair) {
                pair = pair.split('=');
                obj_1[pair[0]] = decodeURIComponent(pair[1] || '');
            });
            this.searchForm.controls['query'].patchValue(obj_1['q']);
            this.wzInputSuggestions.destroySubscription();
            this.wzInputSuggestions.suggestionChangeListener();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzAutocompleteSearchComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzAutocompleteSearchComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ui_state_1.UiState)
    ], WzAutocompleteSearchComponent.prototype, "uiState", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], WzAutocompleteSearchComponent.prototype, "state", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzAutocompleteSearchComponent.prototype, "searchContext", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzAutocompleteSearchComponent.prototype, "toggleFilterTree", void 0);
    __decorate([
        core_1.ViewChild(wz_input_suggestions_component_1.WzInputSuggestionsComponent), 
        __metadata('design:type', wz_input_suggestions_component_1.WzInputSuggestionsComponent)
    ], WzAutocompleteSearchComponent.prototype, "wzInputSuggestions", void 0);
    WzAutocompleteSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-autocomplete-search',
            templateUrl: 'wz-autocomplete.search.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], WzAutocompleteSearchComponent);
    return WzAutocompleteSearchComponent;
}());
exports.WzAutocompleteSearchComponent = WzAutocompleteSearchComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1hdXRvY29tcGxldGUtc2VhcmNoL3d6LWF1dG9jb21wbGV0ZS1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkYsZUFBZSxDQUFDLENBQUE7QUFDM0cseUJBQXdCLHlCQUF5QixDQUFDLENBQUE7QUFDbEQsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFDakYsK0NBQTRDLDJFQUEyRSxDQUFDLENBQUE7QUFPeEg7SUFxQkUsdUNBQW1CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBYmpCLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDbkMscUJBQWdCLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFHaEQsZ0JBQVcsR0FBRztZQUNuQixVQUFVLEVBQUUsdUJBQXVCO1lBQ25DLGFBQWEsRUFBRSxjQUFjO1lBQzdCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLGFBQWE7U0FDdEIsQ0FBQztRQUtBLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQWxCRCxzQkFBSSxnREFBSzthQUFULFVBQVUsS0FBYTtZQUNyQixJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFrQk0scURBQWEsR0FBcEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFFTSxnREFBUSxHQUFmLFVBQWdCLEtBQVcsRUFBRSxVQUFrQjtRQUFsQiwwQkFBa0IsR0FBbEIsa0JBQWtCO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVixLQUFLLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsQ0FBQztJQUNILENBQUM7SUFFTyw0REFBb0IsR0FBNUIsVUFBNkIsWUFBaUI7UUFDNUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLEtBQUcsR0FBUSxFQUFFLENBQUM7WUFDbEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVM7Z0JBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixLQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELENBQUMsQ0FBQyxDQUFDO1lBQ1csSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFFLENBQUMsVUFBVSxDQUFDLEtBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ3JELENBQUM7SUFDSCxDQUFDO0lBbkREO1FBQUMsWUFBSyxFQUFFOztpRUFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztzRUFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztrRUFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs7OERBQUE7SUFJUjtRQUFDLGFBQU0sRUFBRTs7d0VBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7MkVBQUE7SUFVVDtRQUFDLGdCQUFTLENBQUMsNERBQTJCLENBQUM7OzZFQUFBO0lBekJ6QztRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7O3FDQUFBO0lBdURGLG9DQUFDO0FBQUQsQ0F0REEsQUFzREMsSUFBQTtBQXREWSxxQ0FBNkIsZ0NBc0R6QyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1hdXRvY29tcGxldGUtc2VhcmNoL3d6LWF1dG9jb21wbGV0ZS1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpU3RhdGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91aS5zdGF0ZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFd6SW5wdXRTdWdnZXN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4uL3d6LWZvcm0vY29tcG9uZW50cy93ei1pbnB1dC1zdWdnZXN0aW9ucy93ei1pbnB1dC1zdWdnZXN0aW9ucy5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnd3otYXV0b2NvbXBsZXRlLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnd3otYXV0b2NvbXBsZXRlLnNlYXJjaC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgV3pBdXRvY29tcGxldGVTZWFyY2hDb21wb25lbnQge1xuICBASW5wdXQoKSBwdWJsaWMgY29uZmlnOiBhbnk7XG4gIEBJbnB1dCgpIHB1YmxpYyBjdXJyZW50VXNlcjogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgdWlTdGF0ZTogVWlTdGF0ZTtcbiAgQElucHV0KClcbiAgc2V0IHN0YXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVwZGF0ZVNlYXJjaEJveFZhbHVlKHZhbHVlKTtcbiAgfVxuICBAT3V0cHV0KCkgcHVibGljIHNlYXJjaENvbnRleHQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgdG9nZ2xlRmlsdGVyVHJlZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgc2VhcmNoRm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgZm9ybU9wdGlvbnMgPSB7XG4gICAgJ2VuZFBvaW50JzogJ3NlYXJjaC90aGVzYXVydXNUZXJtcycsXG4gICAgJ3F1ZXJ5UGFyYW1zJzogJ21heFRlcm1zLCAxMCcsXG4gICAgJ25hbWUnOiAnbmFtZScsXG4gICAgJ3R5cGUnOiAnc3VnZ2VzdGlvbnMnXG4gIH07XG5cbiAgQFZpZXdDaGlsZChXeklucHV0U3VnZ2VzdGlvbnNDb21wb25lbnQpIHB1YmxpYyB3eklucHV0U3VnZ2VzdGlvbnM6IFd6SW5wdXRTdWdnZXN0aW9uc0NvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5zZWFyY2hGb3JtID0gdGhpcy5mYi5ncm91cCh7IHF1ZXJ5OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdIH0pO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUZpbHRlcnMoKSB7XG4gICAgdGhpcy50b2dnbGVGaWx0ZXJUcmVlLmVtaXQoKTtcbiAgICAoPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5maWx0ZXInKSkuY2xpY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBvblN1Ym1pdChxdWVyeT86IGFueSwgc2VhcmNoVGVybSA9IGZhbHNlKSB7XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBxdWVyeSA9IChzZWFyY2hUZXJtKSA/ICdcIicgKyBxdWVyeSArICdcIicgOiBxdWVyeTtcbiAgICAgIHRoaXMuc2VhcmNoQ29udGV4dC5lbWl0KHF1ZXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWFyY2hDb250ZXh0LmVtaXQodGhpcy5zZWFyY2hGb3JtLnZhbHVlLnF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNlYXJjaEJveFZhbHVlKHNlYXJjaFBhcmFtczogYW55KSB7XG4gICAgc2VhcmNoUGFyYW1zID0gc2VhcmNoUGFyYW1zLnNwbGl0KCc7Jyk7XG4gICAgc2VhcmNoUGFyYW1zLnNoaWZ0KCk7XG4gICAgaWYgKHNlYXJjaFBhcmFtcy5sZW5ndGggIT09IDApIHtcbiAgICAgIGxldCBvYmo6IGFueSA9IHt9O1xuICAgICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHBhaXI6IGFueSkgPT4ge1xuICAgICAgICBwYWlyID0gcGFpci5zcGxpdCgnPScpO1xuICAgICAgICBvYmpbcGFpclswXV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSB8fCAnJyk7XG4gICAgICB9KTtcbiAgICAgICg8Rm9ybUNvbnRyb2w+dGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzWydxdWVyeSddKS5wYXRjaFZhbHVlKG9ialsncSddKTtcbiAgICAgIHRoaXMud3pJbnB1dFN1Z2dlc3Rpb25zLmRlc3Ryb3lTdWJzY3JpcHRpb24oKTtcbiAgICAgIHRoaXMud3pJbnB1dFN1Z2dlc3Rpb25zLnN1Z2dlc3Rpb25DaGFuZ2VMaXN0ZW5lcigpO1xuICAgIH1cbiAgfVxuXG59Il19
