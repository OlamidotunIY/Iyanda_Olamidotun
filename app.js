let menuBtn = document.querySelector(".menuBtn");
let closeBtn = document.querySelector("#closeBtn");
let menu = document.querySelector(".nav-list")

menuBtn.onclick = function(){
    menu.classList.toggle('active')
    closeBtn.classList.add('active')
    menuBtn.classList.add('active')
}

closeBtn.onclick = function(){
    menu.classList.remove('active')
    closeBtn.classList.remove('active')
    menuBtn.classList.remove('active')
}

// Fixed header
const navBar = document.getElementById('nav')

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navBar.classList.add('fixed')
    }else{
        navBar.classList.remove('fixed')
    }
})