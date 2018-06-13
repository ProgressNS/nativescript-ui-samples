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
    public name: string = null;
    public phone: string = null;
    public birthDate: string = null;
    public employeeId: number = null;
}