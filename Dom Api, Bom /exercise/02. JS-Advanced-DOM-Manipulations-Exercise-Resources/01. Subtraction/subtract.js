function subtract() {
    let firstNumb = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
   let result = parseFloat(firstNumb - secondNumber);
    let resultTag = document.getElementById('result').textContent = result;
}