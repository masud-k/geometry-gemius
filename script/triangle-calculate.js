function calculateTriangleArea(){
    // triangle base measurement
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseText = triangleBase.value;
    const base = parseFloat(triangleBaseText);
    console.log(base)

    // triangle height measurement
    const triangleheight = document.getElementById('triangle-height');
    const triangleheightText = triangleheight.value;
    const height = parseFloat(triangleheightText);
    console.log(height)
    
    // triangle area calculation
    const area = (base * height * 0.5);
    console.log ('area of the triangle=',area)
}