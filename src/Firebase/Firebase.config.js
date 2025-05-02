import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBy0FXanvCEX1TXY-L4eN5B1xeqQoBFiak",
  authDomain: "dragon-news-webapp.firebaseapp.com",
  projectId: "dragon-news-webapp",
  storageBucket: "dragon-news-webapp.firebasestorage.app",
  messagingSenderId: "819989908660",
  appId: "1:819989908660:web:01f0af0fe9003b37351be1"
};

export const app = initializeApp(firebaseConfig);