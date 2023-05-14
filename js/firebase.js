
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZKim8X7Y_ld8jKaqMrFnDHF350OsKl5g",
    authDomain: "unisocial-db.firebaseapp.com",
    projectId: "unisocial-db",
    storageBucket: "unisocial-db.appspot.com",
    messagingSenderId: "653653409564",
    appId: "1:653653409564:web:0b21ccf9a1de2b682904d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Se crea la conexión a firestore
const db_conexion = getFirestore();

export const crearPublicacion = (comentario, nombre_archivo, nombre_persona, url_archivo, tipo_archivo, fechaPublicacion) => {
    addDoc(collection(db_conexion, 'publicacion'), {comentario, nombre_archivo, nombre_persona, url_archivo, tipo_archivo, fechaPublicacion})
    .then((doc_Resultado) => {
        window.location.href = "../muroPersonal.html";

    })
    .catch((error) => {
        alert("Error al crear la publicación: ", error);
        window.location.href = "../muroPersonal.html";

    });
    
    
};

export const listarPublicaciones = () => getDocs(query(collection(db_conexion, 'publicacion'), orderBy('fechaPublicacion', 'asc')));

