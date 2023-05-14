import { crearPublicacion } from "./firebase.js";

  /*
//Subir al servidor el archivo agregado desde el input
function copiarArchivo() {
    const nombreArchivo = info_archivo.name;
    const urlDestino = 'http://127.0.0.1:5501/archivos/publicacion/' + nombreArchivo;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', urlDestino);
    xhr.send(info_archivo);
}*/

formulario_publicacion.addEventListener ('submit', (evento) => {
  //Prevenir que la página web se recarge cuando se active el evento 'submit'
  evento.preventDefault();

  const formulario_publicacion = document.getElementById("formulario_publicacion");
  const info_archivo = document.getElementById("archivo").files[0];
  const ruta_archivo = document.getElementById("archivo").value;
  const nombre_usuario = "Pepito Perez", date = new Date();  
  
  const comentario = formulario_publicacion['comentario'].value;
  const nombre_archivo = info_archivo.name;
  const url_archivo = "../archivos/publicacion/" + info_archivo.name;
  const tipo_archivo = info_archivo.type;
  const fechaPublicacion = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();


/*
  const formData = new FormData();
  formData.append('file', document.getElementById("archivo").files[0]);


  fetch("http://127.0.0.1:5501/archivos/publicacion", {
      method: 'POST',
      body: formData
    }).then(response => {
      if (response.ok) {
        console.log('Archivo copiado exitosamente');
      } else {
        console.error('Error al copiar el archivo');
      }
    }).catch(error => {
      console.error('Error al realizar la solicitud: ', error);
  });
*/
  
  crearPublicacion(comentario, nombre_archivo, nombre_usuario, 'archivos/publicacion/header.jpg', tipo_archivo, fechaPublicacion);

});
