<?php
    //Ruta donde se va ha guardar en el servidor el archivo de la publicación
    $directorio_archivo_publicacion = "archivos/publicacion";

    //Ruta del archivo en si
    $direccion_archivo = $directorio_archivo_publicacion . basename($_FILES["archivo"]);
    
    echo $directorio_archivo;

?>