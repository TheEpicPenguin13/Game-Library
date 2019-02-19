class Sprite {
    constructor(x, y, path) {
        this.pos = new Vector2(x, y);
        this.img = loadImage(path);
    }

    /*
    loadImg() {
        this.img = loadImage(this.path);
    } */

    show() {
        image(this.img, this.pos.x, this.pos.y)
    }
}
