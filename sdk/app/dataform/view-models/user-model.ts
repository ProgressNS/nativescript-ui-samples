export class UserViewModel {

    private _user: User;
    private _advancedUser: AdvancedUser;

    constructor() {
    }

    get user() {
        if (!this._user) {
            this._user = new User();
        }
        return this._user;
    }

    get advancedUser() {
        if (!this._advancedUser) {
            this._advancedUser = new AdvancedUser();
        }
        return this._advancedUser;
    }
}

export class User {
    public username: string = "";
    public password: string = "";
    public email: string = "";

    constructor() {
    }
}

export class AdvancedUser extends User {
    public phoneNumber: string = "";
    public id: number = 0;

    constructor() {
        super();
    }
}