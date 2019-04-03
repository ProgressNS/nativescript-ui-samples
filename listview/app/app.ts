import * as application from 'tns-core-modules/application';
import * as imageModule from 'nativescript-image';

if (application.android) {
    application.on("launch", (intent) => {
        imageModule.initialize();
    });
}

application.setCssFileName("app.css");

application.run({ moduleName: "app-root" });
