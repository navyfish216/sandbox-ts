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

// 配列をmapで繰り返し
console.log();
console.log("-- kokugo.map 1 --");
kokugo.map((k) => console.log(k));
const kokugo2 = kokugo.map((k) => k + 1);
console.log();
kokugo2.map((k) => console.log(k));

console.log();
console.log("-- kokugo.map 2 --");
kokugo = [33, ...kokugo, 99];
kokugo.map((k) => console.log(k));

// 配列をforEachで繰り返し
console.log();
console.log("-- kokugo.forEach --");
kokugo.forEach(k => console.log(k));

