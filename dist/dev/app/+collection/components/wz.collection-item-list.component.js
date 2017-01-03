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
var WzCollectionItemListComponent = (function () {
    function WzCollectionItemListComponent() {
        this.editCollection = new core_1.EventEmitter();
        this.setActiveCollection = new core_1.EventEmitter();
        this.deleteCollection = new core_1.EventEmitter();
        this.generateCollectionLink = new core_1.EventEmitter();
    }
    WzCollectionItemListComponent.prototype.selectActiveCollection = function (collectionId) {
        this.setActiveCollection.emit(collectionId);
    };
    WzCollectionItemListComponent.prototype.thumbnail = function (thumbnail) {
        return (thumbnail && thumbnail.urls && thumbnail.urls.https) ? thumbnail.urls.https : '/assets/img/tbn_missing.jpg';
    };
    WzCollectionItemListComponent.prototype.setCurrentCollection = function (collection) {
        this.currentCollection = collection;
    };
    WzCollectionItemListComponent.prototype.edit = function (collection) {
        this.editCollection.emit(collection);
    };
    WzCollectionItemListComponent.prototype.delete = function (collection) {
        this.deleteCollection.emit(collection);
    };
    WzCollectionItemListComponent.prototype.generateLegacyLink = function () {
        this.generateCollectionLink.emit(this.currentCollection.id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzCollectionItemListComponent.prototype, "collections", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzCollectionItemListComponent.prototype, "activeCollection", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzCollectionItemListComponent.prototype, "editCollection", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzCollectionItemListComponent.prototype, "setActiveCollection", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzCollectionItemListComponent.prototype, "deleteCollection", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzCollectionItemListComponent.prototype, "generateCollectionLink", void 0);
    WzCollectionItemListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-collection-item-list',
            templateUrl: 'wz.collection-item-list.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], WzCollectionItemListComponent);
    return WzCollectionItemListComponent;
}());
exports.WzCollectionItemListComponent = WzCollectionItemListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29sbGVjdGlvbi9jb21wb25lbnRzL3d6LmNvbGxlY3Rpb24taXRlbS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdGLGVBQWUsQ0FBQyxDQUFBO0FBY2hHO0lBQUE7UUFHWSxtQkFBYyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3BDLHdCQUFtQixHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3pDLHFCQUFnQixHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3RDLDJCQUFzQixHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBMEJ4RCxDQUFDO0lBdkJRLDhEQUFzQixHQUE3QixVQUE4QixZQUFpQjtRQUM3QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSxpREFBUyxHQUFoQixVQUFpQixTQUFzQztRQUNyRCxNQUFNLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLDZCQUE2QixDQUFDO0lBQ3RILENBQUM7SUFFTSw0REFBb0IsR0FBM0IsVUFBNEIsVUFBZTtRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDO0lBQ3RDLENBQUM7SUFFTSw0Q0FBSSxHQUFYLFVBQVksVUFBYztRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sOENBQU0sR0FBYixVQUFjLFVBQWU7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sMERBQWtCLEdBQXpCO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQTlCRDtRQUFDLFlBQUssRUFBRTs7c0VBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7MkVBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7eUVBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7OEVBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7MkVBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7aUZBQUE7SUFqQlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDOztxQ0FBQTtJQXNDRixvQ0FBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ1kscUNBQTZCLGdDQWdDekMsQ0FBQSIsImZpbGUiOiJhcHAvK2NvbGxlY3Rpb24vY29tcG9uZW50cy93ei5jb2xsZWN0aW9uLWl0ZW0tbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd3ei1jb2xsZWN0aW9uLWl0ZW0tbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnd3ouY29sbGVjdGlvbi1pdGVtLWxpc3QuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG4vKipcbiAqIFRoZSBQYWdpbmF0aW9uIGNvbXBvbmVudCB0YWtlcyBhbiBpbnB1dCBvZiB0aGUgUGFnaW5hdGlvbiBPYmplY3QgdGhhdCBpcyByZXR1cm5lZCB3aXRoXG4gKiBhbGwgQVBJIGNhbGxzLiBJdCBvdXB1dHMgYSBnZXRQYWdlIGV2ZW50IHdpdGggdGhlIHBhZ2VOdW1iZXIgZm9yIHRoZSBBUEkgdG8gZ2V0LlxuICovXG5leHBvcnQgY2xhc3MgV3pDb2xsZWN0aW9uSXRlbUxpc3RDb21wb25lbnQge1xuICBASW5wdXQoKSBjb2xsZWN0aW9uczogYW55O1xuICBASW5wdXQoKSBhY3RpdmVDb2xsZWN0aW9uOiBhbnk7XG4gIEBPdXRwdXQoKSBlZGl0Q29sbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNldEFjdGl2ZUNvbGxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZWxldGVDb2xsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZ2VuZXJhdGVDb2xsZWN0aW9uTGluayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJpdmF0ZSBjdXJyZW50Q29sbGVjdGlvbjogYW55O1xuXG4gIHB1YmxpYyBzZWxlY3RBY3RpdmVDb2xsZWN0aW9uKGNvbGxlY3Rpb25JZDogYW55KSB7XG4gICAgdGhpcy5zZXRBY3RpdmVDb2xsZWN0aW9uLmVtaXQoY29sbGVjdGlvbklkKTtcbiAgfVxuXG4gIHB1YmxpYyB0aHVtYm5haWwodGh1bWJuYWlsOiB7IHVybHM6IHsgaHR0cHM6IHN0cmluZyB9IH0pOiBzdHJpbmcge1xuICAgIHJldHVybiAodGh1bWJuYWlsICYmIHRodW1ibmFpbC51cmxzICYmIHRodW1ibmFpbC51cmxzLmh0dHBzKSA/IHRodW1ibmFpbC51cmxzLmh0dHBzIDogJy9hc3NldHMvaW1nL3Ribl9taXNzaW5nLmpwZyc7XG4gIH1cblxuICBwdWJsaWMgc2V0Q3VycmVudENvbGxlY3Rpb24oY29sbGVjdGlvbjogYW55KSB7XG4gICAgdGhpcy5jdXJyZW50Q29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gIH1cblxuICBwdWJsaWMgZWRpdChjb2xsZWN0aW9uOmFueSkge1xuICAgIHRoaXMuZWRpdENvbGxlY3Rpb24uZW1pdChjb2xsZWN0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGUoY29sbGVjdGlvbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kZWxldGVDb2xsZWN0aW9uLmVtaXQoY29sbGVjdGlvbik7XG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVMZWdhY3lMaW5rKCk6IHZvaWQge1xuICAgIHRoaXMuZ2VuZXJhdGVDb2xsZWN0aW9uTGluay5lbWl0KHRoaXMuY3VycmVudENvbGxlY3Rpb24uaWQpO1xuICB9XG59XG4iXX0=
