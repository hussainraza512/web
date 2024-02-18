

const navMenu=document.getElementById("nav-menu"),
 navToggle=document.getElementById("nav-toggle"),
 navClose=document.getElementById("nav-close")



 if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
 }

 if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")

    })
 }


 const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




const skillsContent=document.getElementsByClassName("skills-content"),
skillsHeader=document.querySelectorAll(".skills-header")

function toggleSkills(){
    let itemClass=this.parentNode.className

    for(i=0; i< skillsContent.length; i++){
        skillsContent[i].className="skills-content skills-close"
    }

    if(itemClass==="skills-content skills-close"){
        this.parentNode.className="skills-content skills-open"
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener("click",toggleSkills)
})

const tabs=document.querySelectorAll("[data-target]"),
    tabContents=document.querySelectorAll("[data-content]")

    tabs.forEach(tab=>{
        tab.addEventListener("click",()=>{
            const target=document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent=>{
                tabContent.classList.remove("qualification-active")
            })

            target.classList.add("qualification-active")

            tabs.forEach(tab=>{
                tab.classList.remove("qualification-active")
            })

            tab.classList.add("qualification-active")
        })
    })






    const modalViews=document.querySelectorAll(".services-modal"),
       modalBtns=document.querySelectorAll(".services-button"),
       modalCloses=document.querySelectorAll(".services-modal-close")


       let modal= function(modalClick){
        modalViews[modalClick].classList.add("active-modal")
       }

       modalBtns.forEach((modalBtn,i)=>{
        modalBtn.addEventListener("click",()=>{
            modal(i)
        })
       })

       modalCloses.forEach((modalClose)=>{
        modalClose.addEventListener("click",()=>{
            modalViews.forEach((modalView)=>{
                modalView.classList.remove("active-modal")
            })
        })
       })


       let swiper = new Swiper(".portfolio-container", {
        cssMode: true,
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable:true,
        },
       
      });


// Add the CSS rule for '.swiper-button-next::after'
var styleNext = document.createElement('style');
styleNext.textContent = '.swiper-button-next::after { content: ""; }';
document.head.appendChild(styleNext);

// Add the CSS rule for '.swiper-button-prev::after'
var stylePrev = document.createElement('style');
stylePrev.textContent = '.swiper-button-prev::after { content: ""; }';
document.head.appendChild(stylePrev);




// Create a new style element
var styleElement = document.createElement('style');

// Add the CSS rule for '.swiper-portfolio-icon'
styleElement.textContent = '.swiper-portfolio-icon { font-size: 2rem; color: var(--first-color); }';

// Append the style element to the document's head
document.head.appendChild(styleElement);





// Create a new style element
var styleElement = document.createElement('style');

// Add the CSS rules for '.swiper-button-next', '.swiper-button-prev', and '.swiper-pagination-bullet'
styleElement.textContent = '.swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet { outline: none; }';

// Append the style element to the document's head
document.head.appendChild(styleElement);



