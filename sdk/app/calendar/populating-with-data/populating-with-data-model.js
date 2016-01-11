var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var calendarModule = require("nativescript-telerik-ui/calendar");
var observableModule = require("data/observable");
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        _super.call(this);
        var events = new Array();
        for (var i = 1; i < 10; i++) {
            var event = new calendarModule.CalendarEvent("event" + i, new Date(2015, 11, i * 2), new Date(2015, 11, (i * 2) + (i % 3), 1));
            events.push(event);
        }
        this.source = events;
    }
    Object.defineProperty(ViewModel.prototype, "source", {
        get: function () {
            return this.get("Source");
        },
        set: function (value) {
            this.set("Source", value);
        },
        enumerable: true,
        configurable: true
    });
    return ViewModel;
})(observableModule.Observable);
exports.ViewModel = ViewModel;
