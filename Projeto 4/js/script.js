window.onload = function(){

    var menu = document.querySelector('.mobile-menu ul');
    
    document.getElementById('mobile-menu').addEventListener('click', (e)=>{
        if(menu.classList.contains('menu-active')){
            menu.classList.remove('menu-active');
        } else{
            menu.classList.add('menu-active');
        }
        e.stopImmediatePropagation();
    })

    document.querySelector('body').addEventListener('click', ()=>{
        if(menu.classList.contains('menu-active')){
            menu.classList.remove('menu-active');
        }
    })

    //

    document.querySelectorAll('.switch-dep').forEach(sel => {
        let dep1 = document.getElementById('dep1').style
        let dep2 = document.getElementById('dep2').style

        sel.addEventListener('click', () => {
            if(dep1.display == 'none'){
                dep1.display = 'block';
                dep2.display = 'none';
            }else{
                dep1.display = 'none';
                dep2.display = 'block';
            }
        })
    })
}