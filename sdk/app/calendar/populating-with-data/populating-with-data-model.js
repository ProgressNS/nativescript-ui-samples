var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var calendarModule = require("nativescript-telerik-ui/calendar");
var observableModule = require("data/observable");
var frameModule = require("ui/frame");
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        _super.call(this);
        var events = new Array();
        for (var i = 1; i < 10; i++) {
            var now = new Date();
            var startDate = new Date(now.getFullYear(), now.getMonth(), i * 2);
            var endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2) + (i % 3));
            var event = new calendarModule.CalendarEvent("event" + i, startDate, endDate);
            events.push(event);
        }
        this.source = events;
    }
    Object.defineProperty(ViewModel.prototype, "source", {
        get: function () {
            return this.get("eventSource");
        },
        set: function (value) {
            this.set("eventSource", value);
        },
        enumerable: true,
        configurable: true
    });
    ViewModel.prototype.onDateSelected = function (args) {
        var date = args.date;
        var calendar = frameModule.topmost().getViewById("calendar");
        var events = calendar.getEventsForDate(date);
        this.set("myItems", events);
    };
    return ViewModel;
})(observableModule.Observable);
exports.ViewModel = ViewModel;
