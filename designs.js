// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

jQuery(document).ready(function(){


function makeGrid() {

// Your code goes here!

//Capture values of grid
const height = $('#input_height').val();
const width = $('#input_width').val();
const color = $('#colorPicker').val();

alert('height = '+ height);
alert('width = ' + width);
alert('color = '+ color);

}

$(":submit").click(makeGrid);

});

