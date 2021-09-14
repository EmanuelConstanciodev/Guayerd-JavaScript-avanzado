// Ejercicios maratón 2!

//1) Eureka! Nuestra web tendrá una lamparita (imagen o hecha con css), que al oprimir una tecla se encienda y al soltarla se apague(cambia de estilo o imagen). Si la quiero prender y ya está prendida, no hace nada. Lo mismo con el apagado. 

// const lamp = () => {


 
//         document.querySelector('div').classList.remove('red');
//         document.querySelector('div').classList.add('blue');
   

// }


// const changingColor = () => {

//     document.querySelector('div').classList.remove('blue');
//     document.querySelector('div').classList.add('red');
// } 



//2) Crear un elemento (puede ser cualquier cosa, un cuadrado, círculo, imagen, etc) que cuente la cantidad de veces que se le pasó el mouse por encima. 
// Mostrar en un mensaje la cantidad de veces sumadas e ir actualizandolo cada vez que agregue 1.
// Ejemplo: Que diga “Usted pasó el mouse 2 veces”.


// localStorage.setItem('value','0');

// const cont = () => {

//     let i = parseInt(localStorage.getItem('value'));
//     i = 1 +i;
//     document.querySelector('p').innerText = `usted pasó el mouse ${i} veces`;
//     localStorage.setItem('value', i);
// }

//3) Vamos a crear una app para que cada vez que aprete un botón, me muestre un usuario aleatorio utilizando la siguiente API: 
// Mostrar 3 o 4 datos del usuario.

const llamar = ()  =>{
    const api = fetch('https://randomuser.me/api');

api
    .then( res => res.json())
    .then( data => document.querySelector('p').innerHTML = data.results[0].name.first) 
    .catch( error => console.log(error))

    
}












//    document.querySelector('#name').innerHTML = data.name
//4) Crear un juego de piedra papel o tijera! Tenemos la tres opciones y al elegir, saldrá aleatoriamente lo que eligió la computadora. Mostrar el resultado.
// Ejemeplo: Si elegí tijera, y aleatoriamente la computadora sacó piedra, entonces mostrar que he perdido. 


const toPlay = () => {


    const edad = new Promise ((resolve,reject) =>  {

        let value = document.querySelector('#game').value;

        console.log(value)
        let botPlayer = Math.trunc(Math.random() * (4 - 1) + 1);
        botPlayer = getValue(botPlayer);
        
        console.log(botPlayer);
        
        mind(value,botPlayer)

        // switch (value) {
        //     case value === botPlayer:
        //         console.log('Empate')
        //         break;
        //     case value === botPlayer:
        //         console.log('Empate')
        //         break;
        //     default:
        //         break;
        // }






        

    })
    .then( (message) => document.querySelector('#name').innerHTML = message)
    .catch( (message) => document.querySelector('#name').innerHTML = message)


}

const getValue = value => {
    if (value === 1) {
        return 'piedra';
    }else if (value === 2) {
        return 'tijera';
    }
    else if (value === 3) {
        return 'papel';
    }
}



const mind = (value,botPlayer) => {

    switch (value,botPlayer) {

        case value === botPlayer:
            console.log('empate')
            break;
    
            
        case value === 'tijera' && botPlayer === 'piedra':
            console.log('ganó la máquina')
            break;
            
        case value === 'papel' && botPlayer === 'tijera':
            console.log('ganó la máquina')
            break;

            
        case value === 'pieda' && botPlayer === 'papel':
            console.log('ganó la máquina')
            break;

        default:
            console.log('Ganaste')
            break;
    }



}




// //5) Crear un cronómetro. Puede iniciar apretando un botón o con el evento que prefieran y empezar a contar segundos y minutos. Arranca en 0 y va subiendo infinitamente.

// const cronometer = () => {

//     let seconds = 0;
//     let minuts = 0;
//     let hours = 0;
    
//     const mensaje = new Promise((resolve,reject) => 

//         setTimeout(resolve,1000)

//     )
//     .then( () => console.log("Primer intento completado.."))


//     const mensaje2 = new Promise((resolve,reject) => 

//         setTimeout(resolve,2000)

//     )
//     .then( () => console.log("Segundo intento completado.."))


//     const mensaje3 = new Promise((resolve,reject) => 

//         setTimeout(resolve,4000)

//     )
//     .then( () => console.log("Tarea resuelta!"))







// }