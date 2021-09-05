/* // Seleccionar un elemento por su ID
console.log(document.querySelector("#chau").innerText)



// Seleccionar el primer elemento de su tipo
console.log(document.querySelector("p").innerText)
// Seleccionar el primer elemento de su clase
console.log(document.querySelector(".p").innerText)
// Seleccionar todos los elementos de su tipo
console.log(document.querySelectorAll("p").innerText) // Esto es un arreglo
// Seleccionar todos los elementos de su clase
console.log(document.querySelectorAll(".p").innerText)
// Seleccionar varios tipos de elementos
console.log(document.querySelectorAll("p,span").innerText)
// Seleccionar el primer elemento de un grupo
console.log(document.querySelector(".p").innerText)
// Seleccionar todos los elementos de una clase y tipo
console.log(document.querySelectorAll("p.hola").innerText)



document.querySelectorAll(".hola").forEach(e => console.log( e.innerHTML)) // Recorrer el arreglo 

console.log(document.querySelectorAll("p,span").forEach(e =>e.innerHTML)) //Nos devuelve undefined

console.log(document.querySelector("#chau").innerHTML)
 */
/* 

document.querySelector(".hola").innerText = "<a href=''>Hola</a>" // Cambia el texto dentro de una etiqueta
document.querySelector(".chau").innerHTML = "<a href=''>Hola</a>" // Cambia la naturaleza del elemento
 */

// let mascota = document.querySelector("#mascota").innerHTML

// const foto = m => m ==="gatito" ? document.querySelector("img").src = "gatito.jpg" : document.querySelector("img").src = "perrito.jpg"

// document.querySelector("#texto").innerText = `Su mascota preferida es: ${mascota}`


// foto(mascota)






