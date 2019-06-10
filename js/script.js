$(document).ready(function(){
  $("form").submit(function(){
       var nameInput = $("input#name").val();
      var emailInput = $("input#email").val();
      var messageTextArea= $("textArea#message").val();
       $(".name").text(nameInput);
        $(".email").text(emailInput);
        $(".message").text(messageTextArea);
    alert("submitted");
      event.preventDefault();
  });
});
$(document).ready(function(){
$(.click1).click(function(){
 $(".deisgn-hidden").toggle();
 $(".design-show").toggle();
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