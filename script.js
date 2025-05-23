const navItems = document.querySelectorAll(".header-nav .nav-item")
const [homeNav] = navItems
const navItemsArr = Array.from(navItems)
console.log("it works")

function toggleMyClass(myClass, ...more){
    more.forEach(el=>el.classList.toggle(myClass))
}
function removeMyClass(myClass, el){
    el.classList.remove(myClass)
    
}
function addMyClass(myClass, el){
    el.classList.add(myClass)

}
function changeNavItems(el){
    navItemsArr.filter(item=>item !== el).forEach(item=>removeMyClass("focus-nav",item))
    addMyClass("focus-nav",el)
}
navItemsArr.forEach(item=>
    item.addEventListener("click",(e)=>{
        changeNavItems(e.target)
    })
)
document.querySelector(".logo").addEventListener("click",()=>{changeNavItems(homeNav)})