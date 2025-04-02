function calculateAge() {
    let dob = document.getElementById("dob").value;
    if (dob === "") {
        alert("Please select your date of birth.");
        return;
    }
    let dobDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    let monthDiff = today.getMonth() - dobDate.getMonth();
    let dayDiff = today.getDate() - dobDate.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
        monthDiff += 12;
    }

    // Adjust day difference if it's negative
    if (dayDiff < 0) {
        let lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        dayDiff += lastMonth.getDate();
        monthDiff--;
    }

    // Display the age in years, months, and days
    document.getElementById("result").innerText = `Your age is: ${age} years, ${monthDiff} months, and ${dayDiff} days`;
}
