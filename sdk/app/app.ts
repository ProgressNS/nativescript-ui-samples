import application = require("application");
application.mainModule = "./navigation/category-list"
application.cssFile = "./app.css";
application.mainModule = "./navigation/category-list"

//partial declaration of Fresco native anroid class
declare module com{
    module facebook{
        module drawee{
            module backends {
                module pipeline{
                    class Fresco{
                       static initialize(context: any) : any;
}}}}}}

if (application.android) {
    application.onLaunch = function (intent) {
        console.log("onLaunch");
        com.facebook.drawee.backends.pipeline.Fresco.initialize(application.android.context);
    };
}

application.start();
