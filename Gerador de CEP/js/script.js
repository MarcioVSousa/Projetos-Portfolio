const cep = document.querySelector("#cep")
const alert = document.getElementById('alert')

function buscarData(){
    const search = cep.value.replace('-','')
    const url = `https://viacep.com.br/ws/${search}/json/`

    fetch(url)

    .then((res) => res.json())
    .then((data) => {
        showData(data)
    })

    .catch(function error(){
        alert.innerHTML = '<p>CEP inválido! Informe corretamente.</p>'
        console.log('Oh no!' + error.message)
    })
}

function showData(result){
    alert.innerHTML = ''

    document.querySelectorAll('.data').forEach(camp => {
        camp.value = result[camp.id]
    })
}

function clearData(){
    alert.innerHTML = ''
    document.querySelectorAll('input[type=text]').forEach(input => {
        input.value = ''
    })
}