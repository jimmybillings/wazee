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
var CollectionLinkComponent = (function () {
    function CollectionLinkComponent() {
    }
    CollectionLinkComponent.prototype.ngOnChanges = function (changes) {
        if (changes.assets.currentValue[0])
            this.buildLegacyLink(changes.assets.currentValue);
    };
    CollectionLinkComponent.prototype.buildLegacyLink = function (assets) {
        var filterSegment;
        filterSegment = assets.reduce(function (prev, current, i) {
            (i !== assets.length - 1) ? prev += current.assetId + ' OR ' : prev += current.assetId;
            return prev;
        }, '');
        this.legacyLink = "https://commerce.wazeedigital.com/license/searchResults.do?search.keywords=id:(" + filterSegment + ")";
    };
    CollectionLinkComponent.prototype.selectInputForCopy = function (event) {
        event.target.select();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CollectionLinkComponent.prototype, "assets", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CollectionLinkComponent.prototype, "dialog", void 0);
    CollectionLinkComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'collection-link-component',
            templateUrl: 'collection-link.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], CollectionLinkComponent);
    return CollectionLinkComponent;
}());
exports.CollectionLinkComponent = CollectionLinkComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29sbGVjdGlvbi9jb21wb25lbnRzL2NvbGxlY3Rpb24tbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRSxlQUFlLENBQUMsQ0FBQTtBQVNyRjtJQUFBO0lBcUJBLENBQUM7SUFoQkMsNkNBQVcsR0FBWCxVQUFZLE9BQVk7UUFDdEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVNLGlEQUFlLEdBQXRCLFVBQXVCLE1BQVc7UUFDaEMsSUFBSSxhQUFxQixDQUFDO1FBQzFCLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBWSxFQUFFLE9BQVksRUFBRSxDQUFTO1lBQ2xFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBTSxHQUFHLElBQUksSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ3ZGLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsVUFBVSxHQUFHLG9GQUFrRixhQUFhLE1BQUcsQ0FBQztJQUN2SCxDQUFDO0lBRU0sb0RBQWtCLEdBQXpCLFVBQTBCLEtBQVU7UUFDbEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBbkJEO1FBQUMsWUFBSyxFQUFFOzsyREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsyREFBQTtJQVRWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQzs7K0JBQUE7SUF1QkYsOEJBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLCtCQUF1QiwwQkFxQm5DLENBQUEiLCJmaWxlIjoiYXBwLytjb2xsZWN0aW9uL2NvbXBvbmVudHMvY29sbGVjdGlvbi1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25DaGFuZ2VzLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnY29sbGVjdGlvbi1saW5rLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnY29sbGVjdGlvbi1saW5rLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25MaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgYXNzZXRzOiBhbnk7XG4gIEBJbnB1dCgpIGRpYWxvZzogYW55O1xuICBwdWJsaWMgbGVnYWN5TGluazogc3RyaW5nO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSkge1xuICAgIGlmIChjaGFuZ2VzLmFzc2V0cy5jdXJyZW50VmFsdWVbMF0pIHRoaXMuYnVpbGRMZWdhY3lMaW5rKGNoYW5nZXMuYXNzZXRzLmN1cnJlbnRWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgYnVpbGRMZWdhY3lMaW5rKGFzc2V0czogYW55KTogdm9pZCB7XG4gICAgbGV0IGZpbHRlclNlZ21lbnQ6IHN0cmluZztcbiAgICBmaWx0ZXJTZWdtZW50ID0gYXNzZXRzLnJlZHVjZSgocHJldjogc3RyaW5nLCBjdXJyZW50OiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgKGkgIT09IGFzc2V0cy5sZW5ndGggLSAxKSA/IHByZXYgKz0gY3VycmVudC5hc3NldElkICsgJyBPUiAnIDogcHJldiArPSBjdXJyZW50LmFzc2V0SWQ7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCAnJyk7XG4gICAgdGhpcy5sZWdhY3lMaW5rID0gYGh0dHBzOi8vY29tbWVyY2Uud2F6ZWVkaWdpdGFsLmNvbS9saWNlbnNlL3NlYXJjaFJlc3VsdHMuZG8/c2VhcmNoLmtleXdvcmRzPWlkOigke2ZpbHRlclNlZ21lbnR9KWA7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0SW5wdXRGb3JDb3B5KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBldmVudC50YXJnZXQuc2VsZWN0KCk7XG4gIH1cbn1cbiJdfQ==
