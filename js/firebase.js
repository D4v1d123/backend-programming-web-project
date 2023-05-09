
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
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

const dbConexion = getFirestore();

//, nombre_archivo, nombre_persona, url_archivo, tipo_archivo, fechaPublicacion

export const crearPublicacion = (comentario) => {
    alert(comentario);
    
}
