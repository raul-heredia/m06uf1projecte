window.onload = main;

function main() {

    // ----------------------------------------- 
    // --------------- VARIABLES ---------------
    // -----------------------------------------

    // VARIABLES CANVAS
    let canvas = document.getElementById("paint-canvas");
    let context = canvas.getContext("2d");

    // VARIABLES COLORES
    let drawColor = 'black';
    let fillColor = 'black';
    let colors = document.getElementsByClassName('colors')[0];
    let colorPicker = document.getElementById('colorPicker');


    // VARIABLES GROSOR DIBUJO
    let widthSlider = document.getElementById('width-slider');
    let widthLabel = document.getElementById('grosor');
    let paintWidth = 5;


    //VARIABLES BOTONES FORMAS
    let formas = document.getElementsByClassName('formas')[0];
    let isBrush = true, isRect = false, isFillRect = false, isRound = false,
        isFillRound = false, isRomb = false, isFillRomb = false, isText = false,
        isbold = false, isItalic = false, isTriangle = false, isFillTriangle = false;

    // VARIABLES DIBUJO
    context.strokeStyle = drawColor;
    context.lineWidth = paintWidth;
    let isDrawing = false;

    // VARIABLES FORMAS
    let xInic, yInic, xFin, yFin, rectWidth, rectHeight, roundRadius, triangleSide;

    // VARIABLES TEXTO
    let textSlider = document.getElementById('textSlider');
    let textLabel = document.getElementById('labelSize');
    let textSize = 18;
    // VARIABLES INPUT IMAGE

    let imageInput = document.getElementById('imageInput');
    let img = new Image();



    // VARIABLES BOTÓN LIMPIAR
    let clearButton = document.getElementById('clear');


    // VARIABLES BOTÓN GUARDAR
    let saveButton = document.getElementById('save');

    // ----------------------------------------- 
    // --------------- FUNCIONES ---------------
    // -----------------------------------------

    // FUNCIONES COLOR

    // Nos da el value del color al picar en cada botón (Incluido color picker)
    function colorValue(event) {
        //console.log(drawColor);
        drawColor = event.target.value; //Almacenamos el valor del color en la variable drawColor
        fillColor = event.target.value; //Almacenamos el valor del color en la variable drawColor
        context.strokeStyle = drawColor; // Asignamos que el color es igual al color que hemos guardado en la varibale
        context.fillStyle = fillColor;
    }
    // Nos devuelve el color de color picker cuando este ha sido cambiado
    function colorPickerValue(event) {
        // console.log(drawColor);
        drawColor = event.target.value; //Almacenamos el valor del color en la variable drawColor
        fillColor = event.target.value; //Almacenamos el valor del color en la variable drawColor
        context.strokeStyle = drawColor; // Asignamos que el color es igual al color que hemos guardado en la varibale
        context.fillStyle = fillColor;
    }

    // FUNCION GROSOR DE LINEA

    function widthPicker(event) {
        //console.log(widthSlider.value); // Obtiene el valor del slider
        paintWidth = widthSlider.value; // Asigna el valor del slider a la variable paintWidth
        context.lineWidth = paintWidth; // Asigna que el tamaño de la linea es igual al que hemos guardado en la variable 
        widthLabel.innerHTML = `Grosor: ${widthSlider.value}` // Devolvemos el grosor actual en el label grosor
    }

    function textSizePicker(event) {
        textSize = textSlider.value; // Asigna el valor del slider a la variable paintWidth
        textLabel.innerHTML = `Tamaño Texto: ${textSlider.value}` // Devolvemos el grosor actual en el label grosor
    }

    function resetVars() { // Reseteamos todas las variables
        isBrush = false;
        isRect = false;
        isFillRect = false;
        isRound = false;
        isFillRound = false;
        isRomb = false;
        isFillRomb = false;
        isTriangle = false;
        isFillTriangle = false;
        isText = false;
        isbold = false;
        isItalic = false;
    }

    function resetActive() { // Eliminamos la clase de todos los botones (Aunque no existan)
        document.getElementById('brush').classList.remove('activeButton');
        document.getElementById('rect').classList.remove('activeButton');
        document.getElementById('fillRect').classList.remove('activeButton');
        document.getElementById('round').classList.remove('activeButton');
        document.getElementById('fillRound').classList.remove('activeButton');
        document.getElementById('romb').classList.remove('activeButton');
        document.getElementById('fillRomb').classList.remove('activeButton');
        document.getElementById('triangle').classList.remove('activeButton');
        document.getElementById('fillTriangle').classList.remove('activeButton');
        document.getElementById('text').classList.remove('activeButton');
        document.getElementById('bold').classList.add('hidden');
        document.getElementById('bold').classList.remove('activeButton');
        document.getElementById('italic').classList.add('hidden');
        document.getElementById('italic').classList.remove('activeButton');
        document.getElementById('textSlider').classList.add('hidden');
        document.getElementById('labelSize').classList.add('hidden');
        document.getElementById('image').classList.remove('activeButton');
        document.getElementById('imageLabel').classList.add('hidden');
    }

    function formasButton(event) {
        let buttonClicked = event.target.value;
        if (event.target.tagName == 'I' && event.target.parentNode.tagName == 'BUTTON') {
            buttonClicked = event.target.parentNode.value; // Nos aseguramos que clicando el icono no devuelva undefined diciendole que el value es el valor del parentNode (El valor de cada botón)
        }
        if (event.target.tagName == 'IMG' && event.target.parentNode.tagName == 'BUTTON') {
            buttonClicked = event.target.parentNode.value; // Lo mismo que arriba pero con IMG y BUTTON para los iconos del triangulo
        }

        switch (buttonClicked) {
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
                isRomb = true;
                document.getElementById('romb').classList.add('activeButton');
                break;
            case "7":
                resetVars();
                resetActive();
                isFillRomb = true;
                document.getElementById('fillRomb').classList.add('activeButton');
                break;
            case "8": // Triangle
                resetVars();
                resetActive();
                isTriangle = true;
                document.getElementById('triangle').classList.add('activeButton');
                break;
            case "9": // fillTriangle
                resetVars();
                resetActive();
                isFillTriangle = true;
                document.getElementById('fillTriangle').classList.add('activeButton');
                break;
            case "10":
                resetVars();
                resetActive();
                isText = true;
                document.getElementById('text').classList.add('activeButton');
                document.getElementById('bold').classList.remove('hidden');
                document.getElementById('italic').classList.remove('hidden');
                document.getElementById('textSlider').classList.remove('hidden');
                document.getElementById('labelSize').classList.remove('hidden');
                break;
            case "11":
                if (!isbold) {
                    document.getElementById('bold').classList.add('activeButton');
                    isbold = true;
                } else {
                    document.getElementById('bold').classList.remove('activeButton');
                    isbold = false;
                }
                break;
            case "12":
                if (!isItalic) {
                    document.getElementById('italic').classList.add('activeButton');
                    isItalic = true;
                } else {
                    document.getElementById('italic').classList.remove('activeButton');
                    isItalic = false;
                }
                break;
            case "13":
                resetVars();
                resetActive();
                document.getElementById('image').classList.add('activeButton');
                document.getElementById('imageLabel').classList.remove('hidden');
                break;
        };
    }

    function resetDegree() {
        context.Restore(),
            document.getElementById('rotar').classList.remove('activeButton');
    }

    function start(event) {
        if (isBrush) {
            isDrawing = true; // Ponemos la variable isDrawing en true
            context.beginPath(); // Iniciamos una nueva ruta
            context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop); // Movemos el path a donde el usuario ha hecho clic
            // Con lineto y stroke aquí nos aseguramos que solo haciendo clic, pintará un punto
            context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
            context.stroke();
        }
        if (isRect || isFillRect || isRound || isFillRound || isText) {
            isDrawing = true; // Ponemos la variable isDrawing en true
            xInic = event.clientX - canvas.offsetLeft;  // Guardamos el valor inicial de X
            yInic = event.clientY - canvas.offsetTop; // Guardamos el valor inicial de Y
            context.beginPath(); // Iniciamos una nueva ruta

            if (isText) {
                let mensaje = (prompt('Introduce tu mensaje'));
                if (isItalic) {
                    context.font = `italic ${textSize}px Arial`;
                } else if (isbold) {
                    context.font = `bold ${textSize}px Arial`;
                } else if (isbold && isItalic) {
                    context.font = `bold italic ${textSize}px Arial`;
                } else {
                    context.font = `normal ${textSize}px Arial`;
                }

                context.fillText(mensaje, xInic, yInic);
                isDrawing = false;
            }
        }
        if (isTriangle || isFillTriangle) {
            isDrawing = true; // Ponemos la variable isDrawing en true
            xInic = event.clientX - canvas.offsetLeft;  // Guardamos el valor inicial de X
            yInic = event.clientY - canvas.offsetTop; // Guardamos el valor inicial de Y
            context.beginPath(); // Iniciamos una nueva ruta
            context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop); // Movemos el path a donde el usuario ha hecho clic
        }
    }

    function draw(event) {
        if (isDrawing && isBrush) { // Mientras isDrawing sea true (no soltar el clic) haremos una nueva linea que se moverá por done nos movamos con el cursor
            context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
            context.stroke();
        }
    }
    function stop(event) {
        if (isDrawing && isBrush) { // Si soltamos el raton y isDrawing es cierto, 
            context.stroke(); // haremos un stroke para acabar la linea, finalizaremos la ruta y pondremos la variable isDrawing en false
            context.closePath(); // Acabamos la ruta
            isDrawing = false; // Declaramos isDrawing en false para decir que hemos acabado de dibujar
        }
        if (isRect || isFillRect) {
            if (isDrawing) { // Si soltamos el raton y isDrawing es cierto, 
                xFin = event.clientX - canvas.offsetLeft; // Guardamos el valor final de X
                yFin = event.clientY - canvas.offsetTop;  // Guardamos el valor final de Y
                rectWidth = xFin - xInic; // Calculamos el ancho del rectangulo restando xInic a xFin
                rectHeight = yFin - yInic; // Calculamos el alto del rectangulo restando yInic a yFin
                context.rect(xInic, yInic, rectWidth, rectHeight) // Hacemos el rectangulo
                if (isFillRect) { // Si hemos hecho clic en el botón de rectangulo pintado hacemos un fill
                    context.fill();
                } else if (isRect) { // Si hemos hecho clic en el botón de rectangulo vacío hacemos un stroke
                    context.stroke(); // haremos un stroke para acabar la linea, finalizaremos la ruta y pondremos la variable isDrawing en false
                }
                context.closePath(); // Acabamos la ruta
                isDrawing = false; // Declaramos isDrawing en false para decir que hemos acabado de dibujar
                resetDegree();
            }
        }

        if (isRound || isFillRound) {
            if (isDrawing) { // Si soltamos el raton y isDrawing es cierto, 
                xFin = event.clientX - canvas.offsetLeft;
                yFin = event.clientY - canvas.offsetTop;
                roundRadius = ((xFin + yFin) - (xInic + yInic)) / 2; // Calculamos el radio sumando los valores y dividiendo por 2
                if (roundRadius < 0) { // Si el radio es menor a 0 lo multiplicamos por -1 para que sea positivo
                    roundRadius *= -1; // Multiplicamos para que se vuelva positivo
                    xFin += roundRadius; //Sumamos el radio a xFin para que aparezca en su lugar y no desplazado a un lado
                    context.arc(xFin, yFin, roundRadius, 0, 2 * Math.PI);
                } else {
                    xInic += roundRadius; //Sumamos el radio a xInic para que aparezca en su lugar y no desplazado a un lado
                    context.arc(xInic, yInic, roundRadius, 0, 2 * Math.PI);
                }
                if (isRound) { // Si hemos seleccionado la redonda vacia hacemos un stroke
                    context.stroke(); // haremos un stroke para acabar la linea, finalizaremos la ruta y pondremos la variable isDrawing en false
                } else if (isFillRound) { // Si hemos seleccionado la redonda pintada hacemos un fill
                    context.fill();
                }
                context.closePath(); // Acabamos la ruta
                isDrawing = false; // Ponemos isdrawing en false
                resetDegree();
            }
        }
        if (isTriangle || isFillTriangle) {
            if (isDrawing) {
                xFin = event.clientX - canvas.offsetLeft;
                yFin = event.clientY - canvas.offsetTop;
                triangleSide = ((xFin - xInic) / 2);
                context.lineTo(xFin, yInic)
                context.lineTo((triangleSide + xInic), yInic - triangleSide);
                context.closePath();
                if (isTriangle) {
                    context.stroke(); // per a finalitzar i dibuixar el contorn
                } else if (isFillTriangle) {
                    context.fill()
                }
                isDrawing = false; // Ponemos isdrawing en false
            }
        }
    }
    // FUNCION SUBIR IMAGEN

    function imageUpload(event) {
        let files = event.target.files;
        let file = files[0];
        if (file.type.match('image.*')) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                if (event.target.readyState == FileReader.DONE) {
                    img.src = event.target.result;
                    clear();
                    img.onload = () => context.drawImage(img, 0, 0, canvas.width, canvas.height);

                    // Poner brush por defecto
                    resetVars();
                    resetActive();
                    isBrush = true;
                    document.getElementById('brush').classList.add('activeButton');
                }
            }
        } else {
            alert("El archivo seleccionado no es una imagen")
        }

    }

    // FUNCION LIMPIAR CANVAS
    function clear() { // Hacemos un clear de todo el canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    // FUNCION GUARDAR CANVAS
    function save() {
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
    // LISTENER TEXT SIZE
    textSlider.addEventListener('change', textSizePicker, false); // Cuando cambia el valor del input range se ejecuta la funcion widthPicker

    // LISTENER DIBUJO
    canvas.addEventListener('mousedown', start, false) // Cuando el ratón está abajo (Clic mantenido) ejecutamos la funcion start 
    canvas.addEventListener('mousemove', draw, false) // Mientras movemos el ratón con el clic mantenido dibujamos
    canvas.addEventListener('mouseup', stop, false) // Cuando soltamos el ratón para de dibujar
    canvas.addEventListener('mouseout', stop, false) // Si el ratón sale fuera del canvas para de dibujar

    // LISTENER SUBIR IMAGEN
    imageInput.addEventListener('change', imageUpload, false) // Si el ratón sale fuera del canvas para de dibujar
    // LISTENER BOTON LIMPIAR
    clearButton.addEventListener('click', clear, false) // Al hacer clic en el boton Limpiar se ejecuta la función clear

    // LISTENER BOTÓN GUARDAR
    saveButton.addEventListener('click', save, false) // Al hacer clic en el botón guardar se ejecuta la function save

}