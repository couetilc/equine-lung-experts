/* eslint-disable eol-last */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div id="contact-page" className="blank-page">
      <div id="contact-tagline" className="tagline">
        <div className="tagline-content">
          <h1>Contact Us</h1>
          <h5>Equine Lung Experts can be contacted by filling out the form below. Otherwise, please direct inquiries to <a href="mailto:info@equinelungexperts.com">info@equinelungexperts.com</a></h5>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}