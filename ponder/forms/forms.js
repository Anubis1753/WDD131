// Retrieve the form from the DOM, print out the result

const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');

function updateNotesField() {
  const value = travelRange.value;

  if (value === "many") {
    notesContainer.hidden = false;
    notes.required = true;
  } else {
    notesContainer.hidden = true;
    notes.required = false;
    notes.value = "";
  }
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();

// If the user selects one campus but dosent select any campuses, display messege "Select one campus"

// Helper function to return checked campusses
function getCheckedCampuses(campuses) {
    return Array.from(campuses)
        .filter(campus => campus.checked)
        .map(campus => campus.value);
}

// Helper function to return if date is valid
function isDateValid(){
    const date = document.getElementById("availableDate").value;
    const todaysDate = new Date();
    return date > todaysDate;

}

// Add event listener to the form to detect submit
form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(event);
    console.log(form.firstName.value);

    const numberOfCampuses = form.travelRange.value;
    const campuses = form.campus.value;
    console.log(campuses);

    // Clear previous output messages
  output.textContent = "";

    // Get trimmed values and selected campuses array
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.travelRange.value;
    const availableDate = form.availableDate.value;
    const selectedCampuses = Array.from(campusBoxes).filter(box => box.checked).map(box => box.value);
    const note = form.notes.value.trim();
    
    

    // Output success confirmation summary
    output.innerHTML = `
    <h2>Preference Submitted</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Availability: ${availableDate}</p>
    <p>Campuses: ${selectedCampuses.join(", ")}</p>
    <p>Preference Level: ${type === "one" ? "One campus" : "Two or more campuses"}</p>
    `;

    // Reset form and re-evaluate field visibility
    form.reset();
    updateNotesField();

    if(numberOfCampuses === "one" &&
        getCheckedCampuses(campuses).length == 0
    ) {
        console.log("No campuses checked");

        document.getElementById("output").textContent = "Please select one campus";
    }

    if (type === "many" && selectedCampuses.length < 2) {
        output.textContent = "Please select at least two campuses.";
        return;
    }

    if (type === "many" && note === "") {
        output.textContent = "Please add travel notes explaining your preference.";
        return;
    }

    function isDateValid(){
        const dateValue = document.getElementById("availableDate").value;
        if (!dateValue) return false;
        
            const chosenDate = new Date(dateValue);
            const todaysDate = new Date();
            todaysDate.setHours(0, 0, 0, 0);

            return chosenDate >= todaysDate;
    }
});
