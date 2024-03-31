document.getElementById("toggleButton").addEventListener("click", function() {
  var sidebar = document.getElementById("sidebar");
  var content = document.getElementById("content");
  var toggleButton = document.getElementById("toggleButton"); // Référence au bouton

  if (!sidebar.classList.contains("open")) { // Si le sidebar est fermé
    sidebar.classList.add("open");
    content.classList.add("shifted");
    toggleButton.innerText = "Fermer"; // Met à jour le texte du bouton
  } else { // Si le sidebar est ouvert
    sidebar.classList.remove("open");
    content.classList.remove("shifted");
    toggleButton.innerText = "Toutes"; // Met à jour le texte du bouton
  }
});
