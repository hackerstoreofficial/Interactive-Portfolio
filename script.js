// Loader functionality
let counter = 0;
const counterElement = document.getElementById('counter');
const loader = document.getElementById('loader');
const startBtn = document.getElementById('startBtn');
const mainContent = document.getElementById('mainContent');
const cookieNotice = document.getElementById('cookieNotice');

// Counter animation
const counterInterval = setInterval(() => {
    counter++;
    counterElement.textContent = String(counter).padStart(3, '0');
    
    if (counter === 100) {
        clearInterval(counterInterval);
    }
}, 20);

// Start button functionality
startBtn.addEventListener('click', () => {
    loader.classList.add('hidden');
    document.body.classList.remove('loading');
    
    // Show cookie notice after loader
    setTimeout(() => {
        cookieNotice.classList.add('show');
    }, 1000);
});

// Cookie notice handling
document.getElementById('acceptCookies').addEventListener('click', () => {
    cookieNotice.classList.remove('show');
    localStorage.setItem('cookiesAccepted', 'true');
});

document.getElementById('rejectCookies').addEventListener('click', () => {
    cookieNotice.classList.remove('show');
    localStorage.setItem('cookiesAccepted', 'false');
});

// Check if cookies already handled
if (localStorage.getItem('cookiesAccepted')) {
    cookieNotice.remove();
}

// Custom cursor
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .project-image');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('active');
    });
    
    element.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('active');
    });
});

// Navigation scroll effect
const mainNav = document.getElementById('mainNav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        mainNav.classList.add('scrolled');
    } else {
        mainNav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animations
const animatedElements = document.querySelectorAll('.about-text, .about-image, .project, .contact-text, .contact-form');
animatedElements.forEach(element => {
    observer.observe(element);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 600;
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
});

// Menu toggle for mobile
const menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    
    // Create mobile menu if it doesn't exist
    let mobileMenu = document.querySelector('.mobile-menu');
    
    if (!mobileMenu) {
        mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        mobileMenu.innerHTML = `
            <nav class="mobile-nav">
                <a href="#about" class="mobile-link">About</a>
                <a href="#work" class="mobile-link">Work</a>
                <a href="#contact" class="mobile-link">Contact</a>
            </nav>
        `;
        document.body.appendChild(mobileMenu);
        
        // Add styles for mobile menu
        const style = document.createElement('style');
        style.textContent = `
            .mobile-menu {
                position: fixed;
                top: 0;
                right: -100%;
                width: 100%;
                height: 100vh;
                background-color: var(--primary-color);
                z-index: 999;
                transition: right 0.6s cubic-bezier(0.77, 0, 0.175, 1);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .mobile-menu.active {
                right: 0;
            }
            
            .mobile-nav {
                display: flex;
                flex-direction: column;
                gap: 40px;
                text-align: center;
            }
            
            .mobile-link {
                color: var(--secondary-color);
                font-size: 32px;
                font-weight: 600;
                text-decoration: none;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.6s ease;
            }
            
            .mobile-menu.active .mobile-link {
                opacity: 1;
                transform: translateY(0);
            }
            
            .mobile-menu.active .mobile-link:nth-child(1) {
                transition-delay: 0.1s;
            }
            
            .mobile-menu.active .mobile-link:nth-child(2) {
                transition-delay: 0.2s;
            }
            
            .mobile-menu.active .mobile-link:nth-child(3) {
                transition-delay: 0.3s;
            }
            
            .menu-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .menu-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        `;
        document.head.appendChild(style);
        
        // Add click handlers to mobile links
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
    
    mobileMenu.classList.toggle('active');
});

// Add loading class to body initially
document.body.classList.add('loading');

// Project hover effects
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'translateY(-10px)';
    });
    
    project.addEventListener('mouseleave', () => {
        project.style.transform = 'translateY(0)';
    });
});

// Add smooth reveal animations on load
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.hero-content').style.opacity = '1';
    }, 500);
});

// Scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, var(--accent-color), var(--primary-color));
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createScrollProgress();

// Add magnetic effect to buttons
const buttons = document.querySelectorAll('.start-btn, .submit-btn, .award-item');

buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// Lazy loading for images
const images = document.querySelectorAll('img');
const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
            imageObserver.unobserve(img);
        }
    });
}, imageOptions);

images.forEach(img => {
    img.style.opacity = '0';
    img.style.transform = 'scale(0.95)';
    img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    imageObserver.observe(img);
});

// Add text reveal animation
const revealText = () => {
    const textElements = document.querySelectorAll('.section-title, .project-title, .contact-heading');
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.display = 'inline-block';
            span.style.animation = `fadeInChar 0.5s ease forwards ${index * 0.03}s`;
            element.appendChild(span);
        });
    });
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInChar {
            to {
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
};

// Call reveal text when sections are visible
const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.revealed) {
            entry.target.dataset.revealed = 'true';
            const title = entry.target.querySelector('.section-title, .project-title, .contact-heading');
            if (title && !title.dataset.animated) {
                title.dataset.animated = 'true';
                const text = title.textContent;
                title.textContent = '';
                
                text.split('').forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.style.opacity = '0';
                    span.style.display = 'inline-block';
                    span.style.animation = `fadeInChar 0.5s ease forwards ${index * 0.03}s`;
                    title.appendChild(span);
                });
            }
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.section-header, .project-info').forEach(element => {
    textObserver.observe(element);
});

console.log('🎨 Portfolio loaded successfully!');
