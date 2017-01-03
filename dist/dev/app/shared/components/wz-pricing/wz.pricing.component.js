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
var WzPricingComponent = (function () {
    function WzPricingComponent() {
        this.close = new core_1.EventEmitter();
        this.calculatePricing = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
    }
    Object.defineProperty(WzPricingComponent.prototype, "options", {
        set: function (options) {
            this.buildForm(options);
            this._options = options;
        },
        enumerable: true,
        configurable: true
    });
    WzPricingComponent.prototype.onSubmit = function () {
        this.calculatePricing.emit(this.form);
    };
    WzPricingComponent.prototype.parentIsEmpty = function (currentOption) {
        if (currentOption.primary) {
            return false;
        }
        else {
            var parent_1 = this._options.filter(function (o) { return o.childId === currentOption.id; })[0];
            return this.form[parent_1.name] === '';
        }
    };
    WzPricingComponent.prototype.validOptionsFor = function (currentOption) {
        var _this = this;
        if (this.parentIsEmpty(currentOption))
            return;
        if (currentOption.primary) {
            return currentOption.attributeList;
        }
        else {
            var parent_2 = this.findParent(currentOption);
            var parentFormValue = this.form[parent_2.name];
            var rawOptions = parent_2.validChildChoicesMap[parentFormValue];
            if (!rawOptions) {
                this.clearForm();
                this.error.emit();
                return;
            }
            var options = rawOptions.map(function (o) { return _this.findOption(o, currentOption.attributeList); });
            if (options.length === 1) {
                this.form[currentOption.name] = options[0].name;
            }
            return options;
        }
    };
    Object.defineProperty(WzPricingComponent.prototype, "formIsInvalid", {
        get: function () {
            var values = [];
            for (var field in this.form) {
                values.push(this.form[field]);
            }
            return values.indexOf('') !== -1;
        },
        enumerable: true,
        configurable: true
    });
    WzPricingComponent.prototype.findParent = function (currentOption) {
        return this._options.filter(function (o) { return o.childId === currentOption.id; })[0];
    };
    WzPricingComponent.prototype.findOption = function (optionName, options) {
        return options.filter(function (o) {
            return o.name === optionName;
        })[0];
    };
    WzPricingComponent.prototype.buildForm = function (options) {
        var _this = this;
        this.form = {};
        options.forEach(function (option) {
            _this.form[option.displayName] = '';
        });
    };
    WzPricingComponent.prototype.clearForm = function () {
        for (var field in this.form) {
            this.form[field] = '';
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], WzPricingComponent.prototype, "options", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WzPricingComponent.prototype, "close", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WzPricingComponent.prototype, "calculatePricing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WzPricingComponent.prototype, "error", void 0);
    WzPricingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-pricing',
            templateUrl: 'wz.pricing.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], WzPricingComponent);
    return WzPricingComponent;
}());
exports.WzPricingComponent = WzPricingComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1wcmljaW5nL3d6LnByaWNpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0YsZUFBZSxDQUFDLENBQUE7QUFRaEc7SUFBQTtRQVFZLFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDOUMscUJBQWdCLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3pELFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUE2RTFELENBQUM7SUFuRkMsc0JBQUksdUNBQU87YUFBWCxVQUFZLE9BQVk7WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUtNLHFDQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sMENBQWEsR0FBcEIsVUFBcUIsYUFBa0I7UUFFckMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUVOLElBQUksUUFBTSxHQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBTSxJQUFLLE9BQUEsQ0FBQyxDQUFDLE9BQU8sS0FBSyxhQUFhLENBQUMsRUFBRSxFQUE5QixDQUE4QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVNLDRDQUFlLEdBQXRCLFVBQXVCLGFBQWtCO1FB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LENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQW5GRDtRQUFDLFlBQUssRUFBRTs7O3FEQUFBO0lBS1I7UUFBQyxhQUFNLEVBQUU7O3FEQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O2dFQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O3FEQUFBO0lBaEJYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsaUJBQWlCO1lBQzlCLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7OzBCQUFBO0lBd0ZGLHlCQUFDO0FBQUQsQ0F2RkEsQUF1RkMsSUFBQTtBQXZGWSwwQkFBa0IscUJBdUY5QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1wcmljaW5nL3d6LnByaWNpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3d6LXByaWNpbmcnLFxuICB0ZW1wbGF0ZVVybDogJ3d6LnByaWNpbmcuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFd6UHJpY2luZ0NvbXBvbmVudCB7XG4gIHB1YmxpYyBfb3B0aW9uczogYW55O1xuICBwdWJsaWMgZm9ybTogYW55O1xuICBASW5wdXQoKVxuICBzZXQgb3B0aW9ucyhvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLmJ1aWxkRm9ybShvcHRpb25zKTtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2FsY3VsYXRlUHJpY2luZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlcnJvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FsY3VsYXRlUHJpY2luZy5lbWl0KHRoaXMuZm9ybSk7XG4gIH1cblxuICBwdWJsaWMgcGFyZW50SXNFbXB0eShjdXJyZW50T3B0aW9uOiBhbnkpOiBib29sZWFuIHtcbiAgICAvLyBJZiB0aGUgY3VycmVudE9wdGlvbiBpcyB0aGUgdG9wLW1vc3QgcGFyZW50LCBpdCBzaG91bGQgbmV2ZXIgYmUgZGlzYWJsZWRcbiAgICBpZiAoY3VycmVudE9wdGlvbi5wcmltYXJ5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZpbmQgdGhlIHBhcmVudCBvcHRpb24gb2YgdGhlIGN1cnJlbnRPcHRpb24sIGFuZCBjaGVjayBpZiBpdCdzIHZhbHVlIGlzIGVtcHR5XG4gICAgICBsZXQgcGFyZW50OiBhbnkgPSB0aGlzLl9vcHRpb25zLmZpbHRlcigobzogYW55KSA9PiBvLmNoaWxkSWQgPT09IGN1cnJlbnRPcHRpb24uaWQpWzBdO1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybVtwYXJlbnQubmFtZV0gPT09ICcnO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB2YWxpZE9wdGlvbnNGb3IoY3VycmVudE9wdGlvbjogYW55KTogYW55IHtcbiAgICAvLyBJZiB0aGUgcGFyZW50IG9wdGlvbiBoYXMgbm90IGJlZW4gc2VsZWN0ZWQsIHJldHVybjtcbiAgICBpZiAodGhpcy5wYXJlbnRJc0VtcHR5KGN1cnJlbnRPcHRpb24pKSByZXR1cm47XG4gICAgLy8gSWYgdGhlIGN1cnJlbnRPcHRpb24gaXMgdGhlIHByaW1hcnkgb3B0aW9uLCB0aGUgdmFsaWQgY2hvaWNlcyBhcmUgaXRzIGF0dHJpYnV0ZUxpc3RcbiAgICBpZiAoY3VycmVudE9wdGlvbi5wcmltYXJ5KSB7XG4gICAgICByZXR1cm4gY3VycmVudE9wdGlvbi5hdHRyaWJ1dGVMaXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGaW5kIHRoZSBwYXJlbnQgb3B0aW9uIG9mIHRoZSBjdXJyZW50IG9wdGlvblxuICAgICAgbGV0IHBhcmVudDogYW55ID0gdGhpcy5maW5kUGFyZW50KGN1cnJlbnRPcHRpb24pO1xuICAgICAgLy8gVXNlIHRoZSBwYXJlbnQgb3B0aW9uJ3MgbmFtZSB0byBmaW5kIGl0J3MgY3VycmVudCBmb3JtIHZhbHVlXG4gICAgICBsZXQgcGFyZW50Rm9ybVZhbHVlOiBhbnkgPSB0aGlzLmZvcm1bcGFyZW50Lm5hbWVdO1xuICAgICAgLy8gRmluZCB0aGUgdmFsaWQgY2hvaWNlcyBhcnJheSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBwcmV2aW91cyBvcHRpb24gdGhlIHVzZXIgc2VsZWN0ZWRcbiAgICAgIGxldCByYXdPcHRpb25zOiBhbnkgPSBwYXJlbnQudmFsaWRDaGlsZENob2ljZXNNYXBbcGFyZW50Rm9ybVZhbHVlXTtcbiAgICAgIC8vIFRoZXJlIHNob3VsZCBhbHdheXMgYmUgb3B0aW9ucywgaG93ZXZlciBpZiB0aGVyZSBhcmVuJ3Qgd2UgbmVlZCB0byBhbGVydCB0aGUgdXNlciB0aGUgY2FsY3VsYXRpb24gd2VudCB3cm9uZ1xuICAgICAgaWYgKCFyYXdPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2xlYXJGb3JtKCk7XG4gICAgICAgIHRoaXMuZXJyb3IuZW1pdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBUaGUgcmF3IG9wdGlvbnMgaXMganVzdCBhbiBhcnJheSBvZiBzdHJpbmdzLCB3ZSBuZWVkIHRvIG1hcCB0aGVtIGJhY2sgdG8gdGhlIGF0dHJpYnV0ZUxpc3Qgb2YgdGhlIG9wdGlvbiB0byBnZXQgdGhlIG5hbWUsIHZhbHVlLCBtdWx0aXBsaWVyLCBldGM7XG4gICAgICBsZXQgb3B0aW9uczogYW55ID0gcmF3T3B0aW9ucy5tYXAoKG86IGFueSkgPT4geyByZXR1cm4gdGhpcy5maW5kT3B0aW9uKG8sIGN1cnJlbnRPcHRpb24uYXR0cmlidXRlTGlzdCk7IH0pO1xuICAgICAgLy8gSWYgdGhlcmUgaXMgb25seSAxIG9wdGlvbiwgdXBkYXRlIHRoZSBmb3JtIHZhbHVlIGZvciB0aGF0IG9wdGlvblxuICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMuZm9ybVtjdXJyZW50T3B0aW9uLm5hbWVdID0gb3B0aW9uc1swXS5uYW1lO1xuICAgICAgfVxuICAgICAgLy8gRmluYWxseSwgcmV0dXJuIHRoZSB2YWxpZCBvcHRpb25zXG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvcm1Jc0ludmFsaWQoKTogYm9vbGVhbiB7XG4gICAgbGV0IHZhbHVlczogYW55ID0gW107XG4gICAgZm9yIChsZXQgZmllbGQgaW4gdGhpcy5mb3JtKSB7XG4gICAgICB2YWx1ZXMucHVzaCh0aGlzLmZvcm1bZmllbGRdKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcy5pbmRleE9mKCcnKSAhPT0gLTE7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQYXJlbnQoY3VycmVudE9wdGlvbjogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5maWx0ZXIoKG86IGFueSkgPT4gby5jaGlsZElkID09PSBjdXJyZW50T3B0aW9uLmlkKVswXTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZE9wdGlvbihvcHRpb25OYW1lOiBzdHJpbmcsIG9wdGlvbnM6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKChvOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBvLm5hbWUgPT09IG9wdGlvbk5hbWU7XG4gICAgfSlbMF07XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRm9ybShvcHRpb25zOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0gPSB7fTtcbiAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbjogYW55KSA9PiB7XG4gICAgICB0aGlzLmZvcm1bb3B0aW9uLmRpc3BsYXlOYW1lXSA9ICcnO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckZvcm0oKTogdm9pZCB7XG4gICAgZm9yIChsZXQgZmllbGQgaW4gdGhpcy5mb3JtKSB7XG4gICAgICB0aGlzLmZvcm1bZmllbGRdPSAnJztcbiAgICB9XG4gIH1cbn0iXX0=
