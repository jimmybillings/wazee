"use strict";
var Rx_1 = require('rxjs/Rx');
var api_service_1 = require('../services/api.service');
var mock_api_matchers_1 = require('./mock-api.matchers');
exports.mockApiMatchers = mock_api_matchers_1.mockApiMatchers;
;
var MockApiService = (function () {
    function MockApiService() {
        this.callCounter = { get: 0, put: 0, post: 0, delete: 0 };
        this._getResponse = [{ responseFor: 'get' }];
        this._postResponse = [{ responseFor: 'post' }];
        this._putResponse = [{ responseFor: 'put' }];
        this._deleteResponse = [{ responseFor: 'delete' }];
        this.initialize();
    }
    Object.defineProperty(MockApiService.prototype, "injector", {
        get: function () {
            return this.apiService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockApiService.prototype, "getResponse", {
        get: function () {
            return (this._getResponse.length === 1) ? this._getResponse[0] : this._getResponse;
        },
        set: function (response) {
            this._getResponse = (Array.isArray(response)) ? response : [response];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockApiService.prototype, "putResponse", {
        get: function () {
            return (this._putResponse.length === 1) ? this._putResponse[0] : this._putResponse;
        },
        set: function (response) {
            this._putResponse = (Array.isArray(response)) ? response : [response];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockApiService.prototype, "postResponse", {
        get: function () {
            return (this._postResponse.length === 1) ? this._postResponse[0] : this._postResponse;
        },
        set: function (response) {
            this._postResponse = (Array.isArray(response)) ? response : [response];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockApiService.prototype, "deleteResponse", {
        get: function () {
            return (this._deleteResponse.length === 1) ? this._deleteResponse[0] : this._deleteResponse;
        },
        set: function (response) {
            this._deleteResponse = (Array.isArray(response)) ? response : [response];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockApiService.prototype, "get", {
        get: function () { return this.spies.get; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockApiService.prototype, "post", {
        get: function () { return this.spies.post; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockApiService.prototype, "put", {
        get: function () { return this.spies.put; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockApiService.prototype, "delete", {
        get: function () { return this.spies.delete; },
        enumerable: true,
        configurable: true
    });
    MockApiService.prototype.initialize = function () {
        var _this = this;
        this.apiService = new api_service_1.ApiService(null, null, null, null, null);
        this.spies = {
            get: spyOn(this.apiService, 'get').and.callFake(function () {
                if (_this.getError) {
                    return Rx_1.Observable.throw(_this.getError);
                }
                else {
                    var counter = _this.callCounter.get;
                    if (_this.callCounter.get !== _this._getResponse.length - 1)
                        _this.callCounter.get++;
                    return Rx_1.Observable.of(_this._getResponse[counter]);
                }
            }),
            post: spyOn(this.apiService, 'post').and.callFake(function () {
                if (_this.postError) {
                    return Rx_1.Observable.throw(_this.postError);
                }
                else {
                    var counter = _this.callCounter.post;
                    if (_this.callCounter.post !== _this._postResponse.length - 1)
                        _this.callCounter.post++;
                    return Rx_1.Observable.of(_this._postResponse[counter]);
                }
            }),
            put: spyOn(this.apiService, 'put').and.callFake(function () {
                if (_this.putError) {
                    return Rx_1.Observable.throw(_this.putError);
                }
                else {
                    var counter = _this.callCounter.put;
                    if (_this.callCounter.put !== _this._putResponse.length - 1)
                        _this.callCounter.put++;
                    return Rx_1.Observable.of(_this._putResponse[counter]);
                }
            }),
            delete: spyOn(this.apiService, 'delete').and.callFake(function () {
                if (_this.deleteError) {
                    return Rx_1.Observable.throw(_this.deleteError);
                }
                else {
                    var counter = _this.callCounter.delete;
                    if (_this.callCounter.delete !== _this._deleteResponse.length - 1)
                        _this.callCounter.delete++;
                    return Rx_1.Observable.of(_this._deleteResponse[counter]);
                }
            })
        };
    };
    return MockApiService;
}());
exports.MockApiService = MockApiService;
;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9ja3MvbW9jay1hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUJBQTJCLFNBQVMsQ0FBQyxDQUFBO0FBRXJDLDRCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBSXJELGtDQUFnQyxxQkFBcUIsQ0FBQztBQUE3Qyw4REFBNkM7QUFFMkIsQ0FBQztBQUVsRjtJQTZCRTtRQWpCUSxnQkFBVyxHQUFnQixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztRQVlsRSxpQkFBWSxHQUF1QixDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDNUQsa0JBQWEsR0FBdUIsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzlELGlCQUFZLEdBQXVCLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM1RCxvQkFBZSxHQUF1QixDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFHeEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFHRCxzQkFBVyxvQ0FBUTthQUFuQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsdUNBQVc7YUFBdEI7WUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDckYsQ0FBQzthQUVELFVBQXVCLFFBQTBDO1lBQy9ELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFD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LWFwaS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2FwaS5pbnRlcmZhY2UnO1xuXG4vLyBBZGQgdGhlc2UgdG8gYSBiZWZvcmVFYWNoKCkgbWV0aG9kIHdpdGggYWRkTWF0Y2hlcnMobW9ja0FwaU1hdGNoZXJzKS5cbmV4cG9ydCB7IG1vY2tBcGlNYXRjaGVycyB9IGZyb20gJy4vbW9jay1hcGkubWF0Y2hlcnMnO1xuXG5pbnRlcmZhY2UgQ2FsbENvdW50ZXIgeyBnZXQ6IG51bWJlcjsgcHV0OiBudW1iZXI7IHBvc3Q6IG51bWJlcjsgZGVsZXRlOiBudW1iZXI7IH07XG5cbmV4cG9ydCBjbGFzcyBNb2NrQXBpU2VydmljZSB7XG4gIC8vIEVycm9yczpcbiAgLy8gVGhlc2UgYXJlIG5vcm1hbGx5IGRvcm1hbnQsIGJ1dCBpZiB5b3Ugc2V0IHRoZW0gdG8gc29tZXRoaW5nLCB0aGVuIHRoZVxuICAvLyBzcHkncyByZXR1cm5lZCBPYnNlcnZhYmxlIHdpbGwgdGhyb3cgeW91ciBzcGVjaWZpZWQgZXJyb3IgdmFsdWUgKGluc3RlYWQgb2ZcbiAgLy8gZW1pdHRpbmcgdGhlIG5vcm1hbCByZXNwb25zZSkgd2hlbiB0aGUgc3B5IGlzIGNhbGxlZC5cbiAgcHVibGljIGdldEVycm9yOiBhbnk7XG4gIHB1YmxpYyBwb3N0RXJyb3I6IGFueTtcbiAgcHVibGljIHB1dEVycm9yOiBhbnk7XG4gIHB1YmxpYyBkZWxldGVFcnJvcjogYW55O1xuXG4gIHByaXZhdGUgc3BpZXM6IE1vY2tBcGlTZXJ2aWNlU3BpZXM7XG4gIHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZTtcbiAgcHJpdmF0ZSBjYWxsQ291bnRlcjogQ2FsbENvdW50ZXIgPSB7IGdldDogMCwgcHV0OiAwLCBwb3N0OiAwLCBkZWxldGU6IDAgfTtcblxuICAvLyBSZXNwb25zZXM6XG4gIC8vIFNldCB0aGVzZSBpZiB5b3UgY2FyZSBhYm91dCB0aGUgY29udGVudHMgb2YgYSBzcGVjaWZpYyByZXNwb25zZVxuICAvLyAoc28geW91IGNhbiB2ZXJpZnkgdGhhdCBzb21lIG90aGVyIGNvZGUgdXNlcyBzb21lIHBhcnQgb2YgdGhhdCByZXNwb25zZSkuXG4gIC8vIFxuICAvLyBPdGhlcndpc2UsIHlvdSBjYW4ganVzdCB1c2UgdGhlbSBhcy1pcyB0byB2ZXJpZnkgdGhhdCB0aGUgYXBwcm9wcmlhdGVcbiAgLy8gcmVzcG9uc2Ugd2FzIHBhc3NlZCBhbG9uZyB0byBzb21lIG90aGVyIGNvZGUuXG4gIC8vXG4gIC8vIE5vdGUgYWxzbyB0aGF0IHRoZSBpbml0aWFsIHZhbHVlcyBmb3IgdGhlc2UgcmVzcG9uc2VzIGFyZSB3b3J0aGxlc3MsXG4gIC8vIGJ1dCB0aGVyZSBpcyAqc29tZXRoaW5nKiBpbiB0aGVyZSBzbyB0aGF0IHRoZSBsaWtlbGlob29kIG9mIGFjY2lkZW50YWxseVxuICAvLyBtYXRjaGluZyB0aGVzZSByZXNwb25zZXMgaW4gcmVhbCBzcGVjcyBpcyBhbG1vc3QgemVyby5cbiAgcHJpdmF0ZSBfZ2V0UmVzcG9uc2U6IEFycmF5PEFwaVJlc3BvbnNlPiA9IFt7IHJlc3BvbnNlRm9yOiAnZ2V0JyB9XTtcbiAgcHJpdmF0ZSBfcG9zdFJlc3BvbnNlOiBBcnJheTxBcGlSZXNwb25zZT4gPSBbeyByZXNwb25zZUZvcjogJ3Bvc3QnIH1dO1xuICBwcml2YXRlIF9wdXRSZXNwb25zZTogQXJyYXk8QXBpUmVzcG9uc2U+ID0gW3sgcmVzcG9uc2VGb3I6ICdwdXQnIH1dO1xuICBwcml2YXRlIF9kZWxldGVSZXNwb25zZTogQXJyYXk8QXBpUmVzcG9uc2U+ID0gW3sgcmVzcG9uc2VGb3I6ICdkZWxldGUnIH1dO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgLy8gSW5qZWN0IHRoaXMgaW50byB0aGUgc2VydmljZSB5b3UgYXJlIHRlc3RpbmcuXG4gIHB1YmxpYyBnZXQgaW5qZWN0b3IoKTogQXBpU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZ2V0UmVzcG9uc2UoKTogQXBpUmVzcG9uc2UgfCBBcnJheTxBcGlSZXNwb25zZT4ge1xuICAgIHJldHVybiAodGhpcy5fZ2V0UmVzcG9uc2UubGVuZ3RoID09PSAxKSA/IHRoaXMuX2dldFJlc3BvbnNlWzBdIDogdGhpcy5fZ2V0UmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgc2V0IGdldFJlc3BvbnNlKHJlc3BvbnNlOiBBcGlSZXNwb25zZSB8IEFycmF5PEFwaVJlc3BvbnNlPikge1xuICAgIHRoaXMuX2dldFJlc3BvbnNlID0gKEFycmF5LmlzQXJyYXkocmVzcG9uc2UpKSA/IHJlc3BvbnNlIDogW3Jlc3BvbnNlXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcHV0UmVzcG9uc2UoKTogQXBpUmVzcG9uc2UgfCBBcnJheTxBcGlSZXNwb25zZT4ge1xuICAgIHJldHVybiAodGhpcy5fcHV0UmVzcG9uc2UubGVuZ3RoID09PSAxKSA/IHRoaXMuX3B1dFJlc3BvbnNlWzBdIDogdGhpcy5fcHV0UmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgc2V0IHB1dFJlc3BvbnNlKHJlc3BvbnNlOiBBcGlSZXNwb25zZSB8IEFycmF5PEFwaVJlc3BvbnNlPikge1xuICAgIHRoaXMuX3B1dFJlc3BvbnNlID0gKEFycmF5LmlzQXJyYXkocmVzcG9uc2UpKSA/IHJlc3BvbnNlIDogW3Jlc3BvbnNlXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcG9zdFJlc3BvbnNlKCk6IEFwaVJlc3BvbnNlIHwgQXJyYXk8QXBpUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gKHRoaXMuX3Bvc3RSZXNwb25zZS5sZW5ndGggPT09IDEpID8gdGhpcy5fcG9zdFJlc3BvbnNlWzBdIDogdGhpcy5fcG9zdFJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIHNldCBwb3N0UmVzcG9uc2UocmVzcG9uc2U6IEFwaVJlc3BvbnNlIHwgQXJyYXk8QXBpUmVzcG9uc2U+KSB7XG4gICAgdGhpcy5fcG9zdFJlc3BvbnNlID0gKEFycmF5LmlzQXJyYXkocmVzcG9uc2UpKSA/IHJlc3BvbnNlIDogW3Jlc3BvbnNlXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVsZXRlUmVzcG9uc2UoKTogQXBpUmVzcG9uc2UgfCBBcnJheTxBcGlSZXNwb25zZT4ge1xuICAgIHJldHVybiAodGhpcy5fZGVsZXRlUmVzcG9uc2UubGVuZ3RoID09PSAxKSA/IHRoaXMuX2RlbGV0ZVJlc3BvbnNlWzBdIDogdGhpcy5fZGVsZXRlUmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgc2V0IGRlbGV0ZVJlc3BvbnNlKHJlc3BvbnNlOiBBcGlSZXNwb25zZSB8IEFycmF5PEFwaVJlc3BvbnNlPikge1xuICAgIHRoaXMuX2RlbGV0ZVJlc3BvbnNlID0gKEFycmF5LmlzQXJyYXkocmVzcG9uc2UpKSA/IHJlc3BvbnNlIDogW3Jlc3BvbnNlXTtcbiAgfVxuXG4gIC8vIFNwaWVzOlxuICAvLyBVc2UgdGhlc2UgaW4geW91ciBqYXNtaW5lIGV4cGVjdGF0aW9ucy5cbiAgcHVibGljIGdldCBnZXQoKTogamFzbWluZS5TcHkgeyByZXR1cm4gdGhpcy5zcGllcy5nZXQ7IH1cbiAgcHVibGljIGdldCBwb3N0KCk6IGphc21pbmUuU3B5IHsgcmV0dXJuIHRoaXMuc3BpZXMucG9zdDsgfVxuICBwdWJsaWMgZ2V0IHB1dCgpOiBqYXNtaW5lLlNweSB7IHJldHVybiB0aGlzLnNwaWVzLnB1dDsgfVxuICBwdWJsaWMgZ2V0IGRlbGV0ZSgpOiBqYXNtaW5lLlNweSB7IHJldHVybiB0aGlzLnNwaWVzLmRlbGV0ZTsgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UgPSBuZXcgQXBpU2VydmljZShudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKTtcblxuICAgIHRoaXMuc3BpZXMgPSB7XG4gICAgICBnZXQ6IHNweU9uKHRoaXMuYXBpU2VydmljZSwgJ2dldCcpLmFuZC5jYWxsRmFrZSgoKTogYW55ID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0RXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyh0aGlzLmdldEVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjb3VudGVyID0gdGhpcy5jYWxsQ291bnRlci5nZXQ7XG4gICAgICAgICAgaWYgKHRoaXMuY2FsbENvdW50ZXIuZ2V0ICE9PSB0aGlzLl9nZXRSZXNwb25zZS5sZW5ndGggLSAxKSB0aGlzLmNhbGxDb3VudGVyLmdldCsrO1xuICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHRoaXMuX2dldFJlc3BvbnNlW2NvdW50ZXJdKTtcbiAgICAgICAgfVxuICAgICAgfSksXG5cbiAgICAgIHBvc3Q6IHNweU9uKHRoaXMuYXBpU2VydmljZSwgJ3Bvc3QnKS5hbmQuY2FsbEZha2UoKCk6IGFueSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnBvc3RFcnJvcikge1xuICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KHRoaXMucG9zdEVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjb3VudGVyID0gdGhpcy5jYWxsQ291bnRlci5wb3N0O1xuICAgICAgICAgIGlmICh0aGlzLmNhbGxDb3VudGVyLnBvc3QgIT09IHRoaXMuX3Bvc3RSZXNwb25zZS5sZW5ndGggLSAxKSB0aGlzLmNhbGxDb3VudGVyLnBvc3QrKztcbiAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0aGlzLl9wb3N0UmVzcG9uc2VbY291bnRlcl0pO1xuICAgICAgICB9XG4gICAgICB9KSxcblxuICAgICAgcHV0OiBzcHlPbih0aGlzLmFwaVNlcnZpY2UsICdwdXQnKS5hbmQuY2FsbEZha2UoKCk6IGFueSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnB1dEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3codGhpcy5wdXRFcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgY291bnRlciA9IHRoaXMuY2FsbENvdW50ZXIucHV0O1xuICAgICAgICAgIGlmICh0aGlzLmNhbGxDb3VudGVyLnB1dCAhPT0gdGhpcy5fcHV0UmVzcG9uc2UubGVuZ3RoIC0gMSkgdGhpcy5jYWxsQ291bnRlci5wdXQrKztcbiAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0aGlzLl9wdXRSZXNwb25zZVtjb3VudGVyXSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuXG4gICAgICBkZWxldGU6IHNweU9uKHRoaXMuYXBpU2VydmljZSwgJ2RlbGV0ZScpLmFuZC5jYWxsRmFrZSgoKTogYW55ID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZGVsZXRlRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyh0aGlzLmRlbGV0ZUVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjb3VudGVyID0gdGhpcy5jYWxsQ291bnRlci5kZWxldGU7XG4gICAgICAgICAgaWYgKHRoaXMuY2FsbENvdW50ZXIuZGVsZXRlICE9PSB0aGlzLl9kZWxldGVSZXNwb25zZS5sZW5ndGggLSAxKSB0aGlzLmNhbGxDb3VudGVyLmRlbGV0ZSsrO1xuICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHRoaXMuX2RlbGV0ZVJlc3BvbnNlW2NvdW50ZXJdKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9O1xuICB9XG59XG5cbmludGVyZmFjZSBNb2NrQXBpU2VydmljZVNwaWVzIHsgZ2V0OiBqYXNtaW5lLlNweTsgcG9zdDogamFzbWluZS5TcHk7IHB1dDogamFzbWluZS5TcHk7IGRlbGV0ZTogamFzbWluZS5TcHk7IH07XG4iXX0=
