import React from 'react';
import './SupportHelpCenter.css'; 

const SupportHelpCenter = () => {
  return (
    <div>
      <h1>Support Help Center</h1>
      <p>Welcome to the Support Help Center. Here, you can find answers to frequently asked questions, get support for any issues you encounter, and access helpful resources.</p>
      <p>If you need assistance, please contact our support team at support@wrixle.com or use the form below to submit a support ticket.</p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" />

        <label htmlFor="message">Message</label>
        <textarea id="message" rows="4"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SupportHelpCenter;
