// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  update,
  get,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdjWMZ8nian7jcuQ5_zDMADCt7bTH293E",
  authDomain: "abdalrahman-396be.firebaseapp.com",
  databaseURL:
    "https://abdalrahman-396be-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "abdalrahman-396be",
  storageBucket: "abdalrahman-396be.appspot.com",
  messagingSenderId: "1069620711333",
  appId: "1:1069620711333:web:c8f86f42582416e22de24c",
  measurementId: "G-BRHPJT3BRC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
let card2 = document.getElementById("card2");
let All_card2 = document.getElementById("All-Card2");
let parag1 = document.createElement("p");
let parag2 = document.createElement("p");
let parag3 = document.createElement("p");
let parag4 = document.createElement("p");
let fullName1;
let lastName1;
let email1;
let password1;

document.getElementById("submit").addEventListener("click", async function (e) {
  e.preventDefault();
  fullName1 = document.getElementById("FullName").value;
  lastName1 = document.getElementById("LastName").value;
  email1 = document.getElementById("Email").value;
  password1 = document.getElementById("Password").value;
  await set(ref(db, `user/${fullName1}`), {
    FullName: fullName1,
    LastName: lastName1,
    Email: email1,
    Password: password1,
  });

  card2.appendChild(All_card2);
  All_card2.appendChild(parag1);
  All_card2.appendChild(parag2);
  All_card2.appendChild(parag3);
  All_card2.appendChild(parag4);

  parag1.innerHTML = `Full Name :${fullName1}`;
  parag2.innerHTML = `Last Name : ${lastName1}`;
  parag3.innerHTML = `Email : ${email1}`;
  parag4.innerHTML = `Password : ${password1}`;
});

document
  .getElementById("update1")
  .addEventListener("click", async function (u) {
    u.preventDefault();
    lastName1 = document.getElementById("LastName").value;
    email1 = document.getElementById("Email").value;
    password1 = document.getElementById("Password").value;

    await update(ref(db, `user/${fullName1}`), {
      LastName: lastName1,
      Email: email1,
      Password: password1,
    });

    parag1.innerHTML = `Full Name :${fullName1}`;
    parag2.innerHTML = `Last Name : ${lastName1}`;
    parag3.innerHTML = `Email : ${email1}`;
    parag4.innerHTML = `Password : ${password1}`;
  });
document.getElementById("delete").addEventListener("click", async function (d) {
  d.preventDefault();
  await set(ref(db, `user/${fullName1}`), null);

  // تفريغ العناصر من الكارد
  card2.removeChild(All_card2);
  parag1.innerHTML = "";
  parag2.innerHTML = "";
  parag3.innerHTML = "";
  parag4.innerHTML = "";
});
