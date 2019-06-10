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
$(document).ready(Function(){
$(.click1).click(Function(){
 $(".hidden").toggle();
 $(".show").toggle();
 });
  });
$(document).ready(Function(){
$(.click2).click(Function(){
 $(".hidden").toggle();
 $(".show").toggle();
 });
  });
$(document).ready(Function(){
$(.click3).click(Function(){
 $(".hidden").toggle();
 $(".show").toggle();
 });
  });