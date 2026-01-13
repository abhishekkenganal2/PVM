import React from 'react';
import Button from './Button';
import '../styles/HeroSection.css';
import { motion } from 'framer-motion';

const HeroSection = () => {
    // Using a placeholder image for now, ideally this would be a high-quality photo of kids/school
    const heroImage = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop";

    return (
        <div className="hero-container" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})` }}>
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    An Evolution in Education
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Nurturing Young Minds Since 2015
                </motion.p>
                <motion.div
                    className="hero-btns"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button to="/admissions" type="primary">Apply for Admission</Button>
                    <Button to="/contact" type="secondary">Contact Us</Button>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
