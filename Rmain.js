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




// var yourAnswer = prompt("Type Paper, Rock or Scissors");
// var compAnswers = ["Rock", "Paper", "Scissors"];
// var chooseAnswer = Math.floor(Math.random()*3)
// var answer = compAnswers[chooseAnswer]

// if(yourAnswer===answer){
// 	console.log("It's a draw")

// }

// if(answer=== "Rock"){
// 	if(yourAnswer==="Paper")
// 	console.log("You win")
// 	if(yourAnswer==="Scissors")
// 	console.log("You lost")
	
// }

// if(answer=== "Paper"){
// 	if(yourAnswer==="Scissors")
// 	console.log("You win")
// 	if(yourAnswer==="Rock")
// 	console.log("You lost")
	
// }

// if(answer=== "Scissors"){
// 	if(yourAnswer==="Rock")
// 	console.log("You win")
// 	if(yourAnswer==="Paper")
// 	console.log("You lost")
	
// }


// var Joeseph = "Joe"
// var teachers = ["shane", "rock", "Pactricia", "cl", "junior"];

// console.log(teachers[2]);

// console.log(teachers.length());
// teachers.pop();
// teachers.pop();

// teachers.push("Ashoe");

// console.log(teachers);


// var teachers = ["shane", "rock", "Pactricia", "cl", "junior"];
// for(var i=0; teachers.length >1; i++){
// 	console.log(teachers[i])

// console.sort(teachers);


// ​Create an array to represent your shopping list with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
// Add 'fruit loops' to the list.
// Update 'coffee' to 'fair trade coffee'
// Replace 'chips' and 'salsa' with 'rice' and 'beans'
// Create an empty array to represent your shopping cart.
// Remove the last item from your shopping list and add it to your cart
// Remove the first item from your shopping list and add it to the cart
// Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.
// Sort the items in your cart alphabetically... backwards
// Print the list of items in your shopping cart to the console as comma separated string.





// var shoppingList =['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
// // console.log(shoppingList);

// shoppingList.push('fruit loop');

// console.log(shoppingList);

// shoppingList[4] = 'fair trade coffee';

// console.log(shoppingList);


// shoppingList[2] ='rice'
// shoppingList[3] ='beans'
// console.log(shoppingList);


// var shoppingCart =[]

// var shoppingCart = shoppingList.pop(5);

// console.log(shoppingCart);


// var shoppingCart = shoppingList.pop(0)

// console.log(shoppingCart);

// while(shoppingList.length > 0){
//     shoppingCart.push(shoppingList.pop());
// }
// console.log(shoppingCart);

// shoppingCart.sort().reverse();
// console.log("My cart contains: ", shoppingCart.join(','));

// console.log(shoppingCart);
// console.log(shoppingList);


// Get the following values:
// Name of the course ('JavaScript Applications')
// Name of the second teacher ('Shane')
// Name of the first student ('Steve')
// Katy's computer type ('macbook')
// The preReq equipment object
// The second OSOption from equipment prereqs ('osx')
// String listing the OSOptions separated by 'or' ('linux or osx')
// An array of all the students that are using OSX.

var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};
console.log(course.name);
console.log(course.teachers[1]);
console.log(course.students[0].name);
console.log(course.students[1].computer.type);
console.log(course.preReqs);
console.log(course.preReqs.equipment.OSOptions[1]);
console.log(course.preReqs.equipment.OSOptions[0] + " or " + course.preReqs.equipment.OSOptions[1]);
// console.log(course.students.preReqs.OSOptions[1]);
// var osx_students = [course.students[1].name + " and " +course.students[2].name] ;
// console.log(osx_students);

for (var i = 0; i < course.students.length; i++) {
	if (course.students[i].computer.OS==="OSX"){
		console.log(course.students[i].name)
	}
};
























