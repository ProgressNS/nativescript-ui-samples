var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pageModule = require("ui/page");
var ExamplePage = (function (_super) {
    __extends(ExamplePage, _super);
    function ExamplePage() {
        _super.apply(this, arguments);
    }
    return ExamplePage;
})(pageModule.Page);
exports.ExamplePage = ExamplePage;
