// Ejercicios JSON





// a) Crear un objeto JSON con información de un usuario: nombre o apodo, instrumento/superpoder/profesión (a elección de ustedes), edad. 


let persona = {
  nombre: "Emanuel",
  apodo: "Ema",
  instrumento: "guitarra",
  superpoder: "leer_mentes",
  profesion: "programador",
  edad: 20
}

// localStorage.setItem(`first_user_id_`, persona);


const saveUser = (user = false, id = false) => {


 
let getId = localStorage.getItem('id_');

if (user != false) {
  user = JSON.stringify(user); //ver metodo...
  localStorage.setItem(`new_user_id_${id}`, user);


  let showNewUser = localStorage.getItem(`new_user_id_${id}`);
  showNewUser = JSON.parse(showNewUser)
  //console.log(showNewUser)

  
  getId = getId + `,${id}`
  localStorage.setItem('id_', getId);

}
  


  else if (user == false && id == false) {

  
    // console.log(getId)
   
    return getId;
  }else{
    alert('Fatal error,something is wrong')
  }

}


const consultationDatabase = {

    searchNameOnDB(name){
      for (let i = 0; i < 100; i++) {

        let nuevaPersona = localStorage.getItem(`new_user_id_${i}`);
        nuevaPersona = JSON.parse(nuevaPersona)
        if (nuevaPersona != null) {

          let nombre = nuevaPersona.nombre;
          let apodo = nuevaPersona.apodo;
          if ( nombre == name) {
            
         
          console.log(nombre)
          return [nombre,nuevaPersona,apodo]
          }else{
            alert('no existe el usuario');
          }
          //console.log(nuevaPersona.nombre)
          
        }
    }

}
}


// b) Mostrar un mensaje en el HTML con la información del usuario. 


// document.write(`<h2>${obj}</h2>`);

// c) Agregar un botón que da la opción de modificar cualquiera de los tres datos.


const toChange = () => {

  let i;
  for (i = 0; i < 3; i++) {

    document.write(`
        <input type="text" id="id${i}">
        `);
  }

  document.write(`<button onclick="writeOn()">Click me!</button>`);
}


//toChange();

const writeOn = () => {

  const name = document.querySelector("#id0").value;
  const age = document.querySelector("#id1").value;
  const nick = document.querySelector("#id2").value;

  // console.log(name)
  // console.log(age)
  // console.log(nick)

  objPersona.nombre = name;
  objPersona.edad = age;
  objPersona.apodo = nick;

  // console.log(name)
  // console.log(age)
  // console.log(nick)


 
}


// d) Agregar un botón que permita generar un nuevo usuario.

const newUser = () => {



  let i;
  for (i = 0; i < 3; i++) {
    document.write(`
            <input type="text" id="value${i}">
            `);
    //Creamos botón que llama a la función crear nuevo user
  }
  document.write(`<button onclick="makeNewUser()">make new user!</button>`);


}


const makeNewUser = () => {

  const name = document.querySelector("#value0").value;
  const age = document.querySelector("#value1").value;
  const nick = document.querySelector("#value2").value;
  const id = Math.trunc(Math.random() * 100); // creamos un valor entre el 1 y el 100

  document.querySelector("#value0").value= '';
  document.querySelector("#value1").value= '';
  document.querySelector("#value2").value= '';

  

  // console.log(id)
  // console.log(name)
  // console.log(age)
  // console.log(nick)
  //Guardamos valores de newUser

  const newObject = {
    nombre: name,
    edad: age,
    apodo: nick,
    id: id
  }

  saveUser(newObject, id) //Guardamos user en base de datos
  
 
}

// e) Agregar un botón que muestre todos los usuarios.


const showAllUser = (flag) => {


  let arrayDeId = localStorage.getItem('id_');
  //console.log(arrayDeId)


  for (let i = 0; i < 100; i++) {

    let nuevaPersona = localStorage.getItem(`new_user_id_${i}`);





    if (nuevaPersona != null) {

      let showNewUser = localStorage.getItem(`new_user_id_${i}`);
      showNewUser = JSON.parse(showNewUser)
      console.log(showNewUser.id)

      //console.log(nuevaPersona)
      document.getElementById("container").innerHTML += `<div class ="borde" id="${showNewUser.id}"><button onclick=deleteAnUser(${showNewUser.id})>Borrar</button>"<p>${showNewUser.id}</p>
                <object class = "avatar" data="avatar.svg" type="image/svg+xml">
                </object>
              </div>
               
              `
      //Card color
      let card = document.getElementById(`${showNewUser.id}`);      
      card.style.backgroundColor = colorHEX();            

    } else {

    }

  }
  let timerInterval
  Swal.fire({
    title: 'Cargando!',
    html: 'La consulta a la base de datos terminará en <b></b> millisegundos.',
    timer: 20,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })

}

//Gereneración de colores random
const wordMarker = () => {
  let letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let numero = (Math.random() * 15).toFixed(0);
  return letras[numero];
}

const colorHEX = () => {
  let coolor = "";
  for (let i = 0; i < 6; i++) {
    coolor = coolor + wordMarker();
  }
  return "#" + coolor;
}



// Capturar y mostar user del localStorage!!!!!!


// f) Agregar un botón que permita borrar todos los usuarios.


//Borrar un usuario
const deleteAnUser = id => {
  console.log(id)
  let valorBorrar = document.getElementById(`${id}`);
  console.log(valorBorrar)
  valorBorrar.remove();
  localStorage.removeItem(`new_user_id_${id}`)

}


const deleteAllUsers = () => {





  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
        
  let valorBorrar = document.querySelectorAll(`.borde`);
  console.log(valorBorrar)
  //valorBorrar.remove();
    valorBorrar.forEach(elemento => {
        elemento.remove()
    });
    }
  })

  localStorage.clear()


}




// g) Agregar un botón que muestre un usuario por nombre.

const searchName = () => {

  const name = document.querySelector("#buscarNombreInput").value;
  let estadoDelNombre = consultationDatabase.searchNameOnDB(name);    //hace consulta en db
  document.querySelector("#buscarNombreInput").value= '';

  console.log(estadoDelNombre)
  document.getElementById("container1").innerHTML += `<div class ="borde"><button onclick=deleteAnUser(${estadoDelNombre[1].id})>Borrar</button>"<p>${estadoDelNombre[1].id}</p><h2>${estadoDelNombre[0]}</h2>
  <object class = "avatar" data="avatar.svg" type="image/svg+xml">
  </object>
</div>
 
`

  //Card color
  let card = document.getElementById(`${estadoDelNombre[1].id}`);      
  card.style.backgroundColor = colorHEX();            


}

// h) Agregar un botón que elimine un usuario por nombre.
// i) Agregar un botón que permita agregar nuevos datos a un usuario elegido.


// setTimeout(() => {

// let guardarIds = saveUser();
// console.log(guardarIds)

// }, 2000);