class Vector2 {
    constructor(x, y) {
        this.set(x, y);
    }

    // EX: Initializing pos / size / vel
    set(x, y) {
        this.x = x;
        this.y = y;
    }

    // EX: adding vel to pos
    add(vect2) {
        this.x += vect2.x;
        this.y += vect2.y;
    }
}
