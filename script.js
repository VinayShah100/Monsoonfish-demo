// Typing effect for BALANCE text
function typeWriter() {
    const text = "BʌLʌNCE";
    const balanceElement = document.getElementById('balance-text');
    let index = 0;
    
    // Clear any existing content
    balanceElement.innerHTML = '';
    
    function type() {
        if (index < text.length) {
            balanceElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 200); // Adjust typing speed here (200ms per character)
        } else {
            // Add blinking cursor after typing is complete
            balanceElement.innerHTML += '<span class="cursor">|</span>';
            
            // Remove loading text after typing is complete
            setTimeout(() => {
                const loadingText = document.querySelector('.loading-text');
                if (loadingText) {
                    loadingText.style.opacity = '0';
                    loadingText.style.transition = 'opacity 1s ease-out';
                }
                
                // Auto-navigate to welcome page after 2 seconds
                setTimeout(() => {
                    document.body.style.transition = 'opacity 0.5s ease-out';
                    document.body.style.opacity = '0';
                    
                    setTimeout(() => {
                        window.location.href = './Pages/welcome.html';
                    }, 500);
                }, 2000);
            }, 1000);
        }
    }
    
    // Start typing after a brief delay
    setTimeout(type, 500);
}

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth > 768 ? 50 : 25; // Fewer particles on mobile
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning and animation delay
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Handle window resize for responsive particles
function handleResize() {
    const particlesContainer = document.getElementById('particles');
    particlesContainer.innerHTML = ''; // Clear existing particles
    createParticles(); // Recreate particles based on new screen size
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    typeWriter();
});

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 250);
});

// Optional: Add click event to restart typing animation
document.addEventListener('DOMContentLoaded', function() {
    const balanceText = document.querySelector('.balance-text');
    if (balanceText) {
        balanceText.addEventListener('click', function() {
            typeWriter();
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