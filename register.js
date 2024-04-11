  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


  const firebaseConfig = {
    apiKey: "AIzaSyDbTJ6pLYliMXNDtpPw23OwaUic5F3foZY",
    authDomain: "ip-geolocation-1ccd5.firebaseapp.com",
    databaseURL: "https://ip-geolocation-1ccd5-default-rtdb.firebaseio.com",
    projectId: "ip-geolocation-1ccd5",
    storageBucket: "ip-geolocation-1ccd5.appspot.com",
    messagingSenderId: "969326463426",
    appId: "1:969326463426:web:66f1d5fc7b09167b6dee5b",
    measurementId: "G-VLD7ME4PMQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //inputs
  const email=document.getElementById('emailsign').value;
  const password=document.getElementById('passwordsign').value;

  // submit button
  const submit=document.getElementById('btnsign');
  submit.addEventListener('click',function (event){
    event.preventDefault()
    alert(5)
  })
 

