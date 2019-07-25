/**
 @method Function saludarindex
 @return aparece un alert de bienvenida cuando se ingresa a la pagina
 */
function saludarindex() {
    alert("Bienvenido");
}

/**
 @method Function saludartemas
 @return aparece un alert cuando se ingresa a la pagina
 */
function saludartemas() {
    alert("Leemos el teorico ");
}

/**
 @method Function saludarejercicios
 @return aparece un alert cuando se ingresa a la pagina
 */
function saludarejercicios() {
    alert("Vamos a hacer ejercicios");
}

/**
 @method Function saludarcontacto
 @return aparece un alert cuando se ingresa a la pagina
 */
function saludarcontacto() {
    alert("¿Tenes alguna duda?");
}

/**
 @method Function saludarquienes
 @return aparece un alert cuando se ingresa a la pagina
 */
function saludarquienes() {
    alert("Conocenos!");
}

/**
 @method Function saludargrafica
 @return aparece un alert cuando se ingresa a la pagina
 */
function saludargrafica() {
    alert("Vamos a graficas esas coordenadas");
}

/**

 en primer lugar se despeja el termino independiente y luego pasa el coeficiente que acompaña a la X dividiendo
 @method function resolverprimergrado
 @param valor de x
 @param valor termino independiente
 @return el valor de la raiz
 */
function resolverprimergrado() {
    if ((isNaN(Number(document.ejercicios.X.value)) === false) || (isNaN(Number(document.ejercicios.Nro.value)) === false)) {
        alert("ingrese numeros porfavor");
        document.ejercicios.X.value = "";
        document.ejercicios.Nro.value = "";
        document.ejercicios.resultado.value = "NaN";
    }
    document.ejercicios.primerrdo.value = (Number(document.ejercicios.resultado.value) - Number(document.ejercicios.Nro.value)) / Number(document.ejercicios.X.value);
}

/**

 Se iguala la ecuacion a cero y se aplica la formula de bhaskara
 @method function resolversegundogradoa
 @param coeficiente X cuadrado
 @param coeficiente X
 @param termino independiente
 @return retorna las raices de la ecuacion
 */
function resolversegundogrado() {
    if ((isNaN(Number(document.ejercicios.Xcuadrado.value)) === false) || (isNaN(Number(document.ejercicios.Xdos.value)) === false) || (isNaN(Number(document.ejercicios.Nrodos.value)) === false)) {
        alert("ingrese numeros porfavor");
        document.ejercicios.Nrodos.value = "";
        document.ejercicios.Xdos.value = " ";
        document.ejercicios.Xcuadrado.value = "";
        document.ejercicios.segundordoa.value = "NaN";
        document.ejercicios.segundordob.value = "NaN";
    } else {
        document.ejercicios.segundordoa.value = ((-Number(document.ejercicios.Xdos.value)) + (Math.sqrt((Math.pow(Number(document.ejercicios.Xdos.value), 2) - (4 * Number(document.ejercicios.Xcuadrado.value) * Number(document.ejercicios.Nrodos.value)))))) / (2 * Number(document.ejercicios.Xcuadrado.value));

        document.ejercicios.segundordob.value = ((-1 * Number(document.ejercicios.Xdos.value)) - (Math.sqrt((Math.pow(Number(document.ejercicios.Xdos.value), 2) - (4 * Number(document.ejercicios.Xcuadrado.value) * Number(document.ejercicios.Nrodos.value)))))) / (2 * Number(document.ejercicios.Xcuadrado.value));
        if (document.ejercicios.segundordoa.value === "NaN")
            alert("raices imaginarias");
    }
}

/**

 Se muestra un recuadro con los pasos de las ecuaciones y los valores de a,b y c correspondientes de la funcion bhaskara
 @method function func
 @return recuadro con texto corresponiente
 */
function func() {
    let divMostrar = document.getElementById("mostrarCalculos");
    divMostrar.style.display = "flex";
    document.getElementById("mostrarCalculos").innerHTML += "<p>Resolver primer grado:</p><p>Paso uno: " + Number(document.ejercicios.X.value) + "x=" + Number(document.ejercicios.resultado.value) + "-" + Number(document.ejercicios.Nro.value) + "</p>";
    divMostrar.innerHTML += "<p>Paso dos: x=" + (Number(document.ejercicios.resultado.value) - Number(document.ejercicios.Nro.value)) + " / " + Number(document.ejercicios.X.value) + "</p>";
    divMostrar.innerHTML += "<p> Resolver segundo Grado:</p><p>Aplicamos Bhaskara:</p>A: " + Number(document.ejercicios.Xcuadrado.value) + "   B: " + Number(document.ejercicios.Xdos.value) + "   C: " + Number(document.ejercicios.Nrodos.value)
        + "<p><u>IMPORTANTE:</u> RECORDAR QUE DE LA RAIZ SE OBTIENEN UN VALOR POSITIVO Y OTRO NEGATIVO </p>";
}

function dibujarCuadriculado() {
    {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        for (var i = 10; i < canvas.width; i += 10) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
        }

        for (var i = 10; i < canvas.width; i += 10) {
            ctx.moveTo(0, i);
            ctx.lineTo(canvas.width, i);
        }
        ctx.strokeStyle = "rgba(110,110,110,0.67)";
        ctx.stroke();


    }


    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.strokeStyle = "#000000";

    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);

    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);

    ctx.stroke();
    ctx.closePath();

}

function res() {
    a = document.datos.a.value;
    b = document.datos.b.value;
    c = document.datos.c.value;
    d = document.datos.d.value;
    e = document.datos.e.value;
    f = document.datos.f.value;
    g = a * e - b * d;
    if (g == 0) {
        if (c * e - b * f == 0) {
            x = "Indeterminado";
            y = "Indeterminado"
        } else {
            x = "Inconpatible";
            y = "Incompatible"
        }
    } else {
        x = (c * e - b * f) / g;
        y = (a * f - c * d) / g
    }
    ;document.datos.x.value = x;
    document.datos.y.value = y;
}

function DibujeInterseccion(x, y, x, y) {

    function res() {
        ctx.beginPath();

        ctx.moveTo(x, y);

        ctx.lineTo(x1, y1);

        ctx.stroke();
    }

}
