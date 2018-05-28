var emptyCells, i;

$(".grid.with-empty-cells").each(function() {
  emptyCells = [];
  for (i = 0; i < $(this).find(".card").length; i++) {
    emptyCells.push(
      $("<ul>", {
        class: "card is-empty"
      })
    );
  }
  $(this).append(emptyCells);
});
