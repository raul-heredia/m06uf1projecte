window.onload = main;

function main() {
    let videoContainer = document.getElementById('video-paint'),
        video = videoContainer.getElementsByTagName('video')[0],
        retroceder = document.getElementById('retroceder'),
        playpause = document.getElementById('playpause'),
        avanzar = document.getElementById('avanzar');



    // ----------------------------------------- 
    // --------------- FUNCIONES ---------------
    // -----------------------------------------

    function playPause(event) {
        if (video.paused) {
            video.play();
            playpause.querySelector('i').classList.remove('fa-play');
            playpause.querySelector('i').classList.add('fa-pause');
        } else {
            video.pause();
            playpause.querySelector('i').classList.remove('fa-pause');
            playpause.querySelector('i').classList.add('fa-play');
        }
    }

    function retrocederTiempo(event) {
        video.currentTime -= 10;
    }
    function avanzarTiempo(event) {
        console.log("Clic Avanzar");
        video.currentTime += 10;
    }

    playpause.addEventListener("click", playPause, false);
    retroceder.addEventListener("click", retrocederTiempo, false);
    avanzar.addEventListener("click", avanzarTiempo, false);
}