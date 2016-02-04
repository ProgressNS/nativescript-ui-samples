var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pageModule = require("ui/page");
var ExamplePage = (function (_super) {
    __extends(ExamplePage, _super);
    function ExamplePage() {
        _super.call(this);
        var that = new WeakRef(this);
        this.on("navigatingTo", function (args) {
            that.get()._associatedExampleMeta = args.context;
        });
    }
    ExamplePage.prototype._onBindingContextChanged = function (oldValue, newValue) {
        newValue["exampleContext"] = this._associatedExampleMeta;
        _super.prototype._onBindingContextChanged.call(this, oldValue, newValue);
    };
    return ExamplePage;
})(pageModule.Page);
exports.ExamplePage = ExamplePage;
