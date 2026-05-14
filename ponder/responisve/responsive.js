let menuBtn = document.getElementsByClassName("menu-btn")[0];
console.log(menuBtn);

menuBtn.addEventListener("click", handleMenuBtnClick);

// Write a function
function handleMenuBtnClick(event) {
    // Grab the nav tag
    let nav = document.querySelector("nav");
    //Toggle .hide class on nave tag
    nav.classList.toggle("hide");
    // Toggle animation
    menuBtn.classList.toggle("change");

}