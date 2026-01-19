import React, { useEffect } from 'react';
import GurujiSection from '../components/GurujiSection';
import WorksSection from '../components/WorksSection';
import SectionTitle from '../components/SectionTitle';
import { FaChalkboardTeacher, FaChild, FaShapes, FaHandsHelping } from 'react-icons/fa';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Parivartana Vidhya Mandir | Home</title>
                <meta name="description" content="Parivarthana Vidhya Mandir - An Evolution in Education. Best Preschool and Primary School in Bijapur, Karnataka." />
            </Helmet>

            {/* Intro Section */}
            <section className="section container">
                <div className="home-intro">
                    <div className="home-intro-text">
                        <SectionTitle title="Welcome to Parivartana" subtitle="A Place Where Learning Begins" />
                        <p>
                            Parivartana Vidhya Mandir, established in 2015, is dedicated to nurturing young minds.
                            We focus on child-centric education, values, discipline, and holistic growth.
                            Under the guidance of our Principal, Acharya, we provide a safe and stimulating environment
                            where every child can flourish physically, mentally, socially, and morally.
                        </p>
                        <div style={{ marginTop: '20px' }}>
                            <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
                        </div>
                    </div>
                    <div className="home-intro-image">
                        <img src="https://www.instagram.com/parivartan_vidya_mandir/" alt="Kids Studying" />
                    </div>
                </div>
            </section>

            <GurujiSection />
            <WorksSection />

            {/* Why Choose Us Icons Grid */}
            <section className="section bg-off-white">
                <div className="container">
                    <SectionTitle title="Why Choose Us?" subtitle="We build the foundation for a bright future" />
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="icon-wrapper color-blue"><FaChalkboardTeacher /></div>
                            <h3>Experienced Teachers</h3>
                            <p>Caring and qualified staff dedicated to your child's growth.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrapper color-yellow"><FaHandsHelping /></div>
                            <h3>Safe Environment</h3>
                            <p>A friendly and secure atmosphere for all students.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrapper color-green"><FaShapes /></div>
                            <h3>Activity Based</h3>
                            <p>Learning through play, creativity, and hands-on experiences.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrapper color-pink"><FaChild /></div>
                            <h3>Holistic Growth</h3>
                            <p>Focus on discipline, confidence, values, and personality.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Classes Preview */}
            <section className="section container">
                <SectionTitle title="Our Classes" subtitle="Programs tailored for every age group" />
                <div className="classes-preview">
                    {['Play Group', 'Nursery', 'Jr. KG', 'Sr. KG', 'Primary School'].map((cls, index) => (
                        <div key={index} className="class-card-mini">
                            <h4>{cls}</h4>
                            <Link to="/classes">View Details &rarr;</Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gallery Preview Section */}
            <section className="section bg-off-white">
                <div className="container" style={{ textAlign: 'center' }}>
                    <SectionTitle title="Life at Parivarthana" subtitle="Glimpses of activities, celebrations, and learning" />

                    <div className="home-gallery-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px',
                        marginBottom: '40px',
                        marginTop: '30px'
                    }}>
                        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop" style={{ borderRadius: '12px', height: '200px', width: '100%', objectFit: 'cover' }} alt="Classroom" />
                        <img src="https://images.unsplash.com/photo-1563536310477-c7b4e3a800c2?q=80&w=400&auto=format&fit=crop" style={{ borderRadius: '12px', height: '200px', width: '100%', objectFit: 'cover' }} alt="Celebration" />
                        <img src="https://images.unsplash.com/photo-1577896335477-2858506f48db?q=80&w=400&auto=format&fit=crop" style={{ borderRadius: '12px', height: '200px', width: '100%', objectFit: 'cover' }} alt="Activity" />
                        <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=400&auto=format&fit=crop" style={{ borderRadius: '12px', height: '200px', width: '100%', objectFit: 'cover' }} alt="Dance" />
                    </div>

                    <Link to="/gallery" className="btn btn-secondary">View Full Gallery</Link>
                </div>
            </section>
        </>
    );
};

export default Home;
