import React from 'react';
import '../styles/GurujiSection.css';
import { motion } from 'framer-motion';
import image from '../assets/guruji.jpg'

const GurujiSection = () => {
    return (
        <section className="guruji-section">
            <div className="container guruji-container">
                <div className="guruji-image-wrapper">
                    {/* Placeholder image for Guruji - calm, spiritual */}
                    <img
                        src={image}
                        alt="Rushi Prabakar Guruji"
                        className="guruji-image"
                    />
                </div>
                <div className="guruji-content">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">Our Guiding Light</h2>
                        <h3 className="guruji-name">Rishi Prabakar Guruji</h3>
                        <p className="guruji-text">
                            Our school is founded on the profound ethics and teachings of <strong>Guruji Shri Rishi Prabhakar </strong> (1948–2014) was an Indian yogi who instructed many spiritual teachers across the country. He was the founder of <strong>Rishi Samskruti Vidya Kendra</strong>, a Public Charitable Trust. He also developed many programs such as <strong>Siddha Samadhi Yoga (SSY)</strong>, <strong>Kaya Kalpa Kriya (KKK)</strong>, <strong>Advanced Meditation Course (AMC)</strong>, <strong>Bhava Samadhi Training (BST)</strong>, <strong>Hundred Percent Memory (HMP, also known as RCRT)</strong>, <strong>Infant Siddha Program (ISP)</strong> and <strong>Inspirational Leadership in Rural Development (ILRD)</strong> for the well-being of humanity.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GurujiSection;
