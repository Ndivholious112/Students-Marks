
function calculateAverage(test1, test2, exam) {
    return (test1 + test2 + exam) / 3;
}

function determineOutcome(average) {
    if (average < 40) {
        return "Fail";
    } else if (average < 75) {
        return "Pass";
    } else {
        return "Pass with Distinction";
    }
}

function calculate() {
    const name = document.getElementById("studentName").value;
    const test1 = parseFloat(document.getElementById("test1").value);
    const test2 = parseFloat(document.getElementById("test2").value);
    const exam = parseFloat(document.getElementById("exam").value);

    if (isNaN(test1) || isNaN(test2) || isNaN(exam)) {
        alert("Please enter valid numbers for all marks.");
        return;
    }

    const average = calculateAverage(test1, test2, exam);
    const outcome = determineOutcome(average);

    document.getElementById("result").innerText = 
        name + " Average: " + average + " - Final Outcome: " + outcome;
}
  
