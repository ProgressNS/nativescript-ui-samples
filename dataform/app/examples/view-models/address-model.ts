import { Observable } from "tns-core-modules/data/observable";
import { DataFormEventData } from "nativescript-ui-dataform";
import { RadDataForm } from "../../../../src/ui-dataform.android";

export class AddressViewModel extends Observable {
    address: { country: number, city: number } = {
        country: 1,
        city: 101
    };

    constructor() {
        super();
        this.set("countryProvider", [
            { key: -1, label: "Select Country" },
            { key: 1, label: "UK" },
            { key: 2, label: "Germany" },
            { key: 3, label: "France" }
        ]);
        this.set("cityProvider", this.createCityProvider());
        this.set("info", this.createInfo());
    }

    private createCityProvider() {
        switch (this.address.country) {
            case 1:
                return [
                    { key: -1, label: "Select City" },
                    { key: 101, label: "London" },
                    { key: 102, label: "Manchester" },
                    { key: 103, label: "Liverpool" }
                ];
            case 2:
                return [
                    { key: -1, label: "Select City" },
                    { key: 201, label: "Berlin" },
                    { key: 202, label: "Cologne" },
                    { key: 203, label: "Frankfurt" }
                ];
            case 3:
                return [
                    { key: -1, label: "Select City" },
                    { key: 301, label: "Paris" },
                    { key: 302, label: "Nice" },
                    { key: 303, label: "Lyon" }
                ];
            default:
                return [
                    { key: -1, label: "Select Country First" }
                ];
        }
    }

    private createInfo() {
        let countryLabel = this.get("countryProvider").find(country => country["key"] === this.address.country)["label"];
        let cityLabel = this.get("cityProvider").find(city => city["key"] === this.address.city)["label"];
        return "Selected City: " + (this.address.city < 0 ? "NONE" : cityLabel + ", " + countryLabel);
    }

    public onPropertyValidate(args: DataFormEventData) {
        let dataForm = <RadDataForm>args.object;
        let property = dataForm.getPropertyByName(args.propertyName);
        console.log('onPropertyValidate -> name: ' + property.name + '; value: ' + property.valueCandidate);
        if (property.name === "city") {
            if (property.valueCandidate > 300) {
                property.errorMessage = "Please Choose Other";
                args.returnValue = false;
            }
        }
    }

    public onPropertyValidated(args: DataFormEventData) {
        let dataForm = <RadDataForm>args.object;
        let property = dataForm.getPropertyByName(args.propertyName);
        console.log('onPropertyValidated -> name: ' + property.name + '; value: ' + property.valueCandidate);
    }

    public onPropertyCommit(args: DataFormEventData) {
        let dataForm = <RadDataForm>args.object;
        let property = dataForm.getPropertyByName(args.propertyName);
        console.log('onPropertyCommit -> name: ' + property.name + '; value: ' + property.valueCandidate);
    }

    public onPropertyCommitted(args: DataFormEventData) {
        let dataForm = <RadDataForm>args.object;
        let property = dataForm.getPropertyByName(args.propertyName);
        console.log('onPropertyCommitted -> name: ' + property.name + '; value: ' + property.valueCandidate);
        if (args.propertyName === "country") {
            this.set("cityProvider", this.createCityProvider());
        }
        if (args.propertyName === "city") {
            this.set("info", this.createInfo());
        }
    }
}