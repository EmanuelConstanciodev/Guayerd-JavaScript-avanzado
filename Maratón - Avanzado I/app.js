// Maratón 1



// triple ed los que son pares


// 1)La NASA nos pidió un programa que calcule la edad de las personas en sus planetas favoritos. Para eso necesitamos una web (sencilla!!) donde solicitaremos mediante un input y un select al usuario, su edad en la tierra y su planeta favorito. Luego, mostrarle en un tercer input o en un párrafo en el html, su edad correspondiente al planeta que eligió.

// Días que tardan en dar la vuelta al sol:
// Mercurio: 87.97
// Venus: 224.7
// Tierra: 365.26 (Por esto cada 4 años hay un año bisiesto)
// Marte: 686.68
// Jupiter: 4,331.98
// Saturno: 10,760.55
// Urano: 30,685.49
// Neptuno: 60,191.19

// Por ejemplo si tu edad son 23 años, en Marte tu edad será: 12.23 años. Puede mostrarse redondeado a 12. (Por eso todos quieren ir a Marte, para ser más jóvenes!!!)



const cargarEdad = () => {
    let edad = document.getElementById("age").value;
    let edadMundo = document.getElementById("select").value;        //Capturando valores de html
    
    let edadFinal = edad * 365;
    edadFinal = edadFinal / edadMundo;                              //Calulando
    document.querySelector("#resultado").innerText = `Resultado: ${edadFinal}`  //Imprimiendo en html
}





// 2) Un vivero nos pide armar un sistema que ayude a las personas a decidir qué tipo de planta colocar en su jardín según la flor que quieran. Para eso, les daremos diferentes opciones (mediante un select, o mediante botones), para que puedan elegir varios tipos de flor. Al elegir una flor, se debe mostrar su imagen. Cuando se le pase el mouse por encima a esa imagen, debe mostrar como se ve el árbol de dicha flor. 



const cargarFlor = () => {
    let value = document.getElementById("select").value;
    
    document.querySelector("img").src = `${value}.jpg`;
    return value;
}


const mostrarArbol = () =>{

     let flor = cargarFlor();
     document.querySelector("img").src = `arbol${flor}.jpg`;
}


// 3) En un juego de mesa, necesitan implementar un sistema de puntos que sea justo para decidir quién arranca. Para esto, cada jugador tirará 4 veces el dado (del 1 al 6). Luego, se hará la suma de los 4 dados. Quien haya sacado más puntuación será quien inicie el juego. Nota: A los jugadores se los identificado con “jugador 1, 2, etc…” Según el órden en el cuál tiraron. 

let valores = [];
const selectorJugador = () =>{

    let puntos = Math.random() * (6 - 1) + 1;
    puntos = Math.trunc(puntos);
    valores.push(puntos);

    let jugardor1 = [];
    let jugardor2 = [];

    let tiradas = valores.length;
    if (tiradas === 8) {

            let i;
        for ( i = 0; i < tiradas; i++) {
           
            if ( i%2 === 0) {
                console.log(valores[i]);
                jugardor1.push(valores[i]);

            }else{
                console.log(valores[i]);
                jugardor2.push(valores[i]);
            }

        }

        if (i === 8) {
            mostrar(jugardor1,jugardor2);
        }

    }

}



const mostrar = (p1,p2) => {

    let jugardor1 = 0;
    p1.forEach(element => {
        jugardor1 = jugardor1 + element;
    });

    let jugardor2 = 0;
    p2.forEach(element => {
        jugardor2 = jugardor2 + element;
    });

    alert(jugardor1 + ' Vs ' + jugardor2);

 

    jugardor1>jugardor2 ? alert('Jugador 1 ganó') : jugardor1<jugardor2 ? alert('Jugador 2 ganó') : alert('Empate');
}








// 4) Una escuela de tango necesita organizar las inscripciones de sus alumnos.




// a) Mostrar la siguiente infomación de alumnos en una web.
// b) Mostrar en verde quienes pagaron y en rojo quienes no pagaron.
// Alumnos:



const alumnos =[
 
    {
           "nombre": "Juana",
           "pago": true
       },
       {
           "nombre": "Santiago",
           "pago": true
       },
       {
           "nombre": "Esteban",
           "pago": false
       },
       {
           "nombre": "Lautaro",
           "pago": true
       },
       {
           "nombre": "Marian",
           "pago": false
       }
   ]




   const mostrarDom = (alumnos, pago)  => {


    const lista = document.getElementById('lista')
    const fragment = document.createDocumentFragment()
    let texto;
   
    if (pago == true) {
       let i = 1;
    alumnos.forEach(alumno => {
        i = i + 1;
        console.log(i)
        console.log(alumno.nombre)
        texto = document.createElement('h5');
        texto.innerText = alumno.nombre;
        texto.classList.add("alumno-verde");
       
        fragment.appendChild(texto)
    });


    
 }  else if (pago == false) {
   

    alumnos.forEach(alumno => {
        console.log(alumno.nombre)
        texto = document.createElement('h5');
        texto.innerText = alumno.nombre;
        texto.classList.add("alumno-rojo");
       
        fragment.appendChild(texto)
    });

 } 
 



  //Unimos todos los nodos
  


  lista.appendChild(fragment)
}


  let rojo = [];

  let verde =  alumnos.filter(function(alumno){
 
    if (alumno.pago == true) {
        return alumno;
     }else{
        rojo.push(alumno);
    }

  });

//   console.log(verde);
  
//   console.log(rojo);

//   mostrarDom(verde, true)
//   mostrarDom(rojo, false)




