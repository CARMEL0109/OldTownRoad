// var cups = 5;

// if(cups < 4) {
// 	console.log("You'll be alright");
// } else{
// 	console.log("Everything will be alright");
// }



// var cupOfCoffee = 5
// if (cupOfCoffee < 3) {
// 	console.log("Yes I'll take another cup of coffee");
// 	else{
// 		console.log("I think I'm okay for now");
// 	}
// // }

// var temperature = 80;
// var precipation = true 
// console.log("The temperature is" + temperature + "degrees");
// if (temperature >80 && precipation === false) {
// 	console.log("Time to swim");
// } else{
// 	console.log("Bad Weather");
// }


// for(var x = 1; x <= 10; i++){
// 	console.log( i );
// }




// for(var y = 99; y >=0; y--){
// 	if(y < 1) {
// 	console.log("Hey! Go buy some root beer");
// }
// else{
// 	console.log(y + "bottles of beer on the wall");
// }
// }


// var correctAnswer = prompt("Do you want to build snowman?");
// while(correctAnswer != "yes"){
// 	var correctAnswer = prompt("do you want to build snowman?");
// 	if(correctAnswer === "yes"){
// 		console.log("awesome")
// 	}
// }




var yourAnswer = prompt("Type Paper, Rock or Scissors");
var compAnswers = ["Rock", "Paper", "Scissors"];
var chooseAnswer = Math.floor(Math.random()*3)
var answer = compAnswers[chooseAnswer]

if(yourAnswer===answer){
	console.log("It's a draw")

}

if(answer=== "Rock"){
	if(yourAnswer==="Paper")
	console.log("You win")
	if(yourAnswer==="Scissors")
	console.log("You lost")
	
}

if(answer=== "Paper"){
	if(yourAnswer==="Scissors")
	console.log("You win")
	if(yourAnswer==="Rock")
	console.log("You lost")
	
}

if(answer=== "Scissors"){
	if(yourAnswer==="Rock")
	console.log("You win")
	if(yourAnswer==="Paper")
	console.log("You lost")
	
}


























