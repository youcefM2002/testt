document.getElementById("toggleButton").addEventListener("click", function() {
  document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("content").classList.toggle("shifted");
});

document.getElementById("closeButton").addEventListener("click", function() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("content").classList.remove("shifted");
});
