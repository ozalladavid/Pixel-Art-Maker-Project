// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid()  {
  let w, h;
  w = $('#input_width').val();
  h = $('#input_height').val();
  for(tr=1; tr<=h; tr++) { // Build table rows
    $('#pixel_canvas').append('<tr></tr>');
  }
  for(td=1; td<=w; td++){ // Build table columns
    $('tr').append('<td></td>');
  }
}

// Submit button
$('#sizePicker').submit(function(e) {
  e.preventDefault();  //prevent form from submitting
  let tr = $('#pixel_canvas').find('tr');
  tr.remove();
  makeGrid();
});

// Aplying color to td's background
$('#pixel_canvas').on('click','td', function(e) {
  let color = $('#colorPicker').val();
  $(e.target).css('background-color', color);
});

// Test alert
// $('#sizePicker').submit(function(e) {
//     e.preventDefault();  //prevent form from submitting
//     alert('Handler for .submit() called.' + makeGrid());
// });

