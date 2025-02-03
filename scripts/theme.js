function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    // Guardar la preferencia en localStorage
    let theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);

    document.querySelectorAll(".card, .chart-container").forEach(element => {
        element.classList.toggle("dark-mode");
    });

    actualizarTextoBoton();
}

function actualizarTextoBoton() {
    let themeToggleBtn = document.getElementById("themeToggle");
    themeToggleBtn.textContent = document.body.classList.contains("dark-mode") ? "Light" : "Dark";
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.querySelectorAll(".card, .chart-container").forEach(element => {
            element.classList.add("dark-mode");
        });
    }

    actualizarTextoBoton();
});
