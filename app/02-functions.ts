function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo
}

addNumbers(1,2);
// addNumbers(1,2,3 );
// addNumbers(1,2,3, 'Food');

function sayHello(name:string) : string {
    return name;
}

sayHello("Kenn")
// sayHello(1)


function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string){
    console.log(someString)
    return numOne + numTwo
}

addNumbersWithOptional(1,2)
addNumbersWithOptional(1,2,'This is optionals')