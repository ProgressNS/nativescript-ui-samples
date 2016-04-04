import application = require("application");
application.mainModule = "./navigation/category-list"
application.cssFile = "./app.css";

if (application.android) {
    application.onLaunch = function (intent) {
        console.log("onLaunch");
        com.facebook.drawee.backends.pipeline.Fresco.initialize(application.android.context);
    };
}

application.start();
