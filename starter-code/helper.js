answer = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
  question5: "",
};

const questionAnswers = document.querySelectorAll(".question-answer");

questionAnswers.forEach((questionAnswer, index) => {
  const answerChoices = questionAnswer.querySelectorAll(".answer-choice");

  answerChoices.forEach((choice) => {
    const radioInput = choice.querySelector('input[type="radio"]');

    if (radioInput.checked) {
      choice.classList.add("selected");
      const selectedValue = radioInput.value;
      const questionKey = "question" + (index + 1);
      answer[questionKey] = selectedValue;
    }

    choice.addEventListener("click", () => {
      answerChoices.forEach((otherChoice) => {
        otherChoice.classList.remove("selected");
      });
      choice.classList.add("selected");
      selectedValue = choice.querySelector('input[type="radio"]').value;

      const questionKey = "question" + (index + 1);
      answer[questionKey] = selectedValue;
      radioInput.checked = true;

      //   console.log(selectedValue);
      //   console.log(answer);
      generateSummary(answer, "order-sentence");
    });
  });
});

const generateSummary = (answer, id) => {
  let summaryHtml = `I drink coffee <span class="green-text">${answer.question1}</span>, with a 
  <span class="green-text">${answer.question2}</span> type of bean. <span class="green-text">${answer.question3}</span> 
  ground ala <span class="green-text">${answer.question4}</span>, sent to me <span class="green-text">${answer.question5}</span>.`;
  //   console.log(answer);
  document.getElementById(id).innerHTML = summaryHtml;
};

const setPrice = () => {
  if (answer.question5 == "Every week") {
    return "14.00";
  } else if (answer.question5 == "Every 2 weeks") {
    return "17.25";
  } else {
    return "22.50";
  }
};

const generateCheckout = () => {
  generateSummary(answer, "checkout-sentence");
  const buttonCheckout = document.getElementById("checkout-button");
  buttonCheckout.innerHTML = `Checkout - $ ${setPrice()}/mo`;
  const checkoutDiv = document.querySelector(".checkout");
  checkoutDiv.style.display = "inline-block";
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
  checkoutDiv.scrollIntoView({ behavior: "smooth", block: "center" });
};

const closeCheckout = () => {
  const checkoutDiv = document.querySelector(".checkout");
  checkoutDiv.style.display = "none";
  const body = document.querySelector("body");
  body.style.overflow = "auto";
};
