function mostrar_ocultar(blq,btn) {
    let bloque = document.getElementById(blq)
    let boton = document.getElementById(btn) 

    if  (bloque.classList.contains('mostrar')) {
        bloque.classList.toggle('mostrar')
        bloque.classList.toggle('ocultar')
        boton.innerHTML = 'Ver más'; 
    } else {
        bloque.classList.toggle('ocultar')
        bloque.classList.toggle('mostrar')
        boton.innerHTML= 'Ver menos';
    }
}

