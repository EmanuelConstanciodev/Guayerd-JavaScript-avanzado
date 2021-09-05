// Ejercicios de clases



// 1.Crear un párrafo. Luego desde el javascript hacer que se vea rojo.



const paragraph = () => document.querySelector("#uno").classList.add("Azul");
//paragraph();

// 2.Crear tres párrafos. Luego desde el javascript hacer que tengan un fondo verde.

// const greenParagraph = () => document.querySelectorAll("p")
//     document.querySelectorAll("p").forEach(e = e.classList.add("Verde")) 
//     document.querySelector("p")
// .forEach(element => {
        
//     });
//greenParagraph();

// 3.Crear 4 párrafos, dos con clase “blanco”. A todos agregarle un fondo celeste, y a los clase blanco además hacer que el texto se vea blanco.
// En 

const makingParagraph = () =>{
    for (let i = 0; i < 4; i++) {
        document.write(`<p class="background">Hola</p>`)
        
    }
 
        document.querySelector('p').classList.add('Blanco');
        document.querySelector('p').classList.add('Blanco');
}


//makingParagraph();

// 4.base al siguiente listado de notas, mostrar en verde los mayores a 7, amarillo los que están entre 4 y 6 y en rojo del tres para abajo.
 notas = [9,2,7,6,6,4,5,10,3,9.5]


    let verde  = notas.map(function(num) {
  if (num >=7) {
      return num
  }
});

console.log(verde)





// 5..Tenemos el siguiente HTML. Vamos a preguntarle al usuario qué color quiere cambiar, y luego lo vamos a preguntar por cuál. (Dos input). En base a eso, nuestro javascript modificará el documento. Ejemplo: Si pide cambiar el verde por azul, los textos que antes se veían en verde ahora deberán verse en azul.
// (Nota: Se debe agregar el css correspondiente).
 
// <p class="rojo">Lorem ipsum dolor sit amet.</p>
// <p class="verde"> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
//  <p class="azul"> Lorem ipsum dolor sit amet consecteturadipisicing elit. Suscipit!</p>
//  <p class="verde"> Lorem, ipsum.</p>
//  <p class="azul"> Lorem, ipsum dolor.</p>
//  <p class="verde"> Lorem ipsum dolor sit.</p>
// 6.Pedir al usuario: Una palabra, un color y una cantidad. Generar la cantidad de párrafos con esa palabra y ese color que se requiera.


// 7.
// a) Dentro del siguiente HTML, a todos los párrafos que NO tengan la clase “nuevo”, agregarle la clase “antiguo”.
// b) A todos los que tienen clase “rojo”, agregarles la clase “transparencia” 
// c) A todos los que tengan clase “saludo” quitarla, y a los que no la tengan, agregarla. 
// d) Remover de los primeros 4 párrafos la clase “ayuda”
// e) Crear desde el CSS estilos personalizados para cada clase.
// 8.Dado el siguiente HTML, poner en color azul los textos que comiencen con la letra “V”.
// <span>Viento</span>
// <span>Balanza</span>
// <span>Zapato</span>
// <span>Vertical</span>
// <span>Vuelta</span>
// <span>Trampa</span>
