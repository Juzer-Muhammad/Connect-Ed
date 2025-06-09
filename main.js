document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Example for demo buttons (replace with actual functionality)
    // These functions are attached to the window object so they can be called directly from onclick in HTML
    window.openVirtualClassroom = function() {
        alert('Launching Virtual Classroom Demo!');
        // In a real application, this would redirect to a demo page or open a modal.
    }

    window.openWhiteboard = function() {
        alert('Opening Interactive Whiteboard Demo!');
        // In a real application, this would redirect or open a whiteboard tool.
    }

    window.openMessaging = function() {
        alert('Opening Messaging System Demo!');
        // In a real application, this would open a chat interface.
    }
});