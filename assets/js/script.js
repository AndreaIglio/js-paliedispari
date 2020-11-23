// 



// PALINDROMA

    // Chiedere all’utente di inserire una parola
    

    var userWord = prompt("Inserisci una parola");
    //  Creare una funzione per capire se la parola inserita è palindroma

    /** La funzione determinera' se la string e' palindromo
     * 
     * @param {*} string - insert a string and check if it's palindrome word
     * @return string - reversed (before we split the string into an array formed by each letter of the string then we reverse it, and for last we reform the string)
     */
    function palindrome(string) {

       return string.split('').reverse().join('');

    }

    console.log(userWord);
    console.log(palindrome(userWord));
    var result_palindromo = document.getElementById("result_palindromo");


    if (userWord === palindrome(userWord)) {

        
        result_palindromo.innerHTML = ('Your word is palindrome');

    }

    else {
    
        result_palindromo.innerHTML = ('Your word is not palindrome');

    }


// /PALINDROMA





// PARI E DISPARI

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var evenOddUser = prompt('Choose between Even or Odd').toUpperCase();
console.log(evenOddUser);

var numberUser = Number(prompt('Insert a number between 1 and 5'))
// console.log(numberUser);


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).


function rndmNumber(){
    
   return Math.floor((Math.random() * 5) + 1);

}

var generateNumber = rndmNumber();



// Sommiamo i due numeri

var sum = numberUser + generateNumber;
console.log(sum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)


/** La funziona verifica se il numero e' pari

 * @param {number} - numero da verificare (sara' la sum).
 * @return boolean - (check)
 */

function isEven(number){

    var check = false;
    
    if (number % 2 === 0){
    check = true;
}

 return check;
}


var checkEvenOddSum = isEven(sum);

console.log(checkEvenOddSum);

// Dichiariamo chi ha vinto. 

var winner = document.getElementById('winner').innerHTML;

// ORA SE LA SOMMA E' PARI/DISPARI E L UTENTE SCRIVE EVEN/ODD VINCE
if (((checkEvenOddSum) && (evenOddUser == "EVEN")) || ((checkEvenOddSum == false) && (evenOddUser == "ODD"))) {
    document.getElementById('winner').innerHTML = 'Player wins';
}

else {
    document.getElementById('winner').innerHTML = 'IA wins'
}


// /PARI E DISPARI