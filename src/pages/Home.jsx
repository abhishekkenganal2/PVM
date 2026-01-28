import React, { useEffect } from 'react';
import GurujiSection from '../components/GurujiSection';
import WorksSection from '../components/WorksSection';
import SectionTitle from '../components/SectionTitle';
import { FaChalkboardTeacher, FaChild, FaShapes, FaHandsHelping } from 'react-icons/fa';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import school_pic from '../assets/pvm_school.jpeg';
import { sportsDay, classRoom, celebration, dance } from '../assets/gallery';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const classes = [
        { id: 1, name: 'Play Group' },
        { id: 2, name: 'Nursery' },
        { id: 3, name: 'Jr. KG' },
        { id: 4, name: 'Sr. KG' },
        { id: 5, name: 'Primary School' }
    ];

    const galleryItems = [
        { id: 1, image: classRoom, alt: 'Classroom' },
        { id: 2, image: celebration, alt: 'Celebration' },
        { id: 3, image: sportsDay, alt: 'Activity' },
        { id: 4, image: dance, alt: 'Dance' }
    ];

    const features = [
        { id: 1, icon: FaChalkboardTeacher, title: 'Experienced Teachers', description: 'Caring and qualified staff dedicated to your child\'s growth.', color: "#00BFFF", },
        { id: 2, icon: FaHandsHelping, title: 'Safe Environment', description: 'A friendly and secure atmosphere for all students.', color: "#FFD700", },
        { id: 3, icon: FaShapes, title: 'Activity Based', description: 'Learning through play, creativity, and hands-on experiences.', color: "#32CD32", },
        { id: 4, icon: FaChild, title: 'Holistic Growth', description: 'Focus on discipline, confidence, values, and personality.', color: "#FF69B4", }
    ];

    return (
        <>
            <Helmet>
                <title>Parivartan Vidya Mandir | Home</title>
                <meta name="description" content="Parivartan Vidya Mandir - An Evolution in Education. Best Preschool and Primary School in Bijapur, Karnataka." />
            </Helmet>

            {/* Intro Section */}
            <section className="section container">
                <div className="home-intro">
                    <div className="home-intro-text">
                        <SectionTitle title="Welcome to Parivartan" subtitle="A Place Where Learning Begins" />
                        <p>
                            Parivartan Vidya Mandir, established in 2015, is dedicated to nurturing young minds.
                            We focus on child-centric education, values, discipline, and holistic growth.
                            Under the guidance of our Principal, Acharya, we provide a safe and stimulating environment
                            where every child can flourish physically, mentally, socially, and morally.
                        </p>
                        <div style={{ marginTop: '20px' }}>
                            <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
                        </div>
                    </div>
                    <div className="home-intro-image">
                        <img src={school_pic} alt="Kids Studying" />
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
                        {features.map((feature) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={feature.id} className="feature-card">
                                    <div className={`class-icon-wrapper`} style={{ background: `${feature.color}20`, color: feature.color }}><IconComponent /></div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Classes Preview */}
            <section className="section container">
                <SectionTitle title="Our Classes" subtitle="Programs tailored for every age group" />
                <div className="classes-preview">
                    {classes.map((cls) => (
                        <div key={cls.id} className="class-card-mini">
                            <h4>{cls.name}</h4>
                            <Link to="/classes">View Details &rarr;</Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Staff Details Link Section */}
            <section className="section bg-light-purple" style={{ backgroundColor: '#f9f3fc' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <SectionTitle title="Our Management" subtitle="The pillars of our institution" />
                    <p style={{ maxWidth: '700px', margin: '0 auto 30px', fontSize: '1.1rem' }}>
                        Get to know the dedicated members of Parivartan Vidya Mandir who guide our vision and mission.
                    </p>
                    <Link to="/staff-details" className="btn btn-primary">View Staff & Management Details</Link>
                </div>
            </section>

            {/* Gallery Preview Section */}
            <section className="section bg-off-white">
                <div className="container" style={{ textAlign: 'center' }}>
                    <SectionTitle title="Life at Parivartan" subtitle="Glimpses of activities, celebrations, and learning" />
                    <div className="home-gallery-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px',
                        marginBottom: '40px',
                        marginTop: '30px'
                    }}>
                        {galleryItems.map((item) => (
                            <img key={item.id} src={item.image} style={{ borderRadius: '12px', height: '200px', width: '100%', objectFit: 'cover' }} alt={item.alt} />
                        ))}
                    </div>
                    <Link to="/gallery" className="btn btn-secondary">View Full Gallery</Link>
                </div>
            </section>
        </>
    );
};

export default Home;
