import observableModule = require("data/observable");
import listViewModule = require("ui/list-view");
import frameModule = require("ui/frame");

export class ViewModel extends observableModule.Observable{
    private _selectedOption;
    private _options: Array<string>;
    
	constructor(){
		super();
        this._options = ["Week", "Month", "Month names", "Year"];	
		this.items = this._options;
	}
    
    set items(value: Array<string>) {
        this.set("myItems", value);
    }
    
    get items(): Array<string> {
        return this.get("myItems");
    }
    
    public setSelectedOption(option) {
        this._selectedOption = option;
        var listView = <listViewModule.ListView>frameModule.topmost().getViewById("listView");
        listView.ios.selectRowAtIndexPathAnimatedScrollPosition(NSIndexPath.indexPathForItemInSection(option.index, 0), false, 0);
    }
    
    public onSelectedOption(option) {
        var name = this._options[option.index];
        this._selectedOption.index = option.index;
        frameModule.topmost().goBack();
    }
}