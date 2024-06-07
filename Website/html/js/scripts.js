const section_1 = document.querySelector("#section-1");
const section_2 = document.querySelector("#section-2");
const section_3 = document.querySelector("#section-3");

section_1.addEventListener("click", (p) =>{
    p.preventDefault();
    
    const section1 = document.querySelector(".section-1");
    section1.scrollIntoView({behavior: "smooth"});
})

section_2.addEventListener("click", (p) =>{
    p.preventDefault();
    
    const section2 = document.querySelector(".section-2");
    section2.scrollIntoView({behavior: "smooth"});
})

section_3.addEventListener("click", (p) =>{
    p.preventDefault();
    
    const section3 = document.querySelector(".section-3");
    section3.scrollIntoView({behavior: "smooth"});
})