import { EmployeeDaoImpl } from "./EmployeeDaoImpl.js";
export class EmployeeDaoProxy {
    constructor() {
        this.employeeDaoImpl = new EmployeeDaoImpl();
    }
    create(client, employeeObject) {
        try {
            if (client !== "admin")
                throw new Error("user is not admin");
            this.employeeDaoImpl.create(client, employeeObject);
        }
        catch (err) {
            throw err;
        }
    }
    getEmployee(client, employeeId) {
        // all checks we do here and pass it actual dao
        return this.employeeDaoImpl.getEmployee(client, employeeId);
    }
}
