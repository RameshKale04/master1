

$(document).ready(function() {
    // Add a hover effect to table rows
    $('#my-table tbody tr').hover(
      function() {
        $(this).addClass('hover');
      },
      function() {
        $(this).removeClass('hover');
      }
    );
  });
  
