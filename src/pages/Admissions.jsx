import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Helmet } from 'react-helmet-async';
import { FaFileAlt, FaUserTie, FaCheckCircle } from 'react-icons/fa';

const Admissions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section container">
            <Helmet>
                <title>Parivarthana Vidhya Mandir | Admissions</title>
                <meta name="description" content="Admission process and guidelines for Parivarthana Vidhya Mandir." />
            </Helmet>

            <SectionTitle title="Admissions" subtitle="Join the Parivarthana Family" />

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="admission-step" style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    marginBottom: '30px',
                    background: '#f9f9f9',
                    padding: '20px',
                    borderRadius: '12px'
                }}>
                    <div style={{ fontSize: '2rem', color: '#00BFFF' }}><FaFileAlt /></div>
                    <div>
                        <h3>Step 1: Application</h3>
                        <p>Fill out the admission enquiry form online or visit our campus to collect the application form.</p>
                    </div>
                </div>

                <div className="admission-step" style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    marginBottom: '30px',
                    background: '#f9f9f9',
                    padding: '20px',
                    borderRadius: '12px'
                }}>
                    <div style={{ fontSize: '2rem', color: '#32CD32' }}><FaUserTie /></div>
                    <div>
                        <h3>Step 2: Interaction</h3>
                        <p>Schedule a visit with the child. A brief interaction with the Principal/Head of Admissions will be conducted.</p>
                    </div>
                </div>

                <div className="admission-step" style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    marginBottom: '30px',
                    background: '#f9f9f9',
                    padding: '20px',
                    borderRadius: '12px'
                }}>
                    <div style={{ fontSize: '2rem', color: '#FFD700' }}><FaCheckCircle /></div>
                    <div>
                        <h3>Step 3: Confirmation</h3>
                        <p>Upon selection, submit the required documents and pay the admission fees to confirm the seat.</p>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px', padding: '30px', background: '#e0f7ff', borderRadius: '12px' }}>
                    <h3>Apply Now</h3>
                    <p style={{ marginBottom: '20px' }}>Start the admission process by filling out our online enquiry form.</p>
                    <Button to="/contact" type="primary">Go to Enquiry Form</Button>
                </div>
            </div>
        </div>
    );
};

export default Admissions;
