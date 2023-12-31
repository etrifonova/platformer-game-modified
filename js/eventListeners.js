const sfx = {
    jump: new Howl({
      src: ['./jump.mp3']
      // an array to add several file extensions for browser support
    }),
    openDoor: new Howl({
      src: ['./door.mp3']
    })
  }

const music = {
    background: new Howl({
        src: ['./music.mp3']
    })
}

document.querySelector('.sound-on').addEventListener('click', () => {
    if (!music.background.playing()) {
        music.background.play();
    }
})  

document.querySelector('.sound-off').addEventListener('click', () => {
        music.background.pause();
})  

window.addEventListener('keydown', (event) => {
    if (player.preventInput) return;
    switch (event.key) {
        case "ArrowUp": 

            for (let i = 0; i < doors.length; i++) {
                const door = doors[i];

                if (
                    player.hitbox.position.x + player.hitbox.width <=
                      door.position.x + door.width &&
                    player.hitbox.position.x >=
                      door.position.x &&
                    player.hitbox.position.y + player.hitbox.height >=
                      door.position.y &&
                    player.hitbox.position.y <=
                      door.position.y + door.height
                      ) {
                        player.velocity.x = 0;
                        player.velocity.y = 0;
                        player.preventInput = true;
                        sfx.openDoor.play();
                        player.switchSprite('enterDoor');
                        door.play();
                        return;
                      }
            }
            if (player.velocity.y === 0) player.velocity.y = -25;

            sfx.jump.play();
            
            break;
        case "ArrowLeft": 
            // move player to the left
            keys.ArrowLeft.pressed = true;
            break;
        case "ArrowRight": 
            // move player to the right
            keys.ArrowRight.pressed = true;
            break;
        }
    }
)

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case "ArrowLeft": 
            // move player to the left
            keys.ArrowLeft.pressed = false;
            break;
        case "ArrowRight": 
            // move player to the right
            keys.ArrowRight.pressed = false;
            break;
        }
    }
)

// const button = document.querySelector("#button");
// const icon = document.querySelector("#button > i");
// const audio = document.querySelector("audio");

// button.addEventListener("click", () => {
//   if (audio.paused) {
//     audio.volume = 0.2;
//     audio.play();
//     icon.classList.remove('fa-volume-up');
//     icon.classList.add('fa-volume-mute');
    
//   } else {
//     audio.pause();
//     icon.classList.remove('fa-volume-mute');
//     icon.classList.add('fa-volume-up');
//   }
//   button.classList.add("fade");
// });