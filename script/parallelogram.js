function calculateParallalogranArea(){
    const base = getInputValueById('parallelogram-base');
    console.log('base value', base)

    const height = getInputValueById('parallelogram-height');
    console.log('height value', height)

    const area = (base * height);
    console.log ('area of the parallelogram=',area)

    const result = document.getElementById('parallelogram-area');
    result.innerHTML = area;

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);
    // console.log(inputValue)
    return inputValue
}
