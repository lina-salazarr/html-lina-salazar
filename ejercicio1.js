var lienzo1 = document.getElementById("lienzo");
var papel1 = document.getContext("2d");
var lienzo2 = document.getElementById("canvas2");
var papel2 = document.getContext("2d");
var imagen1 = new image();

imagen1.src =
  "https://assets.unileversolutions.com/recipes-v2/239857.jpg?imwidth=1600";
imagen1.addEventListener("load", dibujar);

function dibujar() {
  papel1.drawImage(imagen1, 200, 200, 100, 100);
  papel2.drawImage(imagen1, 600, 0, 100, 100);
}
