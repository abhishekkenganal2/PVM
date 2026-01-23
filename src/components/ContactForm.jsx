import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css';

const ContactForm = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
          .then((result) => {
              console.log(result);
              setStatus('success');
              form.current.reset();
              setTimeout(() => setStatus(''), 3000);
          }, (error) => {
              console.log(error.text);
              setStatus('error');
              setTimeout(() => setStatus(''), 3000);
          });
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
                        <input type="number" name="age" required placeholder="Age" min="2" max="6" />
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
                        <input type="email" name="email" required placeholder="your@gmail.com" />
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
