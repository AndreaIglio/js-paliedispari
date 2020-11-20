

// PALINDROMA

    // Chiedere all’utente di inserire una parola
    

    var userWord = prompt("Inserisci una parola");
    // Creare una funzione per capire se la parola inserita è palindroma


    function palindrome(string) {

        var result = false;
        if (string === string.split('').reverse().join('')) {
           result = true;
           console.log("The word is palindrome");
        }
        else {
            console.log('The word is not palindrome');
           }
    }


// /PALINDROMA





// PARI E DISPARI

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto. 



// /PARI E DISPARI