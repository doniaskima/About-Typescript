//Named function with optional parameters

function buildName(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}


let result1 = buildName("Bob");//Ok
let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams");//also ok



//anonymous function type with optional parameters
var buildName1: (firstname: string, lastname?: string) => string =
    function (firstname: string, lastname?: string): string{
        if (lastName)
            return firstname + " " + lastname;
        else
            return firstname;
}