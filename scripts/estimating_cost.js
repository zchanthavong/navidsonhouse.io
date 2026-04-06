const COST_PER_NIGHT = 60.00;
const OFFICE_COST = 15.00;

window.addEventListener("load", setupForm);

function setupForm() {
    document.getElementById("myEnd").value = 0;
    document.getElementById("myTip").value = 0;
    document.getElementById("officeAccess").value = false;
    calcTotal();
    document.getElementById("myEnd").onchange = calcTotal;
    document.getElementById("myTip").onchange = calcTotal;
    document.getElementById("officeAccess").onchange = calcTotal;
}

function formatCurrency(value) {
    return "$" + value.toFixed(2);
}

function calcTotal() {
    let total = 0;
    let days = parseFloat(document.getElementById("myEnd").value) || 0;
    let tip = parseFloat(document.getElementById("myTip").value) || 0;
    let boughtOffice = document.getElementById("officeAccess").checked;

    let dayCost = COST_PER_NIGHT * days;

    total += dayCost;
    total += tip;
    total += boughtOffice ? OFFICE_COST : 0;
    document.getElementById("totalCost").innerHTML = formatCurrency(total);
}