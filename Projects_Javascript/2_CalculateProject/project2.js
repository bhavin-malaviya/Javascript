  // JavaScript to handle BMI calculation

  const form = document.querySelector("#bmi-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const height = parseFloat(document.querySelector("#height").value);
      const weight = parseFloat(document.querySelector("#weight").value);
      const results = document.querySelector("#results");

      console.log(results); // Debugging log
      if (isNaN(height) || height <= 0) {
        console.log("Please enter a valid height."); // Debugging log
        results.textContent = "Please enter a valid height.";
      } else if (isNaN(weight) || weight <= 0) {
        console.log("Please enter a valid weight."); // Debugging log
        results.textContent = "Please enter a valid weight.";
      } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        console.log("Calculated BMI:", bmi); // Debugging log
        results.innerHTML = `Your BMI is <strong>${bmi}</strong>`;
      }
    });