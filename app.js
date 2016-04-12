// alert('Hey, let\'s play a guessing game about me!');
//
// alert('Before we get started, make sure to note that your answers must be either \'yes\' or \'no\'.');

// var answer1 = prompt('Does Rafi have a bike?').toUpperCase();
//
// if(answer1 === 'Y' || answer1 === 'YES') {
//   alert('OHHH YEAHH');
//   console.log('Does Rafi have a bike:' + answer1.toUpperCase());
// }
// else if(answer1 === 'N' || answer1 === 'NO'){
//   alert('WRONG');
//   console.log('So, does Rafi have a bike?:' + answer1.toUpperCase());
// }
// else{
//   alert('sorry, try a yes/no answer!');
// }

var answer2 = prompt('Will Rafi be an expert coder?').toUpperCase();

if(answer2 === 'Y' || answer2 === 'YES'){
  alert('WOW yes you are an expert at predicting the future!');
  console.log('Is this person great at predicting the future:' + answer2.toUpperCase());
}
else if(answer2 === 'N' || answer2 === 'NO'){
  alert('Nah, you best think again');
  console.log('This person is ' + answer2 + ' very smart');
}
else{
  alert('Sorry, try again!');
}

var answer3 = prompt('Does slow and steady win the race?').toUpperCase();

if(answer3 === 'Y' || answer3 === 'YES'){
  alert('That is a very wise perspective');
  console.log('Slow and steady works?: ' + answer3);
}
else if( answer3 === 'N' || answer3 === 'NO'){
  alert('Might want to think again there, buddy');
  console.log('Is this a patient person?' + answer3);
}
else{
  alert('try again!');
}
