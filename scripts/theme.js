var theme = document.getElementById("theme");
themeImg = document.getElementById("themeImg");


theme.addEventListener('click', trocarTema);

function trocarTema(){
    let body = document.querySelector('body');


    if(body.getAttribute("data-bs-theme") == "dark"){
        body.setAttribute("data-bs-theme" , "light")
        themeImg.setAttribute("src","../icons/moon-fill.svg")

    }else{
        body.setAttribute("data-bs-theme" , "dark")
        themeImg.setAttribute("src", "../icons/sun-fill.svg")
    }
}