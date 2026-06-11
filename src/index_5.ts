// 5章:条件分岐

// 三項演算子
const x: number = 5;
let msg: string = "";
msg = x > 10 ? "xは10より大きいです" : "xは10以下です";
console.log(msg);

// switch文(フォロースルー使用)
const mon: number = 11;
let days: number = 0;

switch(mon) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 2:
        days = 28;
        break;
    case 4: case 6: case 9: case 11: 
        days = 30;
        break;
    default:
        days = 0;
        break;
}
console.log(`${mon}月は${days}日あります。`);
