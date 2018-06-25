import * as frameModule from "tns-core-modules/ui/frame";
import * as drawerModule from "nativescript-ui-sidedrawer";
import * as observableModule from "tns-core-modules/data/observable";

export class DrawerTransitionsModel {
    public onFadeTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.FadeTransition());
        this.openSideDrawer();
    }

    public onPushTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.PushTransition());
        this.openSideDrawer();
    }

    public onRevealTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.RevealTransition());
        this.openSideDrawer();
    }

    public onReverseSlideOutTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.ReverseSlideOutTransition());
        this.openSideDrawer();
    }

    public onScaleDownPusherTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.ScaleDownPusherTransition());
        this.openSideDrawer();
    }

    public onScaleUpTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.ScaleUpTransition());
        this.openSideDrawer();
    }

    public onSlideAlongTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.SlideAlongTransition());
        this.openSideDrawer();
    }
    // >> sidedrawer-setting-transition
    public onSlideInOnTopTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.SlideInOnTopTransition());
        this.openSideDrawer();
    }

    public openSideDrawer(args?: observableModule.EventData) {
        let drawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>frameModule.topmost().getViewById("sideDrawer");
        drawer.showDrawer();
    }

    public closeDrawer(args?: observableModule.EventData) {
        let drawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>frameModule.topmost().getViewById("sideDrawer");
        drawer.closeDrawer();
    }

    private setDrawerTransition(transition: drawerModule.DrawerTransitionBase) {
        let drawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>frameModule.topmost().getViewById("sideDrawer");
        drawer.drawerTransition = transition;
    }// << sidedrawer-setting-transition
}
