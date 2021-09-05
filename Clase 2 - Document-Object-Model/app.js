// Ejercicios de DOM

//  0) En base al siguiente HTML, mostrar por consola el texto de los siguientes elementos:
// 	a) El primer span



const llamarSpan = () => console.log(document.querySelector('#uno').innerHTML)
//llamarSpan();




// 	b) El primer span con clase “guayerd”



const llamarClase = () => console.log(document.querySelector('.guayerd').innerHTML)
//llamarClase ();


// 	c) El span con id “hola”

const llamarId = () => console.log(document.querySelector('#hola').innerHTML)
//llamarId ();


// 	d) Todos los span

const llamarAllSpan = () => {
    document.querySelectorAll('span').forEach(elemento => {console.log(elemento.innerText)});
  
}

//llamarAllSpan ();


// 	e) Todos los elementos  con clase “guayerd”

const llamarAllClasesGuayerd = () => {
    document.querySelectorAll('.guayerd').forEach(elemento => {console.log(elemento.innerText)});
}

//llamarAllClasesGuayerd();


// 	f) Todos los span con clase “guayerd”.

const llamarAllSpanGuayerd = () => {
    document.querySelectorAll('span.guayerd').forEach(elemento => {console.log(elemento.innerText)});
}
//llamarAllSpanGuayerd();


// 	f) Todos los span y párrafos.



const llamarAllSpanAndAllParrafos = () => {
    document.querySelectorAll('span,p').forEach(elemento => {console.log(elemento.innerText)});
}

//llamarAllSpanAndAllParrafos();




// Agregar en el archivo HTML con 1 titulo H1 sin clases ni ids, con 5 párrafos, de los cuales los dos primeros no tendrán ninguna clase ni id, los 2 siguientes tendrán la clase “rojo” , y el último id “Azul”.

// a) Al ID azul cambiarle el texto por “Azul”.

const Azul = () => document.querySelector("#azul").innerText = "Azul"
//Azul ();


// b) Al primer párrafo cambiarle el texto por “Verde”.
const verde = () => document.querySelector("p").innerText = "Verde"
//verde();


// b) A los párrafos de la clase rojo cambiarles el texto por “Rojo”.
const Rojo = () => {
    document.querySelectorAll(".rojo").forEach(elemento => {
    elemento.innerText = "Rojo"})
};

//Rojo();

// c) A todos los párrafos agregarles un “!” al final del texto. 


const AgregarSigno = () => {
    document.querySelectorAll("p").forEach(elemento => {
    elemento.innerText = elemento.innerText +"!"})
};

//AgregarSigno();
// d) A todos los elementos (párrafos y título) Agregarles un “*” al principio del texto.


const AgregarSignoAll = () => {
    document.querySelectorAll("p,h1").forEach(elemento => {
    elemento.innerText = "*"+elemento.innerText })
};

//AgregarSignoAll();



// Crear una función flecha que en base a 2 datos de temperatura, indique la temperatura media (Es decir, el promedio de ambas). Mostrar el resultado con un mensaje en el HTML. Por ejemplo en un párrafo, que indique: “La temperatura media es ….”. 


const promedio = () => {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;    

    let valorFinal = valor1/valor2;
    document.querySelector("h1").innerText = `La temperatura promedio es :${valorFinal}`;
    
}



// Crear una función flecha que solicite al usuario que elija entre las estaciones del año (Invierno, verano, primavera, otoño) y mostrar una imagen que haga referencia a la estación elegida.

const upperCase = (word) =>{
    
    let letter = word.charAt(0);
    let finalWord = word.slice(1);
    finalWord = letter.toLocaleUpperCase() + finalWord;
    return finalWord;
}

const season = () =>{
    let value = document.querySelector("input").value;  
    value = upperCase(value);
    document.querySelector("img").src = `images/${value}.jpg`; 
    
}





// Crear una función flecha que calcule la edad del usuario. Luego mostrar en el html un mensaje personalizado indicando si es mayor o menor de edad.


const age = () => {

    let value = document.getElementById("Agechoice").value; 
    if (value >= 18) {
        document.querySelector("h1").innerText = "Es mayor de edad"; 
    }else{
        document.querySelector("h1").innerText = "Es menor de edad"; 
    }
    
}


// Crear una función flecha que solicite al usuario su nombre y su animal favorito (Dar 3 o 4 opciones). Mostrar por HTML un mensaje personalizado saludando a la persona y mostrando una foto de su animal favorito. 

const favouriteAnimal = () =>{
    let value = document.querySelector("input").value;  

    value = upperCase(value);
 
    document.querySelector("img").src = `images/${value}.jpg`; 
    
}



// Crear en el HTML un span con un angulo del 0 al 360. Luego calcular su opuesto y mostrarlo en otro span. (Para calcular el opuesto se hace 360 - el ángulo. Por ejemplo: El opuesto de 90 es 270.) El mensaje debería ser:
// Ángulo: 90
// Opuesto: 270

const calcular = () => {
   let value1 = 180;
   let value = 360 - value1;
   document.querySelector("#secondSpand").innerText = `Opuesto${value}°`
}

// Generación de mails empresariales. Le solicitamos al usuario su nombre, su apellido, su empresa y si su empresa es Argentina o no. Luego le mostraremos en el HTML un mensaje con su usuario nuevo:
// nombre.apellido@empresa.com(.ar si es argentina).

const mails = () => {
    let name = prompt('Ingrese su nombre');
    let surname = prompt('Ingrese su apellido');
    let bussines = prompt('Ingrese el nombre de su empresa')
   

    if (confirm('¿Es Argentina su empresa?')) {
        document.querySelector("#email").innerText = `Su email es:${name}.${surname}@${bussines}.com.ar`;
    }else{
        document.querySelector("#email").innerText = `Su email es:${name}.${surname}@${bussines}.com`;
    }
}

//mails();


// En un restaurante tienen menú del día según el día de la semana.


// a)  Crearemos una función flecha que reciba qué día de la semana es (Lunes a viernes) y mostraremos por pantalla el menú con el nombre del plato y una imagen del mismo.

// Lunes: Milanesas con puré 
// Martes: Fideos con salsa
// Miércoles: Pizza
// Jueves: Hamburguesas con papas fritas
// Viernes: Pastel de papa

// b) Ahora además nos piden que coloquemos debajo del menú del día los precios a los platos que se piden a la carta. Realizarlo desde el javascript.

// Milanesas con puré ($300)
// Fideos con salsa ($250)
// Pizza ($400)
// Hamburguesas con papas fritas ($430)
// Pastel de papa  ($280)

const mealByDay = () => {

    const day = document.querySelector('input').value;
    document.write(`
    <h3>${day}</h3>
    <img src="images/${day}.jpg">
    <ul>
        <li>Milanesas con puré ($300)</li>
        <li>Fideos con salsa ($250)</li>
        <li>Pizza ($400)</li>
        <li>Hamburguesas con papas fritas ($430)</li>
        <li>Pastel de papa ($280)</li>
    </ul>
`)

}
