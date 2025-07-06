document.getElementById("checkBtn").addEventListener("click", function() {
  const age = parseInt(document.getElementById("ageInput").value);
  const resultElement = document.getElementById("voteResult");
  
  if (age >= 18) {
    resultElement.textContent = "Sahi neta chun!";
  } else {
    resultElement.textContent = "Phle bada to ho jaa.";
  }
});

