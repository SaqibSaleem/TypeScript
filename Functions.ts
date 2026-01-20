function Fruits():string{
    return "Apple"
}
console.log(Fruits())
// Functions with Parameters and Return Types
function Sum(a:number, b:number):number{
    return a + b
}
console.log(Sum(5, 5))

// Interface for Function Types
interface IEmployeeInfo {
    name: string;
    age: number;
    department: string;
    salary: number;
}{
    var employeeInfo : IEmployeeInfo = {
        name:"Saqib Saleem",
        age: 30,
        department: "IT",
        salary: 50000
    }
    
    }
    console.log("Employee Info: ", employeeInfo);

    // Enum
enum EmpDepartment {
    IT = "Information Technology",
    HR = "Human Resources",
    SALES = "Sales",
    MARKETING = "Marketing"
}
let empDpt:EmpDepartment = EmpDepartment.IT;
let empDpt2 = EmpDepartment.HR

console.log("Employee Department 1: ", empDpt);
console.log("Employee Department 2: ", empDpt2);