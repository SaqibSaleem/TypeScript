function Fruits() {
    return "Apple";
}
console.log(Fruits());
// Functions with Parameters and Return Types
function Sum(a, b) {
    return a + b;
}
console.log(Sum(5, 5));
{
    var employeeInfo = {
        name: "Saqib Saleem",
        age: 30,
        department: "IT",
        salary: 50000
    };
}
console.log("Employee Info: ", employeeInfo);
// Enum
var EmpDepartment;
(function (EmpDepartment) {
    EmpDepartment["IT"] = "Information Technology";
    EmpDepartment["HR"] = "Human Resources";
    EmpDepartment["SALES"] = "Sales";
    EmpDepartment["MARKETING"] = "Marketing";
})(EmpDepartment || (EmpDepartment = {}));
let empDpt = EmpDepartment.IT;
let empDpt2 = EmpDepartment.HR;
console.log("Employee Department 1: ", empDpt);
console.log("Employee Department 2: ", empDpt2);
