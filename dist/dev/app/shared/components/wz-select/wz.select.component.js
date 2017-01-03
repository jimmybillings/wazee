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
var WzSelectComponent = (function () {
    function WzSelectComponent() {
        this.trPrefix = '';
        this.selectOption = new core_1.EventEmitter();
    }
    WzSelectComponent.prototype.onSelectOption = function (option) {
        this.options = this.toggleOptions(option);
        this.selectOption.emit(this.selectedOption);
    };
    WzSelectComponent.prototype.toggleOptions = function (selectedOption) {
        return this.options.map(function (option) {
            option.selected = (option.name === selectedOption.name) ? true : false;
            return option;
        });
    };
    Object.defineProperty(WzSelectComponent.prototype, "selectedOption", {
        get: function () {
            var options = this.options.filter(function (option) { return option.selected; });
            return (options.length > 0) ? options[0] : this.options[0];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzSelectComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WzSelectComponent.prototype, "trPrefix", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzSelectComponent.prototype, "selectOption", void 0);
    WzSelectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-select',
            templateUrl: 'wz.select.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], WzSelectComponent);
    return WzSelectComponent;
}());
exports.WzSelectComponent = WzSelectComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1zZWxlY3Qvd3ouc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdGLGVBQWUsQ0FBQyxDQUFBO0FBU2hHO0lBQUE7UUFFVyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGlCQUFZLEdBQVEsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFrQm5ELENBQUM7SUFoQlEsMENBQWMsR0FBckIsVUFBc0IsTUFBVztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTyx5Q0FBYSxHQUFyQixVQUFzQixjQUFtQjtRQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFXO1lBQ2xDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ3ZFLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQVksNkNBQWM7YUFBMUI7WUFDRSxJQUFJLE9BQU8sR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQVcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxRQUFRLEVBQWYsQ0FBZSxDQUFDLENBQUM7WUFDekUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQW5CRDtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7dURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7MkRBQUE7SUFWWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLGdCQUFnQjtZQUM3QixlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDOzt5QkFBQTtJQXVCRix3QkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlkseUJBQWlCLG9CQXFCN0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvbXBvbmVudHMvd3otc2VsZWN0L3d6LnNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnd3otc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICd3ei5zZWxlY3QuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgV3pTZWxlY3RDb21wb25lbnQge1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnk7XG4gIEBJbnB1dCgpIHRyUHJlZml4OiBzdHJpbmcgPSAnJztcbiAgQE91dHB1dCgpIHNlbGVjdE9wdGlvbjogYW55ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBvblNlbGVjdE9wdGlvbihvcHRpb246IGFueSk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMudG9nZ2xlT3B0aW9ucyhvcHRpb24pO1xuICAgIHRoaXMuc2VsZWN0T3B0aW9uLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbik7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZU9wdGlvbnMoc2VsZWN0ZWRPcHRpb246IGFueSk6IEFycmF5PGFueT4ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubWFwKChvcHRpb246IGFueSkgPT4ge1xuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gKG9wdGlvbi5uYW1lID09PSBzZWxlY3RlZE9wdGlvbi5uYW1lKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIHJldHVybiBvcHRpb247XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBzZWxlY3RlZE9wdGlvbigpOiBhbnkge1xuICAgIGxldCBvcHRpb25zOiBhbnkgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHRpb246IGFueSkgPT4gb3B0aW9uLnNlbGVjdGVkKTtcbiAgICByZXR1cm4gKG9wdGlvbnMubGVuZ3RoID4gMCkgPyBvcHRpb25zWzBdIDogdGhpcy5vcHRpb25zWzBdO1xuICB9XG59Il19
