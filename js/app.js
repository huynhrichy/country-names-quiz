function Question(question, answer, choice0, choice1, choice2, choice3) {
	this.question = question; // exists or dun exists... real or fake
	//this.answer = answer;
	this.choices = [choice0, choice1, choice2, choice3];
	this.answer = answer;


/*	this.choice1 = answer;
	this.choice2 = choice2;
	this.choice3 = choice3;
	this.choice4 = choice4;*/
};



var questions = [];

//var progress = 0; // independent of wins n losses... -1 is done
var correct; // how many corrects so far
//var incorrect;
var guessed = false; // bool to make sure cant keep guessing after done so
var progress = 0;

// dry - use correct n questions array numbers extensively

function newQuiz() {
	// aka newgame
	// reset progress to 0
//	progress = 0;
	correct = 0;
//	incorrect = 0;

	// dun use yet? or good form to do this...

	// reset progresss...
	// hide buttons or wtv n ish
	// add questions - make question objects first... can randomly add them to questions array
	// call nextquestion to get the first question in yo

	var question1 = new Question("fake", 0,
		"Oceania", "Brunei", "Palau", "Mauritania");

	var question2 = new Question("real", 1,
		"Bangalla", "Djibouti", "Gondor", "Narnia");

	var question3 = new Question("fake", 1,
		"Comoros", "Bialya", "Comoros", "Tokelau");

	var question4 = new Question("real", 2,
		"San Seriffe", "St. Georges Island", "Cook Islands", "Atlantis");

	var question5 = new Question("real", 3,
		"Uzbekistan", "Kyrgyzstan", "Uzbekistan", "Tazbekistan");	

	questions.push(question1);
	questions.push(question2);
	questions.push(question3);
	questions.push(question4);
	questions.push(question5);

	// progress ressettt
	// all children in progress div
	$("#progress").children().removeClass("incorrect");
	$("#progress").children().removeClass("correct");
	$("#progress").children().removeClass("current");

	$("#progress").children().addClass("remaining");
	$("#progress div:nth-child(1)").removeClass("remaining");
	$("#progress div:nth-child(1)").addClass("current");

	progress = 1;

	nextQuestion();

}

function nextQuestion() {
	// called at the start as well?
	// progress update by 1...?
	// call finishquiz if progress was at 5! n skip the rest of this ish. 
	// if normal, remove the question at index 0...
	// update progress bar
	// main part - update quiz interface with the next question ish
	// randomize positions!!!!!!!!! WORD!!!
	// hide buttons - via guessed?
	// delete the previous question before all this?!

	guessed = false;
	$("#choices li, #buttons li").css("cursor", "pointer");

	// add in dat html doe... using questions - get first
	// question first... with br/

	//$("#question").text("adfadf");

	if (questions.length <= 0) {
		finishQuiz();
		return;
	}

	$("#question").remove();

	var currentQuestion = questions[0];

	if (questions[0].question === "fake") {
		$("#quiz").prepend('<div id="question">Which country below<br/><b>does not</b> exist?</div>');
	}
	else if (questions[0].question === "real") {
		$("#quiz").prepend('<div id="question">Which country below<br/>actually <b>exists</b>?</div>');
	}

	// randomize positions for choices... keep answer somehow? or just compare strings?
	// randomize numbers from like 1 to 4


	$("#choice-0").text(currentQuestion.choices[0]);
	$("#choice-1").text(currentQuestion.choices[1]);
	$("#choice-2").text(currentQuestion.choices[2]);
	$("#choice-3").text(currentQuestion.choices[3]);

	// make ish say select instead of correct or incorrect!!!
















	// put all the choices in and just remember which one is the right one when submit guess

/*
	var randoms = [];
	var random;

	for (choice in currentQuestion.choices) {
		console.log("choice: " + choice);
*/
		// while

		/*
		while (random in randoms) {
			random = Math.floor((Math.random() * 4) + 1);
		}*/
/*
		do {
			random = Math.floor((Math.random() * 4) + 1);
		} while (random in randoms);

		randoms.push(random);


		//if (!(random in random))

		console.log("random: " + random);

		if (!(random in randoms)) {
			switch(random) {
				case 1:
					$("#choice-1").text(currentQuestion.choice);
					break;
				case 2:
					$("#choice-2").text(currentQuestion.choice);
					break;
				case 3:
					$("#choice-3").text(currentQuestion.choice);
					break;
				case 4:
					$("#choice-4").text(currentQuestion.choice);
					break;
				default:
			}
			randoms.push(random);
		}
	}
*/





}

