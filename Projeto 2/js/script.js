window.onload = () => {
    document.getElementById('menu').addEventListener('click', (e) => {
        let ul = document.getElementById('menu-ul')
        if(ul.classList.contains('disabled')){
            ul.classList.remove('disabled')
        }else{
            ul.classList.add('disabled')
        }
        e.stopImmediatePropagation()
    })

    document.body.addEventListener('click', () => {
        document.getElementById('menu-ul').classList.add('disabled')        
    })
}