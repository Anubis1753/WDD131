let habits = [
    
];
let totalPoints = 0;

function habitTemplate(habit) {
    return `
    <div class="habit-card">
        <span>${habit.name}: ${habit.points}pts</span>
        <button onclick="completeHabit(${habit.id})">Done</button>
    </div>`;
}

function renderHabits(filter = "") {
    const container = document.getElementById("habitsContainer");
    container.innerHTML = "";
    
    const filteredHabits = habits.filter(h => 
        h.name.toLowerCase().includes(filter.toLowerCase())
    );

    filteredHabits.forEach(habit => {
        container.innerHTML += habitTemplate(habit);
    });
}
function completeHabit(id) {
    const habit = habits.find(h => h.id === id);
    if (habit) {
        totalPoints += habit.points;
        document.getElementById("pointsDisplay").innerText = `Points: ${totalPoints}`;
        
        habits = habits.filter(h => h.id !== id);
        renderHabits(document.getElementById("searchInput").value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById("searchInput");
    const addGoalBtn = document.getElementById("addGoalBtn");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => renderHabits(e.target.value));
    }

    if (addGoalBtn) {
        addGoalBtn.addEventListener("click", () => {
            const name = prompt("Enter goal name:");
            const points = parseInt(prompt("Enter points value:"));
            if (name && !isNaN(points)) {
                habits.push({ id: Date.now(), name, points });
                renderHabits(searchInput ? searchInput.value : "");
            }
        });
    }

    renderHabits();
});