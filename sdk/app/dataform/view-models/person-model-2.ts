import observable = require("data/observable");

var person = require("./person-model-2.json");
var metadata = require("./person-metadata.json");

export class PersonModel2 extends observable.Observable {

    constructor() {
        super();

        this.set("person", person);
        this.set("personMetadata", metadata);
    }
}