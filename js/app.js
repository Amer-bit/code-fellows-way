
'use strict'
var coutner = 0;
var uName = prompt("Hi there, Whats your name ?");

console.log(uName);
alert(uName + " what a nice name !,Nwrt al site ");



var start = prompt("So " + uName + " how about we play a gussing game about me?");

if (start.toLowerCase() == 'yes' || start.toLowerCase() == "y") {
    coutner++;
    var myAge = prompt("Type yes if u think am older than 20 and no if you think am younger than that ");
    if (myAge.toLowerCase() == 'yes' || myAge.toLowerCase() == 'y') {
        alert("Thats right ,nice guess " + uName);
        coutner++;
    } else {
        alert("Tough luck " + uName + " lets try another question");
    }

    var coffee = prompt("Do i feel like a coffee person?");
    if (coffee.toLowerCase() == 'yes' || coffee.toLowerCase() == 'y') {
        alert('Indeed i am!, 99% of prgrammers except  instructor Razan drink coffee!');
        coutner++;
    } else {
        alert("If you think all this enthusiasm happens without the power of caffeine,Your wrong my friend");
    }

    var art = prompt("Am i an artist ? ");
    if (art.toLowerCase() == 'yes' || art.toLowerCase() == 'y') {
        alert("ooo i wish,am still leartning though way far from being called an artist!")

    } else {
        alert('sadly you are correct , play that same game in a year and hopfully the answer to this question will change!');
        coutner++;
    }


    var nice = prompt("Do i feel like a sport person ?");
    if (nice.toLowerCase() == 'yes' || nice.toLowerCase() == 'y') {
        alert("actually thats a big no no for me , am in good health but not into any kind of sports");

    } else {
        alert("Thats right,The only mucles i need to train are my fingers while typing code!");
        coutner++;

    }
    var y = Math.floor(Math.random() * 10 + 1);
    console.log(y);
    var guess = 1;
    while (x !== y && guess < 5) {
        var x = prompt("Guess a number between 1 and 10");

        if (x == y) {
            alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
                + guess + " GUESS ");
            coutner++
            break;
        }
        else if (x > y) {
            guess++;
            alert("OOPS SORRY!! TRY A SMALLER NUMBER");
        }
        else if (x < y) {
            guess++;
            alert("OOPS SORRY!! TRY A GREATER NUMBER")
        }

    }
    if (guess == 5) {
        alert('You finished all of you attempts , the right answer is ' + y);
    } else {
      
    }


    var favFood = ['shawrma', 'mansaf', 'kabsah', 'indomi', 'magloba', 'ozi'];

      var i =0;
    for (i ; i < favFood.length; i++) {
        console.log(i);
       var userGuess = prompt('Whats my fav food ?').toLowerCase();
        if (userGuess == favFood[i]) {
            alert("I see your also a person of culture <3 ");
            console.log(favFood);
            coutner++;
            break;
            
        } else {
            alert("Guess again!");
        }

    }
  
    if (i == favFood.length ) {
  
        alert(`You guessed wrong my friend the right answers are ${favFood}`); 
                
    }else{
        

    }

}

else {
    alert("thats too bad, good bye");
    window.close();
}


document.write(`<p id="answer"> you got  ${coutner}  out of 7  </p> `);
document.write(`<p id="goodbye"> ${uName} ,thank you for playing the game! </p>`);
