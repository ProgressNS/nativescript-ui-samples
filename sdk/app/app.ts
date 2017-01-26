import application = require("application");
import fresco = require("nativescript-fresco");
application.cssFile = "./app.css";
application.mainModule = "./navigation/category-list";

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
        fresco.initialize();
    };
}

application.start();
