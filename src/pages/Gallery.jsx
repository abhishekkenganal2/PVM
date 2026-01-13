import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Gallery.css';

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Classroom', 'Annual Day', 'Independence Day', 'Sports Meet', 'Celebrations'];

    const images = [
        // Classroom
        { id: 1, category: 'Classroom', src: "https://images.unsplash.com/photo-1577896335477-2858506f48db?q=80&w=600&auto=format&fit=crop", title: "Interactive Learning" },
        { id: 2, category: 'Classroom', src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop", title: "Reading Time" },
        { id: 3, category: 'Classroom', src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop", title: "Group Activities" },

        // Annual Day
        { id: 4, category: 'Annual Day', src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop", title: "Cultural Dance" },
        { id: 5, category: 'Annual Day', src: "https://images.unsplash.com/photo-1627552245715-77d79b16035c?q=80&w=600&auto=format&fit=crop", title: "Stage Performance" },

        // Independence Day & Republic Day
        { id: 6, category: 'Independence Day', src: "https://images.unsplash.com/photo-1563536310477-c7b4e3a800c2?q=80&w=600&auto=format&fit=crop", title: "Flag Hoisting" },
        { id: 7, category: 'Independence Day', src: "https://images.unsplash.com/photo-1563823438-bb4e6d47b59e?q=80&w=600&auto=format&fit=crop", title: "Patriotic Skit" },

        // Sports
        { id: 8, category: 'Sports Meet', src: "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=600&auto=format&fit=crop", title: "Running Race" },
        { id: 9, category: 'Sports Meet', src: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=600&auto=format&fit=crop", title: "Tug of War" },

        // Other Celebrations (New Year, Teachers Day, Childrens Day)
        { id: 10, category: 'Celebrations', src: "https://images.unsplash.com/photo-1530041686259-518f5316335d?q=80&w=600&auto=format&fit=crop", title: "Children's Day Fun" },
        { id: 11, category: 'Celebrations', src: "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0a?q=80&w=600&auto=format&fit=crop", title: "New Year Party" },
        { id: 12, category: 'Celebrations', src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop", title: "Teachers Day" },
    ];

    const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

    return (
        <div className="section container">
            <Helmet>
                <title>Parivartan Vidhya Mandir | Gallery</title>
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
