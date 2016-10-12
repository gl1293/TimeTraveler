var randposition;
var randword = [];
var range;
var x = -10;
var x1 ;
var y1 ;
var y = 0;
var foo = new p5.Speech(); //random voice
var pickedVoice;
 
var speaker = new p5.SpeechRec('en-US'); //speaker voice
speaker.continuous = true;
speaker.interimResults = true;
speaker.onResult = showResult;
var mic;

function preload() {
  textFile = loadStrings("aliceCooked.txt");
  badFont = loadFont('font.ttf');
  fancyFont = loadFont('OLD.ttf');
}

function setup() {
  createCanvas(600,400);
  range = textFile.length;
  noStroke();
  foo.setVoice('Google UK English Female');
  
  speaker.start(); // start listening
  mic = new p5.AudioIn();
  mic.start();
  
  // start off
  pickword();
  text(randword,x,y)
}

//////////////////////////////////////////////////
function draw() {
  voice();
  keyTyped();
  fill(random(255),random(255),random(255));
  textFont(fancyFont);
  textSize(30);
  //background(0);
  text(randword,x,y);
  
  if (y == height+20) {
    pickword();
    x = random(20,width-20);
    y = 10;
  }
  if (y < height+20) {
    y += 2;
    x += floor(random(4));
    x -= floor(random(4));
  }
}

//////////////////////////////////////////////////////
/*function showResult()
{
  x1 = floor(random(width));
  y1 = floor(random(height));
  text(speaker.resultString, x1, y1);
  textSize(50);
  fill(255);
  stroke(255,200,0)
  strokeWeight(30)
  console.log(speaker.resultStrvving); 
}
*/











//do not touch
//////////////////////////////////////////////
function pickword() {
    randposition = floor(random(range));
    randword = textFile[randposition];
}
//////////////////////////////////////////////
function voice() {
  foo.setVoice(pickedVoice);
  var thepitch = map(y, 0, height, 2, 0.01);
  var therate = map(y, 0, height, 0.1, 2);
  foo.setPitch(thepitch);
  foo.setRate(therate);
  foo.speak(randword);
}

///////////////////////////////////////////////////
function keyTyped() {
  if (key == 'v'){
    rangeVoice = random(foo.voices.length);
    pickedVoice = floor(rangeVoice);
    foo.setVoice(pickedVoice);
  }
}
