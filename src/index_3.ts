// 3章:配列

// 数値型の配列
const kokugo: number[] = [75,90,80,100,65,30,78,98,35,54];
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
