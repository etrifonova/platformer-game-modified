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
    imageSrc: './img/king/idle.png',
    frameRate: 11,
    animations: {
        idleRight: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: './img/king/idle.png'
        },
        idleLeft: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: './img/king/idleLeft.png'
        },
        runRight: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: './img/king/runRight.png'
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: './img/king/runLeft.png',
        }
    }
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
    if (keys.d.pressed) {
        player.switchSprite('runRight');
        player.velocity.x = 5 // if there's only one statement, curly braces aren't necessary
        player.lastDirection = 'right';
    }
    else if (keys.a.pressed) {
        player.switchSprite('runLeft');
        player.velocity.x = -5 // if there's only one statement, curly braces aren't necessary
        player.lastDirection = 'left';
    }
    else {
        if (player.lastDirection === 'left') {
            player.switchSprite('idleLeft');
        } else {
            player.switchSprite('idleRight');
        }
    }
    player.draw();
    player.update();
};

animate();