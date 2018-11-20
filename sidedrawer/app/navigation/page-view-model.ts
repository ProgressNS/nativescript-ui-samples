import { NavigationItem } from "./navigation-item";
import  { Observable } from "tns-core-modules/data/observable";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { topmost, View } from "tns-core-modules/ui/frame";

export class PageViewModel extends Observable {
    public sideDrawer: RadSideDrawer;

    constructor (parent?: NavigationItem, subitems?: Array<NavigationItem>, hasBack?: boolean, sideDrawer?: RadSideDrawer) {
        super();
        this._currentParent = parent;
        this._currentSubItems = subitems;
        this._hasBackNavigation = hasBack;
        this.sideDrawer = sideDrawer;
    }

    get _selectedIndex(): number {
        return this.get("selectedIndex");
    }

    set _selectedIndex(value: number) {
        this.set("selectedIndex", value);
    }

    get _currentSubItems(): Array<NavigationItem> {
        return this.get("currentSubItems");
    }

    set _currentSubItems(value: Array<NavigationItem>) {
        this.set("currentSubItems", value);
    }

    get _currentParent() {
        return this.get("currentParent");
    }

    set _currentParent(value: NavigationItem) {
        this.set("currentParent", value);
    }

    get _actionBarTitle() {
        return this.get("actionBarTitle");
    }

    set _actionBarTitle(value: string) {
        this.set("actionBarTitle", value);
    }

    get _hasBackNavigation() {
        return this.get("hasBackNavigation");
    }

    set _hasBackNavigation(value: boolean) {
        this.set("hasBackNavigation", value);
    }

    public onBackTap(args) {
        topmost().goBack();
    }

    public onNavigationItemTap(args) {
        let itemIndex = args.index;
        let tappedItem = this._currentSubItems[itemIndex];

        if (args.object.id === "sidedrawer-list") {

            // deselect all items
            args.object.eachChildView(childView => {
                this._toggleItemSelected(childView.getViewById("item-container"), false);
            });

            // select tapped item
            this._toggleItemSelected(args.view.getViewById("item-container"), true);
        }

        if (tappedItem.module === undefined) {
            this._hasBackNavigation = tappedItem.parent !== undefined;
        }
        let hasBack = tappedItem.parent !== undefined;
        let nextPageContext = new PageViewModel(tappedItem, tappedItem.subItems, hasBack, this.sideDrawer);

        this.sideDrawer.closeDrawer();
        if (tappedItem.subItems.length > 0) {
            topmost().navigate({
                moduleName: "navigation/category-list-nested-page",
                context: nextPageContext
            });
        } else {
            if (tappedItem.module) {
                topmost().navigate({
                    moduleName: tappedItem.module,
                    context: tappedItem
                    // context: this.sideDrawer,
                    // backstackVisible: false
                });
            }
        }
    }

    _toggleItemSelected(view: View, isSelected: boolean): any {
        // using css styles from theme
        view.className = isSelected ? "sidedrawer-list-item active" : "sidedrawer-list-item";
    }
}