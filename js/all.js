var $page = $(".page");
$(".menu-toggle").on("click", function () {
  $page.toggleClass("real");
});

$(".content").on("click", function () {
  $page.removeClass("real");
});
