import "./bundle-config";
import application = require("tns-core-modules/application");
import fresco = require("nativescript-fresco");
application.setCssFileName("./app.css");
require("./main-activity.android.ts");

//partial declaration of Fresco native android class
declare module com {
    module facebook {
        module drawee {
            module backends {
                module pipeline {
                    class Fresco {
                        static initialize(context: any): any;
                    }
                }
            }
        }
    }
}


if (application.android) {
    application.on("launch", (intent) => {
        fresco.initialize();
    });
}

application.run({ moduleName: "navigation/category-list-page" });
