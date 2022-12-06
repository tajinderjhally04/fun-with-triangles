const submitButton = document.querySelector('#submit-btn');
const outputArea = document.querySelector('#output');
const baseInput = document.querySelector('#base-input');
const heightInput = document.querySelector('#height-input')

function calculateArea() {
    // console.log("clicked");
    // console.log(baseInput.value);
    // console.log(heightInput.value);

    const baseOfTriangle = Number(baseInput.value);
    const heightOfTriangle = Number(heightInput.value);

    if (baseOfTriangle > 0 && heightOfTriangle > 0) {
        const area = (baseOfTriangle * heightOfTriangle) / 2;

        outputArea.innerText = "Area of triangle is : " + area;
    } else {
        outputArea.innerText = "values cannot be negative or zero.";
    }


}

submitButton.addEventListener('click', calculateArea);
