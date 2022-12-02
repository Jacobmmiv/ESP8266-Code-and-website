const serverURL = 'Put your Project link';
let socket;

let fillColor = '#000000';
let isOn = false;

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  background(0);
  
  // Connect socket.io
  console.log("Connection > Trying to connect to socket...");
  socket = io.connect(serverURL);
  socket.on("connect", function () {
    console.log("Connected");
  });
}

function draw() {
  
  background(0);
  
  stroke(255);
  fill(fillColor);
  ellipse(width/2, height/4, 200);

  
}

function mousePressed() {
  
  // Check if mouse is within the circle
  if (dist(mouseX, mouseY, width/2, height/4) < 100) {
    isOn = !isOn;
    if(isOn) {
      fillColor = '#ffffff';
    } else {
      fillColor = '#000000';
    } 
    socket.emit('buttonGlitch', isOn);
  }
  
 
  
}

