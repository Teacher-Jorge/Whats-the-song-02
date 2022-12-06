let wordFound = document.getElementById("wordFound")
let btnFind = document.getElementById('btnFind')
let btnFounded = document.getElementById('btnFounded')
let btnFound = document.getElementById('btnFound')


btnFound.addEventListener('click', function() {
    let songAudio = document.getElementById('song')
    songAudio.play()
    let audio = document.getElementById('click')
    audio.play()
    wordFound.innerHTML = 'Found'
    wordFound.style.color = 'lime'
    btnFound.style.background = 'lawngreen'
    btnFound.style.color = 'green'
    btnFound.disabled = 'true'
    btnFind.disabled = 'true'
    btnFounded.disabled = 'true'
})

btnFind.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordFound.innerHTML = 'Find'
    wordFound.style.color = 'red'
    btnFind.style.background = 'red'
    btnFind.disabled = 'true'
})

btnFounded.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordFound.innerHTML = 'Founded'
    wordFound.style.color = 'red'
    btnFounded.style.background = 'red'
    btnFounded.disabled = 'true'
})