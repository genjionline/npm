// 36.1
export function totalSalary(employees) {
    return employees.reduce((total, employee) => total + employee.salary, 0);
}
// 36.2
  function departmentsQuantity(employees) {
    const departments = new Set();
    employees.forEach(employee => {
      departments.add(employee.department);
    });
    return departments.size;
  }

window.departmentsQuantity = departmentsQuantity;
// 36.3
function departmentsSalary(employees) {
  const departmentSalaries = {};
  employees.forEach(employee => {
    if (departmentSalaries[employee.department]) {
      departmentSalaries[employee.department] += employee.salary;
    } else {
      departmentSalaries[employee.department] = employee.salary;
    }
  });
  return departmentSalaries;
}

export { departmentsQuantity, departmentsSalary };