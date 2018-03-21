$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameFirstInput = $("input#nameFirst").val();
    var nameLastInput = $("input#nameLast").val();

    $(".nameFirst").text(nameFirstInput);
    $(".nameLast").text(nameLastInput);

    $("#letter").show();
    $("#formOne").hide();
    event.preventDefault();
  });
  $("#return").click(function(){
    $("#letter").hide();
    $("#formOne").show();
    $("#formOne").trigger("reset");
  });
});
