const soundButtons = document.querySelectorAll('.sound-button');

soundButtons.forEach((button) => {
    button.addEventListener('click', (e) => playAudio(e.target.id));
})

function playAudio(audio) {
    new Audio(`./sounds/${audio}.mp3`).play()
}