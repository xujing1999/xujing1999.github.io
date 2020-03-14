var CN;
var EN;
var mainCanvas;
var ell;
var bg;
var slider;
var header;
var decoration__rect;
var decoration__circ;

var pc1;
var pc2;
var pc3;
var pc4;
var pc5;
var pc6;
var pc7;
var pc8;
var pc9;
var titil;
var titil1;
var titil2;
var titil3;
var titil4;
var titil5;
var titil6;
var titil7;
var titil8;
var titil9;
var k1;
var k2;
var k3;
var k4;
var k5;
var k6;
var k7;
var k8;
var k9;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;

var section1;
var section2;


var p1;
var p2;
var p3;
var p4;
var p5;

var div1;
function setup() {
  frameRate(40);
 //selection
  slider = select(".slider");
  header = select(".header");
  decoration__rect = select(".decoration__rect");
  decoration__circ = select(".decoration__circ");
  section1 = select("section1");
  section2 = select("section2");
  pc1 = select(".pc1");
  pc2 = select(".pc2");
  pc3 = select(".pc3");
  pc4 = select(".pc4");
  pc5 = select(".pc5");
  pc6 = select(".pc6");
  pc7 = select(".pc7");
  pc8 = select(".pc8");
  pc9 = select(".pc9");
  titil1 = select(".titil1");
  titil2 = select(".titil2");
  titil3 = select(".titil3");
  titil4 = select(".titil4");
  titil5 = select(".titil5");
  titil6 = select(".titil6");
  titil7 = select(".titil7");
  titil8 = select(".titil8");
  titil9 = select(".titil9");
  bg = select(".bg");


  //create id class
  CN = createP("EN");
  CN.class("CN");
  EN = createP("·CN");
  EN.class("EN");
  p1 = createP("Intermediales Gestalten.");
  p2 = createP("About us,");
  p3 = createP("Liegt  in  Shanghai");
  p4 = createP("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In Kooperation mit der Fakultät für Architektur des Karlsruher Instituts für Technologie (KIT) wurde ein auf die besonderen Vorteile des Standorts Karlsruhe abgestimmter Teilstudiengang entwickelt.");
  p5 = createP("„Intermediales Gestalten“ ")
  div1 = createDiv();
  p1.id("p1");
  p2.id("p2");
  p3.id("p3");
  p4.id("p4");
  p5.id("p5")
  div1.class("div1");


 //child parent
  p4.parent(div1);
 // div1.parent(section2);
 // p1.parent(section1);
 // p2.parent(section1);
 // p3.parent(section1);


 //section3 里titil mouseOver 其他titil变暗，鼠标处出现相应图片
 pc1.mouseOver(im);
}

function im(){
  titil2.class("titil");
  titil3.class("titil");
  titil4.class("titil");
  titil5.class("titil");
  titil6.class("titil");
  titil7.class("titil");
  titil8.class("titil");
  titil9.class("titil");
  img1 = loadImage('1.jpeg');
  image(img1,mouseX,mouseY);
}

function draw() {
  //canvas
  mainCanvas = createCanvas(1440,3500);
  clear();
  mainCanvas.class("mainCanvas");
  mainCanvas.position(0,0);

  //mouse decoration
  slider.value(mouseY);
  ell = ellipse(mouseX,mouseY,15,15);

  
 
  //background black/white
  if(slider.value() <= 1600 && mouseY >= 0){
    bg.class("bg");
    header.class("header");
    decoration__rect.class("decoration__rect");
    decoration__circ.class("decoration__circ");
  }else if(mouseY > 1600 && mouseY <= 3000){
    bg.class("bg1");
    header.class("header1");
    decoration__rect.class("decoration__rect1");
    decoration__circ.class("decoration__circ1");
  }else if(mouseY <= 3800&& mouseY >= 3000){
    bg.class("bg");
    header.class("header");
    decoration__rect.class("decoration__rect");
    decoration__circ.class("decoration__circ");
  }
  

}