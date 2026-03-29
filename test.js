import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

async function mesajGonder() {
  try {
    const docRef = await addDoc(collection(db, "test_grubu"), {
      mesaj: "Backend mutfağından ilk veri selamı!",
      gonderen: "İrem",
      saat: new Date().toLocaleTimeString()
    });
    console.log("✅ BAŞARILI! Veri buluta uçtu. Kayıt ID: ", docRef.id);
  } catch (e) {
    console.error("❌ EYVAH! Bir hata oldu: ", e);
  }
}

mesajGonder();