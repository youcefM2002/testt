const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function() {
  sidebar.classList.toggle("open");
  main.classList.toggle("shifted");
});

  z-index: 1001; /* Assurer que le bouton reste au-dessus du contenu et du sidebar */
}
