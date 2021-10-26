/*const text = document.querySelector('p');

let no = 0;
for (var i = 1; i <= 10; i++) {
  no = 2 ** i;
  text.innerHTML += no + ' : ' + no / i + '<br>';
}
*/
window.onload = function (){
let video = document.querySelector('video');
// Setting up the constraint 
let facingMode; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
let a = 0;

function changeMode() {
  a++;
  if (a % 2 == 0) facingMode = "user";
  else { facingMode = "environment" };
  camera()
}
const filter = document.querySelector('#filter');
const range = document.querySelector('#range');

filter.addEventListener('change', () => {
  //console.log(filter.value + range.value)
  video.style.filter = `${filter.value}`; //`${filter.value}(${range.value}%)`;
  camera()
})

function camera() {
  var constraints = {
    audio: true,
    video: {
      width: window.innerWidth,
      height: window.innerHeight,
      facingMode: facingMode,
    }
  };

  //Stream it to video element 
  navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
    video.srcObject = stream;
    //console.log(stream)
  });
}
camera()

const elem = document.body;

if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.webkitRequestFullscreen) {
  /* Safari */
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) {
  /* IE11 */
  elem.msRequestFullscreen();
}
}
/*
// Elements for taking the snapshot
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
  context.drawImage(video, 0, 0, 1000, 1000);
});
//console.log(navigator)
/*
if (!navigator.clipboard) {
  navigator.clipboard.writeText('123');
  navigator.clipboard.readText().then(
    clipText => console.log(clipText)
  );
}
*/

/*
let acl = new Accelerometer({ frequency: 60 });
acl.addEventListener('reading', () => {
  console.log("Acceleration along the X-axis " + acl.x);
  console.log("Acceleration along the Y-axis " + acl.y);
  console.log("Acceleration along the Z-axis " + acl.z);
});

acl.start();
*/
/*
window.addEventListener('devicemotion', (e) => {
  document.querySelector('.box').style.transform = `translate(${e.acceleration.x}px)`;
})
window.addEventListener('deviceorientation', (e) => {
  let alpha = e.alpha.toFixed(0);
  let beta = e.beta.toFixed(0);
  let gamma = e.gamma.toFixed(0);
  const box = document.querySelector('.box');

  if (beta == 0 && gamma == 0) box.style.backgroundColor = 'blue';
  else { box.style.backgroundColor = 'red' }
  box.style.transform = `translate(${beta}px, ${gamma}px)`;
  text.innerHTML = `X: ${alpha}, Y: ${beta}, Z: ${gamma}`
})
*/
/*
window.onload = function() {
  let prompt = prompt('Enter Password!', 1000)
  if (prompt == 'password') {
    function getReUrl() {
      const Inurl = document.querySelector('#url').value;
      if (Inurl == '') alert('Enter Proper URL')
      else {
        var url = new URL(`${Inurl}`);
        if (url.port == 'https' || 'http') {
          url = decodeURI(url)
          url = new URL(url)
          //console.info(url)
          console.log(url.searchParams.get("redirect_uri"));
        }
        else { alert('invalid url') }
      }
    }
  }
  else {
    alert('invalid password')
    document.querySelector('body').style.display = 'none';
  }
}
*/
/*
var cameraDiv = document.querySelector('.camera');
if (cameraDiv.requestFullscreen) {
  cameraDiv.requestFullscreen();
} else if (camera.webkitRequestFullscreen) {
  // Safari 
  cameraDiv.webkitRequestFullscreen();
} else if (camera.msRequestFullscreen) {
  // IE11 
  cameraDiv.msRequestFullscreen();
}*/
/*
function requestFullScreen(element) {
  // Supports most browsers and their versions.
  var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

  if (requestMethod) { // Native full screen.
    requestMethod.call(element);
  } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
    var wscript = new ActiveXObject("WScript.Shell");
    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}

var element = document.body; // Make the body go full screen.
requestFullScreen(element);*/