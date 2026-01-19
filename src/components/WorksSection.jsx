import React from 'react';
import '../styles/WorksSection.css';
import { FaSpa, FaBaby, FaBrain } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WorksSection = () => {
    const works = [
        {
            title: "SSY",
            fullName: "Siddha Samadhi Yoga",
            description: "A path to effortless living and high energy. Experiencing life in its fullness through meditation and mindfulness.",
            icon: <FaSpa />,
            color: "#e67e22" // Orange
        },
        {
            title: "ISP",
            fullName: "Infant Siddha Program",
            description: "Nurturing the genius in every child from the very beginning. A program designed for holistic infant development.",
            icon: <FaBaby />,
            color: "#3498db" // Blue
        },
        {
            title: "SST",
            fullName: "Sankalpa Siddha Training",
            description: "The Power of Positivity. Training minds to achieve goals through the strength of intention and positive thinking.",
            icon: <FaBrain />,
            color: "#9b59b6" // Purple
        }
    ];

    return (
        <section className="works-section">
            <div className="container">
                <div className="works-header">
                    <h2>Empowering lives through ancient wisdom and modern understanding</h2>
                </div>
                <div className="works-grid">
                    {works.map((work, index) => (
                        <motion.div
                            key={index}
                            className="work-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            style={{ borderTop: `4px solid ${work.color}` }}
                        >
                            <div className="work-icon" style={{ backgroundColor: `${work.color}20`, color: work.color }}>
                                {work.icon}
                            </div>
                            <h3>{work.title}</h3>
                            <h4>{work.fullName}</h4>
                            <p>{work.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorksSection;
