// on load function
window.onload = function() {
  document.querySelector('.preloading').classList.add('preloading-remove');
  location.hash = '#home';
}

// chaning windows on hash change
window.addEventListener('hashchange', () => {
  let hash = (location.hash).replace('#', '');
  document.querySelectorAll('.link').forEach(l => { l.classList.remove('active') });
  document.querySelectorAll('section').forEach(s => { s.classList.remove('active') });
  document.querySelector(`.${hash}-section`).classList.add('active');
  document.querySelector(`.${hash}`).classList.add('active');
})

// for updating projects card
const projectData = [
  {
    name: "Math Riddles",
    description: "Challenge yourself with math puzzles.",
    img: "/assets/mathriddles.png",
    repo: "https://github.com/riteshgharat/math-riddles/",
    live: "https://mathriddles.netlify.app/"
  },
  {
    name: "Tax Invoice Generator",
    description: "Generator GST Invoice for free.",
    img: "/assets/tig.png",
    repo: "https://github.com/riteshgharat/riteshgharat.github.io/tree/main/tig",
    live: "https://riteshgharat.github.io/tig/"
  },
  {
    name: "What's AI?",
    description: "Expand your brain by learning What is AI.",
    img: "/assets/whatsai.png",
    repo: "https://github.com/riteshgharat/",
    live: "https://whatisai.netlify.app/"
  },
  {
    name: "Math-html.js",
    description: "Do Arithmetic Operation directly into HTML.",
    img: "/assets/mathhtmljs.png",
    repo: "https://github.com/riteshgharat/riteshgharat.github.io",
    live: "https://riteshgharat.github.io/math-html/"
  },
];

const projectCon = document.querySelector('.project-container');
for (let i = 0; i < projectData.length; i++) {
  projectCon.innerHTML += `
<div class="project-card" style="background: url('/assets/project-${i+1}.png'), no-repeat;background-size: cover;
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