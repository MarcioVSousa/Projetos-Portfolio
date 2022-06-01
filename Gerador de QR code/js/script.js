const textInput = document.getElementById('text')
const box = document.getElementById('QR-box')

function gerarCode(){
    if(textInput.value != ''){
        box.innerHTML = `<img src="https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${textInput.value}" alt="qr code" id="qr-image">`
    }else{
        box.innerHTML = 
        `<p>Nenhum valor informado!</p>
        <p>Informe algum valor para ser gerado!</p>`
    }
}

function clearCode(){
    textInput.value = ''
    box.innerHTML =
    `<p>Aguardando...</p>
    <p>O QR code aparecerá aqui.</p>`
}