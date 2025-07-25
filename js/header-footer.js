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
                        <a href="membership.html" class="nav-link nav-book-btn">Become a Member</a>
                    </div>
                    
                    <div class="mobile-menu-btn" id="mobileMenuBtn">
                        <span></span>
                        <span></span>
                        <span></span>
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
                    <div class="footer-section footer-logo-section">
                        <div class="footer-logo">
                            <img src="img/island-horses-logo.png" alt="Island Horses Langkawi" class="footer-logo-img">
                            <p>Experience the magic of Langkawi on horseback</p>
                        </div>
                    </div>
                    
                    <div class="footer-section footer-connect">
                        <h4>Connect</h4>
                        <div class="social-links">
                            <a href="https://www.facebook.com/profile.php?id=100057141742906" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/islandhorseslangkawi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a href="https://wa.me/60124229699" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                </svg>
                            </a>
                            <a href="mailto:aimi@islandhorseslangkawi.com" aria-label="Email">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                            </a>
                        </div>
                        <div class="contact-info">
                            <p><strong>Address:</strong><br>
                            PT 210, Jalan Telaga Tujuh,<br>
                            07100 Langkawi, Kedah</p>
                            
                            <p><strong>Phone:</strong><br>
                            012-422 9699</p>
                            
                            <p><strong>Hours:</strong><br>
                            Tuesday - Sunday: 8:30 am–12 pm, 2–6 pm<br>
                            Monday: Closed</p>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2025 Island Horses Sdn Bhd. All rights reserved.</p>
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
                    padding: 1.5rem 2rem;
                    min-height: 100px;
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

                /* Special styling for Become a Member button on desktop */
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
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    padding: 4rem 2rem 2rem;
                    align-items: start;
                }

                .footer-logo-section {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .footer-logo-img {
                    height: 100px;
                    width: auto;
                    max-height: 120px;
                    margin-bottom: 1rem;
                }

                .footer-logo p {
                    color: #ccc;
                    font-size: 1.1rem;
                    line-height: 1.6;
                    margin: 0;
                    font-style: italic;
                }

                .footer-connect h4 {
                    color: #D4AF37;
                    margin-bottom: 1.5rem;
                    font-weight: 600;
                    font-size: 1.2rem;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .social-links a {
                    color: #D4AF37;
                    transition: all 0.3s ease;
                }

                .social-links a:hover {
                    color: #8B8B4B;
                    transform: scale(1.1);
                }

                .social-links svg {
                    width: 24px;
                    height: 24px;
                }

                .contact-info {
                    color: #ccc;
                    line-height: 1.6;
                }

                .contact-info p {
                    margin-bottom: 1.5rem;
                }

                .contact-info strong {
                    color: #D4AF37;
                    font-weight: 600;
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
                        padding-top: 100px;
                    }

                    .nav-container {
                        padding: 1rem;
                        min-height: 80px;
                    }

                    .logo img {
                        height: 60px;
                    }

                    .mobile-menu-btn {
                        display: flex;
                    }

                    .nav-menu {
                        position: fixed;
                        top: 100px; /* Position below the header completely */
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
                        z-index: 999; /* Lower than header to ensure header stays on top */
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

                    /* Remove special styling for Become a Member in mobile */
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
                        gap: 3rem;
                        padding: 2rem 1rem;
                        text-align: center;
                    }

                    .footer-logo-section {
                        align-items: center;
                    }

                    .footer-connect {
                        text-align: left;
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