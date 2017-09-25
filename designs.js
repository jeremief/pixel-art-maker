// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

//Capture values of grid
const height = $('#input_height').val();
const width = $('#input_width').val();
const color = $('#colorPicker').val();

console.log('height = '+ height);
console.log('width = ' + width);
console.log('color = '+ color);
console.log("hi");

}

$("#submission").on('click', makeGrid());

// makeGrid();


