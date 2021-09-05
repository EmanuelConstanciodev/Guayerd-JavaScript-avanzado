// Ejercicios de asincronismo y solicitudes HTTP


// Elegir alguna de las API que más les guste y traer información mediante una request HTTP.
// Mostrar en el HTML la información que trajimos de la web.
// Agregar un evento que dispare el llamado HTTP.





//api
const traerDatos = (i) => {
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', `https://pokeapi.co/api/v2/pokemon/${i}`, true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let pokemon = JSON.parse(this.responseText);
      crearPokemon(pokemon)
      console.log(pokemon)

    }
  }

}


//Itera por todos los pokemones en la api- ver de mejorar
const bucle = () => {

  let timerInterval
  Swal.fire({
    title: 'Espera!',
    html: 'Extrayendo todos los pokemones, <b></b> esto tomará un rato...',
    timer: 3500,
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

    if (result.dismiss === Swal.DismissReason.timer) {

    }
  })


  for (let i = 1; i < 898; i++) {

    traerDatos(i)
  }
}



//Carga el valor del usuario a la función 
const porNumero = () => {

  traerDatos(document.querySelector('input').value);
  document.querySelector('input').value = ''

}


const crearPokemon = pokemon => {


  const lista = document.getElementById('lista')

  const card = document.createElement("div");
  card.classList.add("card");

  //Creamos el fragmento donde vamos a acoplar la card
  const fragment = document.createDocumentFragment()

  const texto = document.createElement('h5');
  texto.innerText = pokemon.name;
  texto.classList.add("card-tittle");

  const img = document.createElement('img');
  img.src = pokemon.sprites.front_default
  img.classList.add("card-image");


  //Unimos todos los nodos
  card.appendChild(texto)
  card.appendChild(img)
  fragment.appendChild(card)

  lista.appendChild(fragment)


  clases()


}



//Agrega clases de Materialize para posicionamiento
const clases = () => {
  let guardar = document.querySelectorAll('.card');

  guardar.forEach(elemento => {
    elemento.classList.add('col', 'm4');
  });
}






// https://pokeapi.co/
// https://swapi.dev/