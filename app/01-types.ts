let username: string = "instructor";
let password: string = "Letmein1234!"
let instructorId: number = 5;

// let password: string;
let phoneNumber: string;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

let greeting = "Hello";
// password = 1234;

let age: number = 40;
let currentYear: number = 2018;

let companyName: string;
companyName = "Eleven Fifty"

let appName: string = 'Twitter';
appName = "Instagram";

let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

let studentList: string[] = ['Tom', 'Tracy', 'Nikita']
let allScores: Array<number> = [100, 99, 95, 96]

console.log('Student List:', studentList[0])

let dataFromThirdParty: any= '12345';
console.log(dataFromThirdParty)
console.log(typeof dataFromThirdParty)

dataFromThirdParty = 12345;
console.log(dataFromThirdParty)
console.log(typeof dataFromThirdParty)

function sayHelloToAll() : void {
    console.log("Hello to All!")
}

let undefinedVariable: undefined = undefined
let nullVariable: null = null;

let usernameAndId: [number, string];

usernameAndId = [1, 'kennis']

enum WeaponType {Sword, Saber, Spear}
let weapon: WeaponType = WeaponType.Saber

enum CardType{Ace = 1, Two, Three, Four}
let cardType: string=CardType[1]
console.log(cardType)