    //VARIABLES BOTONES FORMAS
    let isBrush = false;
    let isRect = false;
    let isFillRect = false;
    let isRound = false;
    let isFillRound = false;
    let isText = false;

export function formasButton(event){
    let buttonClicked = event.target.value;
    console.log(buttonClicked);
    switch (buttonClicked){
        case "1":
            console.log("Clic is brush");
            isBrush = true;
            isRect = false;
            isFillRect = false;
            isRound = false;
            isFillRound = false;
            isText = false;
            break;
        case "2":
            console.log("Clic is rect");
            isBrush = false;
            isRect = true;
            isFillRect = false;
            isRound = false;
            isFillRound = false;
            isText = false;
            break;
    };
}