const containerEl = document.querySelector(".container")
const picEl = document.querySelector(".pic");

window.addEventListener("scroll", () => {
    if (window.scrollY > picEl.offsetTop + picEl.offsetHeight - containerEl.offsetHeight) {
        containerEl.classList.add("active")
    }
    else {
        containerEl.classList.remove("active")
    }
})