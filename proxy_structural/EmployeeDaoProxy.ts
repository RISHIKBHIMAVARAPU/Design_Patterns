import { EmployeeDaoImpl } from "./EmployeeDaoImpl.js";
import { EmployeeDo } from "./EmployeeDo.js";
import { IEmployeeDao } from "./IEmployeeDao.js";

export class EmployeeDaoProxy implements IEmployeeDao {
    employeeDaoImpl: IEmployeeDao;

    constructor() {
        this.employeeDaoImpl = new EmployeeDaoImpl();
    }

    create(client: string, employeeObject: EmployeeDo): void {
        try {
            if (client !== "admin") throw new Error("user is not admin");
            this.employeeDaoImpl.create(client, employeeObject);

        } catch (err) {
            throw err;
        }
    }

    getEmployee(client: string, employeeId: number): EmployeeDo {
        // all checks we do here and pass it actual dao
        return this.employeeDaoImpl.getEmployee(client, employeeId);
    }
}
