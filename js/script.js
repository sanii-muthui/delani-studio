$(document).ready(function(){
	$("#d").hide();
	$("#p").hide();
	$("#m").hide();

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
$(document).ready(function() {
$("#submit").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var message = $("#message").val();
$("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
if (name == '' || email == '' || message == '') {
alert("Please Fill Required Fields");
} else {
alert("submitted");
}
$("#form")[0].reset(); // To reset form fields 
});
});
$(document).ready(function(){
	$("click").click(function(){
    
	});
});