import ContactForm, { EMAIL } from './ContactForm';

export default function Contact() {
  return (
    <div id="contact-page" className="blank-page">
      <div id="contact-tagline" className="tagline">
        <div className="tagline-content">
          <h1>Contact Us</h1>
          <h5>
            Equine Lung Experts can be contacted by filling out the form below.
            Please direct inquiries to:
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </h5>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
