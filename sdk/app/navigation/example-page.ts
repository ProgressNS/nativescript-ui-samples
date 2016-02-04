import pageModule = require("ui/page");
import actionBarModule = require("ui/action-bar");

export class ExamplePage extends pageModule.Page {

    private _associatedExampleMeta;

    public constructor() {
        super();
        var that = new WeakRef(this);
        this.on("navigatingTo", function(args) {
            that.get()._associatedExampleMeta = args.context;
        });
        var customActionBar = new actionBarModule.ActionBar();
        // var bindingOptions = {
        //     sourceProperty: "bindingContext.exampleContext.title",
        //     targetProperty: "title"
        // };

        this.actionBar = customActionBar;

        // customActionBar.bind(bindingOptions, this);
    }

    public _onBindingContextChanged(oldValue, newValue) {
        newValue["exampleContext"] = this._associatedExampleMeta;
        this.actionBar.title = this._associatedExampleMeta.title;
        super._onBindingContextChanged(oldValue, newValue);
    }
}
