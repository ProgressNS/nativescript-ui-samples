// >> dataform-person-view-model
export class PersonViewModel {

    private _person: Person;

    constructor() {
    }

    get person() {
        if (!this._person) {
            this._person = new Person("John", 23, "john@company.com", "New York", "5th Avenue", 11);
        }
        return this._person;
    }
}

export class Person {
    public name: string;
    public age: number;
    public email: string;
    public city: string;
    public street: string;
    public streetNumber: number;

    constructor(name, age, email, city, street, streetNumber) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.city = city;
        this.street = street;
        this.streetNumber = streetNumber;
    }
}
// << dataform-person-view-model