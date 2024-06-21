console.log('hello');

function navbarAnimation() {
    const navbar = document.querySelector("nav");
    navbar.addEventListener("mouseenter", () => {
        let tl = gsap.timeline();
        tl.to("#nav-bottom", {
            height: "11vmax",
        })
        .to("#nav-center > .nav-elem > h5", {
            opacity: 1,
            duration0: 0.2,
            delay: -1
        })
        .to("#nav-center > .nav-elem > h5 > span", {
            y: 0,
            duration: 0.2,
            stagger: 0.04
        });
    });
    navbar.addEventListener("mouseleave", () => {
        let tl = gsap.timeline();
        tl.to("#nav-center > .nav-elem > h5 > span", {
            y: 30,
            stagger: 0.04
        })
        .to("#nav-center > .nav-elem > h5", {
            opacity: 0,
        })
        .to("#nav-bottom", {
            height: "0vmax",
            delay: -0.8
        });
    });
}
// navbarAnimation();

