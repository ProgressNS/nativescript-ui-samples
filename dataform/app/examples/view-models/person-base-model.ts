import { Observable } from "tns-core-modules/data/observable";

export class PersonBaseViewModel extends Observable {

    private _person: PersonBase;

    get person() {
        if (!this._person) {
            this._person = new PersonBase("John", 23, "1993-05-16");
        }
        return this._person;
    }
}

export class PersonBase {
    public name: string;
    public age: number;
    public birthDate: string;

    constructor(name, age, birthDate) {
        this.name = name;
        this.age = age;
        this.birthDate = birthDate;
    }
}