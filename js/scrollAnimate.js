//animate scroll//
let elementsArray = document.querySelectorAll(".heading");
window.addEventListener('scroll', fadeIn);

function fadeIn() {
    elementsArray.forEach(elem => {
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    });
}

fadeIn();