// // PALINDROMA

// 1o METODO USANDO FOR LOOP

// // Chiedere all’utente di inserire una parola

// var userWord = prompt("Inserisci una parola");
// console.log(userWord);

// UTILIZZO DI FOR LOOP

// var userWordReverse = [];

// for (i = userWord.length; i > (userWord.length - 1); i--){

//     userWordReverse.push(userWord.split('').reverse().join(''));
    


// }


// console.log(userWordReverse);



// if (userWord === userWordReverse[0]){
//     console.log('The word is palindrome');
// }

// else (console.log('The word is not palindrome'))



// 2o METODO UTILIZZANDO FOR LOOP


var userWord = prompt("Inserisci una parola");
console.log(userWord);

  var userWordReverse = [];

for (i= userWord.length - 1; i >= 0; i--){

    userWord[i];

    console.log(userWord[i]);
  
    userWordReverse.push(userWord[i]);
}

console.log(userWordReverse.join(""));
var userWordPalindrome = userWordReverse.join("");



if (userWord == userWordPalindrome){
    console.log('The word is palindrome');
}

else (console.log('The word is not palindrome'))



// 3rd METODO UTILIZZANDO LOOP

// var userWord = prompt("Inserisci una parola");
// var wordReverse = '';


// for (i = userWord.length - 1; i >= 0; i--){
// wordReverse += userWord[i];
// }

// console.log(wordReverse);


// if (wordReverse == userWord){
//     console.log('palindrome');
// }
// else {
//     console.log('not palindrome');
// }