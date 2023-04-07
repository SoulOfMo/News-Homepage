const sideBar = document.querySelector(".sidebar"), 
hamBuger = document.querySelector(".hambuger"),
cancel = document.querySelector(".cancel");


hamBuger.addEventListener("click", () => {
    sideBar.classList.toggle('sidebar-show')
})


cancel.addEventListener("click", () => {
    sideBar.classList.remove('sidebar-show')
})

