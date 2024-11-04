document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const sidebarNav = document.querySelector(".left-sidebar-nav");

    // Hide all sections initially
    sections.forEach(section => {
        section.classList.add("hidden");
    });

    // Show the section based on navigation link click
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute("href").substring(1); // Get the section ID (without #)

            sections.forEach(section => {
                section.classList.add("hidden"); // Hide all sections
            });
            document.getElementById(targetId).classList.remove("hidden"); // Show the clicked section
            
            // Hide the sidebar navigation
            sidebarNav.classList.add("hidden"); // Hide the sidebar
        });
    });

    // Show sidebar on hover
    sidebarNav.addEventListener("mouseenter", function() {
        this.classList.remove("hidden"); // Show sidebar on hover
    });

    sidebarNav.addEventListener("mouseleave", function() {
        this.classList.add("hidden"); // Hide sidebar when mouse leaves
    });
});
