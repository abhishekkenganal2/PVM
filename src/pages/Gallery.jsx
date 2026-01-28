import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Gallery.css';
import { interactiveLearning, readingTime, groupActivity, culturalDance, stagePerformance, flagHoisting, patriotic, sportsDay, tugOfWar, celebration, picnic, dance } from '../assets/gallery';

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Classroom', 'Annual Day', 'Patriotic Days', 'Sports Meet', 'Celebrations'];

    const images = [
        // Classroom
        { id: 1, category: 'Classroom', src: interactiveLearning, title: "Interactive Learning" },
        { id: 2, category: 'Classroom', src: readingTime, title: "Reading Time" },
        { id: 3, category: 'Classroom', src: groupActivity, title: "Group Activities" },

        // Annual Day
        { id: 4, category: 'Annual Day', src: culturalDance, title: "Cultural Dance" },
        { id: 5, category: 'Annual Day', src: stagePerformance, title: "Stage Performance" },
        { id: 6, category: 'Annual Day', src: dance, title: "Dance Performance" },

        // Patriotic Days
        { id: 7, category: 'Patriotic Days', src: flagHoisting, title: "Flag Hoisting" },
        { id: 8, category: 'Patriotic Days', src: patriotic, title: "Patriotic Skit" },
        // Sports
        { id: 9, category: 'Sports Meet', src: sportsDay, title: "Running Race" },
        { id: 10, category: 'Sports Meet', src: tugOfWar, title: "Tug of War" },

        // Other Celebrations (New Year, Teachers Day, Childrens Day)
        { id: 11, category: 'Celebrations', src: celebration, title: "New Year Celebration" },
        { id: 12, category: 'Celebrations', src: picnic, title: "Picnic day" },
        { id: 13, category: 'Celebrations', src: dance, title: "Dance Performance" },
    ];

    const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

    return (
        <div className="section container">
            <Helmet>
                <title>Parivartan Vidya Mandir | Gallery</title>
                <meta name="description" content="Explore our gallery showing classrooms, annual day, sports meet, and other celebrations." />
            </Helmet>

            <SectionTitle title="Our Gallery" subtitle="Capturing Moments of Joy & Learning" />

            {/* Filter Buttons */}
            <div className="gallery-filter">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={filter === cat ? 'filter-btn active' : 'filter-btn'}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <motion.div layout className="gallery-grid">
                <AnimatePresence>
                    {filteredImages.map((img) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            key={img.id}
                            className="gallery-item"
                        >
                            <div className="img-wrapper">
                                <img src={img.src} alt={img.title} loading="lazy" />
                                <div className="overlay">
                                    <h3>{img.title}</h3>
                                    <p>{img.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Gallery;
