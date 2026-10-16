const boutonsToggle = document.querySelectorAll('.btn-toggle');

boutonsToggle.forEach(function (bouton) {
  bouton.addEventListener('click', function () {
    const section = bouton.closest('section');
    const grille = section.querySelector('.row');

    grille.classList.toggle('hidden');

    if (grille.classList.contains('hidden')) {
      bouton.textContent = 'Afficher';
    } else {
      bouton.textContent = 'Masquer';
    }
  });
});

const nbFilms = document.querySelectorAll('article').length;
const footer = document.querySelector('.footer');

const compteur = document.createElement('p');
compteur.textContent = 'Catalogue : ' + nbFilms + ' films disponibles';

footer.appendChild(compteur);

const cartesFilms = document.querySelectorAll('.carte-film');

const searchInput = document.querySelector('#recherche');

const messageAucunResultat = document.createElement('p');
messageAucunResultat.textContent = 'Aucun resultat';
messageAucunResultat.classList.add('hidden');
messageAucunResultat.classList.add('message-recherche');
document.querySelector('main').insertBefore(messageAucunResultat, document.querySelector('.grille-films'));

searchInput.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const articles = document.querySelectorAll('article');
  let resultatsTrouves = 0;

  articles.forEach(function (article) {
    const titre = article.querySelector('h3').textContent.toLowerCase();

    if (titre.includes(searchTerm)) {
      article.style.display = 'block';
      resultatsTrouves++;
    } else {
      article.style.display = 'none';
    }
  });

  if (resultatsTrouves === 0) {
    messageAucunResultat.classList.remove('hidden');
  } else {
    messageAucunResultat.classList.add('hidden');
  }
});

function openModal(carte) {
  const modal = document.querySelector('#modal');
  const modalBody = document.querySelector('#modal-body');

  const titre = carte.querySelector('h3').textContent;
  const infos = carte.querySelector('.card-text').textContent;
  const image = carte.querySelector('img').getAttribute('src');

  const badges = carte.querySelectorAll('.badge');
  let genres = '';
  badges.forEach(function (badge) {
    genres += '<span class="badge">' + badge.textContent + '</span> ';
  });

  modalBody.innerHTML =
    '<img src="' + image + '" alt="" class="modal-image">' +
    '<h2>' + titre + '</h2>' +
    '<p>' + infos + '</p>' +
    '<div>' + genres + '</div>';

  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.querySelector('#modal');
  modal.style.display = 'none';
}

cartesFilms.forEach(function (carte) {
  carte.addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('watched');
    openModal(event.currentTarget);
  });
});

document.querySelector('.close').addEventListener('click', closeModal);

const boutonTheme = document.querySelector('#theme-toggle');

boutonTheme.addEventListener('click', function () {
  document.body.classList.toggle('light-theme');

  if (document.body.classList.contains('light-theme')) {
    boutonTheme.textContent = 'Mode sombre';
  } else {
    boutonTheme.textContent = 'Mode clair';
  }
});
