let z = 1
const stickyNotes = document.querySelectorAll(".sticky-note")

stickyNotes.forEach(stickyNote=>{
    stickyNote.addEventListener("click",(e)=>{
        z+=1
        stickyNote.style.zIndex = z
    })
})  