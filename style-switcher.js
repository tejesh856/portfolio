const styleswitchertoggler=document.querySelector('.style-switcher-toggler');
styleswitchertoggler.addEventListener('click',()=>{
    document.querySelector('.style-switcher').classList.toggle('open');
})
window.addEventListener('scroll',()=>{
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open');
        
    }
})
const alternatestyle=document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    localStorage.setItem('color',color);
    changecolor();

    
}
function changecolor(){
    alternatestyle.forEach((style)=>{
        if(localStorage.getItem('color')===style.getAttribute('title')){
            style.removeAttribute('disabled');
        }else{
            style.setAttribute('disabled','true');
        }
    })
    
}
if(localStorage.getItem('color')!==null){
    changecolor();
}

const daynight=document.querySelector('.day-night');
daynight.addEventListener('click',()=>{
   
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme','dark');
    } else {
        localStorage.setItem('theme','light');
        
    }
    updateicon();

})
function thememode() {
    if(localStorage.getItem('theme')!==null){
        if (localStorage.getItem('theme')==='light') {
            document.body.classList.remove('dark');
        }
        else{
            document.body.classList.add('dark');

        }

    }
    updateicon();
}
thememode();
function updateicon() {
    if(document.body.classList.contains('dark')){
        daynight.querySelector('i').classList.remove('fa-moon');
        daynight.querySelector('i').classList.add('fa-sun');
        
    }
    else{
        daynight.querySelector('i').classList.remove('fa-sun');
        daynight.querySelector('i').classList.add('fa-moon');

    }
}

if(window.innerWidth<990){
    for (let index = 0; index <  document.querySelectorAll('.skill-item').length; index++) {
        document.querySelectorAll('.skill-item')[index].className=`skill-item`;
       
        
    }
    
    
}
