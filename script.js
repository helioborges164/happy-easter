let eggButton = document.querySelector(".egg-button")
let eggImage = document.querySelector(".egg-image")

function eggButtonClick(image) {
    eggImage.style.opacity = 0

    setTimeout(() => {
        eggImage.src = image
        eggImage.style.opacity = 1
    }, 500)
}

let navButton = document.querySelector(".nav-button")
let listNav = document.querySelector(".list-navbar")

navButton.addEventListener("click", () => {
    listNav.classList.toggle("active")
})