const inputs = document.querySelectorAll('.angle-input');
const isTriangleButton = document.querySelector('#is-triangle-btn');
const outputEL = document.querySelector('#output');

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    angleOne = Number(inputs[0].value);
    angleTwo = Number(inputs[1].value);
    angleThree = Number(inputs[2].value);

    if (angleOne > 0 && angleTwo > 0 && angleThree > 0) {
        const sumOfAngles = calculateSumOfAngles(angleOne, angleTwo, angleThree);
        if(sumOfAngles === 180){
            outputEL.innerText = "Yes, the angles form a triangle";
        }
        else{
            outputEL.innerText = "Oh no, angles don't form a triangle";
        }
    } else {
        outputEL.innerText = "values cannot be negative and zero.";
    }

}

isTriangleButton.addEventListener("click", isTriangle);
