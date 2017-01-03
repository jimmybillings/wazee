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
var wz_form_model_1 = require('./wz.form.model');
var api_config_1 = require('../../services/api.config');
var WzFormComponent = (function () {
    function WzFormComponent(fb, formModel, apiConfig, element) {
        this.fb = fb;
        this.formModel = formModel;
        this.apiConfig = apiConfig;
        this.element = element;
        this.includeCancel = false;
        this.cancelLabel = 'Cancel';
        this.autocomplete = 'on';
        this.formSubmit = new core_1.EventEmitter();
        this.formCancel = new core_1.EventEmitter();
        this.viewTos = new core_1.EventEmitter();
        this.submitAttempt = false;
        this.showRequiredLegend = false;
    }
    WzFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes.serverErrors && this.form)
            this.mergeErrors();
        if (changes.items && this.form)
            this.mergeNewValues();
    };
    WzFormComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group(this.formModel.create(this.items));
    };
    WzFormComponent.prototype.mergeErrors = function () {
        var _this = this;
        this.serverErrors.fieldErrors.forEach(function (error) {
            for (var control in _this.form.controls) {
                if (control.toLowerCase() === error.field.toLowerCase()) {
                    _this.form.controls[control].setErrors({ serverError: error.code });
                }
            }
        });
    };
    WzFormComponent.prototype.mergeNewValues = function () {
        var _this = this;
        this.items.forEach(function (field) {
            for (var control in _this.form.controls) {
                if (control === field.name) {
                    _this.form.controls[control].patchValue(field.value);
                }
            }
        });
    };
    WzFormComponent.prototype.markFieldsAsDirty = function () {
        for (var control in this.form.controls) {
            this.form.controls[control].markAsDirty();
        }
    };
    WzFormComponent.prototype.parseOptions = function (options) {
        return options.split(',');
    };
    WzFormComponent.prototype.radioSelect = function (field, option) {
        this.form.controls[field].setValue(option);
    };
    WzFormComponent.prototype.isRequiredField = function (field) {
        return 'validation' in field && (field.validation === 'REQUIRED' ||
            field.validation === 'EMAIL' ||
            field.validation === 'MULTIEMAIL' ||
            field.validation === 'PASSWORD' ||
            field.validation === 'TERMS' ||
            field.validation === 'COLLECTION') ? true : false;
    };
    WzFormComponent.prototype.hasRequiredFields = function (formFields) {
        var req = formFields.filter(this.isRequiredField);
        return req.length > 0 ? true : false;
    };
    WzFormComponent.prototype.onSubmit = function () {
        this.submitAttempt = true;
        this.markFieldsAsDirty();
        if (this.form.valid) {
            this.formSubmit.emit(this.form.value);
        }
        else {
            console.log(this.form);
        }
    };
    WzFormComponent.prototype.resetForm = function () {
        this.element.nativeElement.children[0].reset();
        this.submitAttempt = false;
        this.formModel.updateForm(this.form, {});
        this.formModel.markFormAsUntouched(this.form);
    };
    WzFormComponent.prototype.onViewTos = function () {
        this.viewTos.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], WzFormComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzFormComponent.prototype, "serverErrors", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WzFormComponent.prototype, "submitLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], WzFormComponent.prototype, "includeCancel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WzFormComponent.prototype, "cancelLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WzFormComponent.prototype, "autocomplete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzFormComponent.prototype, "formSubmit", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzFormComponent.prototype, "formCancel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzFormComponent.prototype, "viewTos", void 0);
    WzFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-form',
            templateUrl: 'wz.form.html',
            providers: [wz_form_model_1.FormModel],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, wz_form_model_1.FormModel, api_config_1.ApiConfig, core_1.ElementRef])
    ], WzFormComponent);
    return WzFormComponent;
}());
exports.WzFormComponent = WzFormComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1mb3JtL3d6LmZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0csZUFBZSxDQUFDLENBQUE7QUFDL0gsc0JBQW9ELGdCQUFnQixDQUFDLENBQUE7QUFDckUsOEJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFFNUMsMkJBQTBCLDJCQUEyQixDQUFDLENBQUE7QUFhdEQ7SUFjRSx5QkFDVSxFQUFlLEVBQ2YsU0FBb0IsRUFDcEIsU0FBb0IsRUFDcEIsT0FBbUI7UUFIbkIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBZHBCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGdCQUFXLEdBQVcsUUFBUSxDQUFDO1FBQy9CLGlCQUFZLEdBQVcsSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNoQyxlQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDaEMsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2hDLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLHVCQUFrQixHQUFZLEtBQUssQ0FBQztJQU9WLENBQUM7SUFFbEMscUNBQVcsR0FBWCxVQUFZLE9BQVk7UUFDdEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztZQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJ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UztZQUNuQixXQUFXLEVBQUUsY0FBYztZQUMzQixTQUFTLEVBQUUsQ0FBQyx5QkFBUyxDQUFDO1lBQ3RCLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7O3VCQUFBO0lBNkdGLHNCQUFDO0FBQUQsQ0EzR0EsQUEyR0MsSUFBQTtBQTNHWSx1QkFBZSxrQkEyRzNCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL3d6LWZvcm0vd3ouZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgT25DaGFuZ2VzLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1Nb2RlbCB9IGZyb20gJy4vd3ouZm9ybS5tb2RlbCc7XG5pbXBvcnQgeyBGb3JtRmllbGRzLCBTZXJ2ZXJFcnJvcnMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9mb3Jtcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXBpQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLmNvbmZpZyc7XG5cbi8qKlxuICogSG9tZSBwYWdlIGNvbXBvbmVudCAtIHJlbmRlcnMgdGhlIGhvbWUgcGFnZVxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd3ei1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICd3ei5mb3JtLmh0bWwnLFxuICBwcm92aWRlcnM6IFtGb3JtTW9kZWxdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIFd6Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgaXRlbXM6IEZvcm1GaWVsZHNbXTtcbiAgQElucHV0KCkgc2VydmVyRXJyb3JzOiBTZXJ2ZXJFcnJvcnM7XG4gIEBJbnB1dCgpIHN1Ym1pdExhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGluY2x1ZGVDYW5jZWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY2FuY2VsTGFiZWw6IHN0cmluZyA9ICdDYW5jZWwnO1xuICBASW5wdXQoKSBhdXRvY29tcGxldGU6IHN0cmluZyA9ICdvbic7XG4gIEBPdXRwdXQoKSBmb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZm9ybUNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHZpZXdUb3MgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBzdWJtaXRBdHRlbXB0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93UmVxdWlyZWRMZWdlbmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGZvcm1Nb2RlbDogRm9ybU1vZGVsLFxuICAgIHByaXZhdGUgYXBpQ29uZmlnOiBBcGlDb25maWcsXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcbiAgICBpZiAoY2hhbmdlcy5zZXJ2ZXJFcnJvcnMgJiYgdGhpcy5mb3JtKSB0aGlzLm1lcmdlRXJyb3JzKCk7XG4gICAgaWYgKGNoYW5nZXMuaXRlbXMgJiYgdGhpcy5mb3JtKSB0aGlzLm1lcmdlTmV3VmFsdWVzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHRoaXMuZm9ybU1vZGVsLmNyZWF0ZSh0aGlzLml0ZW1zKSk7XG4gIH1cblxuICBwdWJsaWMgbWVyZ2VFcnJvcnMoKSB7XG4gICAgdGhpcy5zZXJ2ZXJFcnJvcnMuZmllbGRFcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGZvciAobGV0IGNvbnRyb2wgaW4gdGhpcy5mb3JtLmNvbnRyb2xzKSB7XG4gICAgICAgIGlmIChjb250cm9sLnRvTG93ZXJDYXNlKCkgPT09IGVycm9yLmZpZWxkLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAoPEZvcm1Db250cm9sPnRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sXSkuc2V0RXJyb3JzKHsgc2VydmVyRXJyb3I6IGVycm9yLmNvZGUgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBtZXJnZU5ld1ZhbHVlcygpIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGZpZWxkOiBhbnkpID0+IHtcbiAgICAgIGZvciAobGV0IGNvbnRyb2wgaW4gdGhpcy5mb3JtLmNvbnRyb2xzKSB7XG4gICAgICAgIGlmIChjb250cm9sID09PSBmaWVsZC5uYW1lKSB7XG4gICAgICAgICAgKDxGb3JtQ29udHJvbD50aGlzLmZvcm0uY29udHJvbHNbY29udHJvbF0pLnBhdGNoVmFsdWUoZmllbGQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbWFya0ZpZWxkc0FzRGlydHkoKSB7XG4gICAgICBmb3IgKGxldCBjb250cm9sIGluIHRoaXMuZm9ybS5jb250cm9scykge1xuICAgICAgICAgICg8Rm9ybUNvbnRyb2w+dGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2xdKS5tYXJrQXNEaXJ0eSgpO1xuICAgICAgfVxuICB9XG5cbiAgcHVibGljIHBhcnNlT3B0aW9ucyhvcHRpb25zOiBhbnkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5zcGxpdCgnLCcpO1xuICB9XG5cbiAgcHVibGljIHJhZGlvU2VsZWN0KGZpZWxkOiBhbnksIG9wdGlvbjogYW55KSB7XG4gICAgKDxGb3JtQ29udHJvbD50aGlzLmZvcm0uY29udHJvbHNbZmllbGRdKS5zZXRWYWx1ZShvcHRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIHNpbXBsZSBjaGVjayBpZiBhIGdpdmVuIGZpZWxkIGhhcyBhIHJlcXVpcmVkIHZhbGlkYXRpb24gcnVsZSBvciBub3RcbiAgICogQHBhcmFtIGZpZWxkIGlzIGEgZm9ybSBmaWVsZCBjb250cm9sLlxuICAgKi9cbiAgcHVibGljIGlzUmVxdWlyZWRGaWVsZChmaWVsZDogRm9ybUZpZWxkcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAndmFsaWRhdGlvbicgaW4gZmllbGQgJiYgKFxuICAgICAgZmllbGQudmFsaWRhdGlvbiA9PT0gJ1JFUVVJUkVEJyB8fFxuICAgICAgZmllbGQudmFsaWRhdGlvbiA9PT0gJ0VNQUlMJyB8fFxuICAgICAgZmllbGQudmFsaWRhdGlvbiA9PT0gJ01VTFRJRU1BSUwnIHx8XG4gICAgICBmaWVsZC52YWxpZGF0aW9uID09PSAnUEFTU1dPUkQnIHx8XG4gICAgICBmaWVsZC52YWxpZGF0aW9uID09PSAnVEVSTVMnIHx8XG4gICAgICBmaWVsZC52YWxpZGF0aW9uID09PSAnQ09MTEVDVElPTicpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIGJvb2xlYW4gZmxhZyB1c2VkIGluIHRoZSB1aSB0byBkcmF3ICcqaW5kaWNhdGVzIHJlcXVpcmVkIGZpZWxkJ1xuICAgKiB3ZSBmaWx0ZXIgdGhyb3VnaCB0aGUgZm9ybSBmaWVsZHMgY2hlY2tpbmcgdmFsaWRhdGlvbi4gSXQncyB0cnVlIHdoZW4gYXQgbGVhc3QgMSBmaWVsZCBpcyByZXF1aXJlZFxuICAgKiBAcGFyYW0gZm9ybUZpZWxkcyBpcyBhbiBhcnJheSBvZiBmb3JtIGZpZWxkcy5cbiAgICovXG4gIHB1YmxpYyBoYXNSZXF1aXJlZEZpZWxkcyhmb3JtRmllbGRzOiBGb3JtRmllbGRzW10pOiBib29sZWFuIHtcbiAgICBsZXQgcmVxID0gZm9ybUZpZWxkcy5maWx0ZXIodGhpcy5pc1JlcXVpcmVkRmllbGQpO1xuICAgIHJldHVybiByZXEubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLnN1Ym1pdEF0dGVtcHQgPSB0cnVlO1xuICAgIHRoaXMubWFya0ZpZWxkc0FzRGlydHkoKTtcbiAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmZvcm1TdWJtaXQuZW1pdCh0aGlzLmZvcm0udmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZXNldEZvcm0oKSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0ucmVzZXQoKTtcbiAgICB0aGlzLnN1Ym1pdEF0dGVtcHQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm1Nb2RlbC51cGRhdGVGb3JtKHRoaXMuZm9ybSwge30pO1xuICAgIHRoaXMuZm9ybU1vZGVsLm1hcmtGb3JtQXNVbnRvdWNoZWQodGhpcy5mb3JtKTtcbiAgfVxuXG4gIHB1YmxpYyBvblZpZXdUb3MoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3VG9zLmVtaXQoKTtcbiAgfVxufVxuIl19
