import dataFormModule = require("nativescript-telerik-ui-pro/dataform");

export class ExactTextValidator extends dataFormModule.PropertyValidator {
    constructor() {
        super();
        this.errorMessage = "Please enter: admin1";
    }

    public validate(value: any, propertyName: string): boolean {
        return value.toLowerCase() == "admin1";
    }
}