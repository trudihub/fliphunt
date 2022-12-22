const inputSong = document.getElementById("answerSong");
const submitButton = document.getElementById("submitBtn");
const wrongAnswer = document.getElementById("wrong-answer");


const submitLang = document.getElementById("submitLang")
const hiddenSection = document.getElementById("hidden-section-lang")
const answerLang = document.getElementById("answerLang")
const wrongAnswerLang = document.getElementById("wrong-answer-lang")

const finalSection = document.getElementById("final-section-hidden")



submitButton.addEventListener("click", () => {
    if(inputSong.value.toLowerCase() == "weihnachtslieder"){
        wrongAnswer.className = "hidden"
        hiddenSection.className = "hidden-section"
    }
    else{
        wrongAnswer.className = "";
    }
})

submitLang.addEventListener("click", () => {
    if(answerLang.value.toLowerCase() == "hymne"){
        finalSection.className = "final-section"
        wrongAnswerLang.className = "hidden"
    }
    else{
        wrongAnswerLang.className = ""
    }
})



