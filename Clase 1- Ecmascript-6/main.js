// Ejercicios ECMAScript 6

//1. Crear una función flecha que reciba un número y devuelva el doble del mismo.


// let doble = numero => numero*2;
// alert(doble(4));


//2. Crear una función flecha que reciba dos números y muestre la suma de ellos.

// let suma = (num1,num2) =>alert(num1+num2);
// suma(2,3);


//3. Crear una función flecha que valide si un número es mayor a otro. Luego mostrar el resultado por consola.


// let validarMayor = (num1,num2) =>{
//     if (num1>num2) {
//         alert(`${num1} es mayor que ${num2}`)
//     }else if (num1<num2) {
//         alert(`${num2} es mayor que ${num1}`)
//     }else{
//         alert(`Son iguales`);
//     }
// }

// validarMayor(0,20);



// //4. Mostrar por pantalla uno por uno reccoriéndolo, el siguiente array:
// let frutas = ["sandía","manzana","damasco","pelón","frambuesa","plátano"];

// let mostrarFrutas = frutas.forEach(fruta => console.log(fruta));


//5. Mostrar por pantalla las raíces cuadradas de los números del siguiente array:
// let numeros = [16,29,120,64,81];

// let mostrarCuadrada = numeros.forEach(numero => console.log(Math.sqrt(numero)));


//6. Solicitar al usuario su nombre y su signo del zodíaco y devolver un mensaje que devuelva esos mismos datos. Ejemplo: “Su nombre es Fermin y su signo es Escorpio”.


// let saludo = () =>{

//     let nombre = prompt(`Ingrese su nombre`);
//     nombre = mayuscula(nombre);
//     let signo = prompt(`Ingrese su signo del zodiaco`);
//     signo = mayuscula(signo);
//     alert(`Su nombre en ${nombre} y su signo es ${signo}`);
// }

// let mayuscula = (palabra) =>{

//     let letra = palabra.charAt(0);
//     let textoFinal = palabra.slice(1);
//     textoFinal = letra.toLocaleUpperCase() + textoFinal
//     return textoFinal;
// }

//saludo();


//7. Mostrar por pantalla los números mayores a 100 del siguiente array.
//  let numeros = [160,23,120,60,1,-10,8,9483]

//  numeros.forEach(function(numero) {
//    console.log(numero);
//    if (numero > 100) {
//      alert(numero);
//    }
//  });


//8. Generar en base a un array, un nuevo array que tenga todos sus números consecutivos, y otro con sus números precedentes. (Ejemplo: Si el número es 8 : En el array de consecutivos irá 9 , y en el array de precedentes irá 7). Al final mostrar por pantalla los tres array formados.
// let numeros = [15, 28, 32, 40, 11, -3, 0, 100];

// const precedentes = numeros.map(function(x) {
//     return x - 1;
//  });
 
// const consecutivos = numeros.map(function(x) {
//    return x + 1;
// });

// console.log(consecutivos);
// console.log(precedentes);



//9. Crear una función flecha que reciba un parámetro que indique el momento del día: “Mañana, tarde, noche” y en base a eso de un saludo personalizado. Ejemplo: “Buenos días, buenas tardes, buenas noches”.


// let dia = prompt(`ingresar momento del día`);

// let momentoDia = momento => {


//     if (momento === 'día' || momento === 'dia') {

//         alert(`Buenos días`);
        
//     }else if (momento === 'tardes') {
//         alert(`Buenas tardes`);

//     }else if (momento === 'noches') {
        
//         alert('Buenas noches');  
//     }

// };


// momentoDia(dia);


//10. Mostrar del siguiente array los nombres que comiencen con “M”.
//  let personas = ["Mario","Santino","Clotilde","Margarita","Sebastian","Melchor","Macarena","Flavio"]


// personas.forEach(personaConM);

// function personaConM(item,index,personas){
   
//     let primeraLetra = item[0];
//     if (primeraLetra === 'M') {
//         console.log(item);
//     }
// }


//11. Transformar las siguientes funciones a ArrowFunctions y aplicar TemplateStrings cuando corresponda:

// a) function despedir (nombre){
// console.log("Adios" + nombre) }

// let despedir = nombre => console.log(`Adios ${nombre}`)
// despedir('Emanuel');


// b) function cobrar (monto,pago){
// return monto - pago;}
// console.log("Su vuelto es: " cobrar(monto,pago))


// let cobrar = (monto,pago) => monto - pago;
// console.log(`Su vuelto es: ${cobrar(200,100)}`);


// c) function saludar () {
// console.log("Hola")}


// let saludar = () => console.log(`Hola`);

// saludar();






