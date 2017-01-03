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
var WzPaginationComponent = (function () {
    function WzPaginationComponent(fb) {
        this.fb = fb;
        this.getPage = new core_1.EventEmitter();
    }
    WzPaginationComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            page: [this.pagination.currentPage, forms_1.Validators.required]
        });
    };
    WzPaginationComponent.prototype.getPageNumber = function (pageNumber) {
        pageNumber = parseInt(pageNumber) || 1;
        if (pageNumber <= 1) {
            this.getPage.emit(1);
        }
        else if (pageNumber > this.pagination.numberOfPages) {
            this.getPage.emit(this.pagination.numberOfPages);
        }
        else {
            this.getPage.emit(pageNumber);
        }
    };
    WzPaginationComponent.prototype.getCurrentPage = function () {
        if (this.pagination.numberOfPages > 0) {
            return this.pagination.currentPage;
        }
        return 0;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzPaginationComponent.prototype, "pagination", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzPaginationComponent.prototype, "getPage", void 0);
    WzPaginationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-pagination',
            templateUrl: 'wz.pagination.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], WzPaginationComponent);
    return WzPaginationComponent;
}());
exports.WzPaginationComponent = WzPaginationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1wYWdpbmF0aW9uL3d6LnBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0YsZUFBZSxDQUFDLENBQUE7QUFDeEcsc0JBQW1ELGdCQUFnQixDQUFDLENBQUE7QUFjcEU7SUFNRSwrQkFBbUIsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFKeEIsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBSUQsQ0FBQztJQUV2Qyx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUN6RCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sNkNBQWEsR0FBcEIsVUFBcUIsVUFBZTtRQUNsQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUVNLDhDQUFjLEdBQXJCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDckMsQ0FBQztRQUNELE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBN0JEO1FBQUMsWUFBSyxFQUFFOzs2REFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzswREFBQTtJQWJYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7OzZCQUFBO0lBcUNGLDRCQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSw2QkFBcUIsd0JBK0JqQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1wYWdpbmF0aW9uL3d6LnBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnd3otcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnd3oucGFnaW5hdGlvbi5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbi8qKlxuICogVGhlIFBhZ2luYXRpb24gY29tcG9uZW50IHRha2VzIGFuIGlucHV0IG9mIHRoZSBQYWdpbmF0aW9uIE9iamVjdCB0aGF0IGlzIHJldHVybmVkIHdpdGhcbiAqIGFsbCBBUEkgY2FsbHMuIEl0IG91cHV0cyBhIGdldFBhZ2UgZXZlbnQgd2l0aCB0aGUgcGFnZU51bWJlciBmb3IgdGhlIEFQSSB0byBnZXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBXelBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwYWdpbmF0aW9uOiBhbnk7XG4gIEBPdXRwdXQoKSBnZXRQYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBwYWdlOiBbdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFBhZ2VOdW1iZXIocGFnZU51bWJlcjogYW55KTogdm9pZCB7XG4gICAgcGFnZU51bWJlciA9IHBhcnNlSW50KHBhZ2VOdW1iZXIpIHx8IDE7XG4gICAgaWYgKHBhZ2VOdW1iZXIgPD0gMSkge1xuICAgICAgdGhpcy5nZXRQYWdlLmVtaXQoMSk7XG4gICAgfSBlbHNlIGlmIChwYWdlTnVtYmVyID4gdGhpcy5wYWdpbmF0aW9uLm51bWJlck9mUGFnZXMpIHtcbiAgICAgIHRoaXMuZ2V0UGFnZS5lbWl0KHRoaXMucGFnaW5hdGlvbi5udW1iZXJPZlBhZ2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXRQYWdlLmVtaXQocGFnZU51bWJlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldEN1cnJlbnRQYWdlKCk6IE51bWJlciB7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbi5udW1iZXJPZlBhZ2VzID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cbiJdfQ==
