import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section container">
            <Helmet>
                <title>Contact Us | Parivartan Vidya Mandir | Admissions Bijapur</title>
                <meta name="description" content="Get in touch with Parivartan Vidya Mandir for admissions, enquiries, or visits. Located near BDA Office, Vivek Nagar, Bijapur." />
                <meta name="keywords" content="Contact PVM School, PVM Address, PVM Phone Number, School Admissions Bijapur, Parivartan Vidya Mandir Location" />
                <meta property="og:title" content="Contact Parivartan Vidya Mandir" />
                <meta property="og:description" content="Reach out to us for admissions and queries. We are here to help." />
                <meta property="og:url" content="https://parivarthan-vidya-mandir.netlify.app/contact" />
                <link rel="canonical" href="https://parivarthan-vidya-mandir.netlify.app/contact" />
            </Helmet>

            <SectionTitle title="Contact Us" subtitle="We'd love to hear from you" />

            <div className="contact-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
                marginTop: '40px'
            }}>
                {/* Contact Info Side */}
                <div className="contact-info-block">
                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{ marginBottom: '15px' }}>Get In Touch</h3>
                        <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                            Have questions about admissions, curriculum, or anything else?
                            Reach out to us using the form or the details below.
                        </p>

                        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', alignItems: 'center' }}>
                            <div style={{ color: '#00BFFF', fontSize: '1.2rem' }}><FaMapMarkerAlt /></div>
                            <div>
                                <strong>Address:</strong><br />
                                Near BDA Office, Managoli Road,<br />
                                Vivek Nagar, Jalanagar,<br />
                                Bijapur – 586101, Karnataka
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', alignItems: 'center' }}>
                            <div style={{ color: '#00BFFF', fontSize: '1.2rem' }}><FaPhone /></div>
                            <div>
                                <strong>Phone:</strong><br />
                                <a href="tel:7383386642">7383386642</a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', alignItems: 'center' }}>
                            <div style={{ color: '#00BFFF', fontSize: '1.2rem' }}><FaEnvelope /></div>
                            <div>
                                <strong>Email:</strong><br />
                                <a href="mailto:pvmschoolbjp@gmail.com">pvmschoolbjp@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="map-container" style={{ width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
                        <iframe
                            title="School Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.375372670205!2d75.72502447389155!3d16.807724119247716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc65542e5047bc1%3A0x2f9b85828c664546!2sParivartan%20Vidya%20Mandir!5e0!3m2!1sen!2sin!4v1768234788612!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        {/* Note: Coordinates in map are generic for Bijapur area as exact coords weren't provided, 
                    using placeholder query. Ideally user provides exact map link or coords. */}
                    </div>
                </div>

                {/* Contact Form Side */}
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;
