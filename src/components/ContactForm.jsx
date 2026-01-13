import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css';

const ContactForm = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // NOTE TO USER: Replace these placeholder IDs with your actual EmailJS credentials
        // service_id, template_id, public_key
        // For now, we simulate a success after 1.5 seconds.

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        //   .then((result) => {
        //       console.log(result.text);
        //       setStatus('success');
        //   }, (error) => {
        //       console.log(error.text);
        //       setStatus('error');
        //   });

        setTimeout(() => {
            setStatus('success');
            form.current.reset();
        }, 1500);
    };

    return (
        <div className="contact-form-container">
            <h3>Admission / Contact Form</h3>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                    <label>Parent Name *</label>
                    <input type="text" name="parent_name" required placeholder="Enter parent's name" />
                </div>

                <div className="form-group">
                    <label>Student Name *</label>
                    <input type="text" name="student_name" required placeholder="Enter student's name" />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Age *</label>
                        <input type="number" name="age" required placeholder="Age" min="2" max="15" />
                    </div>
                    <div className="form-group">
                        <label>Class Applying For *</label>
                        <select name="class_applying" required>
                            <option value="">Select Class</option>
                            <option value="Play Group">Play Group</option>
                            <option value="Nursery">Nursery</option>
                            <option value="Jr. KG">Jr. KG</option>
                            <option value="Sr. KG">Sr. KG</option>
                            <option value="Primary School">Primary School</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Phone Number *</label>
                        <input type="tel" name="phone" required placeholder="Mobile number" pattern="[0-9]{10}" title="10 digit mobile number" />
                    </div>
                    <div className="form-group">
                        <label>Email Address *</label>
                        <input type="email" name="email" required placeholder="your@email.com" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" rows="4" placeholder="Any specific queries?"></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Submit Application'}
                </button>

                {status === 'success' && <p className="success-msg">Thank you! Our team will contact you shortly.</p>}
                {status === 'error' && <p className="error-msg">Something went wrong. Please try again.</p>}
            </form>
        </div>
    );
};

export default ContactForm;
