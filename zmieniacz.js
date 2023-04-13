const zmieniaczPrzycisk  = document.querySelector('.zmieniacz-przycisk');
zmieniaczPrzycisk.addEventListener('click', () => {
    document.querySelector('.zmieniacz').classList.toggle('open');
})

window.addEventListener('scroll', () => {
    if(document.querySelector('.zmieniacz').classList.contains('open')) {
        document.querySelector('.zmieniacz').classList.remove('open');
    }
})

const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        }
        else {
            style.setAttribute('disabled', 'true');
        }
    })
}

const lightDark = document.querySelector('.light-dark');
lightDark.addEventListener('click', () => {
    lightDark.querySelector('i').classList.toggle('bxs-sun');
    lightDark.querySelector('i').classList.toggle('bxs-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if(document.body.classList.contains('dark')) {
        lightDark.querySelector('i').classList.add('bxs-sun');
    }
    else {
        lightDark.querySelector('i').classList.add('bxs-moon');
    }
})