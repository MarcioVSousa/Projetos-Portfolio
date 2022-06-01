const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav',
}

function criarBox(texto){
    const div = document.createElement('div');
    div.classList.add('key');
    div.id = texto;
    div.textContent = texto;
    document.getElementById('container').appendChild(div);
}

function exibir(){
    Object.keys(sons).forEach(criarBox)
}


function tocarSom(tecla){
    const audio = new Audio(`./sounds/${sons[tecla]}`);
    audio.play()
}

function ativarDiv(){
    let tecla = ''
    if(event.type == 'click'){
        tecla = event.target.textContent
    }else{
        tecla = event.key.toUpperCase()
    }

    if(sons.hasOwnProperty(tecla)){
        document.getElementById(tecla).animate([
            {transform: 'scale(1.08)'},
            {boxShadow: '0 0 50px #ffcc00'}
        ], {
            duration: 200
        })
        tocarSom(tecla)
    }
}


exibir()
document.querySelectorAll('.key').forEach(div =>{
    div.addEventListener('click', ativarDiv)
})
window.addEventListener('keydown', ativarDiv)