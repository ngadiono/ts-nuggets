"use strict";
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    return Department;
}());
var accounting = new Department('Accounting');
accounting.describe();
accounting.addEmployee('Rooney');
accounting.name = 'Halland';
// accounting.employees[2] = 'Anna'; // Error
//# sourceMappingURL=app.js.map