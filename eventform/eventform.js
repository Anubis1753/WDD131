
const form = document.querySelector("#ticketForm");
const userType = document.querySelector("#type");
const conditionalContainer = document.querySelector("#conditionalContainer");
const conditionalLabel = document.querySelector("#conditionalLabel");
const conditionalInput = document.querySelector("#conditionalInput");
const output = document.querySelector("#output");

function updateConditionalField() {
  const selection = userType.value;

  if (selection === "student") {
    conditionalContainer.hidden = false;
    conditionalInput.required = true;
    conditionalLabel.textContent = "Student I#";
    conditionalInput.placeholder = "e.g., 123456789";
  } else if (selection === "guest") {
    conditionalContainer.hidden = false;
    conditionalInput.required = true;
    conditionalLabel.textContent = "Access Code";
    conditionalInput.placeholder = "Enter event code";
  } else {

    conditionalContainer.hidden = true;
    conditionalInput.required = false;
    conditionalInput.value = "";
  }
}

function isDateLaterThanToday() {
  const dateValue = document.getElementById("eventDate").value;
  if (!dateValue) return false;

  const chosenDate = new Date(dateValue);
  const todaysDate = new Date();
  
  todaysDate.setHours(0, 0, 0, 0);
  chosenDate.setHours(0, 0, 0, 0);

  return chosenDate > todaysDate;
}

userType.addEventListener("change", updateConditionalField);

form.addEventListener("submit", event => {
  event.preventDefault();

  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const selectedType = form.type.value;
  const eventDate = form.eventDate.value;
  const secondaryValue = form.conditionalInput.value.trim();

  if (!isDateLaterThanToday()) {
    output.innerHTML = `<div class="error-msg">Event date must be later than the current date.</div>`;
    return;
  }

  if (selectedType === "student") {
    const nineDigitRegex = /^\d{9}$/;
    if (!nineDigitRegex.test(secondaryValue)) {
      output.innerHTML = `<div class="error-msg">Student I# must be 9 digits</div>`;
      return;
    }
  }

  if (selectedType === "guest") {
    if (secondaryValue !== "EVENT131") {
      output.innerHTML = `<div class="error-msg">Invalid Access Code.</div>`;
      return;
    }
  }

  output.innerHTML = `
    <div class="success-box">
      <h2>Ticket Created</h2>
      <p>${firstName} ${lastName}</p>
      <p>${selectedType}</p>
      <p>${eventDate}</p>
    </div>
  `;

  form.reset();
  updateConditionalField();
});