export class PersonExtendedViewModel {

    private _person: PersonExtended;

    constructor() {
    }

    get person() {
        if (!this._person) {
            this._person = new PersonExtended("John", 23, "john@company.com", "New York", "5th Avenue", 11, "USA", "Bank of America", "00xx00xx00", 123, "2016-11-09");
        }
        return this._person;
    }
}

export class PersonExtended {
    public name: string;
    public age: number;
    public email: string;
    public city: string;
    public street: string;
    public streetNumber: number;
    public country: string;
    public bankName: string;
    public bankId: string;
    public bankVerificationCode: number;
    public bankExpirationDate: string;

    constructor(name: string, age: number, email: string, city: string, street: string, streetNumber: number, country: string, bankName: string, bankId: string, bankVerificationCode: number, bankExpirationDate: string) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.city = city;
        this.street = street;
        this.streetNumber = streetNumber;
        this.country = country;
        this.bankName = bankName;
        this.bankId = bankId;
        this.bankVerificationCode = bankVerificationCode;
        this.bankExpirationDate = bankExpirationDate;
    }
}