// 12章:モジュール

const msg = "Hello TypeScript";
const version = "5";

function showMsg() {
    console.log("関数をインポートしました");
}

//export = {msg, version, showMsg};
export default {msg, version, showMsg};
