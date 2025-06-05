// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Reemplaza con la configuración real que tienes en Firebase consola
const firebaseConfig = {
  apiKey: "AIzaSyBqq7Wq3E_yUAT7aSXh1YEcCOqwHxnTgSA",
  authDomain: "directoriorestaurantes-3e6d6.firebaseapp.com",
  projectId: "directoriorestaurantes-3e6d6",
  storageBucket: "directoriorestaurantes-3e6d6.firebasestorage.app",
  messagingSenderId: "1027331177599",
  appId: "1:1027331177599:web:8c2bf91fe2f66dace9134a",
  measurementId: "G-GF50E1K5W0"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

export { db };