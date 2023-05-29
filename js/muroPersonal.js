import { listarPublicaciones } from "./firebase.js";

const listaPublicaciones = async() => {
    const publicaciones = await listarPublicaciones();
    
    publicaciones.forEach(element => {
        const publicacion = element.data();
        console.log(publicacion.tipo_archivo);

        if(publicacion.tipo_archivo == "application/pdf"){
            document.getElementById("contenedor").innerHTML += `
            <div class="Publicacion">
                <div class="ContenedorIconoTexto">
                    <img src="img/Logo PDF.png" alt="Publicación 2" width="12%" class="ImagenPublicacionTipoIcono">
                    <h4 class="Fuente">${publicacion.nombre_archivo}</h4>
                </div>
                <p class="TextoPublicacion Fuente">${publicacion.comentario}</p>
                <button onclick="" class="BotonesPublicacion Fuente">Comentar</button>
            </div>
            `

        }else if(publicacion.tipo_archivo == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
            document.getElementById("contenedor").innerHTML += `
            <div class="Publicacion">
                <div class="ContenedorIconoTexto">
                    <img src="img/Logo Excel.png" alt="Publicación 2" width="12%" class="ImagenPublicacionTipoIcono">
                    <h4 class="Fuente">${publicacion.nombre_archivo}</h4>
                </div>
                <p class="TextoPublicacion Fuente">${publicacion.comentario}</p>
                <button onclick="" class="BotonesPublicacion Fuente">Comentar</button>
            </div>
            `

        }else if(publicacion.tipo_archivo == "application/vnd.openxmlformats-officedocument.presentationml.presentation"){
            document.getElementById("contenedor").innerHTML += `
            <div class="Publicacion">
                <div class="ContenedorIconoTexto">
                    <img src="img/Logo Power point.png" alt="Publicación 2" width="12%" class="ImagenPublicacionTipoIcono">
                    <h4 class="Fuente">${publicacion.nombre_archivo}</h4>
                </div>
                <p class="TextoPublicacion Fuente">${publicacion.comentario}</p>
                <button onclick="" class="BotonesPublicacion Fuente">Comentar</button>
            </div>
            `

        }else if(publicacion.tipo_archivo == "application/msword" || publicacion.tipo_archivo == "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
            document.getElementById("contenedor").innerHTML += `
            <div class="Publicacion">
                <div class="ContenedorIconoTexto">
                    <img src="img/Logo Word.png" alt="Publicación 2" width="12%" class="ImagenPublicacionTipoIcono">
                    <h4 class="Fuente">${publicacion.nombre_archivo}</h4>
                </div>
                <p class="TextoPublicacion Fuente">${publicacion.comentario}</p>
                <button onclick="" class="BotonesPublicacion Fuente">Comentar</button>
            </div>
            `

        }else if(publicacion.tipo_archivo == "text/plain"){
            document.getElementById("contenedor").innerHTML += `
            <div class="Publicacion">
                <div class="ContenedorIconoTexto">
                    <img src="img/Archivo TXT.png" alt="Publicación 2" width="12%" class="ImagenPublicacionTipoIcono">
                    <h4 class="Fuente">${publicacion.nombre_archivo}</h4>
                </div>
                <p class="TextoPublicacion Fuente">${publicacion.comentario}</p>
                <button onclick="" class="BotonesPublicacion Fuente">Comentar</button>
            </div>
            `

        }else if(publicacion.tipo_archivo == "image/png" || publicacion.tipo_archivo == "image/jpeg" || publicacion.tipo_archivo == "image/jpg"){
            document.getElementById("contenedor").innerHTML += `
                <div class="Publicacion">
                    <img src="${publicacion.url_archivo}" alt="Publicación 1" width="100%" class="ImagenPublicacionTipoImagen">
                    <h4 class="Fuente"></h4>
                    <p class="Fuente TextoPublicacion">${publicacion.comentario}</p>
                    <button onclick="" class="Fuente BotonesPublicacion ">Comentar</button>
                </div>
            `

        }else{
            document.getElementById("contenedor").innerHTML += `
            <div class="Publicacion">
                <div class="ContenedorIconoTexto">
                    <img src="img/Logo Archivo Desconocido.png" alt="Publicación 2" width="12%" class="ImagenPublicacionTipoIcono">
                    <h4 class="Fuente">${publicacion.nombre_archivo}</h4>
                </div>
                <p class="TextoPublicacion Fuente">${publicacion.comentario}</p>
                <button onclick="" class="BotonesPublicacion Fuente">Comentar</button>
            </div>
            `

        }

    });

}

listaPublicaciones();




