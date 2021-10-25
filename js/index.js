window.onload = main;

function main(){
    
    // ----------------------------------------- 
    // --------------- VARIABLES ---------------
    // -----------------------------------------

    // VARIABLES CANVAS
    let canvas = document.getElementById("paint-canvas");
    let context = canvas.getContext("2d");
    
    // VARIABLES COLORES
    let drawColor = 'black';
    let colors = document.getElementsByClassName('colors')[0];
    let colorPicker = document.getElementById('colorPicker');


    // VARIABLES GROSOR DIBUJO
    let widthSlider = document.getElementById('width-slider');
    let widthLabel = document.getElementById('grosor');
    let paintWidth = 5;

    
    //VARIABLES BOTONES FORMAS
    let formas = document.getElementsByClassName('formas')[0];
    let isBrush = false;
    let isRect = false;
    let isFillRect = false;
    let isRound = false;
    let isFillRound = false;
    let isText = false;

    // VARIABLES DIBUJO
    context.strokeStyle = drawColor;
    context.lineWidth = paintWidth;
    let isDrawing = false;
    context.lineCap = 'round';

    // VARIABLES BOTÓN LIMPIAR
    let clearButton = document.getElementById('clear');


    // VARIABLES BOTÓN GUARDAR
    let saveButton = document.getElementById('save');

    // ----------------------------------------- 
    // --------------- FUNCIONES ---------------
    // -----------------------------------------
    
    // FUNCIONES COLOR

    // Nos da el value del color al picar en cada botón (Incluido color picker)
    function colorValue(event){
        //console.log(drawColor);
        drawColor = event.target.value; //Almacenamos el valor del color en la variable drawColor
        context.strokeStyle = drawColor; // Asignamos que el color es igual al color que hemos guardado en la varibale
    }
    // Nos devuelve el color de color picker cuando este ha sido cambiado
    function colorPickerValue(event){
        // console.log(drawColor);
        drawColor = event.target.value; //Almacenamos el valor del color en la variable drawColor
        context.strokeStyle = drawColor; // Asignamos que el color es igual al color que hemos guardado en la varibale
    }

    // FUNCION GROSOR DE LINEA

    function widthPicker(event){
        //console.log(widthSlider.value); // Obtiene el valor del slider
        paintWidth = widthSlider.value; // Asigna el valor del slider a la variable paintWidth
        context.lineWidth = paintWidth; // Asigna que el tamaño de la linea es igual al que hemos guardado en la variable 
        widthLabel.innerHTML = `Grosor: ${widthSlider.value}` // Devolvemos el grosor actual en el label grosor
    }

    function resetVars(){ // Reseteamos todas las variables
        isBrush = false;
        isRect = false;
        isFillRect = false;
        isRound = false;
        isFillRound = false;
        isText = false;
    }

    function resetActive() { // Eliminamos la clase de todos los botones (Aunque no existan)
        document.getElementById('brush').classList.remove('activeButton');
        document.getElementById('rect').classList.remove('activeButton');
        document.getElementById('fillRect').classList.remove('activeButton');
        document.getElementById('round').classList.remove('activeButton');
        document.getElementById('fillRound').classList.remove('activeButton');
        document.getElementById('text').classList.remove('activeButton');
      }

    function formasButton(event){
        let buttonClicked = event.target.value;

        if(event.target.tagName == 'I' && event.target.parentNode.tagName == 'BUTTON'){
            buttonClicked = event.target.parentNode.value; // Nos aseguramos que clicando el icono no devuelva undefined
        }
        switch (buttonClicked){
            case "1":
                resetVars();
                resetActive();
                isBrush = true; 
                document.getElementById('brush').classList.add('activeButton');
                break;
            case "2":
                resetVars();
                resetActive();
                isRect = true;
                document.getElementById('rect').classList.add('activeButton');
                break;
            case "3":
                resetVars();
                resetActive();
                isFillRect = true;
                document.getElementById('fillRect').classList.add('activeButton');
                break;
            case "4":
                resetVars();
                resetActive();
                isRound = true;
                document.getElementById('round').classList.add('activeButton');
                break;
            case "5":
                resetVars();
                resetActive();
                isFillRound = true;
                document.getElementById('fillRound').classList.add('activeButton');
                break;
            case "6":
                resetVars();
                resetActive();
                isText = true;
                document.getElementById('text').classList.add('activeButton');
                break;
        };
    }

    function start(event){
        if(isBrush){
            isDrawing = true; // Ponemos la variable isDrawing en true
            context.beginPath(); // Iniciamos una nueva ruta
            context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop); // Movemos el path a donde el usuario ha hecho clic
            // Con lineto y stroke aquí nos aseguramos que solo haciendo clic, pintará un punto
            context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
            context.stroke();
        }
        }

    function draw(event){
        if(isDrawing && isBrush){ // Mientras isDrawing sea true (no soltar el clic) haremos una nueva linea que se moverá por done nos movamos con el cursor
            context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
            context.stroke();
        }
    }
    function stop(event){ 
        if (isDrawing && isBrush){ // Si soltamos el raton y isDrawing es cierto, 
            context.stroke(); // haremos un stroke para acabar la linea, finalizaremos la ruta y pondremos la variable isDrawing en false
            context.closePath();
            isDrawing = false;
        }
    }

    // FUNCION LIMPIAR CANVAS
    function clear(){ // Hacemos un clear de todo el canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    // FUNCION GUARDAR CANVAS
    function save(){
        let imageName = prompt('Introduce el nombre de la imagen');
        let canvasDataURL = canvas.toDataURL(); // Devuelve una URL que contiene una imagen del dibujo
        let image = document.createElement('a'); // Crea un enlace
        image.href = canvasDataURL; // Asignamos este enlace al que ha generado canvasDataURL
        image.download = imageName || 'dibujo';  // Descarga la imagen con el nombre que le hemos pasado, en caso de que no tenga nombre este será dibujo.
        image.click(); // Simulamos el clic del raton en el enlace que nos permitirá descargar la imagen
    }


    // ----------------------------------------- 
    // --------------- LISTENERS ---------------
    // -----------------------------------------

    // Listener clic botones de colores y color picker
    colors.addEventListener('click', colorValue, false); // Cuando hacemos clic en los botones de colors ejecuta la funcion colorValue
    colorPicker.addEventListener('change', colorPickerValue, false); // Cuando el valor del input color cambie se ejecuta la funcion colorPickervalue
    
    formas.addEventListener('click', formasButton, false); // 

    // LISTENER LINE WIDTH
    widthSlider.addEventListener('change', widthPicker, false); // Cuando cambia el valor del input range se ejecuta la funcion widthPicker
    
    // Listener dibujo
        canvas.addEventListener('mousedown', start, false) // Cuando el ratón está abajo (Clic mantenido) ejecutamos la funcion start 
        canvas.addEventListener('mousemove', draw, false) // Mientras movemos el ratón con el clic mantenido dibujamos
        canvas.addEventListener('mouseup', stop, false) // Cuando soltamos el ratón para de dibujar
        canvas.addEventListener('mouseout', stop, false) // Si el ratón sale fuera del canvas para de dibujar

    // LISTENER BOTON LIMPIAR
    clearButton.addEventListener('click', clear, false) // Al hacer clic en el boton Limpiar se ejecuta la función clear

    // LISTENER BOTÓN GUARDAR
    saveButton.addEventListener('click', save, false) // Al hacer clic en el botón guardar se ejecuta la function save

    document.getElementById('showVar').onclick = () =>{
        console.log("isBrush: " + isBrush);
        console.log("isRect: " + isRect);
        console.log("isFillRect: " + isFillRect);
        console.log("isRound: " + isRound);
        console.log("isFillRound: " + isFillRound);
        console.log("isText: " + isText);
    }
}