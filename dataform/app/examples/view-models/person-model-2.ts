import { knownFolders } from "tns-core-modules/file-system";
import { Observable } from "tns-core-modules/data/observable";
const person = require('./person-model-2.json');
const personMetadata = require('./person-metadata.json');

export class PersonModel2 extends Observable {

    constructor() {
        super();
        this.set("person", JSON.parse(JSON.stringify(person)));
        this.set("personMetadata", JSON.parse(JSON.stringify(personMetadata)));
    }
}