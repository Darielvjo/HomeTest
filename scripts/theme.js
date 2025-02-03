function actualizarTextoBoton() {
    let themeToggleBtn = document.getElementById("themeToggle");
    themeToggleBtn.textContent = document.body.classList.contains("dark-mode") ? "Light" : "Dark";
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    let theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);

    document.querySelectorAll(".card, .chart-container").forEach(element => {
        element.classList.toggle("dark-mode");
    });

    actualizarTextoBoton();
};
