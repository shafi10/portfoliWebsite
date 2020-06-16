let logo = document.querySelector("#logo")
let aboutLink = document.querySelector("#aboutLink")
let skillsLink = document.querySelector("#skillsLink")
let contactLink = document.querySelector("#contactLink")
let main = document.querySelector("#main")
let about = document.querySelector("#about")
let skills = document.querySelector("#skills")
let contact = document.querySelector("#contact")
let mainH1 = document.querySelector("#main h1")
let mainH12 = document.querySelector("#main h1:nth-child(2)")
let mainPara = document.querySelector("#main p")
let mainAnker = document.querySelector("#main a")
let aboutH1 = document.querySelector("#about h1")
let aboutpara = document.querySelector("#about p")
let aboutAnker = document.querySelector("#about a")
let skillsH1 = document.querySelector("#skills h1")
let skillspara = document.querySelector("#skills p")
let skillsCard = document.querySelector("#skills .skills-card")
let contactH1 = document.querySelector("#contact h1")
let contactForm = document.querySelector("#contact form")
let contactAnker = document.querySelector("#contact a")



function handleOpacity(one,zero1,zero2,zero3) {
    one.style.opacity = 1;
    zero1.style.opacity = 0;
    zero2.style.opacity = 0;
    zero3.style.opacity = 0;
}


logo.addEventListener('click',() =>{
    handleOpacity(main,about, skills, contact)
})

aboutLink.addEventListener('click', () =>{
    handleOpacity(about, main, skills, contact)   
});

skillsLink.addEventListener('click', () =>{
    handleOpacity(skills,main, about,contact);  
});
contactLink.addEventListener('click', () =>{
    handleOpacity(contact, main,about, skills);  
});


