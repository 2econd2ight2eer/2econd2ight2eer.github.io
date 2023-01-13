function window4() {
    document.getElementById("window").innerHTML = "appreciating the aesthetics of the old web is the focal point of my works.";
    document.getElementById("buttonWin").innerHTML = "ok";
}

function window3() {
    document.getElementById("buttonWin").innerHTML = "cool";
    document.getElementById("window").innerHTML = "i specialize in themes that incorporate analog horror and the old web. i have a fascination for the webcore genre, and my works mostly circulate around it.";
}

function window2() {
    document.getElementById("window").innerHTML = "i'm 16 years old, and currently taking classes in STI davao.";
    document.getElementById("buttonWin").innerHTML = "cool";
    
}

function changeText() {

    var dropPlay = false;
    var drop = document.getElementById("drop");
    drop.play();
    dropPlay ? drop.pause() : drop.play();

    var window = document.getElementById('window');
    var buttonWin = document.getElementById('buttonWin');
    if (window.innerHTML === "hi! im nikolai. i'm a student webdev. i make websites for fun." , buttonWin.innerHTML === "hi nikolai!"){
      window.innerHTML = "i'm 16 years old, and currently taking classes in STI davao.";
      buttonWin.innerHTML = "cool";
    }  else if (window.innerHTML === "i'm 16 years old, and currently taking classes in STI davao." , buttonWin.innerHTML === "cool"){
      window.innerHTML = "i specialize in themes that incorporate analog horror and the old web. i have a fascination for the webcore genre, and my works mostly circulate around it.";
      buttonWin.innerHTML = "nice";    
    } else if (window.innerHTML === "i specialize in themes that incorporate analog horror and the old web. i have a fascination for the webcore genre, and my works mostly circulate around it.", buttonWin.innerHTML === "nice"){
        window.innerHTML = "appreciating the aesthetics of the old web is the focal point of my works.";
        buttonWin.innerHTML = "cool!";
    } else{
        window.innerHTML = "i'm done talking about myself. now go and explore my site! there's not much, but i figured it would be fun.";
        buttonWin.innerHTML = "ok!";
    }
  }