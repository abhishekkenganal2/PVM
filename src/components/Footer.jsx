import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGoogle, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    const footerGalleryImages = [
        "https://images.unsplash.com/photo-1577896335477-2858506f48db?q=80&w=150&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=150&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=150&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563536310477-c7b4e3a800c2?q=80&w=150&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=150&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1530041686259-518f5316335d?q=80&w=150&auto=format&fit=crop"
    ];

    return (
        <footer className="footer-section">
            {/* Rainbow line at the top */}
            <div className="rainbow-line">
                <div className="r-color c1"></div>
                <div className="r-color c2"></div>
                <div className="r-color c3"></div>
                <div className="r-color c4"></div>
            </div>

            <div className="container footer-container">
                {/* Brand Column */}
                <div className="footer-col brand-col">
                    <h2 className="footer-logo">Parivartan <span className="highlight">Vidya Mandir</span></h2>
                    <p className="footer-tagline">
                        Nurturing young minds since 2015. We are committed to holistic development, discipline, and creative learning.
                    </p>
                    <div className="social-links">
                        <a href="https://www.justdial.com/Bijapur-Karnataka/Parivartan-Vidhya-Mandir-Near-Bda-Office-Jalanagar/9999P8352-8352-180423184407-F6Z4_BZDET" className="social-icon fb"><FaGoogle /></a>
                        <a href="https://www.instagram.com/parivartan_vidya_mandir/" className="social-icon insta"><FaInstagram /></a>
                        <a href="https://www.youtube.com/channel/UCc3KuZj0niq8UHaF3lKd_Rg" className="social-icon yt"><FaYoutube /></a>
                    </div>
                </div>

                {/* Links Column */}
                <div className="footer-col links-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/classes">Classes</Link></li>
                        <li><Link to="/staff-details">Staff Details</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="footer-col contact-col">
                    <h3>Contact Us</h3>
                    <div className="contact-item">
                        <FaMapMarkerAlt className="footer-icon" />
                        <p>Near BDA Office, Managoli Road,<br />Vivek Nagar, Jalanagar,<br />Bijapur – 586101</p>
                    </div>
                    <div className="contact-item">
                        <FaPhone className="footer-icon" />
                        <p><a href="tel:+91 9731370285">+91 9731370285</a></p>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope className="footer-icon" />
                        <p><a href="mailto:pvmschoolbjp@gmail.com">pvmschoolbjp@gmail.com</a></p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Parivartan Vidya Mandir. Crafted with care.</p>
            </div>
        </footer>
    );
};

export default Footer;
