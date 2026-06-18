// 11章:例外処理

try {
    const x: number = 10;
    const y: number = 0;

    if (y === 0) {
        throw new Error("ゼロで割り算はできません。");
    }

    const ans = x / y;
    console.log(ans);
} catch (err) {
    console.log(err);
} finally {
    console.log("プログラムを終了します①。")
}

console.log();

try {
    throw new RangeError("範囲外エラー");
} catch (error) {
    console.log(error);
    if (error instanceof SyntaxError) {
        console.log("構文エラーが発生しました。");
    } else if (error instanceof RangeError) {
        console.log("範囲外の操作が行われました。");
    } else {
        console.log("その他の例外が発生しました。");
    }
} finally {
    console.log("プログラムを終了します②");
}

console.log();

class MyException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MyException";
    }
}

try {
    throw new MyException("カスタム例外が発生しました。");
} catch (e) {
    console.log(e);
}