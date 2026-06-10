// 4章:演算子

// 算術演算子
// 除算(余り)
const amari: number = 5 % 2;
console.log(amari);

// べき乗(2の3乗)
const bekijou: number = 2 ** 3;
console.log(bekijou);

// 文字列結合演算子
const msg1: string = "Hello";
const msg2: string = "World";
const greeting: string = msg1 + " " + msg2;
console.log(greeting);

const num: number = 5;
const totalPrice: string = `リンゴ${num}個の値段は ${num * 100} 円です`;
console.log(totalPrice);
