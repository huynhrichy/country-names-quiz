function Question(question, answer, choice0, choice1, choice2, choice3) {
	this.question = question; 
	this.choices = [choice0, choice1, choice2, choice3];
	this.answer = answer;
};

var questions = [];
var correct = 0; 
var guessed = false;
var progress = 0;
var currentQuestion;
var gameOver = false;
var totalQuestions = 0;

function newQuiz() {
	gameOver = false;
	correct = 0;
	progress = 1;
	currentQuestion = null;
	totalQuestions = 0;


	$("#next ul li").text("Next");


	var question0 = new Question("fake", 0,
		"Oceania", "Brunei", "Palau", "Mauritania");

	var question1 = new Question("real", 1,
		"Bangalla", "Djibouti", "Gondor", "Narnia");

	var question2 = new Question("fake", 1,
		"Comoros", "Bialya", "Brazil", "Tokelau");

	var question3 = new Question("real", 2,
		"San Seriffe", "St. Georges Island", "Cook Islands", "Atlantis");

	var question4 = new Question("fake", 2,
		"Tajikistan", "Kyrgyzstan", "Tazbekistan", "Uzbekistan");	

	var question5 = new Question("real", 3,
		"Matobo", "Qumar", "Genovia", "Lesotho");	

	var question6 = new Question("fake", 3,
		"Vanuatu", "Burkina Faso", "Togo", "Panem");

	var question7 = new Question("real", 0,
		"Kiribati", "Tosau", "Genosha", "Florin");		

	var question8 = new Question("fake", 3,
		"Jordan", "Nepal", "Qatar", "Brungaria");		

	questions.push(question0);
	questions.push(question1);
	questions.push(question2);
	questions.push(question3);
	questions.push(question4);
	questions.push(question5);
	questions.push(question6);
	questions.push(question7);
	questions.push(question8);

	// remove progress divs and make new ones for the amount of questions
	$("#progress div").remove();
	for (var i = 0; i < questions.length; i++) {
		$("#progress").append("<div></div>")
		totalQuestions++;
	}

	$("#choice-0").removeClass("score");

	$("#progress").children().removeClass("incorrect");
	$("#progress").children().removeClass("correct");
	$("#progress").children().removeClass("current");

	$("#progress").children().addClass("remaining");

	nextQuestion();

}

function nextQuestion() {
	guessed = false;

	$("#buttons li").removeClass("incorrect").removeClass("correct").removeClass("highlighted").text("Select").hide();
	$("#choices li").removeClass("incorrect").removeClass("correct").removeClass("selected");

	if (questions.length === 0) {
		finishQuiz(); 
		return;
	}
	else {
		currentQuestion = questions.shift();
	}

	$("#next").hide();
	$("#choices li, #buttons li").css("cursor", "pointer");

	$(".remaining").first().addClass("current");
	$(".remaining").first().removeClass("remaining");


	$("#question").remove();

	if (currentQuestion.question === "fake") {
		$("#quiz").prepend('<div id="question">Which country below<br/><b>does not</b> exist?</div>');
	}
	else if (currentQuestion.question === "real") {
		$("#quiz").prepend('<div id="question">Which country below<br/>actually <b>exists</b>?</div>');
	}


	$("#choice-0").text(currentQuestion.choices[0]);
	$("#choice-1").text(currentQuestion.choices[1]);
	$("#choice-2").text(currentQuestion.choices[2]);
	$("#choice-3").text(currentQuestion.choices[3]);
}

function selectGuess(id) {
	guessed = true;
	$("#choices li, #buttons li").css("cursor", "default");
	var guess;

	switch(id) {
		case "button-0":
			guess = 0;
			break;
		case "button-1":
			guess = 1;
			break;
		case "button-2":
			guess = 2;
			break;
		case "button-3":
			guess = 3;
			break;
		default:
	}

	var currentProgress;

	if (guess === currentQuestion.answer) {
		$("#" + id).addClass("correct");
		$("#" + id).text("Correct!");

		$(".current").addClass("correct");

		correct++;
	}
	else {
		$(".current").addClass("incorrect");

		$("#" + id).addClass("incorrect");
		$("#" + id).text("Incorrect!");

		$("#choice-" + guess).addClass("incorrect");
	}

	$("#choice-" + currentQuestion.answer).addClass("correct");

	if (questions.length === 0) {
		$("#next ul li").text("Finish");
	}

	$("#next").show();
	$("#next").addClass("normal");


	$(".current").removeClass("current");
}

function finishQuiz() {
	gameOver = true;

	$("#next ul li").text("Restart");
	$("#choices li").text("");
	$("#question").text("");

	$("#choice-0").addClass("score").text("You got " + correct + " out of " + totalQuestions + " correct!");
}

$(document).ready(function() {
	$(".main").fadeIn(10, function() {
		newQuiz();
	});

	$("#choices li").mouseenter(function() {
		if (!guessed && !gameOver) 
			$(this).toggleClass("highlighted");
	}).mouseleave(function() {
		if (!guessed && !gameOver) 
			$(this).toggleClass("highlighted");
	}).mousedown(function() {
		if (!guessed && !gameOver) {
			$("#choices").children().removeClass("selected");
			$(this).addClass("selected");

		}
	}).mouseup(function() {
	}).click(function() {
		if (!guessed) {
			$("#choices").children().removeClass("selected");
			$("#buttons").children().hide();

			$(this).toggleClass("selected");

			var id = $(this).attr("id");

			switch(id) {
				case "choice-0":
					$("#button-0").show();
					break;
				case "choice-1":
					$("#button-1").show();
					break;
				case "choice-2":
					$("#button-2").show();
					break;
				case "choice-3":
					$("#button-3").show();
					break;
				default:
			}			
		}
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
			selectGuess($(this).attr("id"));

		}
	});

	$("#next ul li").mouseenter(function() {
		$("#next").toggleClass("highlighted");
	}).mouseleave(function() {
		$("#next").toggleClass("highlighted");
	}).mousedown(function() {
		$("#next").addClass("selected");
	}).mouseup(function() {
		$("#next").removeClass("selected");
	}).click(function() {
		gameOver ? newQuiz() : nextQuestion();
	});

});