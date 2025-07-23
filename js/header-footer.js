// Header and Footer Component for Island Horses Langkawi
class HeaderFooter {
    static init() {
        this.createHeader();
        this.createFooter();
        this.addEventListeners();
    }

    static createHeader() {
        const headerHTML = `
            <header class="main-header">
                <nav class="nav-container">
                    <div class="logo">
    <img src="img/island-horses-logo.png" alt="Island Horses Langkawi" style="height: 80px; width: auto;">
</div>
                    
                    <div class="nav-menu" id="navMenu">
                        <a href="index.html" class="nav-link">Home</a>
                        <a href="packages.html" class="nav-link">Packages</a>
                        <a href="gallery.html" class="nav-link">Gallery</a>
                        <a href="contact.html" class="nav-link">Contact</a>
                        <a href="packages.html" class="nav-link nav-book-btn">Book Now</a>
                    </div>
                    
                    <div class="mobile-menu-btn" id="mobileMenuBtn">
                        <span></span>
                        <span></span>
                        <span></>
                    </div>
                </nav>
            </header>
        `;
        
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }

    static createFooter() {
        const footerHTML = `
            <footer class="main-footer">
                <div class="footer-content">
                    <div class="footer-section">
                        <div class="footer-logo">
                            <h3>🐎 Island Horses Langkawi</h3>
                            <p>Experience the magic of Langkawi on horseback</p>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="packages.html">Packages</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Popular Packages</h4>
                        <ul>
                            <li>Jungle & Beach Lover</li>
                            <li>Ride & Swim Experience</li>
                            <li>Back to Nature</li>
                            <li>Family Fun Ride</li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Connect</h4>
                        <div class="social-links">
                            <a href="#" aria-label="Facebook">📘</a>
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="WhatsApp">💬</a>
                            <a href="#" aria-label="Email">✉️</a>
                        </div>
                        <p class="contact-info">
                            📍 Pantai Kok, Langkawi<br>
                            📞 +60 12-345-6789<br>
                            ✉️ info@islandhorseslangkawi.com
                        </p>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2025 Island Horses Langkawi. All rights reserved.</p>
                </div>
            </footer>
        `;
        
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    static addEventListeners() {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navMenu.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu?.classList.remove('active');
                mobileMenuBtn?.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container')) {
                navMenu?.classList.remove('active');
                mobileMenuBtn?.classList.remove('active');
            }
        });

        // Smooth scrolling for anchor links
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

        // Add active class to current page nav link
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    static addStyles() {
        const styles = `
            <style>
                /* Header & Footer Shared Styles */
                .main-header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: rgba(0, 0, 0, 0.95);
                    backdrop-filter: blur(10px);
                    z-index: 1000;
                    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
                }

                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 2rem;
                }

                .logo h1 {
                    color: #D4AF37;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin: 0;
                    text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
                }

                .logo span {
                    color: #8B8B4B;
                    font-size: 0.9rem;
                    font-weight: 300;
                    display: block;
                    margin-top: -0.2rem;
                }

                .logo img {
    height: 80px;
    width: auto;
    max-height: 100px;
}

/* Update nav-container padding to accommodate larger logo */
.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem; /* Increased from 1rem to 1.5rem */
}

                .nav-menu {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }

                .nav-link {
                    color: #fff;
                    text-decoration: none;
                    font-weight: 400;
                    transition: all 0.3s ease;
                    position: relative;
                    padding: 0.5rem 0;
                }

                .nav-link:hover,
                .nav-link.active {
                    color: #D4AF37;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #D4AF37;
                    transition: width 0.3s ease;
                }

                .nav-link:hover::after,
                .nav-link.active::after {
                    width: 100%;
                }

                /* Special styling for Book Now button on desktop */
                .nav-book-btn {
                    background: linear-gradient(135deg, #D4AF37, #8B8B4B);
                    padding: 0.7rem 1.5rem !important;
                    border-radius: 25px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
                    color: #000;
                }

                .nav-book-btn::after {
                    display: none;
                }

                .nav-book-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
                    color: #000;
                }

                .mobile-menu-btn {
                    display: none;
                    flex-direction: column;
                    cursor: pointer;
                    padding: 0.5rem;
                    position: relative;
                    z-index: 1001;
                }

                .mobile-menu-btn span {
                    width: 25px;
                    height: 3px;
                    background: #D4AF37;
                    margin: 3px 0;
                    transition: 0.3s;
                    border-radius: 2px;
                }

                .mobile-menu-btn.active span:nth-child(1) {
                    transform: rotate(-45deg) translate(-6px, 6px);
                }

                .mobile-menu-btn.active span:nth-child(2) {
                    opacity: 0;
                }

                .mobile-menu-btn.active span:nth-child(3) {
                    transform: rotate(45deg) translate(-6px, -6px);
                }

                /* Footer Styles */
                .main-footer {
                    background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
                    color: #fff;
                    margin-top: auto;
                }

                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 3rem;
                    padding: 4rem 2rem 2rem;
                }

                .footer-section h3,
                .footer-section h4 {
                    color: #D4AF37;
                    margin-bottom: 1rem;
                    font-weight: 600;
                }

                .footer-section h3 {
                    font-size: 1.3rem;
                    text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
                }

                .footer-section ul {
                    list-style: none;
                    padding: 0;
                }

                .footer-section ul li {
                    margin-bottom: 0.5rem;
                }

                .footer-section ul li a {
                    color: #ccc;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .footer-section ul li a:hover {
                    color: #8B8B4B;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .social-links a {
                    font-size: 1.5rem;
                    transition: transform 0.3s ease;
                }

                .social-links a:hover {
                    transform: scale(1.2);
                }

                .contact-info {
                    color: #ccc;
                    line-height: 1.6;
                    font-size: 0.9rem;
                }

                .footer-bottom {
                    border-top: 1px solid rgba(212, 175, 55, 0.2);
                    text-align: center;
                    padding: 2rem;
                    color: #999;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    body {
                        padding-top: 70px;
                    }

                    .nav-container {
                        padding: 1rem;
                    }

                    .mobile-menu-btn {
                        display: flex;
                    }

                    .nav-menu {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        width: 100%;
                        background: rgba(0, 0, 0, 0.98);
                        backdrop-filter: blur(10px);
                        flex-direction: column;
                        gap: 0;
                        padding: 1rem 0;
                        transform: translateX(-100%);
                        transition: transform 0.3s ease;
                        border-top: 1px solid rgba(212, 175, 55, 0.2);
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    }

                    .nav-menu.active {
                        transform: translateX(0);
                    }

                    .nav-link {
                        padding: 1rem 2rem;
                        width: 100%;
                        text-align: left;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                        background: transparent;
                        border-radius: 0;
                        box-shadow: none;
                        color: #fff;
                        font-weight: 400;
                        text-transform: none;
                        letter-spacing: normal;
                    }

                    /* Remove special styling for Book Now in mobile */
                    .nav-book-btn {
                        background: transparent;
                        color: #D4AF37;
                        font-weight: 500;
                        text-transform: uppercase;
                    }

                    .nav-book-btn:hover {
                        transform: none;
                        box-shadow: none;
                        color: #D4AF37;
                        background: rgba(212, 175, 55, 0.1);
                    }

                    .nav-link:hover {
                        background: rgba(212, 175, 55, 0.1);
                        color: #D4AF37;
                    }

                    .footer-content {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                        padding: 2rem 1rem;
                    }
                }

                /* Add padding to body for fixed header */
                body {
                    padding-top: 120px;
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    HeaderFooter.addStyles();
    HeaderFooter.init();
});