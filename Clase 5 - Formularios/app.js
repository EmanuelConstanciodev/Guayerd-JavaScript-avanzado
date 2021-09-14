// Ejercicios de formularios

// 1)
// a) Crear un formulario con los siguientes inputs. (ver tabla)
// b) Generar desde javascript el código correspondiente para validar lo indicado en la cuarta columna.
// Las validaciones deben surgir en base a alguno de los siguientes eventos:
// * Cuando el usuario suelta la tecla al escribir (keyup).
// * Cuando el usuario saca el foco del input (blur).
// c) Se debe dar un formato condicional en base a si es correcto o no el contenido. 
// d) Al final, al enviar el formulario, se debe evaluar que todo cumpla con las validaciones. De no ser así, le mostraremos al usuario un mensaje de error y luego, posicionaremos el cursor en el primer elemento que tenga error para que el usuario pueda corregirlo. (Por ejemplo: las contraseñas no coinciden, posicionaremos el cursor en la primera contraseña).
// e) En caso de que se cumplan, quedarse dentro de la página, mostrar un mensaje al usuario indicando que se envió el formulario y resetear los campos del mismo.







const nameValidator = (value) => {
   
    let name = document.querySelector('#name').value;

    let regEx = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

    if (regEx.test(name)) {
       
        console.log(' nombre is correct')
        document.getElementById('name').classList.remove('wrong');
        //agregar clase de color green al borde
        if (value === true) {
            return [true,name];
        }
        

    }else{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Debe contener solo letras'
          })
        console.log('Nombre incorrecto')
      //agregar clase de color red al borde
        document.getElementById('name').classList.add('wrong');
        
        
        if (value ===  true) {
            return [false,'error'];
        }
        
    }

}


const emailValidator = (value) => {


    let email =  document.querySelector('#email').value;
    //console.log(email)

    let regEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (regEx.test(email)) {
       
        console.log('email is correct')
        document.getElementById('email').classList.remove('wrong');
        //agregar clase de color green al borde

        if (value ===  true) {
            return [true,email]
        }
    }else{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Por favor ingrese un email válido'
          })
        console.log('email incorrecto')
        //agregar clase de color red al borde
        document.getElementById('email').classList.add('wrong');
        if (value ===  true) {
            return [false,'error']    
        }
        
    }

}

const numberPassword = () =>{
   

    let password = document.querySelector('#password').value;

    let values = [1,2,3,4,5,6,7,8,9,0];
    password.forEach(element => {
        element.includes(values)
    });
   if (password.includes(values)) {
       console.log('object')
       document.querySelector('#div-password').classList.add('green')
   }else{
       console.log('dflskdlfkldñkfñsl')
       document.querySelector('#div-password').classList.add('red')
   }
 

}



const rePassword = () =>{
   

    let password = document.querySelector('#div-password').value;
    let password2 = document.querySelector('#div-re-password').value;


   if (password === password2) {
       console.log('son iguales')
       document.querySelector('#div-re-password').classList.add('green')
   }else{
       console.log('no son iguales')
       document.querySelector('#div-re-password').classList.add('red')
   }
 

}


const phoneNumber = () =>{
   

    let number = document.querySelector('#phone-number').value;
 

    let values = /^[1-4]+$/;

   if (number.match(values)) {
       console.log('son iguales')
       document.querySelector('#div-phone-number').classList.add('green')
   }else{
       console.log('no son iguales')
       document.querySelector('#div-phone-number').classList.add('red')
   }
 

}



const noRobot = () => {

    let value = document.querySelector('#captchaGet').value;
    
    let value2 = document.querySelector('#captcha').value;


    
   if (value === value2) {
    console.log('son iguales')
    document.querySelector('#div-captchaGet').classList.add('green')
    }else{
        console.log('no son iguales')
        document.querySelector('#div-captchaGet').classList.add('red')
    }






}

const checking = () => {




}