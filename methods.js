"use strict";

function totalSalary(employees) {
  let total = 0;

  for (let employee of employees) {
    total += employee.salary;
  }
  return total;
}

function departmentQuantity(employees) {
  const allDepartment = [];
  for (let employee of employees) {
    if (!allDepartment.includes(employee.department)) {
      allDepartment.push(employee.department);
    }
  }
  return allDepartment.length;
}

function departmentSalary(employees) {
  const departmentSalary = {};
  let frontendSalary = 0;
  let backendSalary = 0;
  let designSalary = 0;
  let salesSalary = 0;

  for (let employee of employees)
    if (employee.department === "frontend") {
      frontendSalary += employee.salary;
    } else if (employee.department === "backend") {
      backendSalary += employee.salary;
    } else if (employee.department === "design") {
      designSalary += employee.salary;
    } else if (employee.department === "sales") {
      salesSalary += employee.salary;
    }

  departmentSalary.frontend = frontendSalary;
  departmentSalary.backend = backendSalary;
  departmentSalary.design = designSalary;
  departmentSalary.sales = salesSalary;
  return departmentSalary;
}

export { totalSalary, departmentQuantity, departmentSalary };
