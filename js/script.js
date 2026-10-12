// exercice 1 - afficher / masquer les sections

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

// exercice 2 - compteur de films

const nbFilms = document.querySelectorAll('article').length;
const footer = document.querySelector('.footer');

const compteur = document.createElement('p');
compteur.textContent = 'Catalogue : ' + nbFilms + ' films disponibles';

footer.appendChild(compteur);

// exercice 3 - marquer un film comme vu

const cartesFilms = document.querySelectorAll('.carte-film');

cartesFilms.forEach(function (carte) {
  carte.addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('watched');
  });
});

// exercice 4 - recherche simple

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

// exercice 5 - modal

function openModal(titre) {
  const modal = document.querySelector('#modal');
  const modalBody = document.querySelector('#modal-body');

  modalBody.innerHTML = '<h2>' + titre + '</h2>';
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.querySelector('#modal');
  modal.style.display = 'none';
}

cartesFilms.forEach(function (carte) {
  carte.addEventListener('click', function (event) {
    const titre = event.currentTarget.querySelector('h3').textContent;
    openModal(titre);
  });
});

document.querySelector('.close').addEventListener('click', closeModal);
