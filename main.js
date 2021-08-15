const board = $(".gameboard");

const row = $(".row");

const output = $(".output-box");













let initialValue = localStorage.getItem('scoreKeeper');
if (initialValue === null) {
  initialValue = 0;
}

const scoreKeeper = $(".left-output");
$(scoreKeeper).text(initialValue);






let score = 0;





let currentValue = 0;

////
////
////

function nameCategories() {
  const catNames = $(".cat-name");
  for (let i = 0; i < catNames.length; i++) {
    const title = catNames[i];

    if (i === 0) {
      $(title).text("Category One");
    }

    if (i === 1) {
      $(title).text("Category Two");
    }

    if (i === 2) {
      $(title).text("Category Three");
    }

    if (i === 3) {
      $(title).text("Category Four");
    }

    if (i === 4) {
      $(title).text("Category Five");
    }

    if (i === 5) {
      $(title).text("Category Six");
    }
  }
}

function displayQuestion(value) {
  let questionBank = gameData.filter((val) => val.value === value);

  testNum = Math.floor(Math.random() * questionBank.length).toFixed(0);

  const picked = questionBank[testNum];
  const outputText = picked.question;
  const answer = picked.answer;
  currentValue = picked.value;

  $(".right-output").text(answer);

  $(".right-output").addClass("hide-me");

  $(output).text(outputText);
}

function nameQuestions() {
  const questionList = $(".ques");

  for (const card of questionList) {
    $(card).on("click", function (event) {
      output.text("Test Output");

      const choice = event.target;

      const choiceValue = $(choice).text();

      displayQuestion(choiceValue);
    });

    if ($(card).hasClass("one")) {
      $(card).text("$200");
    }

    if ($(card).hasClass("two")) {
      $(card).text("$400");
    }

    if ($(card).hasClass("three")) {
      $(card).text("$600");
    }

    if ($(card).hasClass("four")) {
      $(card).text("$800");
    }

    if ($(card).hasClass("five")) {
      $(card).text("$1000");
    }
  }
}

$(".guess").on("click", function () {
  const userGuess = $(".user-input").val();

  const currentAnswer = $(".right-output").text();

  // console.log(
  //   "Your guess is, ",
  //   userGuess,
  //   " and the correct answer is, ",
  //   currentAnswer
  // );

  if (userGuess === currentAnswer) {
    score += Number(currentValue.substring(1));

    $(".left-output").text(score);

    localStorage.setItem('scoreKeeper', $(scoreKeeper).text());
  } else {
    console.log("Wrong...");
  }
});

nameCategories();

nameQuestions();
