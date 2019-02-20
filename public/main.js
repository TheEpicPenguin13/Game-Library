const SPRITESX = 40;
const SPRITESY = 25;

var sprites = [];

function preload() {
    for (let x = 0; x < SPRITESX; x++) {
        for (let y = 0; y < SPRITESY; y++) {
            let num = getRandomInt(0, 1);
            if (num == 0) {
                sprites.push(new Sprite(x * 16, y * 16, "Res/plainGrass.png"));
            } else {
                sprites.push(new Sprite(x * 16, y * 16, "Res/yellowFlower.png"));
            }
        }
    }
}

function setup() {
    createCanvas(SPRITESX * 16, SPRITESY * 16);
}

function draw() {
    background(51);
    sprites.forEach(sprite => {
        sprite.show();
    });
}
