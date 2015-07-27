var application = require("application");
application.mainModule = "main-page"
application.cssFile = "./app.css";

application.onLaunch = function (context) {
    if (application.android) {
        console.log("Launched Android application with the following intent: " + context + ".");
    }
    else if (application.ios) {
        console.log("Launched iOS application.");
    }
};

application.onSuspend = function () {
    console.log("Application suspended.");
};

application.onResume = function () {
    console.log("Application resumed.");
};

application.onExit = function () {
    console.log("Application will exit.");
};

application.onLowMemory = function () {
    console.log("Memory is low.");
};

application.onUncaughtError = function (error) {
    console.log("Application error: " + error.name + "; " + error.message + "; " + error.nativeError);
};

application.start();
