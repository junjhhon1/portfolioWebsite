document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const sidebarNav = document.querySelector(".left-sidebar-nav");
    const toggleButton = document.querySelector(".toggle-button");

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
            
            // Optionally collapse the sidebar navigation
            sidebarNav.classList.add("collapsed"); // Collapse the sidebar
        });
    });

    // Toggle sidebar visibility
    toggleButton.addEventListener("click", function() {
        sidebarNav.classList.toggle("collapsed");
    });
});
