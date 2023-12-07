import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKmNmssV1e5NPDEtV8bVKG3Bsowdo8BEo",
  authDomain: "prueba-formulario-200af.firebaseapp.com",
  databaseURL: "https://prueba-formulario-200af-default-rtdb.firebaseio.com",
  projectId: "prueba-formulario-200af",
  storageBucket: "prueba-formulario-200af.appspot.com",
  messagingSenderId: "860223876992",
  appId: "1:860223876992:web:676ace38eaac7f7c445b65",
};

const app = initializeApp(firebaseConfig);

// Obtén una referencia a la base de datos de Firebase
var database = getDatabase();

document.getElementById("boton").addEventListener("click", guardarInformacion);

function guardarInformacion() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;

  // Crea un nuevo nodo en la base de datos con la información del formulario
  push(ref(database, "usuarios"), {
    nombre: nombre,
    correo: correo,
  });

  // Opcional: Puedes mostrar un mensaje de éxito o limpiar el formulario
  alert("Información guardada correctamente");
  document.getElementById("miFormulario").reset();
}

export { guardarInformacion };
