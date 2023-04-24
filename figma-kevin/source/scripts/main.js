const nav =document.getElementById('nav')
const navBtn =document.getElementById('nav-button')
const navBtnImg =document.getElementById('nav-button-img')

navBtn.onclick = ()=>{
    if(nav.classList.toggle('open')){
    navBtnImg.src ="./public/images/icons/nav-close.svg"
    }else{
        navBtnImg.src ="./public/images/icons/nav-open.svg"
    }
}

AOS.init();
