interface IAuth {
    Login(name: string, password: string): string;
}

class Auth implements IAuth {
public Login(name: string, password: string) {
        if (name != null && password != null) {
            return "Login Successful";
        }
    }
}
class StudentResult extends Auth {
    
    public GetResult(marks: number) {
        if (marks >= 35) {
            return "Pass";
        } else {
            return "Fail";
        }
    }
}
class Teacher extends Auth {
    public Department(DptName: string) {
        return "Department: " + DptName;
    }
    }
let ObjResult = new StudentResult();
console.log(ObjResult.Login("Saqib", "password123"));
console.log(ObjResult.GetResult(85));
let objTeacher = new Teacher();
console.log(objTeacher.Login("Mr. Smith", "teachpass"));
console.log(objTeacher.Department("ASP.NET"));
console.log("End of an Inheritance Example");
