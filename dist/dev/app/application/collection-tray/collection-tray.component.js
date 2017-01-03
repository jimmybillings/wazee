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
var active_collection_service_1 = require('../../shared/services/active-collection.service');
var CollectionTrayComponent = (function () {
    function CollectionTrayComponent(activeCollection) {
        this.activeCollection = activeCollection;
    }
    CollectionTrayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uiConfig.get('global').take(1).subscribe(function (config) {
            _this.pageSize = config.config.pageSize.value;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CollectionTrayComponent.prototype, "uiState", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CollectionTrayComponent.prototype, "uiConfig", void 0);
    CollectionTrayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'collection-tray',
            templateUrl: 'collection-tray.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [active_collection_service_1.ActiveCollectionService])
    ], CollectionTrayComponent);
    return CollectionTrayComponent;
}());
exports.CollectionTrayComponent = CollectionTrayComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9jb2xsZWN0aW9uLXRyYXkvY29sbGVjdGlvbi10cmF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtFLGVBQWUsQ0FBQyxDQUFBO0FBQ2xGLDBDQUF3QyxpREFBaUQsQ0FBQyxDQUFBO0FBVzFGO0lBS0UsaUNBQW1CLGdCQUF5QztRQUF6QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO0lBQUksQ0FBQztJQUVqRSwwQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVztZQUN4RCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFWRDtRQUFDLFlBQUssRUFBRTs7NERBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NkRBQUE7SUFUVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7OytCQUFBO0lBY0YsOEJBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLCtCQUF1QiwwQkFZbkMsQ0FBQSIsImZpbGUiOiJhcHAvYXBwbGljYXRpb24vY29sbGVjdGlvbi10cmF5L2NvbGxlY3Rpb24tdHJheS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmVDb2xsZWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hY3RpdmUtY29sbGVjdGlvbi5zZXJ2aWNlJztcbi8qKlxuICogSG9tZSBwYWdlIHNlYXJjaCBjb21wb25lbnQgLSByZW5kZXJzIHNlYXJjaCBmb3JtIHBhc3NlcyBmb3JtIHZhbHVlcyB0byBzZWFyY2ggY29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdjb2xsZWN0aW9uLXRyYXknLFxuICB0ZW1wbGF0ZVVybDogJ2NvbGxlY3Rpb24tdHJheS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvblRyYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB1aVN0YXRlOiBhbnk7XG4gIEBJbnB1dCgpIHVpQ29uZmlnOiBhbnk7XG4gIHB1YmxpYyBwYWdlU2l6ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVDb2xsZWN0aW9uOiBBY3RpdmVDb2xsZWN0aW9uU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51aUNvbmZpZy5nZXQoJ2dsb2JhbCcpLnRha2UoMSkuc3Vic2NyaWJlKChjb25maWc6IGFueSkgPT4ge1xuICAgICAgdGhpcy5wYWdlU2l6ZSA9IGNvbmZpZy5jb25maWcucGFnZVNpemUudmFsdWU7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
