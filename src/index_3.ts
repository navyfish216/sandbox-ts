// 3章:配列

// 数値型の配列
let kokugo: number[] = [75,90,80,100,65,30,78,98,35,54];
console.log(kokugo);

// 文字列型の配列
const userName: string[] = ["ビル","スティーブ","イーロン"];
console.log(userName);
userName.push("ヒロ","リサ","ウィル");
console.log(userName);
userName.unshift("あああ");
console.log(userName);

console.log(userName.slice(1));
console.log(userName.slice(1, 3));

const fruits: {[key: string]: string} = {
    "Apple": "リンゴ",
    "Banana": "バナナ",
    "Orange": "オレンジ"
}
console.log(fruits);
fruits["Orange"] = "みかん";
console.log(fruits);

const myArray: number[] = [0,1,2,3,4];
console.log(myArray);
const lastElement = myArray.pop();
console.log(lastElement);
console.log(myArray);
const firstElement = myArray.shift();
console.log(firstElement);
console.log(myArray);

const myArray2: number[] = [0,1,2,3,4,5];
console.log(myArray2);
const deletedElements = myArray2.splice(2, 3);
console.log(deletedElements);
console.log(myArray2);
myArray2.splice(2, 0, 6);
console.log(myArray2);

const array1: number[] = [1,2,3];
const array2: number[] = [4,5,6];
const array3: number[] = [7,8,9];
const newArray = array1.concat(array2, array3);
console.log(newArray);

const strArray: string[] = ['H','E','L','L','O'];
const newStrArray = strArray.join('-');
console.log(newStrArray);

const numArray: number[] = [4,3,1,2,5];
numArray.sort();
console.log(numArray);

const strArray2: string[] = ["A","B","C"];
strArray2.reverse();
console.log(strArray2);
strArray2.reverse();
console.log(strArray2);

// -----------------------------------------------
// 6章:繰り返しの方に書いていた配列関連の処理を引っ越し
// -----------------------------------------------

kokugo = [80, 65, 90, 75, 85];

console.log();
console.log("-- kokugo.map 1 --");
kokugo.map((k) => console.log(k));
const kokugo2 = kokugo.map((k) => k + 1);
console.log();
kokugo2.map((k) => console.log(k));

console.log();
console.log("-- kokugo.find --");
let findResult = kokugo.find((k) => (k >= 85 ? true : false));
console.log(`findResult : ${findResult}`);
findResult = kokugo.find((k) => (k > 90 ? true : false)); // 条件に合致しないとundefinedになる
console.log(`findResult : ${findResult}`);

console.log();
console.log("-- kokugo.filter --");
let filterResult: number[] = kokugo.filter((k) => (k >= 85 ? true : false));
console.log(`filterResult.length : ${filterResult.length}`);
filterResult.map((f) => console.log(f));
console.log();
filterResult = kokugo.filter((k) => (k > 90 ? true : false)); // 条件に合致しないと0件になる
console.log(`filterResult.length : ${filterResult.length}`);
filterResult.map((f) => console.log(f));

console.log();
console.log("-- kokugo.map 2 --");
kokugo = [33, ...kokugo, 99];
kokugo.map((k) => console.log(k));

console.log();
console.log("-- kokugo.forEach --");
kokugo.forEach(k => console.log(k));

console.log();
console.log("-- kokugo.indexOf --");
let i = kokugo.indexOf(65);
console.log(i);
i = kokugo.indexOf(98);
console.log(i);

console.log();
console.log("-- kokugo.lastIndexOf --");
kokugo.push(65,80);
i = kokugo.lastIndexOf(65);
console.log(i);
i = kokugo.lastIndexOf(98);
console.log(i);

