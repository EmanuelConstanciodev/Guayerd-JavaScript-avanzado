const pass1 = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");
const formulario = document.querySelector("#form")


const validar = (event) => {
    console.log(event.timeStamp) // Momento de tiempo donde se hizo click
    console.log(event.target) // Elemento completo al que se le aplico el eento
    if (event.target.value === pass1.value){
        pass2.classList.add("valido");
        pass2.classList.remove("invalido")
    } else{
        pass2.classList.add("invalido");
        pass2.classList.remove("valido")
    }
}


const enviar = (event) =>{
    event.preventDefault();
    if (pass2.classList.contains("valido")){ //Validamos si el dato es valido
        console.log("Enviado!")
        formulario.reset() //Limpia los input
    } else {
        pass2.focus() // Hace foco en un input en particular
    }
    
}


pass2.addEventListener("keyup",validar)
// pass2.addEventListener("keyup",validar) Valida en simultaneo al tipeo, al soltar cada tecla

form.addEventListener("submit",enviar) // Cuadno apretamos el boton de enviar se ejecuta