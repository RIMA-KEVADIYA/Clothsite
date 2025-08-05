$(document).ready(function () {
  $(".products").slice(0, 2).show();
  $("#viewmore").on("click", function (e) {
    e.preventDefault();
    $(".products:hidden").slice(0, 2).slideDown();
    if ($(".products:hidden").length == 0) {
      $("#viewmore").text("No Content").addClass("noContent");
    }
  });
});
