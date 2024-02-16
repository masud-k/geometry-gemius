function calculateRectangleArea(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width)

    const rectangleHeight = document.getElementById('rectangle-height');
    const rectangleHeightText = rectangleHeight.value;
    const height = parseFloat(rectangleHeightText);
    console.log(height)

    const area = (width * height);
    console.log ('area of the rectangle=',area)

    const result = document.getElementById('rectangle-area');
    result.innerHTML = area;
}