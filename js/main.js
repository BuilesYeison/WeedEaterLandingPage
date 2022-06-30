//Global variables creation space
let navMobileButton = document.getElementsByClassName("bx-menu")
let nav = document.getElementById("nav")
let navFlag = false
let navOptionsContainer = document.getElementsByClassName("nav-options-container")
let navOptions = document.querySelectorAll(".nav-option")


//Functions creation space
let openNav = () => {
    //allosw to open and close nav section clicking menu in mobile resolutions
    if(navFlag){
        nav.style.height = "3.5rem";
        navOptionsContainer[0].style.visibility = "hidden"        
    }        
    else{
        nav.style.height = "100vh";
        navOptionsContainer[0].style.visibility = "visible"
    }
    navFlag = !navFlag
}

//Events assignment space
navMobileButton[0].addEventListener("click",openNav)
if(window.screen.width <= 780){
    //nav options only can have this event if resolution is for mobile devices
    navOptions.forEach(navOption=>{
        navOption.addEventListener("click",openNav)
    })
}

