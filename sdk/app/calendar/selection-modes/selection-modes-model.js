var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var calendarModule = require("nativescript-telerik-ui/calendar");
var observableModule = require("data/observable");
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        _super.call(this);
        this.selectionMode = calendarModule.CalendarSelectionMode.Week;
    }
    Object.defineProperty(ViewModel.prototype, "selectionMode", {
        get: function () {
            return this.get("SelectionMode");
        },
        set: function (value) {
            this.set("SelectionMode", value);
        },
        enumerable: true,
        configurable: true
    });
    ViewModel.prototype.setSelectionMode = function (selectionMode) {
        this.selectionMode = selectionMode;
    };
    return ViewModel;
})(observableModule.Observable);
exports.ViewModel = ViewModel;
