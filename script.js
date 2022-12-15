// navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', () =>{
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})

// section 2 video
const video = document.querySelector('.video')
const button = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')


button.addEventListener('click', () =>{
    playPause()
})

const playPause = () => {
    if (video.paused) {
        video.play()
        button.className = "fa-solid fa-circle-pause"
        video.style.opacity = '.7'
    } else {
        video.pause()
        button.className = "fa-solid fa-circle-play"
        video.style.opacity = '.3'
    }
}

video.addEventListener('timeupdate', () => {
    const barWidth = video.currentTime/video.duration
    bar.style.width = `${barWidth * 100}%`
    if (video.ended) {
        button.className = "fa-solid fa-circle-play"
        video.style.opacity = '.3'
    }
})

  
