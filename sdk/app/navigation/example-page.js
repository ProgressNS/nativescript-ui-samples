var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pageModule = require("ui/page");
var actionBarModule = require("ui/action-bar");
var applicationModule = require("application");
var frameModule = require("ui/frame");
var ExamplePage = (function (_super) {
    __extends(ExamplePage, _super);
    function ExamplePage() {
        _super.call(this);
        var that = new WeakRef(this);
        this.on("navigatingTo", function (args) {
            that.get()._associatedExampleMeta = args.context;
        });
    }
    ExamplePage.prototype.onLoaded = function (args) {
        _super.prototype.onLoaded.call(this, args);
        var actionBar = this.actionBar === undefined ? new actionBarModule.ActionBar() : this.actionBar;
        actionBar.title = this._associatedExampleMeta.title;
        if (applicationModule.android) {
            var navigationButton = new actionBarModule.NavigationButton();
            navigationButton.on("tap", function (args) { frameModule.topmost().goBack(); });
            navigationButton.icon = "res://ic_arrow_back_black_24dp";
            actionBar.navigationButton = navigationButton;
        }
        if (this.actionBar !== actionBar) {
            this.actionBar = actionBar;
        }
    };
    return ExamplePage;
})(pageModule.Page);
exports.ExamplePage = ExamplePage;
