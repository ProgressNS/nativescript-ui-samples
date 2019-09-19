import { NavigationViewModel } from "./categories-view-model";
import { Page } from "tns-core-modules/ui/page";
import { RadSideDrawer, FadeTransition, PushTransition, RevealTransition, ReverseSlideOutTransition, ScaleDownPusherTransition, ScaleUpTransition, SlideAlongTransition, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { getRootView } from "tns-core-modules/application";

let rootDrawer: RadSideDrawer;

export function pageLoaded(args) {
    let dataModel = new NavigationViewModel();
    let page = args.object as Page;
    page.bindingContext = dataModel;
    rootDrawer = getRootView() as RadSideDrawer;
    dataModel.sideDrawer = rootDrawer;
    dataModel.sideDrawer.drawerContent.bindingContext = page.bindingContext;
}

export function onNavBtnTap() {
    if (rootDrawer) {
        rootDrawer.toggleDrawerState();
    }
}

function printTransition(transition: string) {
    console.log("Changed drawer transition to", transition);
}

export function onFadeTransitionTap() {
    rootDrawer.drawerTransition = new FadeTransition();
    printTransition("FadeTransition");
}

export function onPushTransitionTap() {
    rootDrawer.drawerTransition = new PushTransition();
    printTransition("PushTransition");
}

export function onRevealTransitionTap() {
    rootDrawer.drawerTransition = new RevealTransition();
    printTransition("RevealTransition");
}

export function onReverseSlideOutTransitionTap() {
    rootDrawer.drawerTransition = new ReverseSlideOutTransition();
    printTransition("ReverseSlideOutTransition");
}

export function onScaleDownPusherTransitionTap() {
    rootDrawer.drawerTransition = new ScaleDownPusherTransition();
    printTransition("ScaleDownPusherTransition");
}

export function onScaleUpTransitionTap() {
    rootDrawer.drawerTransition = new ScaleUpTransition();
    printTransition("ScaleUpTransition");
}

export function onSlideAlongTransitionTap() {
    rootDrawer.drawerTransition = new SlideAlongTransition();
    printTransition("SlideAlongTransition");
}

export function onSlideInOnTopTransitionTap() {
    rootDrawer.drawerTransition = new SlideInOnTopTransition();
    printTransition("SlideInOnTopTransition");
}