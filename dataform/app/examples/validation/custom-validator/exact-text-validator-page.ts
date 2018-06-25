import { PropertyValidator } from "nativescript-ui-dataform";

// >> dataform-custom-validator
export class ExactTextValidator extends PropertyValidator {
    constructor() {
        super();
        this.errorMessage = "Please enter: admin1";
    }

    public validate(value: any, propertyName: string): boolean {
        return value.toLowerCase() === "admin1";
    }
}
// << dataform-custom-validator