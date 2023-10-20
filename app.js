import { employees } from "./employees";
import { totalSalary } from "./methods";

const total = totalSalary(employees);
console.log(total);
// 36.3
import employees from './employees.js';
import * as employeesMethods from './methods.js';

console.log(employeesMethods.departmentsSalary(employees));