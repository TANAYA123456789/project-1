var trex, trexImage;
var ground, groundImage;
var invisibleGround;
var ob1, ob2, ob3, ob4, ob5, ob6;
var obimg1, obimg2, obimg3, obimg4, obimg5, obimg6;
var cloud, cloudImage;

function preload() {

}

function setup() {
  createCanvas(600, 200);
  getRandomMonth();

}

function draw() {
  background("white");
  
  drawSprites();
}

function getRandomMonth() {
  let month = Math.floor(Math.random() * 12) + 1;
  console.log("Random number: " + month);

  switch(month) {
      case 1: console.log("January"); 
                           break;
      case 2: console.log("February"); 
                          break;
      case 3: console.log("March"); ;
                          break;
      case 4: console.log("April");
                           break;
      case 5: console.log("May");
                          break;
      case 6: console.log("June"); 
                          break;
      case 7: console.log("July"); 
                          break;
      case 8: console.log("August"); 
                          break;
      case 9: console.log("September"); 
                          break;
      case 10: console.log("October"); 
                          break;
      case 11: console.log("November");
                          break;
      case 12: console.log("December"); 
                          break;
      default: console.log("Invalid month"); 
  }
}

