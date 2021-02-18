/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-one-expression-per-line */
export const EMAIL = 'equinelungexperts@gmail.com';

export default function ContactForm() {
  return (
    <div id="contact-box" className="contact-box">
      <h3>Contact Us</h3>
      <h6>{EMAIL}</h6>
      <form action={`mailto:${EMAIL}`} method="get" id="contact-form" encType="text/plain" target="_blank">
        <div>
          <label htmlFor="select-subject" id="label-subject">Subject:*</label>
          <select name="subject" className="contact-subject" id="select-subject" required>
            <option value="[submit-a-balf-sample]">Submit a BALF sample</option>
            <option value="[schedule-environmental-consulting]">Schedule an environmental evaluation</option>
            <option value="[ask-a-question]">Ask a question</option>
          </select>
        </div>
        <div>
          <label htmlFor="input-fullname" id="label-fullname">Full Name:*</label>
          <input type="text" className="contact-name" id="input-fullname" name="subject" required />
        </div>
        <div>
          <label htmlFor="input-email" id="label-email">Email:*</label>
          <input type="email" className="contact-email" id="input-email" name="subject" required />
        </div>
        <div>
          <label htmlFor="input-phone" id="label-phone">Phone Number:*</label>
          <input type="text" className="contact-phone" id="input-phone" name="subject" required />
        </div>
        <div>
          <label htmlFor="textarea-message" id="label-message">Message:*</label>
          <textarea className="contact-message" id="textarea-message" name="body" required />
        </div>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
}
