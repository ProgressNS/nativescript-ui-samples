export class SettingsViewModel {

    private _settings: Settings;
    private _prefModes: Array<String>;

    constructor() {
    }

    get settings() {
        if (!this._settings) {
            this._settings = new Settings();
        }
        return this._settings;
    }

    get prefModes() {
        if (!this._prefModes) {
            this._prefModes = new Array<String>();
            this._prefModes.push("LTE");
            this._prefModes.push("UMTS");
            this._prefModes.push("EDGE");
        }
        return this._prefModes;
    }
}

export class Settings {
    public onlyOnWiFi: boolean = false;
    public networkLimit: number = 10;
    public networkPreference: string = "LTE";
    public appVolume: number = 70;

    constructor() {
    }
}