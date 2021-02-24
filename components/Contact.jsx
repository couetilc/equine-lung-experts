import ContactForm, { EMAIL } from './ContactForm';
import SocialTray, { Twitter, Instagram, Facebook } from './SocialTray';

const iconStyle = {
  height: '2.5rem',
  width: '2.5rem',
  margin: '.5rem',
};

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
          <h5>
            Reach out on social media:
            <SocialTray>
              <Twitter style={iconStyle} />
              <Instagram style={iconStyle} />
              <Facebook style={iconStyle} />
            </SocialTray>
          </h5>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
