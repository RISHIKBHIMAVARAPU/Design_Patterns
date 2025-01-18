import { EmployeeDo } from "./EmployeeDo.js";
export class EmployeeDaoImpl {
    create(client, employeeObject) {
        // inser the employee object into db
    }
    getEmployee(client, employeeId) {
        // mock implementation; 
        return new EmployeeDo();
    }
}
