export class UserViewModel {

    private _baseUser: BaseUser;
    private _user: User;
    private _registeringUser: RegisteringUser;
    private _advancedUser: AdvancedUser;
    private _superUser: SuperUser;
    private _metadata = require("./user-metadata-validation.json");

    constructor() {
    }

    get metadata() {
        return this._metadata;
    }

    get baseUser() {
        if (!this._baseUser) {
            this._baseUser = new BaseUser();
        }
        return this._baseUser;
    }

    get user() {
        if (!this._user) {
            this._user = new User();
        }
        return this._user;
    }

    get registeringUser() {
        if (!this._registeringUser) {
            this._registeringUser = new RegisteringUser();
        }
        return this._registeringUser;
    }

    get advancedUser() {
        if (!this._advancedUser) {
            this._advancedUser = new AdvancedUser();
        }
        return this._advancedUser;
    }

    get superUser() {
        if (!this._superUser) {
            this._superUser = new SuperUser("John", "Doe", "john_doe", "jdpass", "jd@company.com", new Date(2008, 7, 1), new Date(2008, 7, 1, 13, 21), "male", "Company Inc.", "www.company.com", "555-5325", "Gargantua", "Metropolis", "South Street", 1, 11111, "None");
        }
        return this._superUser;
    }
}

export class BaseUser {
    public username: string = "";
    public password: string = "";

    constructor() {
    }
}

export class User extends BaseUser {
    public email: string = "";

    constructor() {
        super();
    }
}

export class RegisteringUser extends BaseUser {
    public password2: string = "";

    constructor() {
        super();
    }
}

export class AdvancedUser extends User {
    public phoneNumber: string = "";
    public id: number = 0;
    public pin: string = "";
    public agreeTerms: boolean = false;

    constructor() {
        super();
    }
}

export class SuperUser extends User {
    public city: string;
    public country: string;
    public streetName: string;
    public streetNumber: number;
    public postalCode: number;
    public additionalInfo: string;
    public phone: string;
    public gender: string;
    public firstName: string;
    public lastName: string;
    public lastLoginDate: Date;
    public lastLoginTime: Date;
    public company: string;
    public webSite: string;

    constructor(firstName, lastName, username, password, email, lastLoginDate, lastLoginTime, gender, company, website, phone, country, city, streetName, streetNumber, postalCode, additionalInfo) {
        super();

        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.lastLoginDate = lastLoginDate;
        this.lastLoginTime = lastLoginTime;
        this.gender = gender;
        this.company = company;
        this.webSite = website;
        this.phone = phone;
        this.country = country;
        this.city = city;
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.postalCode = postalCode;
        this.additionalInfo = additionalInfo;
    }

    toString() {
        return "First Name: " + this.firstName + "\n" +
            "Last Name: " + this.lastName + "\n" +
            "Username: " + this.username + "\n" +
            "Password: " + "*".repeat(this.password.length) + "\n" +
            "E-mail: " + this.email + "\n" +
            "LastLoginDate: " + this.lastLoginDate.toDateString() + "\n" +
            "LastLoginTime: " + this.lastLoginTime.toTimeString() + "\n" +
            "Gender: " + this.gender + "\n" +
            "Company: " + this.company + "\n" +
            "WebSite: " + this.webSite + "\n" +
            "Phone: " + this.phone + "\n" +
            "Country: " + this.country + "\n" +
            "City: " + this.city + "\n" +
            "Street Name: " + this.streetName + "\n" +
            "Street Number: " + this.streetNumber + "\n" +
            "Postal Code: " + this.postalCode + "\n" +
            "Additional Info: " + this.additionalInfo + "\n";
    }
}