// Práctica de promesas

// 1) Crear una promesa que después de 5 segundos, muestre un mensaje.

/EJERCICIO 1/


// const menssaje = new Promise((resolve,reject) =>

//     setTimeout(resolve,3000)

// )
// .then( () => console.log('Buenas tardes, bienvenido!'))



// 2) Crear una promesa que después de 1 segundo muestre un mensaje, y al resolverse, que en 2 segundos muestre otro mensaje y que finalmente a los 4 segundos muestre un ultimo mensaje.

// const menssage1 = new Promise((resolve,reject)=>

//     setTimeout(resolve,1000)


// )
// .then(() => console.log('primer mensaje')); 


// const menssage2 = new Promise((resolve,reject)=>

//     setTimeout(resolve,2000)


// )
// .then(() => console.log('segundo mensaje'));


// const menssage3 = new Promise((resolve,reject)=>

//     setTimeout(resolve,4000)
// ) 
// .then( () => console.log('tercen mensaje'))



// 3) Para reducir costos, en un boliche en lugar de patovas, tienen ahora un robot que lee el DNI. Si la persona es mayor de 18, puede pasar, sino no.

// const robotSistem = () => {

// const validator = new Promise((resolve, reject) =>{ 

// let value = document.querySelector('input').value

// value >= 18 ? resolve('puede pasar') : reject('no puede pasar');


// })

// .then( (message) => console.log(message))
// .catch( (message) => console.log(message))

// }


//4)
// a) Crear una promesa que traiga información de un servidor y la muestre en el HTML. 
// b) Agregarle un manejador de error que muestre el codigo de error. (Sugerencia: Para probar el manejador de errores, pueden simular, por ejemplo poniendo una dirección que no existe para forzar un 404 y ver si funciona).


// const api = fetch(`https://pokeapi.co/api/v2/pokemon/4`);

// api
//     .then( res => res.json())
//     .then( data => console.log(data.name))
//     .catch( error => console.log('error'))

