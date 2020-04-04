window.addEventListener('keydown', playSound) 

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    if (!audio) { // se não tiver audio vinculado na key para a função, se tiver vai exucutar o play()
        return
    }

    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')   
}


function removeTransition(e) {
    if(e.propertyName !== 'transform') return // pular se propertyName do (e), onde e é evento, não for igual a transform, lembrando que o transform é o ato de fazer o ato de fazer o transition
    
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
