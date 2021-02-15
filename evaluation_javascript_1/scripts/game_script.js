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

                launch.addEventListener("click", resetGame);             
        }

/*--------------------------------------------------------------------------------------------------------------------*/        

        function changePlayer() { 

            if ((player_1.getElementsByTagName("img").length > 0) && (player_1.getElementsByTagName("img")[0].style.visibility === "visible")) {
                player_1.getElementsByTagName("img")[0].style.visibility = "hidden";

                if (allScoresPlayer2.length < 1) {
                    resetScore(player_2);
                } 

                allScoresPlayer1 = allScoresPlayer1.concat(scoresRoundPlayer1);
                                
                var finalScorePlayer1 = allScoresPlayer1.reduce((a, b) => a + b, 0);

                resetScore(player_1);

                if (finalScorePlayer1  > 0) {
                    player_1.lastChild.textContent = finalScorePlayer1;

                    if (finalScorePlayer1 > 99) {

                        victoryGame(player_1, allScoresPlayer1);

                        allScoresPlayer2.length = 0;
                        player_2.lastChild.textContent = "";
                        scoresRoundPlayer2.length = 0;
                        finalScorePlayer1 = 0;
                    } 
                } 

                scoresRoundPlayer1.length = 0;
                document.getElementById("round_player_1").innerText = "";
                document.getElementById("face_dice").style.left = "0px";
                player2();

            } else if ((player_2.getElementsByTagName("img").length > 0) && (player_2.getElementsByTagName("img")[0].style.visibility === "visible")) {
                player_2.getElementsByTagName("img")[0].style.visibility = "hidden";

                if (allScoresPlayer1.length < 1) {
                    resetScore(player_2);
                }

                allScoresPlayer2 = allScoresPlayer2.concat(scoresRoundPlayer2);

                var finalScorePlayer2 = allScoresPlayer2.reduce((a, b) => a + b, 0); 
                
                resetScore(player_2);

                if (finalScorePlayer2  > 0) {
                    player_2.lastChild.textContent = finalScorePlayer2;

                    if (finalScorePlayer2 > 99) {
                        
                        victoryGame(player_2, allScoresPlayer2);

                        allScoresPlayer1.length = 0;
                        player_1.lastChild.textContent = "";
                        scoresRoundPlayer1.length = 0;
                        finalScorePlayer2 = 0;
                    }
                } 

                scoresRoundPlayer2.length = 0;
                document.getElementById("round_player_2").innerText = "";
                document.getElementById("face_dice").style.left = "0px";
                player1();
              }
        }

/*--------------------------------------------------------------------------------------------------------------------*/         

        function currentScore() {
            var scoreDice, roundPlayer1, roundPlayer2;

            if ((player_1.getElementsByTagName("img").length > 0) && (player_1.getElementsByTagName("img")[0].style.visibility === "visible")) {   
                roundPlayer1 = document.getElementById("round_player_1");

                scoreDice = getScoreDice(scoresRoundPlayer1); 
                displayScoreDice(scoreDice());

                let finalRoundPlayer1 = scoresRoundPlayer1.reduce((a, b) => a + b, 0);

                roundPlayer1.textContent = finalRoundPlayer1;
                roundPlayer1.innerHTML += "<br/><sup> +" + scoreDice() + "</sup>";

                    if  (scoreDice() < 2) { 
                        player_1.getElementsByTagName("img")[0].style.visibility = "hidden";
                        scoresRoundPlayer1.length = 0;
                        roundPlayer1.textContent = "";

                        player2();
                    }

            } else if ((player_2.getElementsByTagName("img").length > 0) && (player_2.getElementsByTagName("img")[0].style.visibility === "visible")) {
                roundPlayer2 = document.getElementById("round_player_2");

                scoreDice = getScoreDice(scoresRoundPlayer2);
                displayScoreDice(scoreDice());

                let finalRoundPlayer2 = scoresRoundPlayer2.reduce((a, b) => a + b, 0);

                roundPlayer2.textContent = finalRoundPlayer2;
                roundPlayer2.innerHTML += "<br/><sup> +" + scoreDice() + "</sup>";

                    if  (scoreDice() < 2) {
                        player_2.getElementsByTagName("img")[0].style.visibility = "hidden";
                        scoresRoundPlayer2.length = 0;
                        roundPlayer2.textContent = "";

                        player1();
                    } 
              }
        }

/*************************** Process Game Functions *****************************/



/************************** Process score Functions ******************************/

        function getScoreDice(table) {
            var scoreDice = Math.floor(Math.random()*7); 

        if (scoreDice > 1) {
            table.push(scoreDice);
        }   else if (scoreDice === 0) {
                scoreDice++;
            }   else if (scoreDice === 1) {
                scoreDice = scoreDice;
                }
                    function innerGetScoreDice() {
                        return scoreDice;
                    }
            return innerGetScoreDice;
        }

        function displayScoreDice(score) {
            var faceDice = document.getElementById("face_dice");

            switch(score) {
                case 1:
                    faceDice.style.left = "-127px";
                    break;   
                case 2:
                    faceDice.style.left = "-254px";
                    break;
                case 3:
                    faceDice.style.left = "-381px";
                    break;
                case 4:
                    faceDice.style.left = "-508px";
                    break;
                case 5:
                    faceDice.style.left = "-635px";
                    break;
                case 6:
                    faceDice.style.left = "-762px";
                    break;
                
                default:
                    faceDice.style.left = "0px";
                    return;
            }
        }

/************************** Process score Functions ******************************/  



/************** Process (victory, reset score, reset game) Functions *************/

        function victoryGame(player, table) {
            player.firstChild.style.color = "green";
            player.lastChild.textContent = "Bravo ! " + player_2.getAttribute("id") + " à gagné la partie";
            player.lastChild.style.fontSize = "15px";
            player.lastChild.style.color = "green";
            table.length = 0;
        }

        function resetScore(player) {
            player.firstChild.style.color = "inherit";
            player.lastChild.style.fontSize = "inherit";
            player.lastChild.style.color = "inherit";
            player.lastChild.textContent = "";
        }

        function resetGame() {
            return window.location.reload();
        }

/************** Process (victory, reset score, reset game) Functions *************/

        
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




