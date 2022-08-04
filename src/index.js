const bt1 = document.getElementById("b1");
const bt2 = document.getElementById("b2");
const bt3 = document.getElementById("b3");
const bt4 = document.getElementById("b4");
const bt5 = document.getElementById("b5");
const bt6 = document.getElementById("b6");
const bt7 = document.getElementById("b7");
const bt8 = document.getElementById("b8");
const bt9 = document.getElementById("b9");
const turnd = document.getElementById("turn");
const winnerd = document.getElementById("winnerm");
const rebtn = document.getElementById("resbtn");
const linedi = document.getElementById("lined");
const lineho = document.getElementById("lineh");
const lineve = document.getElementById("linev");

let xturn = true;
let O = "O";
let X = "X";

function startGame() {
  //When buttons clicked
  bt1.onclick = function () {
    click(bt1);
  };
  bt2.onclick = function () {
    click(bt2);
  };
  bt3.onclick = function () {
    click(bt3);
  };
  bt4.onclick = function () {
    click(bt4);
  };
  bt5.onclick = function () {
    click(bt5);
  };
  bt6.onclick = function () {
    click(bt6);
  };
  bt7.onclick = function () {
    click(bt7);
  };
  bt8.onclick = function () {
    click(bt8);
  };
  bt9.onclick = function () {
    click(bt9);
  };
  //Change the button look
  function click(b) {
    if (xturn === true) {
      turnd.innerText = "Turn: O";
    } else {
      turnd.innerText = "Turn: X";
    }
    if (xturn === true && b.innerText !== O) {
      xturn = false;
      b.innerText = X;
    }
    if (xturn === false && b.innerText !== X) {
      xturn = true;
      b.innerText = O;
    }
    checkGameOver();
  }
  //Check if game over
  function checkGameOver() {
    if (
      (bt1.innerText === X && bt2.innerText === X && bt3.innerText === X) ||
      (bt4.innerText === X && bt5.innerText === X && bt6.innerText === X) ||
      (bt7.innerText === X && bt8.innerText === X && bt9.innerText === X) ||
      (bt1.innerText === X && bt4.innerText === X && bt7.innerText === X) ||
      (bt2.innerText === X && bt5.innerText === X && bt8.innerText === X) ||
      (bt3.innerText === X && bt6.innerText === X && bt9.innerText === X) ||
      (bt1.innerText === X && bt5.innerText === X && bt9.innerText === X) ||
      (bt3.innerText === X && bt5.innerText === X && bt7.innerText === X)
    ) {
      gameOver(X, "v");
    }
    if (
      (bt1.innerText === O && bt2.innerText === O && bt3.innerText === O) ||
      (bt4.innerText === O && bt5.innerText === O && bt6.innerText === O) ||
      (bt7.innerText === O && bt8.innerText === O && bt9.innerText === O) ||
      (bt1.innerText === O && bt4.innerText === O && bt7.innerText === O) ||
      (bt2.innerText === O && bt5.innerText === O && bt8.innerText === O) ||
      (bt3.innerText === O && bt6.innerText === O && bt9.innerText === O) ||
      (bt1.innerText === O && bt5.innerText === O && bt9.innerText === O) ||
      (bt3.innerText === O && bt5.innerText === O && bt7.innerText === O)
    ) {
      gameOver(O, "v");
    }
  }
  //Tell the user that it is gameover
  function gameOver(w, a) {
    if (w === X && w !== O && winnerd.innerText === "") {
      winnerd.innerText = "X won!";
      winnerd.style.visibility = "visible";
      animation(a);
    }
    if (w === O && w !== X && winnerd.innerText === "") {
      winnerd.innerText = "O won!";
      winnerd.style.visibility = "visible";
      animation(a);
    }
  }
  //restart button functionality
  rebtn.onmouseenter = function () {
    rebtn.style.backgroundColor = "lightgreen";
  };
  rebtn.onmouseleave = function () {
    rebtn.style.backgroundColor = "lightgrey";
  };
  //reseting everything
  rebtn.onclick = function () {
    //reseting the winner message
    winnerd.innerText = "";
    winnerd.style.visibility = "hidden";
    //reseting the lines
    //reseting horizontal
    lineho.style.visibility = "hidden";
    lineho.style.width = "0px";
    lineho.style.top = "160px";
    //reseting vertical
    lineve.style.visibility = "hidden";
    lineve.style.height = "0px";
    lineve.style.left = "160px";
    //reseting diagonal
    linedi.style.height = "0px";
    linedi.style.visibility = "hidden";
    //reseting the buttons
    bt1.innerText = "";
    bt2.innerText = "";
    bt3.innerText = "";
    bt4.innerText = "";
    bt5.innerText = "";
    bt6.innerText = "";
    bt7.innerText = "";
    bt8.innerText = "";
    bt9.innerText = "";
  };
}
//Winning animation
function animation() {
  //horzontal animation
  function hLineAnim() {
    if (bt1.innerText === bt2.innerText && bt1.innerText === bt3.innerText) {
      lineho.style.top = "50px";
      lineho.style.width = "250px";
      lineho.style.visibility = "visible";
      return;
    }
    if (bt4.innerText === bt5.innerText && bt5.innerText === bt6.innerText) {
      lineho.style.top = "160px";
      lineho.style.width = "250px";
      lineho.style.visibility = "visible";
      return;
    }
    if (bt7.innerText === bt8.innerText && bt8.innerText === bt9.innerText) {
      lineho.style.top = "270px";
      lineho.style.width = "250px";
      lineho.style.visibility = "visible";
      return;
    }
  }
  //vertiacl animation
  function vLineAnim() {
    if (bt1.innerText === bt4.innerText && bt1.innerText === bt7.innerText) {
      lineve.style.left = "50px";
      lineve.style.height = "250px";
      lineve.style.visibility = "visible";
      return;
    }
    if (bt2.innerText === bt5.innerText && bt5.innerText === bt8.innerText) {
      lineve.style.left = "160px";
      lineve.style.height = "250px";
      lineve.style.visibility = "visible";
      return;
    }
    if (bt3.innerText === bt6.innerText && bt6.innerText === bt9.innerText) {
      lineve.style.left = "270px";
      lineve.style.height = "250px";
      lineve.style.visibility = "visible";
      return;
    }
  }
  function dLineAnim() {
    if (bt1.innerText === bt5.innerText && bt5.innerText === bt9.innerText) {
      linedi.style.height = "400px";
      linedi.style.transform = "rotate(-45deg)";
      linedi.style.visibility = "visible";
      return;
    }
    if (bt3.innerText === bt5.innerText && bt5.innerText === bt7.innerText) {
      linedi.style.height = "400px";
      linedi.style.transform = "rotate(45deg)";
      linedi.style.visibility = "visible";
      return;
    }
  }
  vLineAnim();
  hLineAnim();
  dLineAnim();
}
startGame();