function selectGuess(id) {
	// when click on select of the choice
	// check if clicked on the right select, via index (or can do text value)
	// give feedback - show next button, update progress and correct or incorrect...
	// give feedback - update selected answer class as well as button, possibly show correct one in green
	// disable clicking - guessed = true

	// check what was clicked. this thing in argument? 
	// either parse string to get end number or just switch statement to compare
	// compare with the question answer in the front of array
	// if wrong, do a lot of ish - feedback, progress, next button n remove handlers on some ish
	// if right... good feedback, progress, next button etc...
	// kinda same with right n wrong, changes r like feedback, progress...
	// REMEMBER REBINDING !!!! if ish not verkin

	guessed = true;
	$("#choices li, #buttons li").css("cursor", "default");
	var guess;

	// int for which choice was made so can compare with answord?

	switch(id) {
		case "button-0":
			console.log("leggo");
			guess = 0;
			break;
		case "button-1":
			console.log("leggo");
			guess = 1;
			break;
		case "button-2":
			console.log("leggo");
			guess = 2;
			break;
		case "button-3":
			console.log("leggo");
			guess = 3;
			break;
		default:
	}

	var currentProgress;

	if (guess == questions[0].answer) {
		console.log("rekt");

		// rizzle


		// selected button replaced with correct and in green
		$("#" + id).addClass("correct");
		$("#" + id).text("Correct!");


		// update proggress - green instead of white or red
		// do it somehow based on like the question number, or size of array
		// need another variable... like the limit or actual current progress
		//currentProgress = questions.length;
		// perhaps just change the one white guy!!!! current. and on nextquestion, make white the next q

		$(".current").addClass("correct");


		// more correx
		//correct++;
	}
	else {
		// wrizzong

		// correct doesnt go up

		// update proggress - red instead of white or green
		// do it somehow based on like the question number, or size of array
		$(".current").addClass("incorrect");


		// selected button replaced with incorrect and in red
		$("#" + id).addClass("incorrect");
		$("#" + id).text("Incorrect!");

		// highlight chosen answer in red
		$("#choice-" + guess).addClass("incorrect");


	}


	// highlight correct answer in green
	$("#choice-" + questions[0].answer).addClass("correct");


	// show next button
	$("#next").show();
	$("#next").addClass("normal");


	$(".current").removeClass("current");
}

function finishQuiz() {
//	progress = -1;
}










$(document).ready(function() {
	$(".main").fadeIn(1000, function() {

		newQuiz();
	});

// if guessed == true then remove some of these handlerz


	$("#choices li").mouseenter(function() {
		// toggle class selected
		//$(this).toggleClass("selected");
		if (!guessed) 
			$(this).toggleClass("highlighted");
	}).mouseleave(function() {
		if (!guessed) 
			$(this).toggleClass("highlighted");
		//$(this).removeClass("selected");
	}).mousedown(function() {
		if (!guessed) {
			$("#choices").children().removeClass("selected");
			$(this).addClass("selected");

		}
	}).mouseup(function() {
		//$(this).removeClass("selected");
	}).click(function() {
		// rmbr to reset all selected ish
		if (!guessed) {
			$("#choices").children().removeClass("selected");
			$("#buttons").children().hide();

			$(this).toggleClass("selected");

			var id = $(this).attr("id");

			switch(id) {
				case "choice-0":
					console.log(id);
					$("#button-0").show();
					break;
				case "choice-1":
					console.log(id);
					$("#button-1").show();
					break;
				case "choice-2":
					console.log(id);
					$("#button-2").show();
					break;
				case "choice-3":
					console.log(id);
					$("#button-3").show();
					break;
				default:
					console.log(id);
			}			
		}




		//var index = $(this).index();
		//alert(index + 1);
		//$("#buttons li").get(index).show();

		//alert($("#buttons").get(index));

		//var class = $(this).attr("c")


		// do the select button on this one... use id? 
		// get the number of...
		// get this class and display all things with this class
	});

	$("#buttons li").mouseenter(function() {
		if (!guessed) {
		$(this).toggleClass("highlighted");
		}
	}).mouseleave(function() {
		if (!guessed) {
			$(this).toggleClass("highlighted");
			$(this).removeClass("selected");

		}
	}).mousedown(function() {
		if (!guessed)
			$(this).addClass("selected");
	}).mouseup(function() {
		if (!guessed)
			$(this).removeClass("selected");
	}).click(function() {
		if (!guessed) {
			console.log("selected: " + $(this).attr("id"));
			selectGuess($(this).attr("id"));

		}
	});

	$("#button-0").click(function() {
		//alert();
		// check guess... 
		// select guess, with this id

		//selectGuess($(this).attr("id"));
	});

	$("#button-1").click(function() {
		//alert();
	});

	$("#button-2").click(function() {
		//alert();
	});

	$("#button-3").click(function() {
		//alert();
	});

	$("#next ul li").mouseenter(function() {
		//$(this).toggleClass("highlighted");
		$("#next").toggleClass("highlighted");
		//$("#next ul").toggleClass("highlighted");
	}).mouseleave(function() {
		$("#next").toggleClass("highlighted");
		//$(this).toggleClass("highlighted");
		//$(this).removeClass("selected");
	}).mousedown(function() {
		$("#next").addClass("selected");
	}).mouseup(function() {
		$("#next").removeClass("selected");
	});


});