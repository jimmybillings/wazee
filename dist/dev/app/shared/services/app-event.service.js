"use strict";
var Rx_1 = require('rxjs/Rx');
var AppEventService = (function () {
    function AppEventService() {
    }
    AppEventService.emit = function (event) {
        AppEventService.eventsSubject.next(event);
    };
    Object.defineProperty(AppEventService, "events", {
        get: function () {
            return AppEventService.eventsSubject;
        },
        enumerable: true,
        configurable: true
    });
    AppEventService.eventsSubject = new Rx_1.Subject();
    return AppEventService;
}());
exports.AppEventService = AppEventService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvYXBwLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1CQUF3QixTQUFTLENBQUMsQ0FBQTtBQVlsQztJQUFBO0lBVUEsQ0FBQztJQVBlLG9CQUFJLEdBQWxCLFVBQW1CLEtBQWU7UUFDaEMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHNCQUFrQix5QkFBTTthQUF4QjtZQUNFLE1BQU0sQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBUmEsNkJBQWEsR0FBaUIsSUFBSSxZQUFPLEVBQUUsQ0FBQztJQVM1RCxzQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksdUJBQWUsa0JBVTNCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9hcHAtZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1J4JztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBFdmVudCB7XG4gIHR5cGU6IEFwcEV2ZW50VHlwZTtcbiAgcGF5bG9hZD86IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gQXBwRXZlbnRUeXBlIHtcbiAgSG9tZVBhZ2VTZWFyY2gsXG4gIFVzZXJMb2dPdXRcbn1cblxuZXhwb3J0IGNsYXNzIEFwcEV2ZW50U2VydmljZSB7XG4gIHB1YmxpYyBzdGF0aWMgZXZlbnRzU3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwdWJsaWMgc3RhdGljIGVtaXQoZXZlbnQ6IEFwcEV2ZW50KSB7XG4gICAgQXBwRXZlbnRTZXJ2aWNlLmV2ZW50c1N1YmplY3QubmV4dChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudHMoKTogU3ViamVjdDxBcHBFdmVudD4ge1xuICAgIHJldHVybiBBcHBFdmVudFNlcnZpY2UuZXZlbnRzU3ViamVjdDtcbiAgfVxufVxuXG4iXX0=
