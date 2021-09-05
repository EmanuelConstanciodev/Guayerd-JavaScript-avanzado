// Calculadora!

// Crear una calculadora con HTML, CSS y Javascript.
// * Pueden usar algún template HTML y CSS o armarlo de cero.
// * Las operaciones mínimas a cumplir son: Suma, resta, división, multiplicación y reset.


// * Funciones adicionales opcionales: 
// - Guardar, ver y borrar un valor en memoria. 
// - Potencia
// - Raiz cuadrada
// * Adicionales que pueden incluir:
// Uso de teclas
// Estilos adicionales y avanzados, como sombras o efectos.





const calculadora = (valor) => {
    let capturarValor1 = parseInt(document.getElementById("valor1").value);
    let capturarValor2 = parseInt(document.getElementById("valor2").value);
    switch (valor) {
        case 1:
            suma(capturarValor1, capturarValor2);

            break;
        case 2:
            resta(capturarValor1, capturarValor2);

            break
        case 3:
            multiplicacion(capturarValor1, capturarValor2);

            break
        case 4:
            division(capturarValor1, capturarValor2);

            break

        case 5:
            raiz(capturarValor1);

            break
        case 6:
            potencia(capturarValor1, capturarValor2);
            break
        default:
            break;
    }
}

function igual(resultado) {
    const hola = document.querySelector('.hola');
    hola.addEventListener('click', () => {
        document.querySelector("#resultado").innerText = `Resultado: ${resultado}`
    });
}





const suma = (capturarValor1, capturarValor2) => {
    let resultado = capturarValor1 + capturarValor2;
    igual(resultado);
   
   
   
    // document.querySelector("#resultado").innerText = `Resultado: ${resultado}`
    guardar(resultado);
}


const resta = (capturarValor1, capturarValor2) => {
    let resultado = capturarValor1 - capturarValor2
    igual(resultado);

    //guardar(resultado);
}

const multiplicacion = (capturarValor1, capturarValor2) => {
    let resultado = capturarValor1 * capturarValor2;
    igual(resultado);
    //guardar(resultado);
}

const division = (capturarValor1, capturarValor2) => {
    if (capturarValor2 !== 0) {
        let resultado = capturarValor1 / capturarValor2
        igual(resultado);
        //guardar(resultado);
    } else {
        alert("Operación inválida")
    }
}


const reiniciar = () => {
    document.querySelector("#resultado").innerText = `Resultado ---`
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
}




const guardar = resultado => {

    localStorage.setItem('ultimo_valor', resultado);
    mostrarUltimoResultado();

}


const mostrarUltimoResultado = () => {

    


    let ultimo_valor = localStorage.getItem('ultimo_valor');


    console.log(ultimo_valor);
   

}




const raiz = capturarValor1 => {

    let resultado = Math.sqrt(capturarValor1);
    igual(resultado);

}

const potencia = (capturarValor1, capturarValor2) => {

    let resultado = Math.pow(capturarValor1, capturarValor2);
    igual(resultado);
   
}