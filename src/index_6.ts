// 6章:繰り返し処理

let kokugo = [80, 65, 90, 75, 85];

let sum = 0;
for (let i = 0; i < kokugo.length; i++) {
    //console.log(`${i} : ${kokugo[i]}`);
    sum += kokugo[i] || 0;
}
let avarage = sum / kokugo.length;
console.log(`${kokugo.length}人の国語の合計点数は${sum}点で、平均点数は${avarage}点です。`);

sum = 0;
for (let num of kokugo){
    sum += num;
}
avarage = sum / kokugo.length;
console.log(`${kokugo.length}人の国語の合計点数は${sum}点で、平均点数は${avarage}点です。`);

console.log();
console.log("-- kokugo.map --");
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
console.log("-- kokugo.map --");
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

