
let texto_btn= document.getElementById('texto_btn')

let texto = document.getElementById('texto')

texto_btn.addEventListener('click', cambiarStyle); 

function cambiarStyle() {
    texto.classList.toggle('mostrar') 

    if  (texto.classList.contains('mostrar')) {
        texto_btn.innerHTML= 'Ver menos'; 
    } else {
    texto_btn.innerHTML= 'Ver más';
    }
}

