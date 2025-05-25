const stickyNotes = document.querySelectorAll(".sticky-note")
let z = 1

stickyNotes.forEach(stickyNote=>{
    stickyNote.addEventListener("mousedown",(e)=>{
        z+=1
        stickyNote.style.zIndex = z

        const header = stickyNote.querySelector(".header")
        header.addEventListener("mousedown",event=>{
            event.preventDefault()
            //get the postion of the sticky note
            const posLeft = stickyNote.offsetLeft
            const posTop = stickyNote.offsetTop
            //get the postion of the mouse when mousedown
            const startX  = event.pageX
            const startY  = event.pageY
            //drag function changes the x and y positon of the sticky note based on the postion of the mouse
            const drag = (event)=>{
                stickyNote.style.left = `${posLeft + (event.pageX - startX)}px`
                stickyNote.style.top = `${posTop + (event.pageY - startY)}px`
            }
            //mouseUp function removes the eventlisteners when the the mouse up
            const mouseUp = ()=>{
                document.removeEventListener("mousemove",drag)
                document.removeEventListener("mouseup",mouseUp)
            }
            document.addEventListener("mousemove",drag)//calls the drag func when the mouse moves
            document.addEventListener("mouseup",mouseUp)// calls the mouseUp func when the mouse is no longer being pressed
        })
        const [cTleft,cTRight,cBRight,cBLeft] = stickyNote.querySelectorAll(".corners")
        const [eTop,eBottom,eRight,eLeft] = stickyNote.querySelectorAll(".edges")
        stickyNote.querySelectorAll(".resizable").forEach(side=>{
            side.addEventListener("mousedown",event=>{
                event.preventDefault()
                const noteWidth = stickyNote.clientWidth
                const noteHeight = stickyNote.clientHeight
                //get the postion of the mouse when mousedown
                const startX  = event.pageX
                const startY  = event.pageY
                const drag = event =>{ 
                    switch(side){
                        case cBRight:
                            stickyNote.style.width = noteWidth + (event.pageX - startX) + "px"
                            stickyNote.style.height = noteHeight + (event.pageY-startY) + "px"
                            break;
                        case cBLeft:
                            stickyNote.style.width = noteWidth - (event.pageX - startX) + "px"
                            stickyNote.style.height = noteHeight + (event.pageY-startY) + "px"
                            break;
                        case cTleft:
                            stickyNote.style.width = noteWidth - (event.pageX - startX) + "px"
                            stickyNote.style.height = noteHeight + (event.pageY-startY) + "px"
                            break;
                        case cTRight:
                            stickyNote.style.width = noteWidth + (event.pageX - startX) + "px"
                            stickyNote.style.height = noteHeight + (event.pageY-startY) + "px"
                            break;
                        case eRight:
                            stickyNote.style.width = noteWidth + (event.pageX - startX) + "px"
                            break;
                        case eLeft:
                            stickyNote.style.width = noteWidth - (event.pageX - startX) + "px"
                            break;
                        case eTop:
                            stickyNote.style.height = noteHeight  +(event.pageY - startY) + "px"
                            break;
                        case eBottom:
                            stickyNote.style.height = noteHeight +(event.pageY- startY) + "px"
                            break;
                        
                    }
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
})  

