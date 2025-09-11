// show navigation bar links using menu button
const toggle_menu = document.querySelector(".list");
const toggle_menu_bnt = document.getElementById("toggle-menu");
toggle_menu_bnt.addEventListener("click", () => {
    toggle_menu.classList.toggle("show");
})
// hide menu on click on any link in links list 
const link = document.querySelectorAll(".link");
link.forEach(element => {
    element.addEventListener("click", () => {
        toggle_menu.classList.remove("show");
    })
});

