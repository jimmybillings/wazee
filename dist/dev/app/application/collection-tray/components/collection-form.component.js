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
var wz_form_component_1 = require('../../../shared/components/wz-form/wz.form.component');
var collections_service_1 = require('../../../shared/services/collections.service');
var active_collection_service_1 = require('../../../shared/services/active-collection.service');
var collection_context_service_1 = require('../../../shared/services/collection-context.service');
var ui_state_1 = require('../../../shared/services/ui.state');
var CollectionFormComponent = (function () {
    function CollectionFormComponent(collections, activeCollection, uiState, detector, collectionContext) {
        this.collections = collections;
        this.activeCollection = activeCollection;
        this.uiState = uiState;
        this.detector = detector;
        this.collectionContext = collectionContext;
        this.collection = false;
        this.isEdit = false;
        this.formItems = [];
        this.defaultCollectionParams = { 'q': '', 'accessLevel': 'all', 's': '', 'd': '', 'i': 0, 'n': 200 };
    }
    CollectionFormComponent.prototype.ngOnInit = function () {
        if (!this.collection)
            this.formItems = this.setForm();
        this.tr = {
            title: (this.isEdit) ? 'COLLECTION.EDIT.TITLE' : 'COLLECTION.NEW_TITLE',
            close: 'COLLECTION.FORM.CLOSE_HOVER_TITLE',
            submitLabel: (this.isEdit) ? 'COLLECTION.EDIT.SUBMIT_LABEL' : 'COLLECTION.FORM.SUBMIT_LABEL'
        };
    };
    CollectionFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes.collection && changes.collection.currentValue) {
            this.formItems = this.setForm();
        }
    };
    CollectionFormComponent.prototype.collectionAction = function (collection) {
        (this.isEdit) ? this.editCollection(collection) : this.createCollection(collection);
    };
    CollectionFormComponent.prototype.createCollection = function (collection) {
        var _this = this;
        collection.tags = (collection.tags) ? collection.tags.split(/\s*,\s*/) : [];
        this.collections.create(collection).subscribe(function (collection) {
            _this.collectionContext.resetCollectionOptions();
            _this.getActiveCollection();
            _this.loadCollections();
            _this.activeCollection.load().subscribe();
        }, this.error.bind(this));
    };
    CollectionFormComponent.prototype.editCollection = function (collection) {
        var _this = this;
        collection = Object.assign({}, collection, { id: this.collection.id, tags: collection.tags.split(/\s*,\s*/), owner: this.collection.owner });
        this.collections.update(collection)
            .subscribe(function () {
            _this.loadCollections();
            if (_this.activeCollection.state.id === collection.id)
                _this.getActiveCollection();
        }, this.error.bind(this));
    };
    CollectionFormComponent.prototype.loadCollections = function () {
        this.collections.load(this.defaultCollectionParams)
            .subscribe(this.success.bind(this));
    };
    CollectionFormComponent.prototype.getActiveCollection = function () {
        this.activeCollection.load().subscribe();
    };
    CollectionFormComponent.prototype.success = function () {
        this.formItems = this.clearForm();
        this.wzForm.resetForm();
        this.detector.markForCheck();
        this.dialog.close();
    };
    CollectionFormComponent.prototype.error = function (error) {
        this.serverErrors = error.json();
        this.detector.markForCheck();
    };
    CollectionFormComponent.prototype.clearForm = function () {
        return this.formItems
            .map(function (field) {
            field.value = '';
            if (field.type === 'tags')
                field.tags = [];
            return field;
        });
    };
    CollectionFormComponent.prototype.setForm = function () {
        var _this = this;
        this.fields = JSON.parse(JSON.stringify(this.fields));
        return this.fields.form.items.map(function (item) {
            if (item.name === 'name' && _this.collection)
                item.value = _this.collection.name;
            if (item.type === 'tags') {
                item.tags = (_this.collection && _this.collection.tags) ? _this.collection.tags : [];
                item.value = (_this.collection && _this.collection.tags) ? _this.collection.tags.toString() : '';
            }
            return Object.assign({}, item);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CollectionFormComponent.prototype, "collection", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CollectionFormComponent.prototype, "newCollectionFormIsOpen", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CollectionFormComponent.prototype, "dialog", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CollectionFormComponent.prototype, "fields", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CollectionFormComponent.prototype, "isEdit", void 0);
    __decorate([
        core_1.ViewChild(wz_form_component_1.WzFormComponent), 
        __metadata('design:type', wz_form_component_1.WzFormComponent)
    ], CollectionFormComponent.prototype, "wzForm", void 0);
    CollectionFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'collection-form',
            templateUrl: 'collection-form.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [collections_service_1.CollectionsService, active_collection_service_1.ActiveCollectionService, ui_state_1.UiState, core_1.ChangeDetectorRef, collection_context_service_1.CollectionContextService])
    ], CollectionFormComponent);
    return CollectionFormComponent;
}());
exports.CollectionFormComponent = CollectionFormComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9jb2xsZWN0aW9uLXRyYXkvY29tcG9uZW50cy9jb2xsZWN0aW9uLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkcsZUFBZSxDQUFDLENBQUE7QUFLM0gsa0NBQWdDLHNEQUFzRCxDQUFDLENBQUE7QUFDdkYsb0NBQW1DLDhDQUE4QyxDQUFDLENBQUE7QUFDbEYsMENBQXdDLG9EQUFvRCxDQUFDLENBQUE7QUFDN0YsMkNBQXlDLHFEQUFxRCxDQUFDLENBQUE7QUFDL0YseUJBQXdCLG1DQUFtQyxDQUFDLENBQUE7QUFZNUQ7SUFrQkUsaUNBQ1MsV0FBK0IsRUFDL0IsZ0JBQXlDLEVBQ3pDLE9BQWdCLEVBQ2YsUUFBMkIsRUFDM0IsaUJBQTJDO1FBSjVDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFtQjtRQUMzQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBdEI1QyxlQUFVLEdBQVEsS0FBSyxDQUFDO1FBSXhCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFLMUIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUcxQiw0QkFBdUIsR0FBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFZN0csQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsRUFBRSxHQUFH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Q0FBQztnQkFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2xGLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2hHLENBQUM7WUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBeEdEO1FBQUMsWUFBSyxFQUFFOzsrREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs0RUFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsyREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsyREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsyREFBQTtJQVdSO1FBQUMsZ0JBQVMsQ0FBQyxtQ0FBZSxDQUFDOzsyREFBQTtJQXZCN0I7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDOzsrQkFBQTtJQTZHRiw4QkFBQztBQUFELENBM0dBLEFBMkdDLElBQUE7QUEzR1ksK0JBQXVCLDBCQTJHbkMsQ0FBQSIsImZpbGUiOiJhcHAvYXBwbGljYXRpb24vY29sbGVjdGlvbi10cmF5L2NvbXBvbmVudHMvY29sbGVjdGlvbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL2NvbGxlY3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IEZvcm1GaWVsZHMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9mb3Jtcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXNzZXQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9hc3NldC5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBXekZvcm1Db21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy93ei1mb3JtL3d6LmZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IENvbGxlY3Rpb25zU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jb2xsZWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2ZUNvbGxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FjdGl2ZS1jb2xsZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2NvbGxlY3Rpb24tY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IFVpU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdWkuc3RhdGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IHJlbmRlcnMgYSBsaXN0IG9mIGNvbGxlY3Rpb25zXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2NvbGxlY3Rpb24tZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnY29sbGVjdGlvbi1mb3JtLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjb2xsZWN0aW9uOiBhbnkgPSBmYWxzZTtcbiAgQElucHV0KCkgbmV3Q29sbGVjdGlvbkZvcm1Jc09wZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpYWxvZzogYW55O1xuICBASW5wdXQoKSBmaWVsZHM6IGFueTtcbiAgQElucHV0KCkgaXNFZGl0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gcHVibGljIG9yaWdpbmFsTmFtZTogc3RyaW5nO1xuICBwdWJsaWMgYXNzZXRGb3JOZXdDb2xsZWN0aW9uOiBBc3NldDtcbiAgcHVibGljIGNvbGxlY3Rpb25zTGlzdDogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgZm9ybUl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG4gIHB1YmxpYyBzZXJ2ZXJFcnJvcnM6IGFueTtcbiAgcHVibGljIHRyOiBhbnk7XG4gIHByaXZhdGUgZGVmYXVsdENvbGxlY3Rpb25QYXJhbXM6IGFueSA9IHsgJ3EnOiAnJywgJ2FjY2Vzc0xldmVsJzogJ2FsbCcsICdzJzogJycsICdkJzogJycsICdpJzogMCwgJ24nOiAyMDAgfTtcblxuXG4gIEBWaWV3Q2hpbGQoV3pGb3JtQ29tcG9uZW50KSBwcml2YXRlIHd6Rm9ybTogV3pGb3JtQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb2xsZWN0aW9uczogQ29sbGVjdGlvbnNTZXJ2aWNlLFxuICAgIHB1YmxpYyBhY3RpdmVDb2xsZWN0aW9uOiBBY3RpdmVDb2xsZWN0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgdWlTdGF0ZTogVWlTdGF0ZSxcbiAgICBwcml2YXRlIGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGNvbGxlY3Rpb25Db250ZXh0OiBDb2xsZWN0aW9uQ29udGV4dFNlcnZpY2VcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuY29sbGVjdGlvbikgdGhpcy5mb3JtSXRlbXMgPSB0aGlzLnNldEZvcm0oKTtcbiAgICB0aGlzLnRyID0ge1xuICAgICAgdGl0bGU6ICh0aGlzLmlzRWRpdCkgPyAnQ09MTEVDVElPTi5FRElULlRJVExFJyA6ICdDT0xMRUNUSU9OLk5FV19USVRMRScsXG4gICAgICBjbG9zZTogJ0NPTExFQ1RJT04uRk9STS5DTE9TRV9IT1ZFUl9USVRMRScsXG4gICAgICBzdWJtaXRMYWJlbDogKHRoaXMuaXNFZGl0KSA/ICdDT0xMRUNUSU9OLkVESVQuU1VCTUlUX0xBQkVMJyA6ICdDT0xMRUNUSU9OLkZPUk0uU1VCTUlUX0xBQkVMJ1xuICAgIH07XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcbiAgICBpZiAoY2hhbmdlcy5jb2xsZWN0aW9uICYmIGNoYW5nZXMuY29sbGVjdGlvbi5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybUl0ZW1zID0gdGhpcy5zZXRGb3JtKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbGxlY3Rpb25BY3Rpb24oY29sbGVjdGlvbjogQ29sbGVjdGlvbikge1xuICAgICh0aGlzLmlzRWRpdCkgPyB0aGlzLmVkaXRDb2xsZWN0aW9uKGNvbGxlY3Rpb24pIDogdGhpcy5jcmVhdGVDb2xsZWN0aW9uKGNvbGxlY3Rpb24pO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZUNvbGxlY3Rpb24oY29sbGVjdGlvbjogQ29sbGVjdGlvbik6IHZvaWQge1xuICAgIGNvbGxlY3Rpb24udGFncyA9IChjb2xsZWN0aW9uLnRhZ3MpID8gY29sbGVjdGlvbi50YWdzLnNwbGl0KC9cXHMqLFxccyovKSA6IFtdO1xuICAgIHRoaXMuY29sbGVjdGlvbnMuY3JlYXRlKGNvbGxlY3Rpb24pLnN1YnNjcmliZShjb2xsZWN0aW9uID0+IHtcbiAgICAgIHRoaXMuY29sbGVjdGlvbkNvbnRleHQucmVzZXRDb2xsZWN0aW9uT3B0aW9ucygpO1xuICAgICAgdGhpcy5nZXRBY3RpdmVDb2xsZWN0aW9uKCk7XG4gICAgICB0aGlzLmxvYWRDb2xsZWN0aW9ucygpO1xuICAgICAgdGhpcy5hY3RpdmVDb2xsZWN0aW9uLmxvYWQoKS5zdWJzY3JpYmUoKTtcbiAgICB9LCB0aGlzLmVycm9yLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHVibGljIGVkaXRDb2xsZWN0aW9uKGNvbGxlY3Rpb246IENvbGxlY3Rpb24pIHtcbiAgICBjb2xsZWN0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgY29sbGVjdGlvbiwgeyBpZDogdGhpcy5jb2xsZWN0aW9uLmlkLCB0YWdzOiBjb2xsZWN0aW9uLnRhZ3Muc3BsaXQoL1xccyosXFxzKi8pLCBvd25lcjogdGhpcy5jb2xsZWN0aW9uLm93bmVyIH0pO1xuICAgIHRoaXMuY29sbGVjdGlvbnMudXBkYXRlKGNvbGxlY3Rpb24pXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkQ29sbGVjdGlvbnMoKTtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlQ29sbGVjdGlvbi5zdGF0ZS5pZCA9PT0gY29sbGVjdGlvbi5pZCkgdGhpcy5nZXRBY3RpdmVDb2xsZWN0aW9uKCk7XG4gICAgICB9LCB0aGlzLmVycm9yLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHVibGljIGxvYWRDb2xsZWN0aW9ucygpIHtcbiAgICB0aGlzLmNvbGxlY3Rpb25zLmxvYWQodGhpcy5kZWZhdWx0Q29sbGVjdGlvblBhcmFtcylcbiAgICAgIC5zdWJzY3JpYmUodGhpcy5zdWNjZXNzLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZUNvbGxlY3Rpb24oKSB7XG4gICAgdGhpcy5hY3RpdmVDb2xsZWN0aW9uLmxvYWQoKS5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3VjY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1JdGVtcyA9IHRoaXMuY2xlYXJGb3JtKCk7XG4gICAgdGhpcy53ekZvcm0ucmVzZXRGb3JtKCk7XG4gICAgdGhpcy5kZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmRpYWxvZy5jbG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBlcnJvcihlcnJvcjogYW55KSB7XG4gICAgdGhpcy5zZXJ2ZXJFcnJvcnMgPSBlcnJvci5qc29uKCk7XG4gICAgdGhpcy5kZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJGb3JtKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1JdGVtc1xuICAgICAgLm1hcCgoZmllbGQ6IEZvcm1GaWVsZHMpID0+IHtcbiAgICAgICAgZmllbGQudmFsdWUgPSAnJztcbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICd0YWdzJykgZmllbGQudGFncyA9IFtdO1xuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Rm9ybSgpIHtcbiAgICB0aGlzLmZpZWxkcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5maWVsZHMpKTtcbiAgICByZXR1cm4gdGhpcy5maWVsZHMuZm9ybS5pdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gJ25hbWUnICYmIHRoaXMuY29sbGVjdGlvbikgaXRlbS52YWx1ZSA9IHRoaXMuY29sbGVjdGlvbi5uYW1lO1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3RhZ3MnKSB7XG4gICAgICAgIGl0ZW0udGFncyA9ICh0aGlzLmNvbGxlY3Rpb24gJiYgdGhpcy5jb2xsZWN0aW9uLnRhZ3MpID8gdGhpcy5jb2xsZWN0aW9uLnRhZ3MgOiBbXTtcbiAgICAgICAgaXRlbS52YWx1ZSA9ICh0aGlzLmNvbGxlY3Rpb24gJiYgdGhpcy5jb2xsZWN0aW9uLnRhZ3MpID8gdGhpcy5jb2xsZWN0aW9uLnRhZ3MudG9TdHJpbmcoKSA6ICcnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==
