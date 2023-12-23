var raha = 15;
var panos = 0;
var kierros = 0;

var apple = "content/apple.jpg";
var banana = "content/banana.jpg";
var watermelon = "content/watermelon.jpg";

var fruits1 = [banana, banana, banana, banana, banana, apple, apple, watermelon];
var fruits2 = [banana, banana, banana, banana, banana, apple, apple, watermelon];
var fruits3 = [banana, banana, banana, banana, apple, watermelon];

function pelaa() {
  if (raha >= 1) {
    if (panos >= 1) {
      if (raha >= panos) {
        peli();
      }
      else {
        alert("Sinulla ei ole tarpeeksi rahaa.");
        update();
      }
    }
    else {
      alert("Valitse panos: 1, 5, 10");
      update();
    }
  }
  else {
    lose();
  }

}

function update(){
  document.getElementById('raha').innerHTML = raha;
  document.getElementById('info').innerHTML = "";
  if (raha >= 100) {
    document.getElementById('info').innerHTML = "Sinä voitit pelin!!!!";
    alert("Kierroksilla [ " + kierros + " ] WINNER WINNER WINNER!!!!!!!!!!!!XDXDXDXD");
    if (confirm("Do you want to play again?") == true) {
      location.reload();
    }
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    document.getElementById("gameon").disabled = true;
  }
}

function vaihdaPanos(uusiPanos){
  update();
  panos = uusiPanos;
  if (panos == 1) {
  document.getElementById('button1').style.backgroundColor='#333333';
  document.getElementById('button2').style.backgroundColor='#808080';
  document.getElementById('button3').style.backgroundColor='#808080';
  }
  else if (panos == 5) {
  document.getElementById('button2').style.backgroundColor='#333333';
  document.getElementById('button3').style.backgroundColor='#808080';
  document.getElementById('button1').style.backgroundColor='#808080';
  }
  else if (panos == 10) {
  document.getElementById('button3').style.backgroundColor='#333333';
  document.getElementById('button1').style.backgroundColor='#808080';
  document.getElementById('button2').style.backgroundColor='#808080';
  }
}

function peli() {
  kierros += 1;

  var rand1 = fruits1[Math.floor(Math.random() * fruits1.length)];
  var rand2 = fruits2[Math.floor(Math.random() * fruits2.length)];
  var rand3 = fruits3[Math.floor(Math.random() * fruits3.length)];

  document.getElementById("fruit1").src = rand1;
  document.getElementById("fruit2").src = rand2;
  document.getElementById("fruit3").src = rand3;
  update();

  if (rand1 == rand2 && rand2 == rand3) {
    if (rand1 == watermelon && rand2 == watermelon && rand3 == watermelon) {
      raha = (raha - panos);
      raha += (panos * 50);
      update();
      document.getElementById('info').innerHTML = "UNBELIEVABLE JACKPOT!!!";
    }
    else if (rand1 == apple && rand2 == apple && rand3 == apple) {
      raha = (raha - panos);
      raha += (panos * 15);
      update();
      document.getElementById('info').innerHTML = "Fantanstic JACKPOT!!!";
    }
    else {
      lose();
    }
  }
  else if ((rand1 == rand2 )|| (rand2 == rand3) || (rand3 == rand1)) {
    if (rand1 == watermelon && rand2 == watermelon || rand2 == watermelon && rand3 == watermelon || rand3 == watermelon && rand1 == watermelon) {
      raha = (raha - panos);
      raha += (panos * 5);
      update();
      document.getElementById('info').innerHTML = "Ultra JACKPOT!!!";
    }
    else if (rand1 == apple && rand2 == apple || rand2 == apple && rand3 == apple || rand3 == apple && rand1 == apple) {
      raha = (raha - panos);
      raha += (panos * 3);
      update();
      document.getElementById('info').innerHTML = "Multi JACKPOT!!!";
    }
    else {
      lose();
    }
  }
  else {
    lose();
  }
}

function lose() {
  raha = (raha - panos);
  update();
  document.getElementById('info').innerHTML = "Ei voittoa.";
  if (raha < 1) {
    alert("Hävisit pelin");
    if (confirm("Haluatko pelata uudestaan? Tai surra rauhassa ") == true) {
      location.reload();
    }
    else {
      document.getElementById("button1").disabled = true;
      document.getElementById("button2").disabled = true;
      document.getElementById("button3").disabled = true;
      document.getElementById("gameon").disabled = true;
      document.body.style.backgroundColor = "#f3f3f3";
      document.body.style.backgroundImage = "url('https://github.com/tumeex/FruitGame.github.io/blob/69c55f0b8b6bcf64d181e5831c527bda25e0db94/content/gameover1.JPG')";
      var audio = new Audio('content/sad_violin.mp3');
      audio.play();
    }
  }
}
