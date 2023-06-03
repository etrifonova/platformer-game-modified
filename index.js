const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
// 2d methods to draw

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576


const parsedCollisions = collisionsLevel1.parse2D();
const collisionBlocks = parsedCollisions.createObjectsFrom2D();

const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/backgroundLevel1.png',
})

const player = new Player({
    collisionBlocks,
    // above is a shortcut for collisionBlocks: collisionBlocks - when the property name is the same as the value, we can just put the property name
    
});
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
    backgroundLevel1.draw();
    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw();
    })

    player.velocity.x = 0;
    if (keys.d.pressed) player.velocity.x = 5 // if there's only one statement, curly braces aren't necessary
    else if (keys.a.pressed) player.velocity.x = -5 // if there's only one statement, curly braces aren't necessary
    player.draw();
    player.update();
};

animate();