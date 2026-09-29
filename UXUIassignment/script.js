console.log("script is connected");
let rsvpNum = 0;
function handleRSVP() {
  const message = document.createElement("p");
  message.textContent = "You're on the list — see you there!";
  message.classList.add("feedback-message");

  const rsvpButton = document.getElementById("rsvpBtn");
  rsvpButton.after(message);
  let rsvpCount = document.getElementById("count")
  rsvpNum++
  rsvpCount.innerHTML = "RSVP's: " + rsvpNum;
}
