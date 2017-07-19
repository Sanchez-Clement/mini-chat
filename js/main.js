var Robot = ["phrase 1", "phrase 2", "phrase 3", "phrase 4", "je dois partir"];


// var jq = $.noConflict();



$(document).ready(function(){



$("#ecrire :submit").click(function(){
  $("#chat").append("<p>" + $("#ecrire :text").val() + "</p>");
  $("#ecrire :text").val("")
  $("#chat p:last").addClass("utilisateur");

  setTimeout(function () {
    $("#chat").append($("<img></img>").attr("src","img/typing.gif"));
    $("#chat img:last").addClass("ktyping");
  },1000);
  setTimeout(function () {
    $("#chat img:last").remove();
    $("#chat").append($("<p></p>").text(Robot[0]));
$("#chat p:last").addClass("karolina");
Robot.shift();
if ($("#chat p:last").text()=="je dois partir") {
  $("#chat").append($("<img></img>").attr("src","img/aurevoir.gif"));
  $("#chat img:last").addClass("ktyping");
}


  }, "3000");
});





});
// .addClass("utilisateur")
