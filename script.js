//alert("Funciono!!");

/*const h1 = document.querySelector("h1");
const p = document.querySelectorAll('p'); // con querySelectorAll se seleccionan todas las etuiquitas que complan la condicion del argumento, y devuelve una lista con todas ellas.
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');



console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});


h1.innerHTML = "Aprendiendo manipulación del DOM";
console.log(h1.getAttribute('class'));// para mostrar los atributos de los elementos html

//h1.setAttribute('class','rojo');// para modificar los atributos de los elementos html

h1.classList.add('rojo');//agrega un identificador mas a la calse del ala etiqueta html

h1.classList.remove('verde');// elimina un identificadoe a la clase del la etiqueta html

console.log(document.createElement('img'));

const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/originals/3b/14/69/3b1469f34127a4f73fd00b8e1fc36c43.jpg');
console.log(img);


pid.innerHTML = ""; //con esto se borra el contenido de un elemento 
pid.append(img);*/


const numero1 = document.querySelector('.numero1');
const numero2 = document.querySelector('.numero2');
const resultado = document.querySelector('.resultado1');
const boton = document.querySelector('button');
const form = document.querySelector('formulario');


formulario.addEventListener('submit', btnOnClick); //agrega un escuchador de evento, cada vez que pase lo que pase se ejecuta el codigo javascript que queremos que se ejecute. la funcion no se pasa con ().

function btnOnClick(event){
    console.log(event);
    event.preventDefault();// con esta linea se previene que se ejecute el evento summit.
    const suma=  Number(numero1.value ) + Number(numero2.value);
    resultado.innerHTML = "El resultado es: " + suma; 
}
