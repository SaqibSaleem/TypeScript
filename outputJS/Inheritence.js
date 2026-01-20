class Auth {
    Login(name, password) {
        if (name != null && password != null) {
            return "Login Successful";
        }
    }
}
class StudentResult extends Auth {
    GetResult(marks) {
        if (marks >= 35) {
            return "Pass";
        }
        else {
            return "Fail";
        }
    }
}
class Teacher extends Auth {
    Department(DptName) {
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
