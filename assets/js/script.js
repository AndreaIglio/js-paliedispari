

// PALINDROMA

    // Chiedere all’utente di inserire una parola
    

    var userWord = prompt("Inserisci una parola");
    // Creare una funzione per capire se la parola inserita è palindroma


    function palindrome(string) {

       return string.split('').reverse().join('');

    }

    console.log(userWord);
    console.log(palindrome(userWord));
    var result = document.getElementById("result");


    if (userWord === palindrome(userWord)) {

        
        result.innerHTML = ('Your word is palindrome');

    }

    else {
    
        result.innerHTML = ('Your word is not palindrome');

    }


// /PALINDROMA





// PARI E DISPARI

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto. 



// /PARI E DISPARI