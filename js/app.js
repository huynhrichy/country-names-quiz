function Question(question, answer, choice2, choice3, choice4) {
	this.question = question;
	this.answer = answer;
	this.choice2 = choice2;
	this.choice3 = choice3;
	this.choice4 = choice4;
};

var question1 = new Question("Which country below does not exist?",
	"Oceania", "Brunei", "Palau", "Mauritania");

var question2 = new Question("Which country below actually exists?",
	"Djibouti", "Bangalla", "Gondor", "Narnia");

var questions = [];

$(document).ready(function() {
	$(".main").fadeIn(1000, function() {
	});

	$("#choices li").mouseenter(function() {
		// toggle class selected
		//$(this).toggleClass("selected");

		$(this).toggleClass("highlighted");
	}).mouseleave(function() {
		$(this).toggleClass("highlighted");
	}).click(function() {
		// rmbr to reset all selected ish

		$("#choices").children().removeClass("selected");
		$("#buttons").children().hide();

		$(this).toggleClass("selected");

		var id = $(this).attr("id");

		switch(id) {
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
			case "choice-4":
				console.log(id);
				$("#button-4").show();
				break;
			default:
				console.log(id);
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
});