import { EmployeeDaoProxy } from "./EmployeeDaoProxy.js";
import { EmployeeDo } from "./EmployeeDo.js";
let employeeDaoProxy = new EmployeeDaoProxy();
employeeDaoProxy.create("user", new EmployeeDo());
employeeDaoProxy.create("admin", new EmployeeDo());
