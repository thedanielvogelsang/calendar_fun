$(document).ready(function(){
  $("td").click(function(){
    $("#event-form-window").toggle();
  });
  $("#submit").click(function(e){
    (e).stopPropogation();
    let start_time = $("#start-time").val()
    console.log(start_time)
  });
});
