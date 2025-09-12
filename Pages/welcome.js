// Handle continue button click
document.addEventListener('DOMContentLoaded', function() {
    const continueBtn = document.querySelector('.continue-btn');
    const closeBtn = document.querySelector('.close-btn');
    
    // Continue button functionality
    continueBtn.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // You can add navigation logic here
        // For example: window.location.href = 'next-page.html';
        console.log('Continue button clicked - Navigate to next page');
    });
    
    // Close button functionality
    closeBtn.addEventListener('click', function() {
        // Add fade out animation
        document.body.style.transition = 'opacity 0.3s ease-out';
        document.body.style.opacity = '0';
        
        setTimeout(() => {
            // You can add logic to go back to landing page or close the app
            // For example: window.location.href = 'index.html';
            console.log('Close button clicked - Return to landing page');
        }, 300);
    });
    
    // Add subtle hover effect to SVG
    const headSvg = document.querySelector('.head-svg');
    if (headSvg) {
        headSvg.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
            this.style.transform = 'scale(1.02)';
        });
        
        headSvg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});

// Prevent zoom on double tap for iOS devices
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Handle page visibility for animations
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // Restart animations when page becomes visible
        const animatedElements = document.querySelectorAll('.welcome-text, .illustration, .continue-btn');
        animatedElements.forEach((element, index) => {
            element.style.animation = 'none';
            element.offsetHeight; // Trigger reflow
            element.style.animation = `fadeInUp 1s ease-out ${index * 0.3}s both`;
        });
    }
});