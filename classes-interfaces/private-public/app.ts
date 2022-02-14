class Department {
  public name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

const accounting = new Department('Accounting');

accounting.describe();

accounting.addEmployee('Rooney');

accounting.name = 'Halland';
// accounting.employees[2] = 'Anna'; // Error
