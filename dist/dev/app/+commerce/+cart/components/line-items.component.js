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
var LineItemsComponent = (function () {
    function LineItemsComponent() {
        this.lineItemsNotify = new core_1.EventEmitter();
    }
    LineItemsComponent.prototype.moveTo = function (otherProject, lineItem) {
        this.lineItemsNotify.emit({ type: 'MOVE_LINE_ITEM', payload: { lineItem: lineItem, otherProject: otherProject } });
    };
    LineItemsComponent.prototype.clone = function (lineItem) {
        this.lineItemsNotify.emit({ type: 'CLONE_LINE_ITEM', payload: lineItem });
    };
    LineItemsComponent.prototype.remove = function (lineItem) {
        this.lineItemsNotify.emit({ type: 'REMOVE_LINE_ITEM', payload: lineItem });
    };
    LineItemsComponent.prototype.delegate = function (message) {
        this.lineItemsNotify.emit(message);
    };
    LineItemsComponent.prototype.selectLineItem = function (lineItem) {
        this.selectedLineItem = lineItem;
    };
    LineItemsComponent.prototype.selectTarget = function (selectedTarget, lineItem) {
        this.lineItemsNotify.emit({ type: 'EDIT_LINE_ITEM', payload: { lineItem: lineItem, fieldToEdit: { selectedTranscodeTarget: selectedTarget.name } } });
    };
    LineItemsComponent.prototype.format = function (lineItem) {
        this.selectedTranscodeTarget = { name: lineItem.selectedTranscodeTarget, selected: true };
        return lineItem.transcodeTargets.map(function (target) {
            var name = target;
            var selected = target === lineItem.selectedTranscodeTarget ? true : false;
            return { name: name, selected: selected };
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], LineItemsComponent.prototype, "lineItems", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], LineItemsComponent.prototype, "otherProjects", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LineItemsComponent.prototype, "lineItemsNotify", void 0);
    LineItemsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'line-items-component',
            templateUrl: './line-items.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], LineItemsComponent);
    return LineItemsComponent;
}());
exports.LineItemsComponent = LineItemsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK2NhcnQvY29tcG9uZW50cy9saW5lLWl0ZW1zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdGLGVBQWUsQ0FBQyxDQUFBO0FBV2hHO0lBQUE7UUFHWSxvQkFBZSxHQUF5QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQW9DL0UsQ0FBQztJQWhDUSxtQ0FBTSxHQUFiLFVBQWMsWUFBcUIsRUFBRSxRQUFrQjtRQUNyRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckgsQ0FBQztJQUVNLGtDQUFLLEdBQVosVUFBYSxRQUFrQjtRQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU0sbUNBQU0sR0FBYixVQUFjLFFBQWtCO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFTSxxQ0FBUSxHQUFmLFVBQWdCLE9BQVk7UUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLDJDQUFjLEdBQXJCLFVBQXNCLFFBQWtCO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUVNLHlDQUFZLEdBQW5CLFVBQW9CLGNBQW1CLEVBQUUsUUFBa0I7UUFDekQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsa0JBQVEsRUFBRSxXQUFXLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxjQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUksQ0FBQztJQUVNLG1DQUFNLEdBQWIsVUFBYyxRQUFrQjtRQUM5QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMxRixNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQWM7WUFDbEQsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDO1lBQzFCLElBQUksUUFBUSxHQUFZLE1BQU0sS0FBSyxRQUFRLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNuRixNQUFNLENBQUMsRUFBRSxVQUFJLEVBQUUsa0JBQVEsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXJDRDtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NkRBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7K0RBQUE7SUFWWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7OzBCQUFBO0lBeUNGLHlCQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtBQXZDWSwwQkFBa0IscUJBdUM5QixDQUFBIiwiZmlsZSI6ImFwcC8rY29tbWVyY2UvK2NhcnQvY29tcG9uZW50cy9saW5lLWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvamVjdCwgTGluZUl0ZW0gfSBmcm9tICcuLi9jYXJ0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBUcmFuc2NvZGVUYXJnZXQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9hc3NldC5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdsaW5lLWl0ZW1zLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saW5lLWl0ZW1zLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIExpbmVJdGVtc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxpbmVJdGVtczogTGluZUl0ZW1bXTtcbiAgQElucHV0KCkgb3RoZXJQcm9qZWN0czogUHJvamVjdFtdO1xuICBAT3V0cHV0KCkgbGluZUl0ZW1zTm90aWZ5OiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xuICBwdWJsaWMgc2VsZWN0ZWRUcmFuc2NvZGVUYXJnZXQ6IFRyYW5zY29kZVRhcmdldDtcbiAgcHJpdmF0ZSBzZWxlY3RlZExpbmVJdGVtOiBMaW5lSXRlbTtcblxuICBwdWJsaWMgbW92ZVRvKG90aGVyUHJvamVjdDogUHJvamVjdCwgbGluZUl0ZW06IExpbmVJdGVtKTogdm9pZCB7XG4gICAgdGhpcy5saW5lSXRlbXNOb3RpZnkuZW1pdCh7IHR5cGU6ICdNT1ZFX0xJTkVfSVRFTScsIHBheWxvYWQ6IHsgbGluZUl0ZW06IGxpbmVJdGVtLCBvdGhlclByb2plY3Q6IG90aGVyUHJvamVjdCB9IH0pO1xuICB9XG5cbiAgcHVibGljIGNsb25lKGxpbmVJdGVtOiBMaW5lSXRlbSk6IHZvaWQge1xuICAgIHRoaXMubGluZUl0ZW1zTm90aWZ5LmVtaXQoeyB0eXBlOiAnQ0xPTkVfTElORV9JVEVNJywgcGF5bG9hZDogbGluZUl0ZW0gfSk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKGxpbmVJdGVtOiBMaW5lSXRlbSk6IHZvaWQge1xuICAgIHRoaXMubGluZUl0ZW1zTm90aWZ5LmVtaXQoeyB0eXBlOiAnUkVNT1ZFX0xJTkVfSVRFTScsIHBheWxvYWQ6IGxpbmVJdGVtIH0pO1xuICB9XG5cbiAgcHVibGljIGRlbGVnYXRlKG1lc3NhZ2U6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubGluZUl0ZW1zTm90aWZ5LmVtaXQobWVzc2FnZSk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TGluZUl0ZW0obGluZUl0ZW06IExpbmVJdGVtKSB7XG4gICAgdGhpcy5zZWxlY3RlZExpbmVJdGVtID0gbGluZUl0ZW07XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0VGFyZ2V0KHNlbGVjdGVkVGFyZ2V0OiBhbnksIGxpbmVJdGVtOiBMaW5lSXRlbSk6IHZvaWQge1xuICAgIHRoaXMubGluZUl0ZW1zTm90aWZ5LmVtaXQoeyB0eXBlOiAnRURJVF9MSU5FX0lURU0nLCBwYXlsb2FkOiB7IGxpbmVJdGVtLCBmaWVsZFRvRWRpdDogeyBzZWxlY3RlZFRyYW5zY29kZVRhcmdldDogc2VsZWN0ZWRUYXJnZXQubmFtZSB9IH0gfSk7XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0KGxpbmVJdGVtOiBMaW5lSXRlbSk6IEFycmF5PFRyYW5zY29kZVRhcmdldD4ge1xuICAgIHRoaXMuc2VsZWN0ZWRUcmFuc2NvZGVUYXJnZXQgPSB7IG5hbWU6IGxpbmVJdGVtLnNlbGVjdGVkVHJhbnNjb2RlVGFyZ2V0LCBzZWxlY3RlZDogdHJ1ZSB9O1xuICAgIHJldHVybiBsaW5lSXRlbS50cmFuc2NvZGVUYXJnZXRzLm1hcCgodGFyZ2V0OiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSB0YXJnZXQ7XG4gICAgICBsZXQgc2VsZWN0ZWQ6IGJvb2xlYW4gPSB0YXJnZXQgPT09IGxpbmVJdGVtLnNlbGVjdGVkVHJhbnNjb2RlVGFyZ2V0ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgcmV0dXJuIHsgbmFtZSwgc2VsZWN0ZWQgfTtcbiAgICB9KTtcbiAgfVxufVxuIl19
