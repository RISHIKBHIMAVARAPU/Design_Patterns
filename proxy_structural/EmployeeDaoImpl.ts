import { EmployeeDo } from "./EmployeeDo.js";
import { IEmployeeDao } from "./IEmployeeDao.js";

export class EmployeeDaoImpl implements IEmployeeDao{
    create(client: string, employeeObject: EmployeeDo): void {
        // inser the employee object into db
    }

    getEmployee(client: string, employeeId: number): EmployeeDo {
        // mock implementation; 
        return new EmployeeDo();
    }
    
    
}