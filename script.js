function handleSelection() {
    const question1 = document.getElementById("question1").value;
    document.getElementById("followUpYes").style.display = question1 === "yes" ? "block" : "none";
    document.getElementById("followUpNo").style.display = question1 === "no" ? "block" : "none";
}
