

(()=>{
    const hamburgerbtn=document.querySelector('.hamburger-btn');
    const navmenu=document.querySelector('.nav-menu');
    const closebtn=document.querySelector('.close-nav-menu');
    hamburgerbtn.addEventListener('click',shownavmenu);
    closebtn.addEventListener('click',hidenavmenu);

    function shownavmenu() {
        navmenu.classList.add('open');
        bodyscroll();
    }
    function hidenavmenu(){
        navmenu.classList.remove('open');
        fadeouteffect();
        bodyscroll();
        
    }
    function fadeouteffect(){
        document.querySelector('.fade-out-effect').classList.add('active');
        setTimeout(() => {
            document.querySelector('.fade-out-effect').classList.remove('active');
        },300);
        
    }
    document.addEventListener('click',(e)=>{
        if (e.target.classList.contains('link-item')) {
            if(e.target.hash!==''){
                e.preventDefault();
                const hash=e.target.hash;
                 document.querySelector('.section.active').classList.add('hide');
                 document.querySelector('.section.active').classList.remove('active');

                 document.querySelector(hash).classList.add('active');
                 document.querySelector(hash).classList.remove('hide');

                 navmenu.querySelector('.active').classList.add('outer-shadow','hover-in-shadow');
                 navmenu.querySelector('.active').classList.remove('active','inner-shadow');
                 
                 if (navmenu.classList.contains('open')) {
                    e.target.classList.add('active','inner-shadow');
                    e.target.classList.remove('outer-shadow','hover-in-shadow');
                    hidenavmenu();    
                 }else{
                     let navitems=navmenu.querySelectorAll('.link-item');
                     navitems.forEach((item)=>{
                         if (hash===item.hash){
                            item.classList.add('active','inner-shadow');
                            item.classList.remove('outer-shadow','hover-in-shadow');                             
                         }
                     })
                     fadeouteffect();
                 }
                 window.location.hash=hash;
                 
                 


                 
            }
        }
    })
})();





(()=>{
    const aboutSection=document.querySelector('.about-section');
    const tabsContainer=document.querySelector('.about-tabs');

    tabsContainer.addEventListener('click',(e)=>{
        if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
           const target=e.target.getAttribute("data-target");
           tabsContainer.querySelector('.active').classList.remove("outer-shadow","active");
           e.target.classList.add("active","outer-shadow");
           aboutSection.querySelector('.tab-content.active').classList.remove("active");
           aboutSection.querySelector(target).classList.add('active');
        }
    })

})();

function bodyscroll() {
    document.body.classList.toggle('stop-scroll');
}

(()=>{
    const itemscontainer=document.querySelector('.project-items');
    const projectitems=document.querySelectorAll('.project-item');
    const popup=document.querySelector('.project-popup');
    const closebtn=document.querySelector('.pp-close');
    const projectdetailscontainer=document.querySelector('.pp-details');
    const detailsbtn=document.querySelector('.pp-project-details-btn');
    itemscontainer.addEventListener('click',(e)=>{
        if(e.target.closest('.project-item-inner')){
            const projectitem=e.target.closest('.project-item-inner').parentElement;
            const itemindex=Array.from(projectitem.parentElement.children).indexOf(projectitem);
            const projectimage=projectitems[itemindex].querySelector('.project-item-img img');   
            const itemage=projectitems[itemindex];         
            popupToggle();
            popupslideshow(projectimage.src);
            popupdetails(itemage);
            
        }
    })

    closebtn.addEventListener('click',()=>{
        popupToggle();
        if(projectdetailscontainer.classList.contains('active')){
            popupdetailstoggle();
        }
    })
    function popupToggle(){
        popup.classList.toggle('open');
        bodyscroll();
        
    }
    function popupslideshow(src){
        const imgsrc=document.querySelector('.pp-img');
        popup.querySelector('.pp-loader').classList.add('.active');
        imgsrc.src=src;
        imgsrc.onload=()=>{
            popup.querySelector('.pp-loader').classList.remove('.active');
        }
    }
    function popupdetails(it){
        const details= it.querySelector('.project-item-details').innerHTML;
        popup.querySelector('.pp-project-details').innerHTML=details;
        const title=it.querySelector('.project-item-title').innerHTML;
        popup.querySelector('.pp-title h2').innerHTML=title;      
    }
    detailsbtn.addEventListener('click',()=>{
        popupdetailstoggle();
    })
    function popupdetailstoggle(){
        if(projectdetailscontainer.classList.contains('active')){
            projectdetailscontainer.classList.remove('active');
            projectdetailscontainer.style.maxHeight=0+'px';
            detailsbtn.querySelector('i').classList.add('fa-plus');
            detailsbtn.querySelector('i').classList.remove('fa-minus');

        }
        else{
            detailsbtn.querySelector('i').classList.remove('fa-plus');
            detailsbtn.querySelector('i').classList.add('fa-minus');
            projectdetailscontainer.classList.add('active');
            projectdetailscontainer.style.maxHeight=projectdetailscontainer.scrollHeight+'px';
            popup.scrollTo(0,projectdetailscontainer.offsetTop);
        }
    }
})();


(()=>{
    const sections=document.querySelectorAll('.section');
    sections.forEach((section)=>{
        if (!section.classList.contains('active')) {
            section.classList.add('hide');
        }
    })


})();

window.addEventListener('load',()=>{
    document.querySelector('.preloader').classList.add('fade-out');
    setTimeout(() => {
        document.querySelector('.preloader').style=`display:none`;
    }, 600);
})