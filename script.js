// Variables
const scores = document.querySelectorAll("#score");
const ratingText = document.querySelector("span");
const ratingDiv = document.querySelector("#rating");
const thanksDiv = document.querySelector("#thanks");
let rate;

scores.forEach((score) => {
    score.addEventListener("click", (e) => {
        const active = document.querySelector(".checked");
        if (active) {
            active.classList.remove("checked");
        }
        const scoreCard = e.target;
        scoreCard.classList.add("checked");
        rate = e.target.innerText;
    });
});

function activeThanksScreen() {
    ratingDiv.classList.toggle("hide");
    thanksDiv.classList.toggle("hide");
    if(rate == undefined) {
        rate = "0";
    }
    ratingText.innerHTML = `You selected ${rate} out of 5`;
}