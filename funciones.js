function saludarindex(){
    alert("Bienvenido");
}

function saludartemas(){
    alert ("Leemos el teorico ");
}

function saludarejercicios()
{
    alert("Vamos a hacer ejercicios");
}

function saludarcontacto (){
    alert("¿Tenes alguna duda?");
}

function saludarquienes() {
    alert("Conocenos!");
}

function resolverprimergrado(){
    document.ejercicios.primerrdo.value=( Number(document.ejercicios.resultado.value)- Number(document.ejercicios.Nro.value))/Number(document.ejercicios.X.value);

}

function resolversegundogrado(){
    document.ejercicios.segundordoa.value= (-Number(document.ejercicios.Xdos.value)+sqrt((Number(document.ejercicios.Xdos.value)*Number(document.ejercicios.Xdos.value))-(4*Number(document.ejercicios.Xcuadrado.value)*Number(document.ejercicios.Nrodos.value))))/(2*Number(document.ejercicios.Xcuadrado.value));
    document.ejercicios.segundordob.value=(-Number(document.ejercicios.Xdos.value)-sqrt((Number(document.ejercicios.Xdos.value)*Number(document.ejercicios.Xdos.value))-(4*Number(document.ejercicios.Xcuadrado.value)*Number(document.ejercicios.Nrodos.value))))/(2*Number(document.ejercicios.Xcuadrado.value));
}
function func(){
    let divMostrar = document.getElementById("mostrarCalculos");
    document.getElementById("mostrarCalculos").innerHTML += "Paso uno: " Number(document.ejercicios.X.value)x=Number(document.ejercicios.resultado.value)-Number(document.ejercicios.Nro.value);
    divMostrar.innerHTML+="SALVEMOS LAS DOS VIDES";
}