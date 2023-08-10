const menue = document.querySelectorAll(".menue .member");
console.log(menue);
menue.forEach(item => {
    item.addEventListener("click", () => {
        var current = document.querySelectorAll(".active");
        current[0].classList.remove("active");
        item.classList.add("active");
    });
});

const menueOpen = document.querySelector(".open");
const menueClose = document.querySelector(".close");

menueOpen.addEventListener("click", e => {
    menueOpen.style.display = "none";
    menueClose.style.display = "block";
    const nav = document.querySelector("header nav");
    nav.classList.add("show");
});
menueClose.addEventListener("click", e => {
    menueClose.style.display = "none";
    menueOpen.style.display = "block";
    console.log(menueOpen);
    const nav = document.querySelector("header nav");
    nav.classList.remove("show");
});

function displayWindowSize() {
    var w = document.documentElement.clientWidth;
    if (w > 990) {
        const menu = document.querySelector(".menue-toggle");
        menueClose.style.display = "none";
        menueOpen.style.display = "none";
    } else {
        menueOpen.style.display = "block";
    }
}
window.addEventListener("resize", displayWindowSize);
displayWindowSize();