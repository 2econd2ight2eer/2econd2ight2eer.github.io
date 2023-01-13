var music = document.getElementById("music");
var musicPlay = false;
var play = document.getElementById("play");

function toggleMusic() {
  musicPlay ? music.pause() : music.play();
};

music.onplay = function() {
  musicPlay = true;
  document.getElementById("play").textContent = "II";
  play.style.animation = "blink 2s ease-out infinite"

}
music.onpause = function() {
  musicPlay = false;
  document.getElementById("play").textContent = "▶";
  play.style.animation = "none"
};

//navbar audio

  // var navbarPlay = false;


  // function playHome(){
  //     var home = document.getElementById("home");
  //     home.play();
  //     navbarPlay ? home.pause() : home.play();
  // }

  // function playAbout(){
  //     var about = document.getElementById("about");
  //     about.play();
  //     navbarPlay ? about.pause() : about.play();
  // }

  // function playContact(){
  //     var contact = document.getElementById("contact");
  //     contact.play();
  //     navbarPlay ? contact.pause() : contact.play();
  // }

//read aloud

var homeDesc = document.getElementById("homeDesc");

function readHome() {

  var dropPlay = false;
  var drop = document.getElementById("drop");
  drop.play();
  dropPlay ? drop.pause() : drop.play();
  
  return homeDesc.paused ? homeDesc.play() : homeDesc.pause();
};

//cat

var meow = $("#meow")[0];
$("#ascii").mouseenter(function() {
  meow.play();
});

//navbar

var homeAudio = $("#home")[0];
$("#homeBtn").mouseenter(function() {
  homeAudio.play();
});

var aboutAudio = $("#about")[0];
$("#aboutBtn").mouseenter(function() {
  aboutAudio.play();
});

var contactAudio = $("#contact")[0];
$("#contactBtn").mouseenter(function() {
  contactAudio.play();
});

// sparkle

var sparkle = $("#sparkle")[0];
$("#niko").mouseenter(function() {
  sparkle.play();
});


