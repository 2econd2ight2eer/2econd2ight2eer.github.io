var time;
function loading() {
  time = setTimeout(showPage, 4000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("everything").style.display = "inline-block";
}
