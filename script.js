function hide(element){
    element.closest('.casillas').remove();
    let elementocontadordeconexiones = document.querySelector("#contador1");
    let contadordeconexiones = elementocontadordeconexiones.innerText;
    contadordeconexiones --;
    elementocontadordeconexiones.innerText=contadordeconexiones;

}
function move(element){
    let imagendeperfil = element.closest('.casillas').querySelector('.perfil');
    let misconexiones = document.querySelector('#misconexiones2');
    misconexiones.innerHTML += imagendeperfil.outerHTML;

    let elementocuentadeconexiones = document.querySelector("#contador2");
    let cuentadeconexiones = elementocuentadeconexiones.innerText;
    cuentadeconexiones ++;
    elementocuentadeconexiones.innerText = cuentadeconexiones;
    
    hide(element);
}

function mostrarmodal(element){
    let modal = document.querySelector(".modal");
    modal.classList.add('showmodal');
}

function cambiarnombre(event){
    event.preventDefault();
    let nuevonombre = document.querySelector('#nuevonombre').value;

    let elementonombredeusuario = document.querySelector('.username');
    elementonombredeusuario.innerText = nuevonombre;

    let modal = document.querySelector(".modal");
    modal.classList.remove('showmodal');
    document.querySelector('#nuevonombre').value = "";
}