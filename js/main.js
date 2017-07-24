
var pseudo="" ;

console.log($("#chat").height());


var Robot;

// var Robot = ["Bonjour " + pseudo, "phrase 2", "phrase 3", "phrase 4", "je dois partir"];

var personne;




var total = 0;

// $("#lancerJeu").click(function(){$("#presentation").hide();
// pseudo = $("#presentation :text").val();
// Robot = ["Bonjour " + pseudo, "phrase 2", "phrase 3", "phrase 4", "je dois partir"];
// $("#ecrire").show();
// $("#chat").show();})
var tamp=0;

function chatter(personne) {
  pseudo = $("#presentation :text").val();
  var girl1 = ["Bonjour " + pseudo + " Comment vas tu ?", "Est ce que tu geek ?","Moi j'aime bien geeker","Tu me conseille quel explorateur pour explorer ton coeur ?", "je dois partir" ];
  var girl2 = ["Bonjour " + pseudo, "Mon pere travaille chez Nitendo , j'ai un corps de Ds !","tu es mieux que mes .EXE tu es plus RAR." ,"Veux tu etre ma pokeball?", "je dois partir"];
  var girl3 = ["Miaoou " + pseudo, "Comment chat va ?", "Miaoouuuuuu maiouuuuuu", "je dois partir"];

$("#presentation").hide();
$("#girls").hide();
$("#ecrire").show().css('display', 'flex');
$("#chat").show().css('display', 'flex');



if (personne == 'girl1') {
  Robot = girl1;
} else if  (personne == 'girl2' ) {
  Robot = girl2;
} else {
  Robot = girl3;
}

$("#fillechoisie").append($("<img src= 'img/" + personne +".png'></img>"));




}

function typing () {

  $("#chat").append($("<img class='ktyping'></img>").attr("src","img/typing3.gif"));
  // $("#chat img:last").addClass("ktyping");
}

function RobotChat() {
  console.log($("#chat p:last").height());
pseudo = $("#presentation :text").val();
    $("#chat img:last").remove();
    $("#chat").append($("<p class='karolina'></p>").text(Robot[0]));


    $("#chat").scrollTop( $("#chat").height() );

// $("#chat p:last").addClass("karolina");
Robot.shift();
if ($("#chat p:last").text()=="je dois partir") {
  $("#chat").append($("<img class ='ktyping'></img>").attr("src","img/aurevoir.gif"));
  $("#chat").scrollTop( $("#chat").height() );

}


}

function chatting(){
  $("#chat").append("<p class='utilisateur'>" + $("#ecrire :text").val() + "</p>");
  $("#ecrire :text").val("")
  $("#chat").scrollTop( $("#chat").height() );
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
