document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("salaryForm").addEventListener("submit", function (e) {
        e.preventDefault();
        
        let salary = parseFloat(document.getElementById("salary").value);
        let extraHours = parseFloat(document.getElementById("extraHours").value) || 0;
        let bonuses = parseFloat(document.getElementById("bonuses").value) || 0;
        let vacationDays = parseFloat(document.getElementById("vacationDays").value) || 0;
        let doubleSalary = parseFloat(document.getElementById("doubleSalaryResult").innerText.replace("RD$ ", "")) || 0;
        
        let result = calcularSalarioNeto(salary, extraHours, bonuses, vacationDays, doubleSalary);
        
        document.getElementById("netSalary").innerText = `RD$ ${result.neto.toFixed(2)}`;
        document.getElementById("resultSection").classList.remove("d-none");

        renderChart(result);
    });

    document.getElementById("calculateDoubleSalary").addEventListener("click", function () {

        let monthsWorked = parseFloat(document.getElementById("workedMonths").value);
        let salaryBase = parseFloat(document.getElementById("doubleSalaryBase").value);
        let doubleSalary = calcularDobleSueldo(salaryBase, monthsWorked);

    document.getElementById("doubleSalaryResult").innerText = `RD$ ${doubleSalary.toFixed(2)}`;
    });

    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
});
