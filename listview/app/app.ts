import * as application from 'tns-core-modules/application';
import * as fresco from 'nativescript-fresco';

declare namespace com {
    namespace facebook {
        namespace drawee {
            namespace backends {
                namespace pipeline {
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

application.setCssFileName("app.css");

application.start({ moduleName: "navigation/category-list-page" });
