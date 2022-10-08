const about = document.getElementById('about');
const knowledge = document.getElementById('knowledge');
const objectives = document.getElementById('objectives');

const buttonAbout = document.getElementById('btn-about');
const buttonKnowledge = document.getElementById('btn-knowledge');
const buttonObjectives = document.getElementById('btn-objectives');

function showAbout() {
  about.classList.remove('d-none');
  knowledge.classList.add('d-none');
  objectives.classList.add('d-none');

  buttonAbout.classList.add('active');
  buttonKnowledge.classList.remove('active');
  buttonObjectives.classList.remove('active');
}

function showKnowledge() {
  about.classList.add('d-none');
  knowledge.classList.remove('d-none');
  objectives.classList.add('d-none');

  buttonAbout.classList.remove('active');
  buttonKnowledge.classList.add('active');
  buttonObjectives.classList.remove('active');
}

function showObjectives() {
  about.classList.add('d-none');
  knowledge.classList.add('d-none');
  objectives.classList.remove('d-none');

  buttonAbout.classList.remove('active');
  buttonKnowledge.classList.remove('active');
  buttonObjectives.classList.add('active');
}
