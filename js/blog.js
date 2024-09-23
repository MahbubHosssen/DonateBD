const homeBtn = document.getElementById("home-btn")
homeBtn.addEventListener("click", function(){
    window.location.href = "index.html";
})

const accordionBtns = document.querySelectorAll(".accordion-btn")
for(const btn of accordionBtns){
    btn.addEventListener("click", function(){
        const description = btn.nextElementSibling;
        
        description.classList.toggle("hidden")
        const arrow = btn.children[1]
        arrow.classList.toggle("rotate-180")
    })
}
const icon = document.getElementById("icon")
setInterval(() => {
    icon.classList.toggle("rotate-12")
}, 500);