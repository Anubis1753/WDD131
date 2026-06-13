// Character object with properties and methods
const character = {
    name: "Yogg-Sathos",
    class: "Primordial Cosmic Hunger",
    level: 198,
    health: 1000000,
    // Updated to use the local file path
    image: "cosmicHorror.png", 
    
    // Method to handle taking damage
    attacked: function() {
        if (this.health > 0) {
            this.health -= 200000;
            // Prevent health from dipping below 0 and notify the user
            if (this.health <= 0) {
                this.health = 0; 
                alert(`${this.name} has died!`);
            }
            updateDisplay();
        } else {
            alert(`${this.name} is already dead.`);
        }
    },
    
    // level up
    levelUp: function() {
        if (this.health > 0) {
            this.level += 1;
            updateDisplay();
        } else {
            alert(`${this.name} cannot level up because they have died.`);
        }
    }
};

// Update DOM elements with the object's current values
function updateDisplay() {
    document.getElementById("character-image").src = character.image;
    document.getElementById("character-image").alt = character.name;
    document.getElementById("character-name").textContent = character.name;
    document.getElementById("character-class").textContent = character.class;
    document.getElementById("character-level").textContent = character.level;
    document.getElementById("character-health").textContent = character.health;
}

// Initialize the display 
updateDisplay();

// Attach event listeners to the buttons
document.getElementById("attack-btn").addEventListener("click", () => {
    character.attacked();
});

document.getElementById("level-btn").addEventListener("click", () => {
    character.levelUp();
});