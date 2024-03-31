document.getElementById("toggleButton").addEventListener("click", function() {
  var sidebar = document.getElementById("sidebar");
  var content = document.getElementById("content");
  var toggleButton = document.getElementById("toggleButton"); // Référence au bouton

  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    content.classList.remove("shifted");
    toggleButton.textContent = "Ouvrir le sidebar"; // Met à jour le texte du bouton
  } else {
    sidebar.classList.add("open");
    content.classList.add("shifted");
    toggleButton.textContent = "Fermer le sidebar"; // Met à jour le texte du bouton
  }
});
