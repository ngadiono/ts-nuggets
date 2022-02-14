class Department {
  // private id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.describe();

accounting.addEmployee('Rooney');

accounting.name = 'Halland';
// accounting.employees[2] = 'Anna'; // Error

export {};
