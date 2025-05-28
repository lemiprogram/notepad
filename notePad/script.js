/* const title = document.querySelector("#section-notepad .title")
const textarea = document.querySelector("#section-notepad textarea")
let bookmarks = []
let noteLen = bookmarks.length+1
title.value = `New Notepad${bookmarks.length?'('+noteLen+')':""}`

document.querySelector("#section-notepad .notepad-save").addEventListener("click",()=>{
  
    if(!title.value){
      alert("please name the notepad")
    }
    const bookmark = {title:title.value,text:textarea.value}
    bookmarks.push(bookmark)
})
document.querySelector("section-bookmark list").innerHTML = bookmarks.map(bookmark=>``) */