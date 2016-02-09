import observableModule = require("data/observable");
import listViewModule = require("ui/list-view");
import frameModule = require("ui/frame");

export class ViewModel extends observableModule.Observable{
    private _info;
    
	constructor(selectionInfo){
		super();
        this._info = selectionInfo;
		this.items = this._info.options;
        // this.selectRow(this._info.index);
	}
    
    set items(value: Array<string>) {
        this.set("myItems", value);
    }
    
    get items(): Array<string> {
        return this.get("myItems");
    }
    
    public selectRow(index) {
        var listView = <listViewModule.ListView>frameModule.topmost().getViewById("listView");
        listView.ios.selectRowAtIndexPathAnimatedScrollPosition(NSIndexPath.indexPathForItemInSection(index, 0), false, 0);
    }
    
    public onSelectedRow(row) {
        this._info.index = row.index;
        frameModule.topmost().goBack();
    }
}