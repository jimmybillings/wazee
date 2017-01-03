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
var WzInputTagsComponent = (function () {
    function WzInputTagsComponent() {
        this.tags = [];
        this.finalDelete = false;
    }
    WzInputTagsComponent.prototype.submit = function (e) {
        switch (e.code) {
            case 'Enter':
                var tag = e.target.value;
                if (!this.find(tag) && tag !== '' && this.tags.length <= 10) {
                    this.create(tag);
                }
                e.target.value = '';
                e.preventDefault();
                return;
            case 'Backspace':
                if (e.target.value === '') {
                    if (this.finalDelete) {
                        this.delete(false, this.tags[this.tags.length - 1]);
                    }
                    else {
                        this.finalDelete = true;
                    }
                }
                return;
            default:
                this.finalDelete = false;
                return;
        }
    };
    WzInputTagsComponent.prototype.checkBeforeDelete = function (tag) {
        return (this.finalDelete && this.tags[this.tags.length - 1] === tag);
    };
    WzInputTagsComponent.prototype.delete = function ($event, tagForDelete) {
        if ($event === void 0) { $event = false; }
        this.tags = this.tags.filter(function (tag) { return tag !== tagForDelete; });
        this.fControl.setValue(this.tags.toString());
        this.finalDelete = false;
    };
    WzInputTagsComponent.prototype.create = function (tag) {
        this.tags = this.tags.concat(tag);
        this.fControl.setValue(this.tags.toString());
    };
    WzInputTagsComponent.prototype.find = function (tagCandidate) {
        return this.tags.filter(function (tag) { return tag === tagCandidate; }).length > 0;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormControl)
    ], WzInputTagsComponent.prototype, "fControl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], WzInputTagsComponent.prototype, "tags", void 0);
    WzInputTagsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-input-tags',
            template: "<div class=\"md-input-wrapper wz-tags\">\n                <ul *ngIf=\"tags.length > 0\">\n                  <li [ngClass]=\"{'ready-delete': checkBeforeDelete(tag)}\" *ngFor=\"let tag of tags;\">\n                    {{tag}}\n                    <a class=\"button delete\" md-icon-button (click)=\"delete($event, tag)\">\n                      <md-icon>cancel</md-icon>\n                    </a>\n                  </li>\n                </ul>\n                <ng-content></ng-content>\n             </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], WzInputTagsComponent);
    return WzInputTagsComponent;
}());
exports.WzInputTagsComponent = WzInputTagsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1mb3JtL2NvbXBvbmVudHMvd3otaW5wdXQtdGFncy93ei1pbnB1dC10YWdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBQ2pELHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBa0I3QztJQUFBO1FBRVcsU0FBSSxHQUFrQixFQUFFLENBQUM7UUFDMUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFnRHZDLENBQUM7SUE5Q1EscUNBQU0sR0FBYixVQUFjLENBQU07UUFDbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFZixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxHQUFHLEdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBQ0QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQztZQUVULEtBQUssV0FBVztnQkFDZCxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0RCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUMxQixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsTUFBTSxDQUFDO1lBRVQ7Z0JBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQztRQUNYLENBQUM7SUFDSCxDQUFDO0lBRU0sZ0RBQWlCLEdBQXhCLFVBQXlCLEdBQVc7UUFDbEMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTyxxQ0FBTSxHQUFkLFVBQWUsTUFBWSxFQUFFLFlBQW9CO1FBQWxDLHNCQUFZLEdBQVosY0FBWTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxLQUFLLFlBQVksRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRU8scUNBQU0sR0FBZCxVQUFlLEdBQVc7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVPLG1DQUFJLEdBQVosVUFBYSxZQUFvQjtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLEtBQUssWUFBWSxFQUFwQixDQUFvQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBakREO1FBQUMsWUFBSyxFQUFFOzswREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztzREFBQTtJQWxCVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLDZmQVVRO1NBQ25CLENBQUM7OzRCQUFBO0lBcURGLDJCQUFDO0FBQUQsQ0FuREEsQUFtREMsSUFBQTtBQW5EWSw0QkFBb0IsdUJBbURoQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1mb3JtL2NvbXBvbmVudHMvd3otaW5wdXQtdGFncy93ei1pbnB1dC10YWdzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd3ei1pbnB1dC10YWdzJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibWQtaW5wdXQtd3JhcHBlciB3ei10YWdzXCI+XG4gICAgICAgICAgICAgICAgPHVsICpuZ0lmPVwidGFncy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICA8bGkgW25nQ2xhc3NdPVwieydyZWFkeS1kZWxldGUnOiBjaGVja0JlZm9yZURlbGV0ZSh0YWcpfVwiICpuZ0Zvcj1cImxldCB0YWcgb2YgdGFncztcIj5cbiAgICAgICAgICAgICAgICAgICAge3t0YWd9fVxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBkZWxldGVcIiBtZC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlKCRldmVudCwgdGFnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxtZC1pY29uPmNhbmNlbDwvbWQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgICA8L2Rpdj5gLFxufSlcblxuZXhwb3J0IGNsYXNzIFd6SW5wdXRUYWdzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZkNvbnRyb2w6IEZvcm1Db250cm9sO1xuICBASW5wdXQoKSB0YWdzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIHByaXZhdGUgZmluYWxEZWxldGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgc3VibWl0KGU6IGFueSkge1xuICAgIHN3aXRjaCAoZS5jb2RlKSB7XG5cbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgbGV0IHRhZzogc3RyaW5nID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5maW5kKHRhZykgJiYgdGFnICE9PSAnJyAmJiB0aGlzLnRhZ3MubGVuZ3RoIDw9IDEwKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGUodGFnKTtcbiAgICAgICAgfVxuICAgICAgICBlLnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgaWYoZS50YXJnZXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZmluYWxEZWxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKGZhbHNlLCB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maW5hbERlbGV0ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5maW5hbERlbGV0ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNoZWNrQmVmb3JlRGVsZXRlKHRhZzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLmZpbmFsRGVsZXRlICYmIHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV0gPT09IHRhZyk7XG4gIH1cblxuICBwcml2YXRlIGRlbGV0ZSgkZXZlbnQ9ZmFsc2UsIHRhZ0ZvckRlbGV0ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50YWdzID0gdGhpcy50YWdzLmZpbHRlcigodGFnKSA9PiB0YWcgIT09IHRhZ0ZvckRlbGV0ZSk7XG4gICAgdGhpcy5mQ29udHJvbC5zZXRWYWx1ZSh0aGlzLnRhZ3MudG9TdHJpbmcoKSk7XG4gICAgdGhpcy5maW5hbERlbGV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGUodGFnOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRhZ3MgPSB0aGlzLnRhZ3MuY29uY2F0KHRhZyk7XG4gICAgdGhpcy5mQ29udHJvbC5zZXRWYWx1ZSh0aGlzLnRhZ3MudG9TdHJpbmcoKSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmQodGFnQ2FuZGlkYXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50YWdzLmZpbHRlcigodGFnKSA9PiB0YWcgPT09IHRhZ0NhbmRpZGF0ZSkubGVuZ3RoID4gMDtcbiAgfVxufVxuIl19
