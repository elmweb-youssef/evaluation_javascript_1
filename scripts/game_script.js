(function(){  

    window.addEventListener("DOMContentLoaded", function() { 

/************************ Constants and variables ******************************/

        const launch = document.getElementById("launchGame");
        const rollDice = document.getElementById("roll_dice");
        const hold = document.getElementById("hold");
        const player_1 = document.getElementById("player_1");
        const player_2 = document.getElementById("player_2");

        var allScoresPlayer1 = [];
        var allScoresPlayer2 = [];
        var scoresRoundPlayer1 = [];
        var scoresRoundPlayer2 = [];

/************************ Constants and variables ******************************/



/*********************** Players and initGame Functions ************************/

        function initPlayerDefault() {
            player1();   
        }

        function player1() {
            currentPlayer(player_1);
        }

        function player2() {
            currentPlayer(player_2);
        }

/*********************** Players and initGame Functions ************************/     



/*************************** Process Game Functions ****************************/

        function currentPlayer(player) {
            var currentPlayer = new Image();

            if (player.getElementsByTagName("img").length < 1) {
                player.firstChild.style.position = "relative";

                currentPlayer.src = "images/current_player.png";
                currentPlayer.setAttribute("class", player.getAttribute("id"));

                currentPlayer.style.position = "absolute";
                currentPlayer.style.minWidth = "30px";
                currentPlayer.style.height = "30px";
                currentPlayer.style.marginLeft = "2%";

                player.firstChild.appendChild(currentPlayer);
                player.getElementsByTagName("img")[0].style.visibility = "visible";
            }   else {
                    player.getElementsByTagName("img")[0].style.visibility = "visible";
                }              
        }

/*--------------------------------------------------------------------------------------------------------------------*/        

        function changePlayer() { 

            if ((player_1.getElementsByTagName("img").length > 0) && (player_1.getElementsByTagName("img")[0].style.visibility === "visible")) {
                player_1.getElementsByTagName("img")[0].style.visibility = "hidden";

                player2();

            } else if ((player_2.getElementsByTagName("img").length > 0) && (player_2.getElementsByTagName("img")[0].style.visibility === "visible")) {
                player_2.getElementsByTagName("img")[0].style.visibility = "hidden";

                player1();
              }
        }


        
        launch.addEventListener("click", initPlayerDefault);    

        window.addEventListener("click", function(e) {
            
            if (e.target === rollDice) {
                currentScore();
                e.stopPropagation();
            } else if (e.target === hold) {
                changePlayer();
                e.stopPropagation();
            } 

        }, false);


    });    // domContentLoading

})()       // auto calling function




