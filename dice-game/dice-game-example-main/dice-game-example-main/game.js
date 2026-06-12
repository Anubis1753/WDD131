// Get the img DOM elements
const dieImages = document.querySelectorAll("#gameboard img");

// When button is pressed then change dye images to gif animation
document.getElementById("rollButton").addEventListener("click", (event) => {
    dieImages.forEach((image) => {
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    });

    // At some point please stop rolling
    // Time delay
    // Wait 2 seconds, then do this code

    setTimeout(() => {
        //set all die images to a random number
        dieImages.forEach((image) => {
            if(isDieUnlocked(image)) {
                image.src = "assets/white_dice_" + (Math.floor(Math.random() * 6) + 1) + ".gif";
            }
        });
    }, 500);

});

function isDieUnlocked(dieImage) {
    const checkboxes = document.querySelectorAll("#gameboard input");
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    return unchecked.find(checkbox => checkbox.className === dieImage.className);
}