document.addEventListener("DOMContentLoaded", function() {
    const skillButtons = document.querySelectorAll(".skill");
    
    skillButtons.forEach(skill => {
        const decreaseButton = skill.querySelector(".decrease");
        const increaseButton = skill.querySelector(".increase");
        const levelDisplay = skill.querySelector(".skill-level");
        
        let skillLevel = 0;
        
        decreaseButton.addEventListener("click", function() {
            if (skillLevel > 0) {
                skillLevel--;
                levelDisplay.textContent = skillLevel;
            }
        });
        
        increaseButton.addEventListener("click", function() {
            if (skillLevel < 10) {
                skillLevel++;
                levelDisplay.textContent = skillLevel;
            }
        });
    });
});
