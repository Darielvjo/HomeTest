function calcularSalarioNeto(salario, horasExtras, bonificaciones, vacationDays) {
    let tarifaHora = salario / 160;
    let pagoExtra = horasExtras * tarifaHora * 1.35;
    let pagoVacaciones = (salario / 23.83) * vacationDays;

    // 🏦 Deducciones calculadas sobre el salario mensual
    let afp = salario * 0.0287;
    let sfs = salario * 0.0304;
    let isr = calcularISR(salario);

    let totalDeducciones = afp + sfs + isr;
    let salarioNeto = salario + pagoExtra + bonificaciones + pagoVacaciones - totalDeducciones;

    return { neto: salarioNeto, afp, sfs, isr };
}

function calcularISR(salario) {
    if (salario <= 34685) return 0;
    if (salario <= 52027) return (salario - 34685) * 0.15;
    if (salario <= 72685) return ((salario - 52027) * 0.20) + ((52027 - 34685) * 0.15);
    return ((salario - 72685) * 0.25) + ((72685 - 52027) * 0.20) + ((52027 - 34685) * 0.15);
}

function calcularDobleSueldo(salario, mesesTrabajados) {
    return (salario * mesesTrabajados) / 12;
}
