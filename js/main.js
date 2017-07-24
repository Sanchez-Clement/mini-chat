
var pseudo="" ;
var Robot = ["Bonjour " + pseudo, "phrase 2", "phrase 3", "phrase 4", "je dois partir"];





var total = 0;

$("#lancerJeu").click(function(){$("#presentation").hide();
pseudo = $("#presentation :text").val();
Robot = ["Bonjour " + pseudo, "phrase 2", "phrase 3", "phrase 4", "je dois partir"];
$("#ecrire").show();
$("#chat").show();})

function typing () {
  $("#chat").append($("<img class='ktyping'></img>").attr("src","img/typing.gif"));
  // $("#chat img:last").addClass("ktyping");
}

function RobotChat() {

    $("#chat img:last").remove();
    $("#chat").append($("<p class='karolina'></p>").text(Robot[0]));
// $("#chat p:last").addClass("karolina");
Robot.shift();
if ($("#chat p:last").text()=="je dois partir") {
  $("#chat").append($("<img class ='ktyping'></img>").attr("src","img/aurevoir.gif"));
  // $("#chat img:last").addClass("ktyping");

}


}

function chatting(){
  $("#chat").append("<p class='utilisateur'>" + $("#ecrire :text").val() + "</p>");
  $("#ecrire :text").val("")
  // $("#chat p:last").addClass("utilisateur");

  setTimeout(typing,1000);
  setTimeout(RobotChat , 3000);
}




$('#ecrire :text').keypress(function(e){
    if( e.which == 13 ){
        chatting();
    }
});


$("#ecrire :submit").click(chatting);





// });
// .addClass("utilisateur")
