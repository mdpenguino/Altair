var emptyCells, i;

$('.grid.with-empty-cells').each(function() {
  emptyCells = [];
  for (i = 0; i < $(this).find('.cell').length; i++) {
    emptyCells.push($('<ul>', {
      class: 'cell is-empty'
    }));
  }
  $(this).append(emptyCells);
});
