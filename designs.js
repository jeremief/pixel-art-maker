// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

jQuery(document).ready(function(){


function deleteGrid(){
    $('#pixel_canvas').children().remove()
    event.preventDefault();
}

function makeGrid() {

//Capture values of grid
const height = $('#input_height').val();
const width = $('#input_width').val();


// Building grid html
deleteGrid();

let grid_html = "";

for (let i = 1; i <= height; i++) {
    grid_html += "<tr>";
    let j = 1;
    while (j <= width) {
        grid_html += "<td></td>";
        j++;
    }
    grid_html += "</tr>";
}

$('#pixel_canvas').prepend(grid_html);


// Prevent the refresh of the page
event.preventDefault();


}

function clear_grid(){
    // Prevent the refresh of the page
    // event.preventDefault();
    let grid = $('#pixel_canvas').children();

}

function paint_grid(){

}



$("#grid_submit").click(makeGrid);
$("#delete_grid").click(deleteGrid);


$('#pixel_canvas').on('click', 'td', function(){
    const color = $('#colorPicker').val();
    $(this).attr('bgcolor',color);
});



});



