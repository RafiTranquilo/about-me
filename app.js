var totalCorrect = 0;
var totalWrong = 0;

var yesNoQuestions = [
  ['Does Rafi have a bike?', 'YES'],
  ['Will Rafi be an expert coder?', 'YES'],
  ['Does slow and steady win the race?','YES'],
  ['Does Rafi live in Seattle?', 'YES'],
  ['Does Rafi have a cat?', 'NO']];

var possibleResponses = ['Y','YES','N','NO'];

//This function handles the first 5 yes or no questions.
function firstFive (questions) {
  for(var question = 0; question < questions.length; question++){
    var userAnswer = prompt(questions[question][0]).toUpperCase();
    console.log('User\'s answer to question ' + (question + 1) + ' is: ' + userAnswer);
    var answerValidationFlag = false;
    for(var possible = 0; possible < possibleResponses.length; possible++){
      if (userAnswer === possibleResponses[possible]){
        answerValidationFlag = true;
      }
    }
    if (userAnswer === 'Y'){
      userAnswer = 'YES';
    } else if(userAnswer === 'N'){
      userAnswer = 'NO';
    }
    if (userAnswer === questions[question][1]){
      alert('Your answer is correct.');
      totalCorrect++;
    } else if(answerValidationFlag === false){
      alert('Your answer was not valid.');
      totalWrong++;
    } else {
      alert('Your answer to question is incorrect.');
      totalWrong++;
    }
  }
}

/* Made a question involving a while loop with 4 chances for the user to get the correct answer
*/
function findMyAge(){
  var guessTry = 0;
  var age = 24;
  var question6;

  while(guessTry < 4){
    question6 = parseInt(prompt('What\'s my age again?'));
    if(isNaN(question6)){
      alert('Try guessing a number!');
    }
    else if(question6 === 24){
      alert('You\'re right! congrats!');
      totalCorrect++;
      break;
    }
    else if(question6 > 24){
      alert('Too high, try again!');
    }
    else{
      alert('Too low, try a little higher!');
    }

    guessTry++;
  }
}

function pizza(){
  alert('Now on to the next round! Can you guess which pizza toppings I like? You have 6 tries to guess right, and you can guess multiple toppings at once, by separating them with commas!');
  var guessNumber = 0;
  var pizzaToppings = ['mushrooms', 'sausage','cheese','pepperoni'];

  while(guessNumber < 6){
    var pizzaQuestion = prompt('What would I include on my dream pizza?');
    if(pizzaQuestion === pizzaToppings[0]){
      alert('You\'re right! I do love those toppings');
      totalCorrect++;
      break;
    }
    else if(pizzaQuestion === pizzaToppings[1]){
      alert('You\'re right! I do love those toppings');
      totalCorrect++;
      break;
    }
    else if(pizzaQuestion === pizzaToppings[2]){
      alert('You\'re right! I do love those toppings');
      totalCorrect++;
      break;
    }
    else if(pizzaQuestion === pizzaToppings[3]){
      alert('You\'re right! I do love those toppings');
      totalCorrect++;
      break;
    }
    else{
      alert('Woops, try another topping!');
      guessNumber++;
      totalWrong++;
    }
  }
  alert('Thanks for playing! You got ' + totalCorrect + ' right and ' + totalWrong + ' wrong.');
}

//This is the start of the script.
alert('Hey, let\'s play a guessing game about me!');

alert('Before we get started, make sure to note that your answers must be either \'yes\' or \'no\'.');

firstFive(yesNoQuestions);
findMyAge();
pizza();
