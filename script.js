const toggleButton = document.getElementById("toggleButton");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");

toggleButton.addEventListener("click", function() {
  sidebar.classList.toggle("open");
  content.classList.toggle("shifted"); // Ajoute ou supprime la classe "shifted" sur le contenu principal
});
