"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var tab_1 = require('./tab');
var cart_service_1 = require('../../services/cart.service');
var ui_config_1 = require('../../../../shared/services/ui.config');
var CartTabComponent = (function (_super) {
    __extends(CartTabComponent, _super);
    function CartTabComponent(cartService, uiConfig) {
        _super.call(this);
        this.cartService = cartService;
        this.uiConfig = uiConfig;
        this.tabNotify = this.notify;
    }
    CartTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart = this.cartService.data;
        this.configSubscription = this.uiConfig.get('cart').subscribe(function (config) { return _this.config = config.config; });
    };
    CartTabComponent.prototype.ngOnDestroy = function () {
        this.configSubscription.unsubscribe();
    };
    Object.defineProperty(CartTabComponent.prototype, "assetsInCart", {
        get: function () {
            return this.cart.map(function (cart) { return (cart.itemCount || 0) > 0; });
        },
        enumerable: true,
        configurable: true
    });
    CartTabComponent.prototype.onNotification = function (message) {
        switch (message.type) {
            case 'ADD_PROJECT': {
                this.cartService.addProject();
                break;
            }
            case 'REMOVE_PROJECT': {
                this.cartService.removeProject(message.payload);
                break;
            }
            case 'UPDATE_PROJECT': {
                this.cartService.updateProject(message.payload);
                break;
            }
            case 'MOVE_LINE_ITEM': {
                this.cartService.moveLineItemTo(message.payload.otherProject, message.payload.lineItem);
                break;
            }
            case 'CLONE_LINE_ITEM': {
                this.cartService.cloneLineItem(message.payload);
                break;
            }
            case 'REMOVE_LINE_ITEM': {
                this.cartService.removeLineItem(message.payload);
                break;
            }
            case 'EDIT_LINE_ITEM': {
                this.cartService.editLineItem(message.payload.lineItem, message.payload.fieldToEdit);
            }
        }
        ;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CartTabComponent.prototype, "tabNotify", void 0);
    CartTabComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cart-tab-component',
            templateUrl: 'cart-tab.html'
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService, ui_config_1.UiConfig])
    ], CartTabComponent);
    return CartTabComponent;
}(tab_1.Tab));
exports.CartTabComponent = CartTabComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK2NhcnQvY29tcG9uZW50cy90YWJzL2NhcnQtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUUsZUFBZSxDQUFDLENBQUE7QUFHbkYsb0JBQW9CLE9BQU8sQ0FBQyxDQUFBO0FBQzVCLDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzFELDBCQUF5Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBUWpFO0lBQXNDLG9DQUFHO0lBT3ZDLDBCQUFvQixXQUF3QixFQUFVLFFBQWtCO1FBQ3RFLGlCQUFPLENBQUM7UUFEVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFOOUQsY0FBUyxHQUF5QixJQUFJLENBQUMsTUFBTSxDQUFDO0lBUXhELENBQUM7SUFFTSxtQ0FBUSxHQUFmO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFXLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQTNCLENBQTJCLENBQUMsQ0FBQztJQUM5RyxDQUFDO0lBRU0sc0NBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELHNCQUFXLDBDQUFZO2FBQXZCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1FBQzFELENBQUM7OztPQUFBO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsT0FBWTtRQUNoQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQixLQUFLLGFBQWEsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUM5QixLQUFLLENBQUM7WUFDUixDQUFDO1lBQ0QsS0FBSyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hELEtBQUssQ0FBQztZQUNSLENBQUM7WUFDRCxLQUFLLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEQsS0FBSyxDQUFDO1lBQ1IsQ0FBQztZQUNELEtBQUssZ0JBQWdCLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEYsS0FBSyxDQUFDO1lBQ1IsQ0FBQztZQUNELEtBQUssaUJBQWlCLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLENBQUM7WUFDUixDQUFDO1lBQ0QsS0FBSyxrQkFBa0IsRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pELEtBQUssQ0FBQztZQUNSLENBQUM7WUFDRCxLQUFLLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdkYsQ0FBQztRQUNILENBQUM7UUFBQSxDQUFDO0lBQ0osQ0FBQztJQXJERDtRQUFDLGFBQU0sRUFBRTs7dURBQUE7SUFQWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsZUFBZTtTQUM3QixDQUFDOzt3QkFBQTtJQXlERix1QkFBQztBQUFELENBdkRBLEFBdURDLENBdkRxQyxTQUFHLEdBdUR4QztBQXZEWSx3QkFBZ0IsbUJBdUQ1QixDQUFBIiwiZmlsZSI6ImFwcC8rY29tbWVyY2UvK2NhcnQvY29tcG9uZW50cy90YWJzL2NhcnQtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcblxuaW1wb3J0IHsgVGFiIH0gZnJvbSAnLi90YWInO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVWlDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdWkuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnY2FydC10YWItY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdjYXJ0LXRhYi5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIENhcnRUYWJDb21wb25lbnQgZXh0ZW5kcyBUYWIgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKSB0YWJOb3RpZnk6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gdGhpcy5ub3RpZnk7XG5cbiAgcHVibGljIGNhcnQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIGNvbmZpZzogYW55O1xuICBwcml2YXRlIGNvbmZpZ1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLCBwcml2YXRlIHVpQ29uZmlnOiBVaUNvbmZpZykge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0ID0gdGhpcy5jYXJ0U2VydmljZS5kYXRhO1xuICAgIHRoaXMuY29uZmlnU3Vic2NyaXB0aW9uID0gdGhpcy51aUNvbmZpZy5nZXQoJ2NhcnQnKS5zdWJzY3JpYmUoKGNvbmZpZzogYW55KSA9PiB0aGlzLmNvbmZpZyA9IGNvbmZpZy5jb25maWcpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY29uZmlnU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFzc2V0c0luQ2FydCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0Lm1hcChjYXJ0ID0+IChjYXJ0Lml0ZW1Db3VudCB8fCAwKSA+IDApO1xuICB9XG5cbiAgcHVibGljIG9uTm90aWZpY2F0aW9uKG1lc3NhZ2U6IGFueSk6IHZvaWQge1xuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlICdBRERfUFJPSkVDVCc6IHtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5hZGRQcm9qZWN0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnUkVNT1ZFX1BST0pFQ1QnOiB7XG4gICAgICAgIHRoaXMuY2FydFNlcnZpY2UucmVtb3ZlUHJvamVjdChtZXNzYWdlLnBheWxvYWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ1VQREFURV9QUk9KRUNUJzoge1xuICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLnVwZGF0ZVByb2plY3QobWVzc2FnZS5wYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdNT1ZFX0xJTkVfSVRFTSc6IHtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5tb3ZlTGluZUl0ZW1UbyhtZXNzYWdlLnBheWxvYWQub3RoZXJQcm9qZWN0LCBtZXNzYWdlLnBheWxvYWQubGluZUl0ZW0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ0NMT05FX0xJTkVfSVRFTSc6IHtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5jbG9uZUxpbmVJdGVtKG1lc3NhZ2UucGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnUkVNT1ZFX0xJTkVfSVRFTSc6IHtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5yZW1vdmVMaW5lSXRlbShtZXNzYWdlLnBheWxvYWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ0VESVRfTElORV9JVEVNJzoge1xuICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLmVkaXRMaW5lSXRlbShtZXNzYWdlLnBheWxvYWQubGluZUl0ZW0sIG1lc3NhZ2UucGF5bG9hZC5maWVsZFRvRWRpdCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19
