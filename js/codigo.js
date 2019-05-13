$(document).ready(function(){
    $("#cargar").click(function () {
        $.ajax({
            type: "post",
            url: "datos.json",
            dataType: "json",
            success: function (respuesta) {
                //console.log(respuesta);
                /*
                1. Miramos cuantas peliculas vienen
                respuesta.peliculas.lenght
                2. Por cada pelicula, creamos un contenedor que ocupe 6 columnas
                3. Creamos una lista no ordenada
                4. Por cada miembro propiedad de la pelicula, creamos un elemento <li>
                */
                //console.log("Número de peliculas: " + respuesta.peliculas.lenght);
                $("#main").append("<div class='row'></div>")
                for (let i=0; i < respuesta.peliculas.length; i++){
                    $(".row").append("<div id='peli" + (i+1) + "' class='col-sm-6 text-justify'></div>");
                    $("#peli"+ (i+1)).append("<ul id='datos" + (i+1) + "'></ul>");
                    $("#datos" + (i+1)).append("<li>" + respuesta.peliculas[i].Titulo + "</li>");
                    $("#datos" + (i+1)).append("<li>" + respuesta.peliculas[i].Tiempo + "</li>");
                    $("#datos" + (i+1)).append("<li>" + respuesta.peliculas[i].Director + "</li>");
                    $("#datos" + (i+1)).append("<li>" + respuesta.peliculas[i].Nacionalidad + "</li>");
                }
            },
            error: function(err){
                console.log("Se ha producido un error.");
            }
            
        });
    });
});