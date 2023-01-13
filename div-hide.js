var navbar = document.getElementById("navbar");

function showNavbar() {
  
  var dropPlay = false;
  var drop = document.getElementById("drop");
  drop.play();
  dropPlay ? drop.pause() : drop.play();
  
  if (navbar.style.display === "none") {
    navbar.style.display = "block"; // to show the navbar
    document.getElementById("navBtn").textContent = "▼";
  } else {
    navbar.style.display = "none"; // to hide the navbar
    document.getElementById("navBtn").textContent = "▲";
  }

}

// next page

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// disappear

var abtme1 = document.getElementById("abtme1")
var abtme2 = document.getElementById("abtme2")
var abtme3 = document.getElementById("abtme3")

function gone1(){
  var dropPlay = false;
  var drop = document.getElementById("drop");
  drop.play();
  dropPlay ? drop.pause() : drop.play();
  abtme1.style.display = "none"

}
function gone2(){
  var dropPlay = false;
  var drop = document.getElementById("drop");
  drop.play();
  dropPlay ? drop.pause() : drop.play();
  abtme2.style.display = "none"
}
function goneall(){
  var dropPlay = false;
  var drop = document.getElementById("drop");
  drop.play();
  dropPlay ? drop.pause() : drop.play();

  abtme1.style.display = "none"
  abtme2.style.display = "none"
  abtme3.style.display = "none"
  location.replace("../portfolio/alt-index.html")
}