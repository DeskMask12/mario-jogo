const mario = document.querySelector(".mario");
const pipe = document.querySelector('.pipe');
const game = document.querySelector('.gameover')


let scoreMaximo = 0;
let scoreTotal = 0;
let scoreAtual = 0;

let temData = ()=> {
    if (pontuacaoMaxima > 0){
        return true;
    } else{
        return false;
    }
}





const score_parcial = setInterval(() => {
    scoreTotal++
    scoreAtual.innerText = scoreTotal;
    scoreAtual = scoreTotal;
    return scoreAtual
}, 200);


function pararScore(){
    localStorage.setItem('scoreAtual', scoreAtual);
    clearInterval(score_parcial)
}

function gravando (){
    if (!temData){
        localStorage.setItem('scoreRecorde', scoreAtual);
        return scoreMaximo = localStorage.getItem('scoreRecorde');
    }
        else {
            let scoreData = localStorage.getItem('scoreRecorde');
            if (scoreAtual >= scoreData){
                return localStorage.setItem('scoreRecorde', scoreAtual);
            }
        }
}


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

 




document.addEventListener('keydown' , jump);