// 5) La AFA está realizando un concurso para ganarte una pelota firmada por Messi.
// Se le solicita a las personas que completen:
// Nombre: mínimo 3 y máximo 16 dígitos.
// Equipo favorito: No debe contener números.
// Edad: Debe ser mayor de edad para participar.
// DNI: Debe tener entre 7 y 8 caracteres.
// Mail: Debe ser un mail válido. Solo se aceptan participantes con mails que terminen en “.com” o “.ar” 
// Mensaje para Messi: Debe contener al menos 30 caracteres.


const concurso = () =>{



}







// 6)Papá Noel recibió una cantidad enorme de cartitas este año, por lo que no tuvo tiempo de decidir quienes habían sido buenos o malos, por lo que decidió armar un sistema de clasificación automático. Si el niño pidió 3 o más de los siguientes objetos, será catalogado como “malo” y se le entregará carbón en navidad. Si pidió 2 o menos, entonces será catalogado como bueno. Los objetos que suman son:
// * Bicicleta, hermano/a/e, playstation, medias, mochila, piano*.
// -Para probar: Generar algún set de pruebas. Pueden usar objetos y/o arreglos. 

 let ema = {

    bicicleta : true,
    hermano : false,
    playstation : true,
    medias : true,
    mochila : false,
    piano : true
 }
 const selectorDeCartas = (ema) => {
    let i = 0;
    for(propiedad in ema) {
        console.log(propiedad)
        console.log(ema[propiedad])
        if (ema[propiedad]  === true) {
            i = i +1;
        }
    }
    if (i >= 3) {
        alert(i)
        Object.defineProperty(ema, 'comportamiento', {value: 'malo'} );
    }else if(i<= 2) {
        Object.defineProperty(ema, 'comportamiento',{value: 'bueno' });
    }
}   


selectorDeCartas(ema)
console.log(ema.comportamiento);

// 7) Organizar asados es una tarea difícil cuando se trata de calcular la cantidad de comida y repartir los costos. Para eso, un grupo de amigos nos solicita que realicemos un programa que nos ayude a dividir la tarea. 
// Se calcula: 

// 500gr de carne por persona. 
// 1 Botella de cerveza por persona. 
// 1 kilo de helado cada 4 personas. 
// En caso de quedar por ejemplo: 1 kilo y medio, redondear siempre para arriba, es decir a dos kilos. 


// El programa debe recibir como dato la cantidad de comensales y debe devolver: Cantidad de carne, cervezas y helado para comprar, costo total y costo por persona. 
// Costos:
// * Carne por kilo: $700
// * Botella de cerveza: $200
// * Kilo de helado: $600
// Por ejemplo: Si son 5 personas serán:
// - 2.5kg de carne, 5 botellas de cerveza y 2 kilos de helado.
// - Precio total: $1750 de carne + $1000 de cervezas, $1200 de helado. Total: $3950. 
// - Precio por persona: $790.

const calculadoraDeCenas = () =>{
    let personas = document.querySelector('#cantidad').value;


    let heladoPersonas = 0.25 * personas;
    heladoPersonas = Math.round(heladoPersonas);
 

    let carne = 700 * personas;
    let cerveza = 200 * personas;
    let helado = 600 * heladoPersonas; 



    document.write(`
      
    <h1>Costos</h1>
    <li>
        <ul>carne: ${0.5*personas}kg  $${carne}</ul>
        <ul>cerveza: ${1*personas}L  $${cerveza}</ul>
        <ul>helado: ${heladoPersonas}kg  $${helado}</ul>
        <ul>Total: $${carne + cerveza + helado}</ul>
        <ul>Total por Persona: $${(carne + cerveza + helado)/personas}</ul>
    </li>
`)

}
//calculadoraDeCenas()


// 8) Una tienda de sombreros nos requiere para su web agregar un carrito de compras que se mantenga cuando la persona entra o sale del sitio. (guiñoguiñolocalstorageguiñoguiño) .
// Para eso le mostraremos al usuario 5 sombreros con su respectivo nombre, foto y precio. Dentro del carro cada uno tendrá una cantidad. Por defecto todos estarán en 0. Cada uno tendrá un botón de sumar y otro de restar. No se podrá tener una cantidad menor a 0 de sombreros. El tope máximo son 3 sombreros por tipo. Cuando llega al tope de sombreros, se debe mostrar toda la info del sombrero con un recuadro rojo.
// En la parte inferior se verá el precio total de los sombreros solicitados.

const carrito = () => {

    
    let sombrero1 = {
        color : 'rojo',
        precio : 300,
        cantidad : 1,
        cantidadSolicitada(){

            let valor = this.cantidad;
            this.cantidad = valor + 1;
            alert(this.cantidad)


        }
        
    }
//sombrero1.cantidadSolicitada()
// console.log(sombrero1.cantidad)
}

// 9) De Guayerd Seguros nos piden que hagamos un cotizador de seguros de auto. Para eso debemos informar el modelo de auto y el año de fabricación. Cada modelo tendrá un costo fijo y bajará 2% por año de antigüedad. 
//Tendrá como base un costo de $900 + el valor por cada modelo. (Poner 3 modelos como opción!).

   
   const cotizador = () => {
    let fabricacion = document.getElementById("fabricacion").value
    let auto = document.getElementById("selectAuto").value;
    
    if (auto === 'fiat') {
        let autoValor = 200;

        let antiguedad = 2021 - fabricacion ;
        console.log(antiguedad)

        let valor;
        let valorRestar;
        for (let i = 0; i < antiguedad ; i++) {

            valorRestar = (autoValor * 0.02)
             valor = autoValor - valorRestar ;
            console.log(valor)


        }
    }else if (auto === 'ford') {
        console.log
    }
    else if(auto === 'dodge'){

    }
   }











