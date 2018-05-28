var emptyCards, i;

$(".grid.with-empty-card").each(function() {
  emptyCards = [];
  for (i = 0; i < $(this).find(".card").length; i++) {
    emptyCards.push(
      $("<ul>", {
        class: "card is-empty"
      })
    );
  }
  $(this).append(emptyCards);
});
