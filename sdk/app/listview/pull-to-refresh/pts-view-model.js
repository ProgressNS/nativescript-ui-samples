var observable_array_1 = require("data/observable-array");
var timer = require("timer");
var ViewModel = (function () {
    function ViewModel() {
        this.initDataItems();
    }
    Object.defineProperty(ViewModel.prototype, "dataItems", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    ViewModel.prototype.onShouldRefreshOnPull = function (args) {
        var that = new WeakRef(this);
        timer.setTimeout(function () {
            for (var i = 0; i < 25; i++) {
                that.get()._items.splice(0, 0, new DataItem(that.get()._items.length, "Item " + that.get()._items.length, "This is item description."));
            }
            var listView = args.object;
            listView.notifyPullToRefreshFinished();
        }, 1000);
    };
    ViewModel.prototype.initDataItems = function () {
        this._items = new observable_array_1.ObservableArray();
        for (var i = 0; i < 25; i++) {
            this._items.push(new DataItem(i, "Item " + i, "This is item description."));
        }
    };
    return ViewModel;
})();
exports.ViewModel = ViewModel;
var DataItem = (function () {
    function DataItem(id, name, description) {
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
    }
    return DataItem;
})();
exports.DataItem = DataItem;
