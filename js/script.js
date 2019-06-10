$(document).ready(function(){
  $("form").submit(function(){
       var nameInput = $("input#name").val();
      var emailInput = $("input#email").val();
      var messageTextArea= $("textArea#message").val();
       $(".name").text(nameInput);
        $(".email").text(emailInput);
        $(".message").text(messageTextArea);
    $("#story").show();
      event.preventDefault();
  });
});