const navItems = document.querySelectorAll(".sidebar .nav-item")
const sections = document.querySelectorAll("#main-container .section")


navItems.forEach(navItem=>navItem.addEventListener("click",e=>changeNavItem(navItem)))
function changeNavItem(e){
    if(e===document.querySelector(".sidebar #stickynote")){
        return
    }
    navItems.forEach(navItem=>{
        navItem.classList.remove("focus-nav")
    })
    e.classList.add("focus-nav")
    sections.forEach(section=>{
        section.classList.add("hidden")
        if(section.classList.contains(`${e.id}`)){
            section.classList.remove("hidden")
            
        }
    })
}
