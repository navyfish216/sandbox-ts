// 7章:関数

// デフォルト引数
function greet(name: string, greeting: string = "Hello") : void {
    console.log(`${greeting}, ${name}`);
}
greet("HIRO");
greet("HIRO", "こんにちは");

console.log();

// 可変長引数
function sum(...nums: number[]) : void {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    console.log(`合計は ${total} です`)
}
sum(1,2,3,4);
sum(5,10);
sum(9);
sum();

console.log();

function getTriArea(base : number, height : number) : number {
    let area : number = 0;
    area = base * height / 2;
    return area;
}
console.log(`面積は ${getTriArea(4, 3)} です`);

console.log();

// 関数式
//const increment = function (n : number) {
//    return n + 1;
//};
//console.log(increment(2));

function applyOperation (n : number, action : Function) : number {
    //console.log(action(n));
    return action(n);
}

// 関数式
//const increment = function (n : number) {
//    return n + 1;
//}

// アロー関数①（波括弧とreturnがある）
//onst increment = (n : number) : number => {
//    return n + 1;
//}

// アロー関数②（波括弧とreturnが無い）
const increment = (n : number) : number => n + 1;

// 関数式
//const decrement = function (n : number) {
//    return n - 1;
//}

// アロー関数①（波括弧とreturnがある）
//const decrement = (n : number) : number => {
//    return n - 1;
//}

// アロー関数②（波括弧とreturnが無い）
const decrement = (n : number) : number => n - 1;

console.log(`${applyOperation(5, increment)}`);
console.log(`${applyOperation(5, decrement)}`);

console.log();

// ジェネリクス
function getFirstElement<T> (arr : T[], t: T) : T {
    return arr[0] || t;
}

let numbers: number[] = [1,2,3,4,5];
console.log(`${getFirstElement(numbers, 99)}`);
numbers = [];
console.log(`${getFirstElement(numbers, 99)}`);

let strings: string[] = ["リンゴ", "みかん", "バナナ"];
console.log(`${getFirstElement(strings, "エラー")}`);
strings= [];
console.log(`${getFirstElement(strings, "エラー")}`);

console.log();

// グローバルスコープ
function sampleFunction3() : void {
    const x = 1;

    if (x === 1) {
        const y = 2;
        console.log(y);
        console.log(`if文内：${++globalVariable}`);
    }

    for (let i = 0; i < 1; i++) {
        const z = 3;
        console.log(z);
        console.log(`for文内：${++globalVariable}`);
    }

    console.log(`関数内：${++globalVariable}`);
}

let globalVariable : number = 10;
console.log(`グローバルスコープ：${globalVariable}`)
sampleFunction3();
