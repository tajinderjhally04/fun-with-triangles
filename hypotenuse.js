const sideInput = document.querySelectorAll('.side-input');
const hypotenuseButton = document.querySelector('#hypotenuse-btn');
const outputAnswer = document.querySelector('#output');

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    valueOfA = Number(sideInput[0].value);
    valueOfB = Number(sideInput[1].value)

    if (valueOfA > 0 && valueOfB > 0) {
        const sumOfSquares = calculateSumOfSquares(valueOfA, valueOfB );
        const hypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
        outputAnswer.innerText = "Hypotenuse is : " + hypotenuse;
    }
    else {
        outputAnswer.innerText = "Values cannot be zero or negative";
    }


}

hypotenuseButton.addEventListener('click', calculateHypotenuse)
