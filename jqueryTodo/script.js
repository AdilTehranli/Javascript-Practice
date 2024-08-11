$(document).ready(function () {
  $("#btn").on("click", function () {
    var inpValue = $("#inp").val();

    if (inpValue !== "") {
      var elem = $("<li></li>").text(inpValue);
      $(elem).append("<button class='rem'>X</button>");
      $(elem).append(
        "<button class='icon'><i class='fa-solid fa-check'></i></button>"
      );
      $(".list").append(elem);
      $("#inp").val("");
      $(".rem").on("click", function () {
        $(this).parent().remove();
      });
      $(".icon").on("click", function () {
        $(this).parent().css("text-decoration", "line-through");
      });
    }
  });
});

