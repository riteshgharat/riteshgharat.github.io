// on load function
window.onload = function() {
  document.querySelector('.preloading').classList.add('preloading-remove');
  location.hash = '#home';
}

// chaning windows on hash change
window.addEventListener('hashchange', () => {
  let hash = (location.hash).replace('#', '');
  if (hash == 'home' || hash == 'project' || hash == 'about' || hash == 'contact') {
    document.querySelectorAll('.link').forEach(l => { l.classList.remove('active') });
    document.querySelectorAll('section').forEach(s => { s.classList.remove('active') });
    document.querySelector(`.${hash}-section`).classList.add('active');
    document.querySelector(`.${hash}`).classList.add('active');
  } else {
    document.querySelectorAll('section').forEach(s => { s.classList.remove('active') });
    document.querySelector(`.error-section`).classList.add('active');
    error404();
  }
});

// for updating projects card
const projectData = [
  {
    name: "Math Riddles",
    description: "Challenge yourself with math puzzles.",
    img: "/assets/mathriddles.webp",
    repo: "https://github.com/riteshgharat/math-riddles/",
    live: "https://mathriddles.netlify.app/"
  },
  {
    name: "Tax Invoice Generator",
    description: "Generator GST Invoice for free.",
    img: "/assets/tig.webp",
    repo: "https://github.com/riteshgharat/riteshgharat.github.io/tree/main/tig",
    live: "https://riteshgharat.github.io/projects/tig/"
  },
  {
    name: "SDSM Map",
    description: "Map of SDSM College Palghar",
    img: "/assets/sdsmmap.webp",
    repo: "https://github.com/riteshgharat/sdsm-college-map",
    live: "https://sdsmcollegemap.netlify.app"
  },
  {
    name: "devresources",
    description: "Learn, Earn & Develop",
    img: "/assets/devresources.webp",
    repo: "#",
    live: "https://devresources.tech"
  },
  {
    name: "What's AI?",
    description: "Expand your brain by learning What is AI.",
    img: "/assets/whatsai.webp",
    repo: "https://github.com/riteshgharat/",
    live: "https://whatisai.netlify.app/"
  },
  {
    name: "Math-html.js",
    description: "Do Arithmetic Operation directly into HTML.",
    img: "/assets/mathhtmljs.webp",
    repo: "https://github.com/riteshgharat/riteshgharat.github.io",
    live: "https://riteshgharat.github.io/projects/math-html/"
  }
];

const projectCon = document.querySelector('.project-container');
for (let i = 0; i < projectData.length; i++) {
  projectCon.innerHTML += `
<div class="project-card" style="background: url('/assets/project-${i+1}.webp'), no-repeat;background-size: cover;
">
  <img src="${projectData[i].img}" class="project-img" alt="project-card">
  <div class="project-content">
    <h1 class="project-title">${projectData[i].name}</h1>
    <p class="project-info">${projectData[i].description}</p>
    <div class="project-btn-grp">
      <a href="${projectData[i].repo}" class="project-btn github" type="submit" target="_blank">repo</a>
      <a href="${projectData[i].live}" class="project-btn seelive" type="submit" target="_blank">see live</a>
    </div>
  </div>
</div>
`;
}

const jokes = [
  "Page not found. Looks like someone forgot to pay the internet bill.",
  "Oops, it looks like we misplaced that page. Maybe check under the couch cushions?",
  "This page is as elusive as a unicorn. Keep searching!",
  "The page you're looking for seems to have taken a long vacation. Please try again later.",
  "We're sorry, the internet is on vacation. Please come back another time.",
  "Looks like you've hit a dead end. Time to turn around and try a different route!",
  "Oh no, the page you're looking for is playing hide and seek. Try searching for it again!",
  "We apologize for the inconvenience, but the page you're looking for is currently out to lunch.",
  "This page is MIA. Maybe it's hiding in the Bermuda Triangle?",
  "The page you're looking for seems to have vanished into thin air. Don't worry, we're on the case!"
];

/*Generating random message for error*/
function error404() {
  let no = Math.floor(Math.random() * 10)
  let errorMsg = document.querySelector('.message');
  errorMsg.innerText = jokes[no];
}