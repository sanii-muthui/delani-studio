// $(document).ready(function() {
// // Submit form with id function.
// $("#btn_id").click(function() {
// var name = $("#name").val();
// var email = $("#email").val();
// var message= $("#message").val();
// if (validation()) // Calling validation function.
// {
// $("#form_id").submit(); // Form submission.
// alert("submitted successfully");
// }
// });
$(document).ready(function(){
  $("#d-click").click(function(){
    $("#d").toggle();
  });
});
$(document).ready(function(){
  $("#p-click").click(function(){
    $("#p").toggle();
  });
});
$(document).ready(function(){
  $("#m-click").click(function(){
    $("#m").toggle();
  });
});
// $(document).ready(function(){
// $(.click2).click(function(){
//  $(".development-hidden").toggle();
//  $(".development-show").toggle();
//  });
//   });
// $(document).ready(function(){
// $(.click3).click(function(){
//  $(".product-hidden").toggle();
//  $(".product-show").toggle();
//  });
//   });