'use strict';

var userPoints = 0;

alert('Hello! My name is David and I have crafted a guessing game for us to play!');

var user = prompt('First off, what is your name?')

alert('Well hello ' + user + '! Let\'s find out how well you know me.');

var answer1 = prompt('Did David grow up in the Seattle area?' , 'type yes or no please').toLowerCase();
console.log('Did David grow up in the Seattle area?');
console.log(answer1);

if (answer1 === 'no' || answer1 === 'n'){
    userPoints++;
    alert('You got it! Born and raised in Utah.');
} else {
    alert('I\'m afraid that is incorrect, ' + user + '. I grew up in Salt Lake City');
}

alert('You have ' + userPoints + ' points!');
console.log(user + ' has a score of ' + userPoints);

alert('All right, moving along');

var answer2 = prompt('Does David work in the banking industry?' , 'again, yes or no').toLowerCase();
console.log('Does David work in the banking industry?');
console.log(answer2);

if (answer2 === 'yes' || answer2 === 'y'){
    userPoints++;
    alert('Unfortunately, yes, I am a banker');
} else {
    alert('Sorry to say, I\'ve been in banking for 10.5 years')
}

alert('You have ' + userPoints + ' points!');
console.log(user + ' has a score of ' + userPoints);

alert('On to the next one!')

var answer3 = prompt('Is David\'s favorite baseball team the Seattle Mariners?' , 'yes or no').toLowerCase();
console.log('Is David\'s favorite baseball team the Seattle Mariners?');
console.log(answer3);

if (answer3 === 'yes' || answer3 === 'y'){
    userPoints++;
    alert('You\'d better believe it.');
} else {alert('I\'m disappointed that you would think that of me.')
}

alert('You have ' + userPoints + ' points!');
console.log(user + ' has a score of ' + userPoints);

alert('We\'re almost there!');

var answer4 = prompt('Is there any food that David does not like?' , 'yes or no').toLowerCase();
console.log('Is there any food that David does not like?')
console.log(answer4);

if (answer4 === 'yes' || answer4 === 'y'){
    userPoints++;
    alert('Correct. While I\'ll eat most anything, I really don\'t like beets.');
} else {alert('It may surprise you, but I REALLY don\'t like beets')
}

alert('Dwight Schrute and I would not get along')

alert('You have ' + userPoints + ' points!');
console.log(user + ' has a score of ' + userPoints);

alert('You\'ve made it to the last question!');

var answer5 = prompt('Does David miss having the Sonics in town?' , 'yes or no').toLowerCase();
console.log('Does David miss having the sonics in town?');
console.log(answer5);

if (answer5 === 'yes' || answer5 === 'y'){
    userPoints++;
    alert('Definitely. I\'d love to watch the Utah Jazz play up here a few times a year.');
} else {alert('While I was never a Sonics fan, I definitely wish they were still here')
}

alert('You have finished with ' + userPoints + ' points!');
console.log(user + ' has a score of ' + userPoints);

alert('Congrats! You\'ve made it to the end.')
alert('As your reward, enjoy some very simplistic CSS design!');