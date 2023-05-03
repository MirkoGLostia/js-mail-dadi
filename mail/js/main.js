/*
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
QUI ricordatevi che non è concesso usare altro oltre quello che abbiam visto oggi.
*/


// variabili e array
let prova, userMail;

let inLista = -1;

const listaInvitati = ["deric.liz@mail.com", "mari.alv@mail.com", "jose.ferri@mail.com", "franco.pess@mail.com", "carmine.kouli@mail.com", "fed.nes@mail.com", "diane.dior@mail.com", "gloria.gerry@mail.com", "garnout.pinout@mail.com", "fury.mendez@mail.com", ];



// ricezione dati da input bottone

submit.onclick = function() {
    
    userMail = document.getElementById("user-mail").value;
    
    console.log(userMail);



    // debug
    prova = "carmine.kouli@mail.com";    



    // ciclare array
    for (let i = 0; i < listaInvitati.length; i++) {

        const mailInLista = listaInvitati[i];
        
        

        // confronto dati array con dati input
        if (userMail === mailInLista) {

            // se c'è corrispondeza
            
            inLista = i;


            if (inLista >= 0) {

                // output in caso di corrispondenza
                const messageCont = `"Congratulations, you are invited to the best party ever!!!!"`;

                document.getElementById("positive-message").innerText = messageCont;

        
        
                // debug
                // Congratulations, you are invited to the best party ever!!!!
                console.log("vero");
        
            }
        } 
        
    }



    // se non c'è corrispondeza output messaggio
    if (inLista === -1) {
        
        alert ("you are not invited");
    }
}






