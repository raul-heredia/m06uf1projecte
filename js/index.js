window.onload = main;

function main(){





    // Colors
    let drawColor = 'black';
    let colors = document.getElementsByClassName('colors')[0];
    let colorPicker = document.getElementById('colorPicker');


    colors.addEventListener('click', colorValue, false);
    colorPicker.addEventListener('change', colorPickerValue, false);

    function colorValue(event){
        console.log(event.target.value)
    }
    function colorPickerValue(event){
        console.log(event.target.value)
    }
    
}