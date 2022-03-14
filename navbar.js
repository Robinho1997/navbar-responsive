const mobileNavbar = document.querySelector(".flex-navbar");
const toggleNavbar = document.querySelector(".button-close-or-open");

toggleNavbar.addEventListener("click", () => {
    const visibility = mobileNavbar.getAttribute("data-visible");

        if ( visibility === "false" ) {
          mobileNavbar.setAttribute("data-visible", true);
          toggleNavbar.setAttribute("aria-expanded", true); 

      } else if ( visibility === "true" ) {
          mobileNavbar.setAttribute("data-visible", false);
          toggleNavbar.setAttribute("aria-expanded", false);
      }

       
})