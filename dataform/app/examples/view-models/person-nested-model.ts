import { Observable } from "tns-core-modules/data/observable";

const personNested = require('./person-model-nested.json');
const personMetadata = require('./person-metadata.json');

export class PersonNestedModel extends Observable {

    constructor() {
        super();
        this.set("person", JSON.parse(JSON.stringify(personNested)));
        this.set("personMetadata", JSON.parse(JSON.stringify(personMetadata)));
    }
}