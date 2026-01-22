import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import '../styles/About.css';
import { Helmet } from 'react-helmet-async';
import { FaHistory, FaEye, FaBullseye, FaUserTie, FaStar     } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const reviews = [
        {
            id: 1,
            rating: 5,
            text: "My experience at Parivartan Vidya Mandir has been exceptional. The relevant curriculum and quality courses are complemented by expert faculty who ensure regular evaluations. Smartboards enhance learn...",
            author: "Suma Chaini",
            delay: 0.1
        },
        {
            id: 2,
            rating: 5,
            text: "Parivartan Vidya Mandir is truly an excellent institution that stands out for its clean facilities and adequate security. The quality of courses offered is impressive, and the expert faculty ensures ....",
            author: "Altaf Maniyar",
            delay: 0.2
        },
        {
            id: 3,
            rating: 5,
            text: "Parivartan Vidya Mandir is an exceptional institution that offers a relevant and contemporary curriculum, perfectly aligned with today`s educational needs. The faculty is highly qualified and dedicated.",
            author: "Nitin Desai",
            delay: 0.3
        },
        {
            id: 4,
            rating: 5,
            text: "Wonderful teachers and good academics. My son has improved a lot in studies and personality.",
            author: "Parent - Vivek Nagar",
            delay: 0.4
        }
    ];

    return (
        <div className="about-page">
            <Helmet>
                <title>Parivartan Vidya Mandir | About Us</title>
                <meta name="description" content="Learn about Parivartan Vidya Mandir's vision, aims, and history." />
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
                            <strong>Parivartan Vidya Mandir</strong>, established in 2015, is more than just a school.
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
                            "Education is not just about filling a bucket, but lighting a fire. At Parivartan, we strive to light that fire of curiosity and confidence in every child."
                        </blockquote>
                        <p className="author">- Acharya</p>
                        <p className="role">Principal</p>
                    </div>
                </motion.div>

                {/* Reviews Section */}
                <motion.div
                    className="reviews-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                >
                    <h3>Parent Reviews & Ratings</h3>
                    <div className="overall-rating">
                        <div className="rating-display">
                            <span className="rating-number">4.63</span>
                            <div className="stars">
                                <FaStar className="star filled" />
                                <FaStar className="star filled" />
                                <FaStar className="star filled" />
                                <FaStar className="star filled" />
                                <FaStar className="star half" />
                            </div>
                            <p className="rating-source">Based on JustDial Reviews</p>
                        </div>
                    </div>

                    <div className="reviews-grid">
                        {reviews.map((review) => (
                            <motion.div
                                key={review.id}
                                className="review-card"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: review.delay }}
                            >
                                <div className="review-stars">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} className="star filled" />
                                    ))}
                                </div>
                                <p className="review-text">"{review.text}"</p>
                                <p className="review-author">{review.author}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
