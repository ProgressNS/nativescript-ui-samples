var observable_array_1 = require("data/observable-array");
var timer = require("timer");
var posts = require("../swipe-execute/posts.json");
var application = require("application");
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
            var initialNumberOfItems = that.get()._numberOfAddedItems;
            debugger;
            for (var i = that.get()._numberOfAddedItems - 1; i < initialNumberOfItems + 2; i++) {
                if (i > posts.names.length - 1) {
                    break;
                }
                that.get()._items.splice(0, 0, new DataItem(posts.names[i], posts.titles[i], posts.text[i], "res://" + posts.images[i]));
                that.get()._numberOfAddedItems++;
            }
            var listView = args.object;
            listView.notifyPullToRefreshFinished();
            debugger;
        }, 1000);
    };
    ViewModel.prototype.initDataItems = function () {
        this._items = new observable_array_1.ObservableArray();
        this._numberOfAddedItems = 0;
        for (var i = 0; i < posts.names.length - 15; i++) {
            this._numberOfAddedItems++;
            if (application.android) {
                this._items.push(new DataItem(posts.names[i], posts.titles[i], posts.text[i], "res://" + posts.images[i].toLowerCase()));
            }
            else {
                this._items.push(new DataItem(posts.names[i], posts.titles[i], posts.text[i], "res://" + posts.images[i]));
            }
        }
        debugger;
    };
    return ViewModel;
})();
exports.ViewModel = ViewModel;
var DataItem = (function () {
    function DataItem(name, title, text, image) {
        this.name = name;
        this.text = text;
        this.title = title;
        this.image = image;
    }
    return DataItem;
})();
exports.DataItem = DataItem;
