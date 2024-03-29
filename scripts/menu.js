document.addEventListener('DOMContentLoaded', function() {

    let startBtn = document.getElementById('startBtn');

    startBtn.addEventListener('click', function() {
        let menuContent = document.querySelectorAll('.game-menu');

        menuContent.forEach(element => {
            element.classList.add('hidden');
        });

        const audio = new Audio('ressources/sounds/music.ogg');
        audio.play();
        showDialog();
    });
});
