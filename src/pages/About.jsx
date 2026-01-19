import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import '../styles/About.css';
import { Helmet } from 'react-helmet-async';
import { FaHistory, FaEye, FaBullseye, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="about-page">
            <Helmet>
                <title>Parivarthana Vidhya Mandir | About Us</title>
                <meta name="description" content="Learn about Parivarthana Vidhya Mandir's vision, aims, and history." />
            </Helmet>

            {/* Header Banner - could use a different image */}
            <div className="about-header">
                <div className="overlay-bg"></div>
                <h1>About Us</h1>
            </div>

            <div className="container section">

                {/* Intro */}
                <motion.div
                    className="about-intro"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                >
                    <div className="intro-text">
                        <h2 className="sub-heading">An Evolution in Education</h2>
                        <p>
                            <strong>Parivarthana Vidhya Mandir</strong>, established in 2015, is more than just a school.
                            It is a nurturing ground for the leaders of tomorrow. Located in the heart of Bijapur,
                            we are committed to providing a safe, stimulating, and value-based environment for children to grow.
                        </p>
                        <div className="highlight-box">
                            <FaHistory className="icon" />
                            <span>Established 2015</span>
                        </div>
                    </div>
                    <div className="intro-img">
                        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" alt="School Building" />
                    </div>
                </motion.div>

                {/* Vision & Mission Cards */}
                <div className="vm-section">
                    <motion.div
                        className="vm-card blue"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="icon-circle"><FaEye /></div>
                        <h3>Our Vision</h3>
                        <ul>
                            <li>Learning through experience.</li>
                            <li>Holistic development (Physical, Mental, Social).</li>
                            <li>Instilling discipline & confidence.</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="vm-card yellow"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="icon-circle"><FaBullseye /></div>
                        <h3>Our Aims</h3>
                        <ul>
                            <li>Individual care & personality development.</li>
                            <li>Yoga, exercise & creative activities.</li>
                            <li>Moral & cultural values.</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Principal Message */}
                <motion.div
                    className="principal-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                >
                    <div className="principal-img">
                        <FaUserTie className="placeholder-icon" />
                        {/* <img src="principal_photo_url" alt="Principal" /> */}
                    </div>
                    <div className="principal-text">
                        <h3>Principal's Message</h3>
                        <blockquote>
                            "Education is not just about filling a bucket, but lighting a fire. At Parivarthana, we strive to light that fire of curiosity and confidence in every child."
                        </blockquote>
                        <p className="author">- Acharya</p>
                        <p className="role">Principal</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
