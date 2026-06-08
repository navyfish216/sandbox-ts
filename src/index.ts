let age:number = 0;
age = 35;
const pai:number = 3.14;
console.log(age + pai);

const msg1:string = "Hello";
const msg2:string = 'Hello';
const msg3:string = `Hello`;
console.log(msg1);
console.log(msg2);
console.log(msg3);

const calc = `1 + 2 = ${1 + 2}`;
console.log(calc);

const user:string = "HIRO";
const msg:string = `Hello ${user} さん`;
console.log(msg);

const isYes:boolean = true;
const isNo:boolean = false;

//const x:null = null;
//console.log(x);

let x;
let y:undefined = undefined;
console.log(x);
console.log(y);

console.log(typeof(age + pai));
console.log(typeof(msg));
console.log(typeof(isYes));

// タプル型変数
const userdata:[string, number, number, number] = ["HIRO", 35, 175.2, 65.3];
console.log(userdata[0]);
console.log(userdata[1]);
console.log(userdata[2]);
console.log(userdata[3]);
