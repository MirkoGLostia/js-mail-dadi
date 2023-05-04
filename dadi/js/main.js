/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto
*/

// variabili
let user, pc, result;

// ricevere input bottone dello user
submit.onclick = function () {
    
    // generare numero random per user e pc
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      
      user = parseInt(randomIntFromInterval(1, 6));
      pc = parseInt(randomIntFromInterval(1, 6));


      // output risultati
      document.getElementById("user-dice").innerText = user;
      document.getElementById("pc-dice").innerText = pc;




      // fare la differenza (player - pc)
      result = (user - pc);
      
      
      if (result > 0) {
         // se valore positivo vince player
         document.getElementById("result-of-roll").innerText = "User wins";

      } 
      else if (result < 0) {
        // se valore negativo vince pc
        document.getElementById("result-of-roll").innerText = "Pc wins";

      }
      else {
        // altrimenti patta
        document.getElementById("result-of-roll").innerText = "Sport wins";

      }
}



