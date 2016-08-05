export class UserViewModel {

    private _user: User;

    constructor() {
    }

    get user() {
        if (!this._user) {
            this._user = new User();
        }
        return this._user;
    }
}

export class User {
    public username: string = "";
    public password: string = "";
    public email: string = "";

    constructor() {
    }
}