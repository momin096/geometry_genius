// TRAINGLE --------------------------------------

function calculateTriangleArea(){
    // const triangleBaseInput = document.getElementById('triangle-base');
    // const triangleBaseText = triangleBaseInput.value ;
    // const triangleBase = parseFloat(triangleBaseText);

    const triangleBase = getInputValueById('triangle-base');

    // const triangleHeightInput = document.getElementById('triangle-height');
    // const triangleHeightText = triangleHeightInput.value ;
    // const triangleHeight = parseFloat(triangleHeightText);

    const triangleHeight = getInputValueById('triangle-height');

    const area = 0.5 * triangleBase * triangleHeight;

    setInnerTextById('triangle-area',area);
    // const triangleArea = document.getElementById('triangle-area');
    // triangleArea.innerText = area;
}

// RECTANGLE -------------------------------------

function calculateRectangleArea(){
    const rectangleWidth = getInputValueById('rectangle-width');
    const rectangleLength = getInputValueById('rectangle-length');

    const area =  rectangleWidth * rectangleLength;

    setInnerTextById('rectangle-area', area);
}

// PARALELLOGRAM -----------------------------------

function calculateParallelogramArea(){
    const parallelogramBase = getInputValueById('parallelogram-base');
    const parallelogramHeight = getInputValueById('parallelogram-height');

    const area = parallelogramBase * parallelogramHeight;

    setInnerTextById('parallelogram-area', area);
}


// RHOMBUS -----------------------------------------

function calculateRhombusArea(){
    const rhombusD1 = getInputValueById('rhombus-d1');
    const rhombusD2 = getInputValueById('rhombus-d2');

    const area = 0.5 * rhombusD1 * rhombusD2;

    setInnerTextById('rhombus-area', area);
}

// PENTAGON ------------------------------------------

function calculatePentagonArea(){
    const pentagonP = getInputValueById('pentagon-p');
    const pentagonB = getInputValueById('pentagon-b');
    
    const area = 0.5 * pentagonP * pentagonB;

    setInnerTextById('pentagon-area', area);
}

// Ellipse -------------------------------------------

function calculateEllipseArea(){
    const ellipseA = getInputValueById('ellipse-a');
    const ellipseB = getInputValueById('ellipse-b');

    const area = 3.1416 * ellipseA * ellipseB;

    setInnerTextById('ellipse-area', area);
}

// COMMON FUNCTION'S ----------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value ;
    const inputValue = parseFloat(inputValueText);
    return inputValue; 
}


function setInnerTextById(elementId,area){
    const areaId = document.getElementById(elementId);
    areaId.innerText = area;  
}
