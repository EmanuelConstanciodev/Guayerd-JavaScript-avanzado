


//DEFAULT PARAMETERS 

function activity (name = 'Walter White', activity = 'Enseñar quimica'){
    console.log(`La personna ${name}, esta realizando la actividad ${activity}`);
}

activity('Matias',' haciendo una pizza');
activity();        // Pay attention, in this case the funtion will work using default parameters.


//Object Literal

const person = {

    name : 'Emanuel',
    age : 20,
    surname : 'Constancio'
}
//This is the first way of to make an object on JavaScript, It is a manual way.
const person1 = {

    name : 'Julián',
    age : 22,
    surname : 'Ága'
}

console.log(person.age);
console.log(person1.name);



//Object Constructor
function Task(name, urgency){
    this.name = name;
    this.urgency = urgency;
}

//To make a new task:
const task = new Task('Aprender JavaScript', 'Urgente');
console.log(task);
console.log(task.name);
console.log(task.urgency);

//So, We can say to It is a kind of 'function' for making news objets

//https://www.youtube.com/watch?v=DWnZi8G_kZs&t=1550s Objects


//Object Destructuring

const user = {
    id: 42,          //These are the properties of the object, if you make an funtion inside of the object, then it will be called Method
    is_verified: true
};

const {id, is_verified} = user;   //This is a new way of to call the properties of the object.

console.log(id); // 42
console.log(is_verified); // true


const banda = 'Metallica',genero = 'Heavy Metal',canciones = ['1','2'];

//Old way
// const metallica = {
//     banda : banda,
//     genero : genero,
//     canciones : canciones
// }



//New way using Object Literal Enhancement
const metallica = {banda, genero, canciones};

console.log(metallica);



// We should search :


// *debugger