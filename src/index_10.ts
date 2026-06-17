// 10章:抽象クラスとインターフェース

abstract class Zukai {
    abstract Draw(): void;
}

class Triangle extends Zukai {
    Draw(): void {
        console.log("三角形を描画します。");
    }
}

const tri = new Triangle();
tri.Draw();

console.log();

interface PlaySound {
    name: string;
    play(): void;
    stop(): void;
}

class MusicPlayer implements PlaySound {
    name: string = "sample";

    play() {
        console.log(`${this.name}を再生しました。`);
    }
    
    stop() {
        console.log(`${this.name}を停止しました。`);
    }
}

const mp = new MusicPlayer();
mp.play();
mp.stop();

console.log();

interface PlaySound {
    name: string;
    play(): void;
    stop(): void;
}

interface PlayVideo extends PlaySound {
    videoName: string;
    playVideo(): void;
    stopVideo(): void;
}

class VideoPlayer implements PlayVideo {
    videoName: string = "Sample Video";

    playVideo(): void {
        console.log(`${this.videoName}を再生しました。`);
    }

    stopVideo(): void {
        console.log(`${this.videoName}を停止しました。`);
    }

    name: string = "sample";

    play(): void {
        console.log(`${this.name}を再生しました。`);
    }

    stop(): void {
        console.log(`${this.name}を停止しました。`);
    }
}

const vp = new VideoPlayer();
vp.playVideo();
vp.stopVideo();
vp.play();
vp.stop();
