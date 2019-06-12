$(document).ready(function() {
// Submit form with id function.
$("#btn_id").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var message= $("#message").val();
if (validation()) // Calling validation function.
{
$("#form_id").submit(); // Form submission.
alert("submitted successfully");
}
});
$(document).ready(function(){
$(".imgs").click(function(){
 $(".d").toggle();
 });
  });
$(document).ready(function(){
$(.click2).click(function(){
 $(".development-hidden").toggle();
 $(".development-show").toggle();
 });
  });
$(document).ready(function(){
$(.click3).click(function(){
 $(".product-hidden").toggle();
 $(".product-show").toggle();
 });
  });