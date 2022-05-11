
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {collection,getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAbnSmlawpSL6_F49puq6OjDobRAV_rIUA",
  authDomain: "tobi-28a31.firebaseapp.com",
  projectId: "tobi-28a31",
  storageBucket: "tobi-28a31.appspot.com",
  messagingSenderId: "1075511750644",
  appId: "1:1075511750644:web:213603f0da3d6f723ed3a1",
  measurementId: "G-E562KS9WQ6"
};

initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db=getFirestore()
const collect=collection(db,'TOBI')
export { collect }