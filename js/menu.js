// JavaScript Document

function dropmenu() {
  var x = document.getElementById("dm");
  var y = document.getElementById("btn");

  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
    x.style.opacity = "0";
    y.style.height = "6em";
    y.style.width = "6.5em";
    y.style.background = "rgba(255, 255, 255, 0)";


  } else {
    x.style.visibility = "visible";
    x.style.opacity = "1";
    y.style.height = "100em";
    y.style.width = "100em";
    y.style.background = "rgba(255, 255, 255, 0.9)";

  }
}
