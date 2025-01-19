import { EmployeeDo } from "./EmployeeDo.js";

export interface IEmployeeDao{
    create(client : string,employeeObject : EmployeeDo) : void;
    getEmployee(client : string, employeeId: number ) : EmployeeDo;
}

// dao : data access object