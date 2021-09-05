// Ejercicios de eventos


// Tipos de eventos :click, blur, mouseover, click, focus, change,
//1. Crear un botón que al hacerle click, muestre un saludo por alert.

const greeting = () => alert('Buenas tardes');
//2. Crear un botón que al hacerle click, muestre un mensaje en el HTML.

const greetingHTML = () => {
    document.write("<p>Buenas tardes</p>");
}

//3. Crear un botón que al hacerle click cambie de color.

const changingColor = () => {
    document.querySelector("button").classList.add("red")
}

//4. Crear 5 botones numerados del 1 al 5. Al hacer click en uno y mostrar un mensaje que diga “Haz clickeado el botón $número”, indicando al usuario cuál botón apretó.

const showingNumber = (numero) => {
    document.write(`<p>Haz clickeado el botón ${numero}</p>`);
}

//5. Crear un input y un botón. Dentro del input el usuario debe ingresar Dentro del input el usuario debe ingresar un color y al hacre click, el input se pone de ese color y se genera un mensaje indicando el color elegido.
 



//6. Crear dos input tipo número y un botón. 
// a) Al hacer foco en un input se debe poner azul.
// b) Al escribir, se debe poner violeta.
// c) Cuando se le saca el foco, se pone verde.
// d) Al hacer click en el boton genera un nuevo párrafo en el html que muestra la suma de ambos


// a)
const focusColor = () => {
    document.querySelector("button").classList.add("blue")
}

// b)
const writing = () => {
    document.querySelector("button").classList.add("violet")  
}

// c)
const blurColor = () => {
    document.querySelector("button").classList.add("green")
}

// d)


const plus = () =>{
    let n1 = parseInt(document.getElementById("value").value);
    let n2 = parseInt(document.getElementById("value1").value);

    let resultado = n1 + n2;
    document.write('<p>' + resultado + '</p>');
}



//7. Poner en un select tres (o más) opciones de superheroes. Dependiendo el que el usuario elija, se mostrará debajo una imagen que haga referencia al personaje. Cuando se le pase el mouse por encima, la imagen debe mostrar una foto de su identidad secreta en su lugar. (Por ejemplo en lugar de verse superman, se vera a Clark Kent).




//8. Investigar y elegir un evento que no hayamos visto en clase. Hacer una demo de cómo funciona. 




