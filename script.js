document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       SIDEBAR MENU
    ========================== */

    const menuToggle = document.getElementById("menuToggle");
    const sidebarMenu = document.getElementById("sidebarMenu");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    const navLinks = document.querySelectorAll(".nav-link");

    function toggleMenu() {
        menuToggle.classList.toggle("active");
        sidebarMenu.classList.toggle("active");
        sidebarOverlay.classList.toggle("active");
    }

    menuToggle.addEventListener("click", toggleMenu);
    sidebarOverlay.addEventListener("click", toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (sidebarMenu.classList.contains("active")) {
                toggleMenu();
            }
        });
    });


    /* ==========================
       ACTIVE MENU
    ========================== */

    const sections = document.querySelectorAll("header, section");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }

        });

    });


   /* ==========================
       SCROLL ANIMATION
    ========================== */

    const observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target); 
            }

        });

    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px" 
    });

    document.querySelectorAll(".animate-on-scroll").forEach(el => {
        observer.observe(el);
    });
});