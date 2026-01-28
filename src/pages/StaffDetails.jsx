import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import '../styles/StaffDetails.css';
import { Helmet } from 'react-helmet-async';

const StaffDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const directors = [
        { id: 1, name: "Smt : Laxmi.Girish. Akkalkot", designation: "President" },
        { id: 2, name: "Shri: Mounesh.Gurappa.Badiger", designation: "Vice-President" },
        { id: 3, name: "Shri: Danappa.Bhojappa.Kotnal", designation: "Secretary" },
        { id: 4, name: "Shri: Mahesh.Chandrakant. Solapurkar", designation: "Director" },
        { id: 5, name: "Shri: Nitin . Prakash. Desai", designation: "Director" },
        { id: 6, name: "Smt: Danamma.Mallikarjun.Mahajan", designation: "Director" },
        { id: 7, name: "Shri: Anilkumar.Kashinath. Kathare", designation: "Director" },
        { id: 8, name: "Shri: Aravind.Kashiram. Chavan", designation: "Director" },
        { id: 9, name: "Shri: Satish.Vasantarao.Pathak", designation: "Director" }
    ];

    const witnesses = [
        { id: 1, name: "Smt: Sweta.s.Patil", address: "Ishawaeya nagar. vijayapur." },
        { id: 2, name: "Smt: Ashwini s.Shilavanth", address: "Jorapur peth,Kumbar galli. vijayapur." }
    ];

    return (
        <div className="staff-details-page">
            <Helmet>
                <title>Staff Details | Parivartan Vidya Mandir</title>
                <meta name="description" content="Management and Staff Details of Parivartan Vidya Mandir - Sadvidya Shikshan Samsthe." />
            </Helmet>
            <div className="staff-details-container">
                <section className="directors-list">
                    <SectionTitle title="Board of Directors" subtitle="Our Guiding Leaders" />
                    <div className="table-responsive">
                        <table className="directors-table">
                            <thead>
                                <tr>
                                    <th>Sl.No.</th>
                                    <th>Name and Address of the Directors</th>
                                    <th>Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {directors.map((director, index) => (
                                    <tr key={director.id}>
                                        <td>{index + 1})</td>
                                        <td>{director.name}</td>
                                        <td>{director.designation}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="witnesses-section">
                    <SectionTitle title="Witnesses" subtitle="" />
                    <div className="witnesses-grid">
                        {witnesses.map((witness) => (
                            <div key={witness.id} className="witness-card">
                                <span className="witness-name">{witness.name}</span>
                                <p className="witness-address">{witness.address}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default StaffDetails;
