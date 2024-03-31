document.getElementById("toggleButton").addEventListener("click", function() {
  var sidebar = document.getElementById("sidebar");
  var content = document.getElementById("content");

  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    content.classList.remove("shifted");
    this.textContent = "Ouvrir le sidebar";
  } else {
    sidebar.classList.add("open");
    content.classList.add("shifted");
    this.textContent = "Fermer le sidebar";
  }
});
