function CalcularResult() {
    const sexo = document.getElementById('sexo');
    const idade = Number(document.getElementById('idade').value);
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);
    const atv = Number(document.getElementById('atv').value);

    const imc = (peso / (altura / 100) ** 2).toFixed(3);
    const varFem = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
    const varMasc = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);

    let descImc = '';
    if (imc < 18.5) {
        descImc = "Abaixo do peso"
    } else if (imc < 25) {
        descImc = "Peso ideal"
    } else if (imc < 30) {
        descImc = "Sobrepeso"
    } else if (imc < 40) {
        descImc = "Obesidade"
    } else {
        descImc = "Obesidade mórbida"
    }

    let varSex = '';
    if (sexo.value == "" || idade.value == '' || peso.value == '' || altura.value == '' || atv == 0) {
        document.querySelector('header > div').innerHTML = '<p>* Insira todos os valores antes de calcular</p>'
        document.getElementById('result-container').innerHTML = '<p>Aguardando dados...</p>'
    } else if (sexo.value == 'Feminino') {
        varSex = varFem;
        printResult(imc, descImc, varSex, atv)
        document.querySelector('header > div').innerHTML = '';
    } else {
        varSex = varMasc;
        printResult(imc, descImc, varSex, atv)
        document.querySelector('header > div').innerHTML = '';
    }
}

function printResult(imc, descImc, varSex, atv) {
    document.getElementById('box-button').innerHTML = '<button type="button" id="restart" onClick="clearAll()">Limpar</button>'

    document.getElementById('result-container').innerHTML =
        `<h3>Aqui está o seu resultado:</h3>  
        <p>Seu IMC é <strong>${imc}</strong></p> 
        <p>Sua classificação é <strong>${descImc}</strong>
        <p>Seu metabolismo basal é de <strong>${Math.round(varSex)} calorias</strong></p>
        <p>Para manter seu peso, deverá consumir cerca de <strong>${Math.round(varSex * atv)} calorias</strong></p>
        <p>Para aumentar seu peso, deverá consumir cerca de <strong>${Math.round(varSex * atv + 450)} calorias</strong></p>
        <p>Para diminuir seu peso, deverá consumir cerca de <strong>${Math.round(varSex * atv - 450)} calorias</strong></p>`
}


function clearAll() {
    document.getElementById('box-button').innerHTML = '<button type="button" id="start" onClick="CalcularResult()">Calcular</button>'
    document.getElementById('result-container').innerHTML = `<p class="initial">Aguardando dados...</p>`

    sexo.value = '';
    idade.value = '';
    peso.value = '';
    altura.value = '';
    atv.value = 0;
}