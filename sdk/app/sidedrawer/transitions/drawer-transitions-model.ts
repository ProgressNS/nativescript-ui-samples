import frameModule = require("ui/frame");
import drawerModule = require("nativescript-telerik-ui/radsidedrawer");
import observableModule = require("data/observable");

export class DrawerTransitionsModel {
    public onFadeTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.FadeTransition());
    }

    public onPushTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.PushTransition());
    }

    public onRevealTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.RevealTransition());
    }

    public onReverseSlideOutTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.ReverseSlideOutTransition());
    }

    public onScaleDownPusherTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.ScaleDownPusherTransition());
    }

    public onScaleUpTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.ScaleUpTransition());
    }

    public onSlideAlongTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.SlideAlongTransition());
    }

    public onSlideInOnTopTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.SlideInOnTopTransition());
    }
    
    public openSideDrawer(args: observableModule.EventData) {
        var drawer: drawerModule.RadideDrawer = <drawerModule.RadSideDrawer>frameModule.topmost().getViewById("sideDrawer");
        drawer.showDrawer();
    }

    public closeSideDrawer(args: observableModule.EventData) {
        var drawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>frameModule.topmost().getViewById("sideDrawer");
        drawer.closeDrawer();
    }
    
   
    private setDrawerTransition(transition: drawerModule.DrawerTransitionBase) {
        var drawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>frameModule.topmost().getViewById("sideDrawer");
        drawer.closeDrawer();
        drawer.drawerTransition = transition;
    }
}
