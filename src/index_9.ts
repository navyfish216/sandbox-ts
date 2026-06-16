// 9章:クラスの応用

// 継承
class House {
    private color: string = "白";
    private rooms: number = 1;

    constructor(rooms: number) {
        this.rooms = rooms;
    }

    protected getRooms(): number {
        return this.rooms;
    }

    public activateSecurity(isOn: boolean) {
        if (isOn) {
            console.log("セキュリティを作動しました");
        } else {
            console.log("セキュリティを停止しました")
        }
    }
}

class GarageHouse extends House {
    private hasGarage: boolean = false;

    constructor(rooms: number, hasGarage: boolean) {
        super(rooms);
        this.hasGarage = hasGarage;
    }

    public setHasGarage(hasGarage: boolean): void {
        this.hasGarage = hasGarage;
    }

    public getHasGarage(): boolean {
        return this.hasGarage;
    }

    public getHouseDetails(): void {
        console.log(`部屋数は${this.getRooms()}です`);
        if (this.hasGarage) {
            console.log("車庫があります");
        }
    }

    public openGarage(isOpen: boolean) {
        if (this.hasGarage) {
            if (isOpen) {
                console.log("車庫を開けました");
            } else {
                console.log("車庫を閉じました");
            }
        } else {
            console.log("車庫はありません");
        }
    }

    // 継承してオーバーライド
    public activateSecurity(isOn: boolean) {
        if (isOn) {
            console.log("セキュリティを作動しました");
            console.log("ガレージのセキュリティも作動します");
        } else {
            console.log("セキュリティを停止しました")
            console.log("ガレージのセキュリティも停止します");
        }
    }
}

const gh = new GarageHouse(3, false);
gh.setHasGarage(true);
gh.getHouseDetails();
gh.openGarage(true);
gh.openGarage(false);
gh.activateSecurity(true);

console.log();

// オーバーロード
class House2 {
    activateSecurity(isOn: boolean): void;
    activateSecurity(isOn: boolean, hasGarage: boolean): void;

    activateSecurity(isOn: boolean, hasGarage?: boolean): void {
        if (isOn) {
            console.log("セキュリティを作動しました");
            if (hasGarage) {
                console.log("ガレージのセキュリティも作動します")
            }
        } else {
            console.log("セキュリティを停止しました");
            if (hasGarage) {
                console.log("ガレージのセキュリティも停止します")
            }
        }
    }
}

const myHouse = new House2();
myHouse.activateSecurity(false);
myHouse.activateSecurity(true, true);

console.log();

// ジェネリックメソッド
class MyUtility {
    printArray<T>(arr: T[]): void {
        for (const val of arr) {
            console.log(val);
        }
    }
}
const util = new MyUtility();
util.printArray<number>([1,2,3,4,5]);
util.printArray<string>(["Stive","Bill","Mark"]);

console.log();

// ジェネリッククラス
class MyData<T> {
    private vals: T[] = [];

    addValue(item: T) {
        this.vals.push(item);
    }

    getValue(index: number, defaultVal: T): T {
        return this.vals[index] || defaultVal;
    }
}

const dataNum = new MyData<number>();
dataNum.addValue(5);
dataNum.addValue(3);
console.log(dataNum.getValue(1, 0));

const dataStr = new MyData<string>();
dataStr.addValue("apple");
dataStr.addValue("orange");
console.log(dataStr.getValue(1, "default"));
