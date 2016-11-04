export class PersonExtendedViewModel {

    private _person: PersonExtended;

    constructor() {
    }

    get person() {
        if (!this._person) {
            this._person = new PersonExtended("John", 23, "john@company.com", "New York", "USA", "5th Avenue", 11);
        }
        return this._person;
    }
}

export class PersonExtended {
    public name: string;
    public age: number;
    public email: string;
    public city: string;
    public country: string;
    public street: string;
    public streetNumber: number;

    constructor(name, age, email, city, country, street, streetNumber) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.city = city;
        this.country = country;
        this.street = street;
        this.streetNumber = streetNumber;
    }
}