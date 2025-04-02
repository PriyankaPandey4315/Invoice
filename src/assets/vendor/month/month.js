$(function () {
    // Current Month
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let name = month[d.getMonth() - 1];
    document.getElementById("currentMonth").innerHTML = name;
});