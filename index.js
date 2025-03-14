// Function to update score
function updateScore(team, points) {
    const scoreElement = document.getElementById(`${team}-score`);
    let currentScore = parseInt(scoreElement.textContent) || 0;
    currentScore += points;
    scoreElement.textContent = currentScore;
}

// Home Score Buttons
document.getElementById("home-one").addEventListener("click", function() {
    updateScore("home", 1);
});
document.getElementById("home-two").addEventListener("click", function() {
    updateScore("home", 2);
});
document.getElementById("home-three").addEventListener("click", function() {
    updateScore("home", 3);
});

// Guest Score Buttons
document.getElementById("guest-one").addEventListener("click", function() {
    updateScore("guest", 1);
});
document.getElementById("guest-two").addEventListener("click", function() {
    updateScore("guest", 2);
});
document.getElementById("guest-three").addEventListener("click", function() {
    updateScore("guest", 3);
});

// Reset Button Functionality
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("home-score").textContent = 0;
    document.getElementById("guest-score").textContent = 0;
});
