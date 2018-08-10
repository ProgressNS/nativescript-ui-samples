import { Page } from "tns-core-modules/ui/page";
import { NavigationItem } from "./navigation-item";
import { PageViewModel } from "./page-view-model";

export class NavigationViewModel extends PageViewModel {

    private _lastTappedItem;

    constructor() {
        super();
        this._currentParent = new NavigationItem("SideDrawer", undefined, undefined);
        this.buildComponentList();
        this._currentSubItems = this._currentParent.subItems;
        this._hasBackNavigation = false;
    }

    public page: Page;

    private buildComponentList() {
        let parent = this._currentParent;
        this.buildSideDrawerExamples(parent);
    }

    private buildSideDrawerExamples(currentParent: NavigationItem) {
        let exampleItem = new NavigationItem("Getting started", "examples/getting-started/getting-started-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Position", "examples/position/drawer-position-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Transitions", "examples/transitions/drawer-transitions-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Events", "examples/callbacks/drawer-callbacks-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Shadow", "examples/shadow/drawer-shadow-page", currentParent);
        currentParent.subItems.push(exampleItem);
    }
}