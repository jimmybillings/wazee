"use strict";
function addStandardReducerTestsFor(reducer, actionType, initialState, payload) {
    var _this = this;
    if (payload === void 0) { payload = { some: 'payload' }; }
    describe('Reducer (standard tests)', function () {
        it('does not fail with a null current state', function () {
            expect(reducer.bind(_this, null, { type: actionType, payload: payload })).not.toThrow();
        });
        it('does not alter the current state', function () {
            var currentState = JSON.parse(JSON.stringify(initialState));
            reducer(currentState, { type: actionType, payload: payload });
            expect(currentState).toEqual(initialState);
        });
    });
}
exports.addStandardReducerTestsFor = addStandardReducerTestsFor;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdGVzdHMvcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsb0NBQ0UsT0FBMkIsRUFDM0IsVUFBa0IsRUFDbEIsWUFBaUIsRUFDakIsT0FBa0M7SUFKcEMsaUJBbUJDO0lBZkMsdUJBQWtDLEdBQWxDLFlBQWlCLElBQUksRUFBRSxTQUFTLEVBQUU7SUFFbEMsUUFBUSxDQUFDLDBCQUEwQixFQUFFO1FBQ25DLEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRTtZQUM1QyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6RixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRTtZQUNyQyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUU5RCxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUU5RCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBbkJlLGtDQUEwQiw2QkFtQnpDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC90ZXN0cy9yZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uUmVkdWNlciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN0YW5kYXJkUmVkdWNlclRlc3RzRm9yKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPGFueT4sXG4gIGFjdGlvblR5cGU6IHN0cmluZyxcbiAgaW5pdGlhbFN0YXRlOiBhbnksXG4gIHBheWxvYWQ6IGFueSA9IHsgc29tZTogJ3BheWxvYWQnIH1cbikge1xuICBkZXNjcmliZSgnUmVkdWNlciAoc3RhbmRhcmQgdGVzdHMpJywgKCkgPT4ge1xuICAgIGl0KCdkb2VzIG5vdCBmYWlsIHdpdGggYSBudWxsIGN1cnJlbnQgc3RhdGUnLCAoKSA9PiB7XG4gICAgICBleHBlY3QocmVkdWNlci5iaW5kKHRoaXMsIG51bGwsIHsgdHlwZTogYWN0aW9uVHlwZSwgcGF5bG9hZDogcGF5bG9hZCB9KSkubm90LnRvVGhyb3coKTtcbiAgICB9KTtcblxuICAgIGl0KCdkb2VzIG5vdCBhbHRlciB0aGUgY3VycmVudCBzdGF0ZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaW5pdGlhbFN0YXRlKSk7XG5cbiAgICAgIHJlZHVjZXIoY3VycmVudFN0YXRlLCB7IHR5cGU6IGFjdGlvblR5cGUsIHBheWxvYWQ6IHBheWxvYWQgfSk7XG5cbiAgICAgIGV4cGVjdChjdXJyZW50U3RhdGUpLnRvRXF1YWwoaW5pdGlhbFN0YXRlKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXX0=
