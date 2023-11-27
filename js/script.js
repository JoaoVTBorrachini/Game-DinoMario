const mario = document.querySelector('.mario');
const clouds = document.querySelector('.clouds');
const pipe = document.querySelector('.pipe');


let pipeArray = [];
let pipePos = [bottom = -20,
                width = 80]


// document.addEventListener("keydown", startScreen, {once: true})

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(function () {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        mario.src = './images/game-over.png';

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.style.width = '70px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        clearInterval(loop)
        gameOver()
    }


}, 10);

const gameOver = () => {
    setTimeout(() => {
        alert("Game over :( | Reinicie a página para recomeçar");
    }, 250);
}

document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
        jump()
    }
});