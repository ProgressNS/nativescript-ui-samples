import "./bundle-config";
import application = require("tns-core-modules/application");
import fresco = require("nativescript-fresco");
application.setCssFileName("./app.css");

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

application.start("./navigation/category-list-page");
