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
  databaseURL: "https://feedback-form-1e35a-default-rtdb.firebaseio.com",
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
/*getting site*/
let id;
window.onload = () => {
  let params = new URLSearchParams(location.search);
  id = params.get('id');
  if (id != null) {
    window.localStorage.setItem('id', id);
    location.search = "";
  }
}
/*posting feedbacks*/
document.querySelector(".post-btn").addEventListener('click', () => {
  let em = (email.value).search('@');
  if (name.value && number.value && remark.value && email.value && (em != -1)) {
    let site = localStorage.getItem('id');
    set(ref(db, `data/${site}/${number.value}`), {
      name: name.value,
      number: number.value,
      email: email.value,
      rate: Rate,
      remark: remark.value,
      date: getDate()
    }).then(() => {
      form.style.display = 'none';
      starWidget.style.display = 'none';
      post.style.display = 'block';
      window.localStorage.setItem('id', '');
    }).catch((error) => {
      alert(error)
    });
  }
});

/*get date*/
function getDate() {
  let date = new Date;
  return `${date.toLocaleDateString()}, ${date.toTimeString()}`;
}