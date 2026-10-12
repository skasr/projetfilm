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
