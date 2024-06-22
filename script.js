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


function page2Animation() {
    const allRightElems = document.querySelectorAll(".right-elem");
    allRightElems.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1,
                duration: 0.2
            });
        });
        elem.addEventListener("mouseleave", () => {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0,
                duration: 0.2
            });
        });
        elem.addEventListener("mousemove", (dets) => {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x,
                y: dets.y - elem.getBoundingClientRect().y - 20,
                transform: 'scale(1) translate(-50%, -50%)'
            });
        });
    });
}
// page2Animation();


function page3Animation() {
    const page3Play = document.querySelector("#page3-play");
    const page3Video = document.querySelector("#page3 > video");

    page3Play.addEventListener("click", () => {
        page3Video.play();

        gsap.to(page3Video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0,
            duration: 0.6
        });
    });

    page3Video.addEventListener("click", () => {
        page3Video.pause();

        gsap.to(page3Video, {
            transform: "scaleX(0.5) scaleY(0)",
            opacity: 0,
            borderRadius: "1vmax",
            duration: 0.6
        });
    });
}
// page3Animation();


const sections = document.querySelectorAll(".section-right");
sections.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        elem.childNodes[3].style.opacity = 1;
        elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave", () => {
        elem.childNodes[3].style.opacity = 0;
        elem.childNodes[3].load();
    });
});

const parts = document.querySelectorAll(".part-content");
parts.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        elem.childNodes[3].style.opacity = 1;
        elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave", () => {
        elem.childNodes[3].style.opacity = 0;
        elem.childNodes[3].load();
    });
});
