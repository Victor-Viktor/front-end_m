let fullMenu = document.querySelector('.fullMenu')

document.querySelector('#open').addEventListener('click', openMenu)
document.querySelector('#close').addEventListener('click', CloseMenu)

function openMenu(){
    fullMenu.classList.add('is-open');
    fullMenu.setAttribute('aria-hidden', false)
}
function CloseMenu(){
    fullMenu.classList.remove('is-open')
    fullMenu.setAttribute('aria-hidden', true)
}