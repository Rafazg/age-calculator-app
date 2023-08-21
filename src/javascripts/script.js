document.getElementById("calculateButton").addEventListener("click", function() {
    const dayInput = parseInt(document.getElementById("dayInput").value) || 1;
    const monthInput = parseInt(document.getElementById("monthInput").value) || 1;
    const yearInput = parseInt(document.getElementById("yearInput").value) || 2000;

    const inputDate = new Date(yearInput, monthInput - 1, dayInput);
    const currentDate = new Date();

    const timeDifference = currentDate - inputDate;
    const yearsPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const monthsPassed = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * (365 / 12)));
    const daysPassed = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * (365 / 12))) / (1000 * 60 * 60 * 24));

    document.getElementById("yearsNumber").textContent = yearsPassed;
    document.getElementById("monthsNumber").textContent = monthsPassed;
    document.getElementById("daysNumber").textContent = daysPassed;
  });