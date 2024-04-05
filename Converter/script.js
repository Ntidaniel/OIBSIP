const tempInput = document.getElementById('temp-input');
const tempTypeInput = document.getElementById('temp-type-input');
const convertBtn = document.getElementById('convert-btn');
const resetBtn = document.getElementById('reset-btn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', convertTemp);
resetBtn.addEventListener('click', resetFields);

function convertTemp() {
    const temp = parseFloat(tempInput.value);
    const tempType = tempTypeInput.value;
    let result;

    if (isNaN(temp)) {
        resultDiv.innerHTML = 'Please enter a valid number.';
        return;
    }

    switch (tempType) {
        case 'celsius':
            result = `${temp}°C = ${(temp * 9 / 5) + 32}°F = ${temp + 273.15}K`;
            break;
        case 'fahrenheit':
            result = `${temp}°F = ${(temp - 32) * 5 / 9}°C = ${(temp - 32) * 5 / 9 + 273.15}K`;
            break;
        case 'kelvin':
            result = `${temp}K = ${temp - 273.15}°C = ${(temp - 273.15) * 9 / 5 + 32}°F`;
            break;
    }

    resultDiv.innerHTML = result;
}

function resetFields() {
    tempInput.value = '';
    tempTypeInput.value = 'celsius';
    resultDiv.innerHTML = '';
}