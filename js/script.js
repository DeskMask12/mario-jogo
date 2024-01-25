const mario = document.querySelector(".mario");
const pipe = document.querySelector('.pipe');
const game = document.querySelector('.gameover')


function jump() {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');

    }, 500);
}
 const loop = setInterval(() => {


    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , " ");

     console.log (marioPosition);

    if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 70 ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        pipe.style.animation = 'none';
        pipe.style.bottom = `${marioPosition}px`

        mario.src='./images/game-over.png';
        mario.style.width= '30px'
        mario.style.marginLeft = '50px'
        
        clearInterval(loop)
    }
 },10);

 
function placar(){
    const  placar = {
        pontuacao: 0,
        desenha () {
            context.front = '50px serif';
            context.fillText(`Score  ${placar.pontuacao} `, 50, 90);
            context.fillStyle = 'white';
        },
        atualiza () {

        }
    } 
    return placar
}



document.addEventListener('keydown' , jump);