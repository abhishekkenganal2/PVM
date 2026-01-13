import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Helmet } from 'react-helmet-async';
import { FaBaby, FaShapes, FaBookOpen, FaGraduationCap, FaPencilAlt, FaStar } from 'react-icons/fa';
import '../styles/Classes.css';
import { motion } from 'framer-motion';

const Classes = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const classesData = [
        {
            name: "Play Group",
            age: "2 - 3 Years",
            desc: "A fun-filled introduction to school life where toddlers learn social skills through play, music, and dance.",
            icon: <FaBaby />,
            color: "#FF69B4",
            features: ["Sensory Play", "Social Skills", "Music & Rhythm"]
        },
        {
            name: "Nursery",
            age: "3 - 4 Years",
            desc: "Focused on developing early literacy and numeracy skills through interactive activities and storytelling.",
            icon: <FaShapes />,
            color: "#32CD32",
            features: ["Phonics", "Number Sense", "Arts & Crafts"]
        },
        {
            name: "Jr. KG",
            age: "4 - 5 Years",
            desc: "Building a strong foundation in reading, writing, and logical thinking with structured learning.",
            icon: <FaPencilAlt />,
            color: "#FFD700",
            features: ["Writing Skills", "Basic Math", "Environmental Science"]
        },
        {
            name: "Sr. KG",
            age: "5 - 6 Years",
            desc: "Preparing children for primary school with advanced concepts, confidence building, and leadership.",
            icon: <FaBookOpen />,
            color: "#00BFFF",
            features: ["Adanced Phonics", "Problem Solving", "Public Speaking"]
        },
        {
            name: "Primary School",
            age: "6+ Years",
            desc: "A comprehensive curriculum focused on academic excellence, holistic development, and moral values.",
            icon: <FaGraduationCap />,
            color: "#9370DB",
            features: ["Core Subjects", "Sports & Yoga", "Computer Labs"]
        }
    ];

    return (
        <div className="classes-page section container">
            <Helmet>
                <title>Parivartan Vidhya Mandir | Classes</title>
                <meta name="description" content="Explore the classes offered at Parivartan Vidhya Mandir, from Play Group to Primary School." />
            </Helmet>

            <SectionTitle title="Our Classes" subtitle="Tailored Learning for Every Age" />

            <div className="classes-grid-detailed">
                {classesData.map((cls, index) => (
                    <motion.div
                        key={index}
                        className="class-card-detailed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{ borderTopColor: cls.color }}
                    >
                        <div className="class-icon-wrapper" style={{ background: `${cls.color}20`, color: cls.color }}>
                            {cls.icon}
                        </div>
                        <h3>{cls.name}</h3>
                        <span className="age-badge">{cls.age}</span>
                        <p className="class-desc">{cls.desc}</p>

                        <ul className="class-features">
                            {cls.features.map((feat, i) => (
                                <li key={i}><FaStar className="star-icon" style={{ color: cls.color }} /> {feat}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            <div className="enroll-cta">
                <h3>Start Your Child's Journey Today</h3>
                <p>Admissions are open for the upcoming academic year.</p>
                <Button to="/admissions" type="primary">Apply Now</Button>
            </div>
        </div>
    );
};

export default Classes;
