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
var FormModel = (function () {
    function FormModel() {
    }
    FormModel.prototype.create = function (form) {
        var _this = this;
        var newForm = {};
        form.forEach(function (field) {
            newForm[field.name] = [field.value];
            newForm[field.name].push(_this._getValidator(field.validation));
        });
        return newForm;
    };
    FormModel.prototype.updateForm = function (form, values) {
        for (var controlName in form.controls) {
            if (values.hasOwnProperty(controlName))
                form.controls[controlName].setValue(values[controlName]);
            form.controls[controlName].setValue('');
        }
    };
    FormModel.prototype.markFormAsUntouched = function (form) {
        form['_touched'] = false;
        form['_pristine'] = true;
        for (var i in form.controls) {
            form.controls[i]._touched = false;
            form.controls[i]._pristine = true;
        }
    };
    FormModel.prototype._getValidator = function (type) {
        switch (type) {
            case 'REQUIRED':
                return this._getRequiredValidator();
            case 'EMAIL':
                return this._getEmailValidator();
            case 'PASSWORD':
                return this._getPasswordValidator();
            case 'COLLECTION':
                return this._getCollectionValidator();
            case 'MULTIEMAIL':
                return this._getMultiEmailValidator();
            case 'TERMS':
                return this._getTermsValidator();
            default:
                return this._getOptionalValidator;
        }
    };
    FormModel.prototype._getOptionalValidator = function () {
        return forms_1.Validators.nullValidator;
    };
    FormModel.prototype._getRequiredValidator = function () {
        return forms_1.Validators.required;
    };
    FormModel.prototype._getEmailValidator = function () {
        return forms_1.Validators.compose([
            forms_1.Validators.required,
            forms_1.Validators.minLength(5),
            forms_1.Validators.pattern('[a-z0-9!#$%&`*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9]){1,}?)*')
        ]);
    };
    FormModel.prototype._getMultiEmailValidator = function () {
        return forms_1.Validators.compose([
            forms_1.Validators.required,
            forms_1.Validators.pattern('\\s*(([a-z0-9!#$%&`*+\/=?^_`{|}~.-]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)(\\s*(;|,)\\s*|\\s*$))*')
        ]);
    };
    FormModel.prototype._getPasswordValidator = function () {
        return forms_1.Validators.compose([
            forms_1.Validators.required,
            forms_1.Validators.minLength(8)
        ]);
    };
    FormModel.prototype._getCollectionValidator = function () {
        return forms_1.Validators.required;
    };
    FormModel.prototype._getTermsValidator = function () {
        return this.checkboxRequired;
    };
    FormModel.prototype.checkboxRequired = function (control) {
        if (!control.value) {
            return { mustBeCheckedError: 'Must be checked' };
        }
        else {
            return null;
        }
    };
    FormModel = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FormModel);
    return FormModel;
}());
exports.FormModel = FormModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1mb3JtL3d6LmZvcm0ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxzQkFBbUQsZ0JBQWdCLENBQUMsQ0FBQTtBQVVwRTtJQUFBO0lBOEZBLENBQUM7SUE1RkMsMEJBQU0sR0FBTixVQUFPLElBQWtCO1FBQXpCLGlCQU9DO1FBTkMsSUFBSSxPQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFpQjtZQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTSw4QkFBVSxHQUFqQixVQUFrQixJQUFlLEVBQUUsTUFBVztRQUM1QyxHQUFHLENBQUMsQ0FBQyxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RCxDQUFDO0lBQ0gsQ0FBQztJQUVNLHVDQUFtQixHQUExQixVQUEyQixJQUFlO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN6QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBRSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzNDLENBQUM7SUFDSCxDQUFDO0lBRU8saUNBQWEsR0FBckIsVUFBc0IsSUFBUztRQUM3QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2IsS0FBSyxVQUFVO2dCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUN0QyxLQUFLLE9BQU87Z0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ25DLEtBQUssVUFBVTtnQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDdEMsS0FBSyxZQUFZO2dCQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUN4QyxLQUFLLFlBQVk7Z0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQ3hDLEtBQUssT0FBTztnQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDbkM7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztJQUVPLHlDQUFxQixHQUE3QjtRQUNFLE1BQU0sQ0FBQyxrQkFBVSxDQUFDLGFBQWEsQ0FBQztJQUNsQyxDQUFDO0lBRU8seUNBQXFCLEdBQTdCO1FBQ0UsTUFBTSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFTyxzQ0FBa0IsR0FBMUI7UUFDRSxNQUFNLENBQUMsa0JBQVUsQ0FBQyxPQUFPLENBQUM7WUFDeEIsa0JBQVUsQ0FBQyxRQUFRO1lBQ25CLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN2QixrQkFBVSxDQUFDLE9BQU8sQ0FBQyxvR0FBb0csQ0FBQztTQUN6SCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sMkNBQXVCLEdBQS9CO1FBQ0UsTUFBTSxDQUFDLGtCQUFVLENBQUMsT0FBTyxDQUFDO1lBQ3hCLGtCQUFVLENBQUMsUUFBUTtZQUNuQixrQkFBVSxDQUFDLE9BQU8sQ0FBQyxnS0FBZ0ssQ0FBQztTQUNyTCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8seUNBQXFCLEdBQTdCO1FBQ0UsTUFBTSxDQUFDLGtCQUFVLENBQUMsT0FBTyxDQUFDO1lBQ3hCLGtCQUFVLENBQUMsUUFBUTtZQUNuQixrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDeEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDJDQUF1QixHQUEvQjtRQUdFLE1BQU0sQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRU8sc0NBQWtCLEdBQTFCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBRU8sb0NBQWdCLEdBQXhCLFVBQXlCLE9BQWtCO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztRQUNuRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUE5Rkg7UUFBQyxpQkFBVSxFQUFFOztpQkFBQTtJQStGYixnQkFBQztBQUFELENBOUZBLEFBOEZDLElBQUE7QUE5RlksaUJBQVMsWUE4RnJCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL3d6LWZvcm0vd3ouZm9ybS5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBpbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1GaWVsZHMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm1zLmludGVyZmFjZSc7XG4vLyBpbXBvcnQgeyBXekNvbGxlY3Rpb25WYWxpZGF0b3IgfSBmcm9tICcuL3d6LXZhbGlkYXRvcnMvd3ouY29sbGVjdGlvbi12YWxpZGF0b3InO1xuLy8gaW1wb3J0IHsgV3pUZXN0VmFsaWRhdG9yIH0gZnJvbSAnLi93ei12YWxpZGF0b3JzL3d6LnRlc3QtdmFsaWRhdG9yJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgY3JlYXRlcyBhIGR5bmFtaWMgbW9kZWwgdG8gZHJpdmUgYSBmb3JtLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybU1vZGVsIHtcblxuICBjcmVhdGUoZm9ybTogRm9ybUZpZWxkc1tdKTogRm9ybUdyb3VwIHtcbiAgICBsZXQgbmV3Rm9ybTogYW55ID0ge307XG4gICAgZm9ybS5mb3JFYWNoKChmaWVsZDogRm9ybUZpZWxkcykgPT4ge1xuICAgICAgbmV3Rm9ybVtmaWVsZC5uYW1lXSA9IFtmaWVsZC52YWx1ZV07XG4gICAgICBuZXdGb3JtW2ZpZWxkLm5hbWVdLnB1c2godGhpcy5fZ2V0VmFsaWRhdG9yKGZpZWxkLnZhbGlkYXRpb24pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3Rm9ybTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGb3JtKGZvcm06IEZvcm1Hcm91cCwgdmFsdWVzOiBhbnkpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBjb250cm9sTmFtZSBpbiBmb3JtLmNvbnRyb2xzKSB7XG4gICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGNvbnRyb2xOYW1lKSlcbiAgICAgICAgKDxGb3JtQ29udHJvbD5mb3JtLmNvbnRyb2xzW2NvbnRyb2xOYW1lXSkuc2V0VmFsdWUodmFsdWVzW2NvbnRyb2xOYW1lXSk7XG4gICAgICAoPEZvcm1Db250cm9sPmZvcm0uY29udHJvbHNbY29udHJvbE5hbWVdKS5zZXRWYWx1ZSgnJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1hcmtGb3JtQXNVbnRvdWNoZWQoZm9ybTogRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgZm9ybVsnX3RvdWNoZWQnXSA9IGZhbHNlO1xuICAgIGZvcm1bJ19wcmlzdGluZSddID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpIGluIGZvcm0uY29udHJvbHMpIHtcbiAgICAgICg8YW55PmZvcm0uY29udHJvbHNbaV0pLl90b3VjaGVkID0gZmFsc2U7XG4gICAgICAoPGFueT5mb3JtLmNvbnRyb2xzW2ldKS5fcHJpc3RpbmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldFZhbGlkYXRvcih0eXBlOiBhbnkpOiBWYWxpZGF0b3JzIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ1JFUVVJUkVEJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFJlcXVpcmVkVmFsaWRhdG9yKCk7XG4gICAgICBjYXNlICdFTUFJTCc6XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRFbWFpbFZhbGlkYXRvcigpO1xuICAgICAgY2FzZSAnUEFTU1dPUkQnOlxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0UGFzc3dvcmRWYWxpZGF0b3IoKTtcbiAgICAgIGNhc2UgJ0NPTExFQ1RJT04nOlxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Q29sbGVjdGlvblZhbGlkYXRvcigpO1xuICAgICAgY2FzZSAnTVVMVElFTUFJTCc6XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNdWx0aUVtYWlsVmFsaWRhdG9yKCk7XG4gICAgICBjYXNlICdURVJNUyc6XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRUZXJtc1ZhbGlkYXRvcigpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9wdGlvbmFsVmFsaWRhdG9yO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldE9wdGlvbmFsVmFsaWRhdG9yKCk6IFZhbGlkYXRvcnMge1xuICAgIHJldHVybiBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3I7XG4gIH1cblxuICBwcml2YXRlIF9nZXRSZXF1aXJlZFZhbGlkYXRvcigpOiBWYWxpZGF0b3JzIHtcbiAgICByZXR1cm4gVmFsaWRhdG9ycy5yZXF1aXJlZDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEVtYWlsVmFsaWRhdG9yKCk6IFZhbGlkYXRvcnMge1xuICAgIHJldHVybiBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDUpLFxuICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKCdbYS16MC05ISMkJSZgKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSl7MSx9PykqJylcbiAgICBdKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldE11bHRpRW1haWxWYWxpZGF0b3IoKTogVmFsaWRhdG9ycyB7XG4gICAgcmV0dXJuIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKCdcXFxccyooKFthLXowLTkhIyQlJmAqK1xcLz0/Xl9ge3x9fi4tXSspQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuKXwoKFthLXpBLVowLTlcXFxcLV0rXFwuKSspKShbYS16QS1aXXsyLDR9fFswLTldezEsM30pKFxcXFxdPykoXFxcXHMqKDt8LClcXFxccyp8XFxcXHMqJCkpKicpXG4gICAgXSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYXNzd29yZFZhbGlkYXRvcigpOiBWYWxpZGF0b3JzIHtcbiAgICByZXR1cm4gVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KVxuICAgIF0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q29sbGVjdGlvblZhbGlkYXRvcigpOiBWYWxpZGF0b3JzIHtcbiAgICAvLyByZXR1cm4gW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFd6VGVzdFZhbGlkYXRvci5zdGFydHNXaXRoTnVtYmVyXTtcbiAgICAvLyByZXR1cm4gVmFsaWRhdG9ycy5yZXF1aXJlZCwgV3pDb2xsZWN0aW9uVmFsaWRhdG9yLmNoZWNrQ29sbGVjdGlvbk5hbWU7XG4gICAgcmV0dXJuIFZhbGlkYXRvcnMucmVxdWlyZWQ7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUZXJtc1ZhbGlkYXRvcigpOiBWYWxpZGF0b3JzIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja2JveFJlcXVpcmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja2JveFJlcXVpcmVkKGNvbnRyb2w6IEZvcm1Hcm91cCkge1xuICAgIGlmICghY29udHJvbC52YWx1ZSkge1xuICAgICAgcmV0dXJuIHsgbXVzdEJlQ2hlY2tlZEVycm9yOiAnTXVzdCBiZSBjaGVja2VkJyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
