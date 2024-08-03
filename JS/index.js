function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value ;
    const triangleBase = parseFloat(triangleBaseText);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value ;
    const triangleHeight = parseFloat(triangleHeightText);

    const area = 0.5 * triangleBase * triangleHeight;
    console.log(area);

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}