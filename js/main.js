var Robot = ["phrase 1", "phrase 2", "phrase 3", "phrase 4"];


// var jq = $.noConflict();



$(document).ready(function(){



$("#ecrire :submit").click(function(){
  $("#chat").append("<p>" + $("#ecrire :text").val() + "</p>");
  $("#ecrire :text").val("")
  $("#chat p:last").addClass("utilisateur");
  setTimeout(function () {
    $("#chat").append($("<p></p>").text(Robot[0]));
$("#chat p:last").addClass("karolina");
Robot.shift();
  }, 1000);
});






});
// .addClass("utilisateur")
