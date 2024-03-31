document.getElementById("toggleButton").addEventListener("click", function() {
  document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("content").classList.toggle("shifted"); // Ajoute ou supprime la classe "shifted" sur le contenu principal
});

