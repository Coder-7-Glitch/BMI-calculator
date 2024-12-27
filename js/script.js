document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let result = document.getElementById('result');

    if (height > 0) {
        let bmi = weight / (height * height);
        let category = '';

        if (bmi < 18.9) {
            category = 'underweight';
        } else if (bmi >= 18.9 && bmi < 28.9) {
            category = 'normal weight';
        } else {
            category = 'overweight';
        }

        result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category})`;
    } else {
        result.innerHTML = "Height must be greater than zero.";
    }
});
