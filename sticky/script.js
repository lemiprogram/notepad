let z = 1
const stickyNotes = document.querySelectorAll(".sticky-note")

stickyNotes.forEach(stickyNote=>{
    stickyNote.addEventListener("mousedown",(e)=>{
        z+=1
        stickyNote.style.zIndex = z

        const header = stickyNote.querySelector(".header")
        header.addEventListener("mousedown",event=>{
            const posLeft = stickyNote.offsetLeft
            const posTop = stickyNote.offsetTop
            
            const startX  = event.pageX
            const startY  = event.pageY

            const drag = (event)=>{
                stickyNote.style.left = `${posLeft + (event.pageX - startX)}px`
                stickyNote.style.top = `${posTop + (event.pageY - startY)}px`
            }
            const mouseUp = ()=>{
                document.removeEventListener("mousemove",drag)
                document.removeEventListener("mouseup",mouseUp)
            }
            document.addEventListener("mousemove",drag)
            document.addEventListener("mouseup",mouseUp)
        })
    })
})  