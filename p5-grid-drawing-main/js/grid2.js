
// After Piet Mondrian
function setup() {
  // colour values sampled from the source Mondrian image
  let colourValues = [color('#fff00'), color('#ff8000'), color('#00cc00'), color('#cc0000')]
  // make sure canvas dimensions are divisible by CELL_SIZE
  createCanvas(800, 800);
  const CELL_SIZE = 20;
  // array of possible cell sizes, more single cell sizes make this option for likely when randomly selected
  let sizes = [CELL_SIZE]
  let x = 0;
  let y = 0;


  strokeWeight(5);
  // assign cell width and height
  let currWidth = random(sizes); 
  let currHeight = random(sizes);
  // loop through each coloumn
  while(y < height){
    // loop through each row
    while(x < width){
      // choose a random colour
      fill(random(colourValues));     
      // draw a rectangle with the current cell width and height
      triangle(x,y, x, y + CELL_SIZE, x+ CELL_SIZE, y + CELL_SIZE/2);
      x+= currWidth;
      //  check how much width is left 
      // let availWidth = width - x;
      // select a new cell width
      currWidth = random(sizes);
      // if the newly picked cell width is greater than the remaining width, reduce it
      // while(currWidth > availWidth){
      //   currWidth -= CELL_SIZE;
      // }
    }
    y+= currHeight;
    // check how much height is left
    // let availHeight = height - y;
        // select a new cell height
    currHeight = random(sizes);
    // if the newly picked cell height is greater than the remaining height, reduce it
    // while(currHeight > availHeight){
    //   currHeight -= CELL_SIZE;
    // }
    // reset x so that the next row will render
    x = 0;
  }
}

function mousePressed(){
  reload();
}