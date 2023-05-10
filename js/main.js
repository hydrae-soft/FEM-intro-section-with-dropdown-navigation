const html = document.querySelector('html')
const header = document.querySelector('header')
const header_menu = document.querySelector('#header-menu')

const btn_menu = document.querySelector('#btn-menu')
btn_menu.addEventListener('click', on_btn_menu_click)

function on_btn_menu_click() {
    header.classList.toggle('expand')
    header_menu.classList.toggle('expand')
    btn_menu.classList.toggle('expand')
    html.classList.toggle('no-scroll')
}