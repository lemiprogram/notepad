
let z = 1
const addSticky = document.querySelector("#stickynote")
  
class StickyNote{
    constructor(){
        this.stickyNote = document.createElement("div")
        this.stickyNote.classList.add(`sticky-note`,`top-[0]`, `left-[${Math.floor(Math.random() * 50)}]`, `relative`,`flex`, `flex-col`)
        this.stickyNote.innerHTML = `
                                <div class="header flex justify-between">
                                    <div class="grid place-content-center sticky-add">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                                    </div>
                                    <div class="grid place-content-center sticky-close">
                                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                                    </div>
                                </div>
                                    
                                </div>
                                <textarea class="sticky-text" placeholder="Take a note..."></textarea>
                                    <div class="resizable edges edge-y edge-top"></div>
                                    <div class="resizable edges edge-y edge-bottom"></div>
                                    <div class="resizable edges edge-x edge-right"></div>
                                    <div class="resizable edges edge-x edge-left"></div>
                                    <div class="resizable corners cursor-nw-resize corner-top corner-left"></div>
                                    <div class="resizable corners cursor-ne-resize corner-top corner-right"></div>
                                    <div class="resizable corners cursor-nw-resize corner-bottom corner-right"></div>
                                    <div class="resizable corners cursor-ne-resize corner-bottom corner-left"></div>
                               
                                 
                    `
        this.stickyNote.addEventListener("mousedown",(e)=>{
            if(e.target === this.stickyNote.querySelector(".sticky-close") || e.target === this.stickyNote.querySelector(".sticky-close svg") || e.target === this.stickyNote.querySelector(".sticky-close svg path")){
                this.stickyNote.remove()
                return
            }
            if(e.target === this.stickyNote.querySelector(".sticky-add") || e.target === this.stickyNote.querySelector(".sticky-add svg") || e.target === this.stickyNote.querySelector(".sticky-add svg path")){
                this.addSticky()
                return
            }
            this.stack()
            // drag functionality
            const header = this.stickyNote.querySelector(".header")
            header.addEventListener("mousedown",event=>this.dragSticky(event))
             // resize funtionality
            this.stickyNote.querySelectorAll(".resizable").forEach(side=>side.addEventListener("mousedown",event=>this.resizeSticky(side,event)))
            //addSticky
            this.stickyNote.querySelector("sticky")
            /* //bold
            this.stickyNote.querySelector(".footer .bold-btn").addEventListener("mousedown",event=>this.bold(event))
            //italics
            this.stickyNote.querySelector(".footer .italics-btn").addEventListener("mousedown",event=>this.italics(event))
            //underline
            this.stickyNote.querySelector(".footer .underline-btn").addEventListener("mousedown",event=>this.underline(event)) */
            
        })
        
    }
    stack(){
        z+=1
        this.stickyNote.style.zIndex = z
    }
    dragSticky(event){
        event.preventDefault()
            //get the postion of the sticky note
            const posLeft = this.stickyNote.offsetLeft
            const posTop = this.stickyNote.offsetTop
            //get the postion of the mouse when mousedown
            const startX  = event.pageX
            const startY  = event.pageY
            //drag function changes the x and y positon of the sticky note based on the postion of the mouse
            const drag = (event)=>{
                this.stickyNote.style.left = `${posLeft + (event.pageX - startX)}px`
                this.stickyNote.style.top = `${posTop + (event.pageY - startY)}px`
            }
            //mouseUp function removes the eventlisteners when the the mouse up
            const mouseUp = ()=>{
                document.removeEventListener("mousemove",drag)
                document.removeEventListener("mouseup",mouseUp)
            }
            document.addEventListener("mousemove",drag)//calls the drag func when the mouse moves
            document.addEventListener("mouseup",mouseUp)// calls the mouseUp func when the mouse is no longer being pressed
    }
    resizeSticky(side,event){
        const [cTleft,cTRight,cBRight,cBLeft] = this.stickyNote.querySelectorAll(".corners")
        const [eTop,eBottom,eRight,eLeft] = this.stickyNote.querySelectorAll(".edges")
        event.preventDefault()
                const noteWidth = this.stickyNote.clientWidth
                const noteHeight = this.stickyNote.clientHeight
                //get the postion of the mouse when mousedown
                const startX  = event.pageX
                const startY  = event.pageY
                const drag = event =>{ 
                    switch(side){
                        case cBRight:
                            this.stickyNote.style.width = noteWidth + (event.pageX - startX) + "px"
                            this.stickyNote.style.height = noteHeight + (event.pageY-startY) + "px"
                            break;
                        case cBLeft:
                            this.stickyNote.style.width = noteWidth +(event.pageX - startX) + "px"
                            this.stickyNote.style.height = noteHeight + (event.pageY-startY) + "px"
                            break;
                        case cTleft:
                            this.stickyNote.style.width = noteWidth - (event.pageX - startX) + "px"
                            this.stickyNote.style.height = noteHeight + (event.pageY-startY) + "px"
                            break;
                        case cTRight:
                            this.stickyNote.style.width = noteWidth + (event.pageX - startX) + "px"
                            this.stickyNote.style.height = noteHeight + (event.pageY-startY) + "px"
                            break;
                        case eRight:
                            this.stickyNote.style.width = noteWidth + (event.pageX - startX) + "px"
                            break;
                        case eLeft:
                            this.stickyNote.style.width = noteWidth - (event.pageX - startX) + "px"
                            break;
                        case eTop:
                            this.stickyNote.style.height = noteHeight  +(event.pageY - startY) + "px"
                            break;
                        case eBottom:
                            this.stickyNote.style.height = noteHeight +(event.pageY- startY) + "px"
                            break;
                        
                    }
                }
                const mouseUp = ()=>{
                    document.removeEventListener("mousemove",drag)
                    document.removeEventListener("mouseup",mouseUp)
                } 
                document.addEventListener("mousemove",drag)
                document.addEventListener("mouseup",mouseUp)
    }
    bold(event){
        
        this.stickyNote.querySelector("textarea").classList.toggle("font-bold")
        event.target.parentElement.classList.toggle("highlight")
    }
    italics(event){
        console.log("its Working")
        this.stickyNote.querySelector("textarea").classList.toggle("italic")
        event.target.parentElement.classList.toggle("highlight")
    }
    underline(event){
        console.log("its Working")
        this.stickyNote.querySelector("textarea").classList.toggle("underline")
        event.target.parentElement.classList.toggle("highlight")
    }
    addSticky(){
        const stickyNote = new StickyNote();
        document.querySelector(".sticky-note-view").appendChild(stickyNote.stickyNote)
    }
    
}


addSticky.addEventListener("mousedown",()=>{
    const stickyNote = new StickyNote();
    document.querySelector(".sticky-note-view").appendChild(stickyNote.stickyNote)
})
