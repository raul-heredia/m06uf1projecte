window.onload = main;

function main() {
    let moviecontainer = document.getElementById('video-paint'),
        movie = moviecontainer.querySelector('video'),
        controls = moviecontainer.querySelector('figcaption'),
        playpause = document.getElementById('playpause');
    movie.removeAttribute('controls');


    // ----------------------------------------- 
    // --------------- FUNCIONES ---------------
    // -----------------------------------------

    function playPause(event) {
        if (movie.paused) {
            movie.play();
            playpause.querySelector('i').classList.remove('fa-play');
            playpause.querySelector('i').classList.add('fa-pause');
        } else {
            movie.pause();
            playpause.querySelector('i').classList.remove('fa-pause');
            playpause.querySelector('i').classList.add('fa-play');
        }
    }



    playpause.addEventListener("click", playPause, false)
}