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

function resolversegundogradoa() {
    document.ejercicios.segundordoa.value= ((-1*Number(document.ejercicios.Xdos.value)) +(Math.sqrt((Math.pow(Number(document.ejercicios.Xdos.value),2) - (4*Number(document.ejercicios.Xcuadrado.value)*Number(document.ejercicios.Nrodos.value))))))/(2*Number(document.ejercicios.Xcuadrado.value));
    document.ejercicios.segundordob.value= ((-1*Number(document.ejercicios.Xdos.value)) -(Math.sqrt((Math.pow(Number(document.ejercicios.Xdos.value),2) - (4*Number(document.ejercicios.Xcuadrado.value)*Number(document.ejercicios.Nrodos.value))))))/(2*Number(document.ejercicios.Xcuadrado.value));

}


function func(){
    let divMostrar = document.getElementById("mostrarCalculos");
    divMostrar.style.display = "flex";
    document.getElementById("mostrarCalculos").innerHTML += "<p>Resolver primer grado:</p><p>Paso uno: " +Number(document.ejercicios.X.value)+"x="+Number(document.ejercicios.resultado.value)+"-"+Number(document.ejercicios.Nro.value)+"</p>";
    divMostrar.innerHTML+="<p>Paso dos: x="+ (Number(document.ejercicios.resultado.value)-Number(document.ejercicios.Nro.value))+" / "+ Number(document.ejercicios.X.value)+"</p>";
    divMostrar.innerHTML+="<p> Resolver segundo Grado:</p><p>Aplicamos Bhaskara:</p>"+" <P>- "+ Number(document.ejercicios.Xdos.value)+"+<p> determinante: raiz cuadrada de "+Number(document.ejercicios.Xdos.value)+" elevado al cuadrado - 4* "+Number(document.ejercicios.Xcuadrado.value)+"*"+Number(document.ejercicios.Nrodos.value)+" dividido 2* "+Number(document.ejercicios.Xcuadrado.value)+"</p>"
    +"<p> IMPORTANTE: RECORDAR QUE DE LA RAIZ SE OBTIENEN UN VALOR POSITIVO Y OTRO NEGATIVO Y ALLI OBTENEMOS LAS DOS RAICES</p>";}