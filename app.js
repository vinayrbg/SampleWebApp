function populate(){
	if(quiz.isEnded()){
		showScores();
	}
	else {
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i=0;i<choices.length;i++){
			var element = document.getElementById("choice"+i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}
		showProgress()
	}
};

function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
};

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores(){
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
}

var questions = [
	new Questions("Which one is not an object oriented programming language?",["Java","C#","C","C++"],"C"),
	new Questions("Which function among the following lets to register a function to be invoked once?",["setTimeout()","setTotaltime()","setInterval()","none"],"setTimeout()"),
	new Questions("Which function among the following lets to register a function to be invoked repeatedly after a certain time?",["setTimeout()","setTotaltime","setInterval","none"],"setInterval"),
	new Questions("Which is the handler method used to invoke when uncaught JavaScript exceptions occur?",["Onhalt","Onerror","Both","none"],"Onerror"),
	new Questions("Which property is used to obtain browser vendor and version information?",["model","version","browser","navigator"],"navigator"),
	new Questions("Which method receives the return value of setInterval() to cancel future invocations?",["clearInvocation","cancelInvocation","clearInterval","None"],"clearInterval")
];

var quiz = new Quiz (questions);

populate();

