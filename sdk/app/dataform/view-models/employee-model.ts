export class EmployeeViewModel {

    private _employee: Employee;

    constructor() {
    }

    get employee() {
        if (!this._employee) {
            this._employee = new Employee();
        }
        return this._employee;
    }
}

export class Employee {
    public name: string = "";
    public phone: string = "";
    public birthDate: string = "1988-05-05";
    public employeeId: number = null;
}