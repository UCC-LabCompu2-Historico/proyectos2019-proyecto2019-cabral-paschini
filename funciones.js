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
function saludargrafica()
{
    alert("Vamos a graficas esas coordenadas");
}

function resolverprimergrado(){
    document.ejercicios.primerrdo.value=( Number(document.ejercicios.resultado.value)- Number(document.ejercicios.Nro.value))/Number(document.ejercicios.X.value);

}

function resolversegundogradoa() {
    document.ejercicios.segundordoa.value= ((-Number(document.ejercicios.Xdos.value)) +(Math.sqrt((Math.pow(Number(document.ejercicios.Xdos.value),2) - (4*Number(document.ejercicios.Xcuadrado.value)*Number(document.ejercicios.Nrodos.value))))))/(2*Number(document.ejercicios.Xcuadrado.value));
    document.ejercicios.segundordob.value= ((-1*Number(document.ejercicios.Xdos.value)) -(Math.sqrt((Math.pow(Number(document.ejercicios.Xdos.value),2) - (4*Number(document.ejercicios.Xcuadrado.value)*Number(document.ejercicios.Nrodos.value))))))/(2*Number(document.ejercicios.Xcuadrado.value));
    if(document.ejercicios.segundordoa.value==="NaN")
    alert("raices imaginarias");

}


function func(){
    let divMostrar = document.getElementById("mostrarCalculos");
    divMostrar.style.display = "flex";
    document.getElementById("mostrarCalculos").innerHTML += "<p>Resolver primer grado:</p><p>Paso uno: " +Number(document.ejercicios.X.value)+"x="+Number(document.ejercicios.resultado.value)+"-"+Number(document.ejercicios.Nro.value)+"</p>";
    divMostrar.innerHTML+="<p>Paso dos: x="+ (Number(document.ejercicios.resultado.value)-Number(document.ejercicios.Nro.value))+" / "+ Number(document.ejercicios.X.value)+"</p>";
    divMostrar.innerHTML+="<p> Resolver segundo Grado:</p><p>Aplicamos Bhaskara:</p>A: " + Number(document.ejercicios.Xcuadrado.value) +"   B: "+Number(document.ejercicios.Xdos.value)+"   C: "+ Number (document.ejercicios.Nrodos.value)
    +"<p><u>IMPORTANTE:</u> RECORDAR QUE DE LA RAIZ SE OBTIENEN UN VALOR POSITIVO Y OTRO NEGATIVO </p>";
}

function dibujarCuadriculado (){{
    var canvas =document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    for (var i=10;i<canvas.width;i+=10) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
    }

    for (var i=10;i<canvas.width;i+=10) {
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
    }
    ctx.strokeStyle="rgba(110,110,110,0.67)";
    ctx.stroke();


}


    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.strokeStyle="#000000";

    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);

    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);

    ctx.stroke();
    ctx.closePath();

}

function res()
{
    a=document.datos.a.value;b=document.datos.b.value;c=document.datos.c.value;
    d=document.datos.d.value;e=document.datos.e.value;f=document.datos.f.value;
    g=a*e-b*d; if(g==0)
{if (c*e-b*f==0) {x="Indeterminado";y="Indeterminado"}
else{x="Inconpatible";y="Incompatible"}
}
else{x=(c*e-b*f)/g;y=(a*f-c*d)/g}; document.datos.x.value=x;document.datos.y.value=y;
}

function DibujeInterseccion(x,y, x,y){

   function res()
   { ctx.beginPath();

        ctx.moveTo(x,y);

        ctx.lineTo(x1,y1);

        ctx.stroke();
    }

}
