const hamburger =  document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");
const headerText = document.querySelector(".header__text");
const btnResume = document.querySelector(".btn--resume");
const themeSelector = document.querySelector(".btn--theme");
const footer = document.querySelector("footer");
const footerAdjust = document.querySelector("#footer-adjust");

hamburger.addEventListener("click", () => { 
    hamburger.classList.toggle("hamburger--active");
    navBar.classList.toggle("navbar--mobile");

    if (navBar.classList.contains("navbar--mobile")) {
        navBar.addEventListener("click", (e) => {
            links = navBar.querySelectorAll("a");

            links.forEach(link => {
                if (e.target === link) {
                    hamburger.classList.remove("hamburger--active");
                    navBar.classList.remove("navbar--mobile");
                }})
            })
    }});

headerText.addEventListener("animationend", () => { btnResume.classList.add("btn--animate") })

themeSelector.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeSelector.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    } else {
        themeSelector.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    }
})

window.addEventListener("scroll", () => {   
    const logo = document.querySelector(".logo");

    if ((screen.height)/1.5 <= scrollY) {
        navBar.classList.add("navbar--active");
        logo.style.visibility = "visible";
        logo.style.opacity = "1";
    } else {
        navBar.classList.remove("navbar--active");
        logo.style.visibility =  "hidden";
        logo.style.opacity = "0";
    }
});

window.addEventListener("scroll", () => { footerAdjust.style.height = footer.scrollHeight+"px" });