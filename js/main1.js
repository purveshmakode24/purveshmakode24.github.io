//automatic typeWriter code. pdm :)
var i = 0;
var txt = 'IT Junior Undergraduate | Travel Buff ';
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}