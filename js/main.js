
var pseudo = prompt("Quel est ton nom ?");
console.log(pseudo);
var Robot = ["Bonjour" + pseudo, "phrase 2", "phrase 3", "phrase 4", "je dois partir"];

var total = 0;
// var jq = $.noConflict();



// $(document).ready(function(){


function typing () {
  $("#chat").append($("<img></img>").attr("src","img/typing.gif"));
  $("#chat img:last").addClass("ktyping");
}

function chatting(){
  $("#chat").append("<p class='utilisateur'>" + $("#ecrire :text").val() + "</p>");
  $("#ecrire :text").val("")
  // $("#chat p:last").addClass("utilisateur");

  setTimeout(typing

  ,1000);
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
}




$('#ecrire :text').keypress(function(e){
    if( e.which == 13 ){
        chatting();
    }
});


$("#ecrire :submit").click(chatting);





// });
// .addClass("utilisateur")
