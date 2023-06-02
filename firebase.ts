import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC-vse7iydVrag6sMBT_QNfmM-S0vbLcmA",
	authDomain: "chatgpt-messenger-demo-4d69d.firebaseapp.com",
	projectId: "chatgpt-messenger-demo-4d69d",
	storageBucket: "chatgpt-messenger-demo-4d69d.appspot.com",
	messagingSenderId: "937183285004",
	appId: "1:937183285004:web:6d04e941b31213f5a3c329",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
