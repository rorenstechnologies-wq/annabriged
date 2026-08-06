// firebase.js


import { initializeApp } from 
"https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";


import { 

getFirestore 

} from 

"https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";


import {

getAuth

}

from

"https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";




// Firebase Configuration

const firebaseConfig = {


apiKey: "AIzaSyCahmQhRsWNrcCQqQwHrR1Io1MJk1hCCJY",

authDomain: "amol-sir.firebaseapp.com",

databaseURL: "https://amol-sir-default-rtdb.firebaseio.com",

projectId: "amol-sir",

storageBucket: "amol-sir.firebasestorage.app",

messagingSenderId: "733341688478",

appId: "1:733341688478:web:018584d62c8ea2d3ea118f",

measurementId: "G-QFP1DHD4S3"

};





// Initialize Firebase


const app = initializeApp(firebaseConfig);



// Services


const db = getFirestore(app);


const auth = getAuth(app);





export {

db,

auth

};