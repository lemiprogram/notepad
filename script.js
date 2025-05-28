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

const title = document.querySelector("#section-notepad .title")
const textarea = document.querySelector("#section-notepad textarea")
let bookmarks = []
let noteLen = bookmarks.filter(bookmark=>bookmark.title==="New Notepad").length+1
title.value = `New Notepad${bookmarks.length?'('+noteLen+')':""}`

document.querySelector("#section-notepad .notepad-save").addEventListener("click",()=>{
  
    if(!title.value){
      alert("please name the notepad")
    }
    const bookmark = {title:title.value,text:textarea.value}
    bookmarks.push(bookmark)
})
document.querySelector("#section-bookmark ul").innerHTML = bookmarks.map(bookmark=>`<li>${bookmark.title}</li>`)