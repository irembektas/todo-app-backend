import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZimL5svJEZok0H9S4Gub0x03z_X9F0_U", // Resmindeki uzun kodu buraya koydum
  authDomain: "todo-d3dc5.firebaseapp.com",
  projectId: "todo-d3dc5",
  storageBucket: "todo-d3dc5.appspot.com",
  messagingSenderId: "132578800821",
  appId: "1:132578800821:web:d8bd6c8130833a693b79da" // Resmindeki uzun ID
};

// Uygulamayı başlatıyoruz
const app = initializeApp(firebaseConfig);

// Veritabanını (db) diğer dosyalar kullansın diye dışarıya açıyoruz
export const db = getFirestore(app);