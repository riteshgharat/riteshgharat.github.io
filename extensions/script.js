const ratesIn = document.querySelectorAll('.star-widget input');
let Rate = 1;

ratesIn.forEach(rate => {
  rate.addEventListener('input', () => {
    if (rate.checked) {
      form.style.display = 'block';
      Rate = rate.id.replace('rate-', '');
    }
  });
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, child, set, get, onValue, push, onChildAdded, onChildRemoved, remove, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm3HWlcWyC5wqpv9nCN01pY3eKbPxQErE",
  authDomain: "feedback-form-1e35a.firebaseapp.com",
  projectId: "feedback-form-1e35a",
  storageBucket: "feedback-form-1e35a.appspot.com",
  messagingSenderId: "799597376722",
  appId: "1:799597376722:web:0ca0fd83ae2b108df0690b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

const form = document.querySelector('form');
const starWidget = document.querySelector('.star-widget');
const post = document.querySelector('.post');
const name = document.querySelector('.name');
const number = document.querySelector('.number');
const email = document.querySelector('.email');
const remark = document.querySelector('.remark');

document.querySelector(".post-btn").addEventListener('click', () => {
  if (name.value && number.value && remark.value) {
    set(ref(db, "data/sdsm-map/" + number.value), {
      name: name.value,
      number: number.value,
      email: "",
      rate: Rate,
      remark: remark.value
    }).then(() => {
      form.style.display = 'none';
      starWidget.style.display = 'none';
      post.style.display = 'block';
    }).catch((error) => {
      alert(error)
    });
  }
});