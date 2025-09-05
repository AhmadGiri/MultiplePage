window.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 20) {
          navbar.classList.add("nav-scroll");
        } else {
          navbar.classList.remove("nav-scroll");
        }
      });

      const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");
      const bar1 = document.getElementById("bar1");
      const bar2 = document.getElementById("bar2");
      const bar3 = document.getElementById("bar3");
      
      let menuOpen = false;
      
      menuBtn.addEventListener("click", () => {
        menuOpen = !menuOpen;
        
        if (menuOpen) {
          mobileMenu.classList.remove("translate-y-full");
          mobileMenu.classList.add("translate-y-0");
          bar1.classList.add("rotate-45", "translate-y-2");
          bar2.classList.add("opacity-0");
          bar3.classList.add("-rotate-45", "-translate-y-2", "w-8");
        } else {
          mobileMenu.classList.add("translate-y-full");
          mobileMenu.classList.remove("translate-y-0");
          bar1.classList.remove("rotate-45", "translate-y-2");
          bar2.classList.remove("opacity-0");
          bar3.classList.remove("-rotate-45", "-translate-y-2", "w-8");
        }
      });
      
      document.querySelectorAll("#mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("translate-y-full");
          mobileMenu.classList.remove("translate-y-0");
          bar1.classList.remove("rotate-45", "translate-y-2");
          bar2.classList.remove("opacity-0");
          bar3.classList.remove("-rotate-45", "-translate-y-2", "w-8");
          menuOpen = false;
        });
      });
  document.addEventListener("DOMContentLoaded", () => {
  const pageContent = document.getElementById("page-content");
  if (pageContent) {
    setTimeout(() => {
      pageContent.classList.add("show");
    }, 50);
  }

  document.querySelectorAll("a").forEach(link => {
    if (link.hostname === window.location.hostname && !link.href.includes("#")) {
      link.addEventListener("click", e => {
        e.preventDefault();
        pageContent.classList.remove("show");
        setTimeout(() => {
          window.location = link.href;
        }, 400); // sesuai durasi animasi keluar
      });
    }
  });
});    