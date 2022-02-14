"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // public name: string;
        this.employees = [];
        // this.id = id;
        // this.name = name;
    }
    Department.prototype.describe = function () {
        // this.id = 'd2'; // Error
        console.log('Department: ' + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    return Department;
}());
var accounting = new Department('d1', 'Accounting');
accounting.describe();
accounting.addEmployee('Rooney');
accounting.name = 'Halland';
//# sourceMappingURL=app.js.map