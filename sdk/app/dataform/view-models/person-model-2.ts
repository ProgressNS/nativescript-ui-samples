import fs = require("file-system");
import observable = require("data/observable");

export class PersonModel2 extends observable.Observable {

    constructor() {
        super();

        var documents = fs.knownFolders.currentApp();
        var jsonPersonFile = documents.getFile('dataform/view-models/person-model-2.json');
        var that = new WeakRef(this);
        jsonPersonFile.readText()
            .then(function (content) {
                try {
                    var person = JSON.parse(content);
                    that.get().set("person", person);
                } catch (err) {
                    throw new Error('Could not parse JSON file');
                }
            }, function (error) {
                throw new Error('Could not read JSON file');
            });

        var jsonMetadataFile = documents.getFile('dataform/view-models/person-metadata.json');
        jsonMetadataFile.readText()
            .then(function (content) {
                try {
                    var metadata = JSON.parse(content);
                    that.get().set("personMetadata", metadata);
                } catch (err) {
                    throw new Error('Could not parse JSON file');
                }
            }, function (error) {
                throw new Error('Could not read JSON file');
            });
    }
}