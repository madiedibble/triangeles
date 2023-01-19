// inspired by https://www.nikkal.com/grids
let backgroundTextures = [];
let colourValues;
// preload the greyscale textures
function preload(){
  // use a loop to load the similarly names images into an array
  for(let i = 1; i <=4 ; i++){
    // backgroundTextures.push(loadImage("images/texture-trans"+i+".png")); // old school concatenation 
    backgroundTextures.push(loadImage(`images/texture-trans${i}.png`)); // ES6 template literal with string interpolation
  }
}
function setup() {
  // sample colour values from source image
  colourValues = [color('#000000'), color('#ff8000'), color('#00cc00'), color('#cc0000')]
  createCanvas(800, 800);
  background(238)
  const CELL_SIZE = 200;
  // values used to offset positioning and sizing to create a more naturalistic look
  let xVariation = 2;
  let yVariation = 3;
  let widthVariation = 5;
  let heightVariation = 2;
  let x = 0;
  let y = 0;
  noStroke();
  // loop through the columns
  while(y < height){
    // loop through the rows
    while(x < width){
      // choose a random colour
      tint(random(colourValues)); 
      // // choose a random texture
      let img = random(backgroundTextures);
      // place the texture with randomised offsets
      image(img, x + random(-xVariation, xVariation), y+ random(-yVariation, yVariation),CELL_SIZE + random(-widthVariation, widthVariation), CELL_SIZE + random(-heightVariation, heightVariation));      
      x+= CELL_SIZE;
    }
    y+= CELL_SIZE;
    // reset x so that the next row will render
    x = 0;
  }
}