// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

jQuery(document).ready(function(){

//////////////////////////////

function deleteGrid(){
    $('#pixel_canvas').children().remove()
    event.preventDefault();
}

//////////////////////////////

function paintCell (cell, c_color) {
    let color = "";
    if (c_color === undefined){
        color = $('#colorPicker').val();
    } else {
        color = c_color;
    }
    $(cell).attr('bgcolor',color);
    // event.preventDefault();
}

//////////////////////////////
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

//////////////////////////////


function clearGrid(){
    // let grid = $('#pixel_canvas').children();
    // let grid = $('#pixel_canvas');
    // grid.each(paintCell(cell,"white"))
    // const str = JSON.stringify(grid);
    // console.log("clear grid: " + str);
    console.log("clear grid");
    event.preventDefault();

}

//////////////////////////////
function paintGrid(){
    console.log("paint grid");
    event.preventDefault();
}


//////////////////////////////

$("#grid_submit").click(makeGrid);
$("#clear_grid").click(clearGrid);
$("#paint_grid").click(paintGrid);
$("#delete_grid").click(deleteGrid);

//////////////////////////////

// Painting cell outside function
$('#pixel_canvas').on('click', 'td', function(){
    paintCell(this, undefined);
});
//////////////////////////////

});



