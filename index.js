const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
// 2d methods to draw

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

class Sprite {
    constructor({position}) {
        this.position = position;
        this.image = new Image();
        this.image.src = './img/backgroundLevel1.png'
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
    }
}

const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0
    }
})

const player = new Player();
const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    }
}

// let bottom = y + 100;
function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);
    backgroundLevel1.draw();

    player.velocity.x = 0;
    if (keys.d.pressed) player.velocity.x = 5 // if there's only one statement, curly braces aren't necessary
    else if (keys.a.pressed) player.velocity.x = -5 // if there's only one statement, curly braces aren't necessary
    player.draw();
    player.update();
};

animate();