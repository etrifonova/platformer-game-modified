const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
// 2d methods to draw

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

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

    if (keys.d.pressed) {
        player.velocity.x = 1
    } else if (keys.a.pressed) {
        
    }
    player.draw();
    player.update();


};

animate();

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w': 
            if (player.velocity.y === 0) player.velocity.y = -10;
            
            break;
        case 'a': 
            // move player to the left
            player.velocity.x = -4;
            break;
        case 'd': 
            // move player to the right
            player.velocity.x = 4;

            break;
        }
    }
)

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a': 
            // move player to the left
            player.velocity.x = 0;
            break;
        case 'd': 
            // move player to the right
            player.velocity.x = 0;

            break;
        }
    }
)