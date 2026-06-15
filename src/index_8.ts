// 8章:クラスの基本

class House {
    public color: string; // 家の色
    private _rooms: number; // 部屋数
    protected address: string;

    // constructor() {
    //     this.color = "white";
    //     this._rooms = 0;
    //     this.address = "";
    // }

    constructor(color: string, rooms: number, address: string) {
        this.color = color;
        this._rooms = rooms;
        this.address = address;
    }

    set rooms(count: number) {
        this._rooms = count < 0 ? 0 : count;
    }

    get rooms() {
        return this._rooms;
    }

    public displayColor(): void {
        console.log(`この家の色は${this.color}です`);
    }

    private countRooms(): number {
        return this._rooms;
    }

    protected getAddress(): string {
        return this.address;
    }

    activeSecurity(isOn: boolean) {
        if (isOn) {
            console.log("セキュリティを作動しました");
        } else {
            console.log("セキュリティを停止しました");
        }
    }
}

const redHouse = new House("白", 1, "東京都");

console.log(redHouse.color);
console.log(redHouse.rooms);

redHouse.color = "赤";
redHouse.rooms = -3;

console.log(redHouse.color);
console.log(redHouse.rooms);

redHouse.displayColor();

redHouse.activeSecurity(true);
redHouse.activeSecurity(false);
