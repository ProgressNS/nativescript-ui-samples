var observable_array_1 = require("data/observable-array");
var posts = require("./posts.json");
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
    ViewModel.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        if (args.data.x > 100) {
            console.log("Threshold achieved: " + args.data.x);
        }
        else if (args.data.x < -100) {
            console.log("Threshold achieved: " + args.data.x);
        }
    };
    ViewModel.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        console.log("Started swipe cell: " + args.object);
        swipeLimits.threshold = 100;
    };
    ViewModel.prototype.onItemClick = function (args) {
        debugger;
        console.log("Item click: " + args.itemIndex);
    };
    ViewModel.prototype.onSwipeCellFinished = function (args) {
        var swipeLimits = args.data.swipeLimits;
        console.log("Started swipe cell: " + args.object);
        swipeLimits.threshold = 150;
        swipeLimits.left = 180;
        swipeLimits.right = 180;
    };
    ViewModel.prototype.initDataItems = function () {
        this._items = new observable_array_1.ObservableArray();
        for (var i = 0; i < posts.names.length; i++) {
            this._items.push(new DataItem(posts.names[i], posts.titles[i], posts.text[i]));
        }
    };
    return ViewModel;
})();
exports.ViewModel = ViewModel;
var DataItem = (function () {
    function DataItem(name, title, text) {
        this.name = name;
        this.text = text;
        this.title = title;
    }
    return DataItem;
})();
exports.DataItem = DataItem;
