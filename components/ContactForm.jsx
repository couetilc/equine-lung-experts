/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable react/sort-comp */
/* eslint-disable no-underscore-dangle */
import { Component } from 'react';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingResponse: false,
      messageSent: false,
      messageStatus: '',
    };

    this.submitContactForm = this._submitContactForm.bind(this);
  }

  _submitContactForm(event) {
    event.preventDefault();
    const form = document.querySelector('#contact-form');
    const fdata = new FormData(form);
    const message = {};
    for (const [key, value] of fdata.entries()) {
      message[key] = value;
    }

    this.setState({
      pendingResponse: true,
    });

    fetch('https://api.equinelungexperts.com/contact', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(message),
    })
      .then(() => {
        this.setState({
          pendingResponse: false,
          messageSent: true,
          messageStatus: 'SUCCESS',
        });
      })
      .catch(() => {
        this.setState({
          pendingResponse: false,
          messageSent: true,
          messageStatus: 'ERROR',
        });
      });
  }

  componentDidMount() {
    const form = document.querySelector('#contact-form');
    form.addEventListener('submit', this.submitContactForm);
  }

  componentWillUnmount() {
    const form = document.querySelector('#contact-form');
    form.removeEventListener('subit', this.submitContactForm);
  }

  render() {
    const submit_message = (this.state.pendingResponse)
      ? 'Sending Form...'
      : 'Send Message';
    const is_submit_disabled = !!(this.state.pendingResponse);
    let message_box = (<></>);

    if (this.state.messageSent && !this.state.pendingResponse) {
      const alert = (this.state.messageStatus === 'SUCCESS')
        ? 'Contact information submitted'
        : 'ERROR: information not submitted';
      const alert_style = {
        textAlign: 'center',
        fontWeight: 700,
        color: (this.state.messageStatus === 'SUCCESS') ? 'green' : 'red',
      };
      message_box = (
        <div style={alert_style}>{alert}</div>
      );
    }

    return (
      <div id="contact-box" className="contact-box">
        <h3>Contact Us</h3>
        <h6>info@equinelungexperts.com</h6>
        <form action="https://api.equinelungexperts.com/contact" method="post" id="contact-form" encType="application/json" target="_blank">
          <div>
            <label htmlFor="input-fullname" id="label-fullname">Full Name:*</label>
            <input type="text" className="contact-name" id="input-fullname" name="fullname" required />
          </div>
          <div>
            <label htmlFor="input-email" id="label-email">Email:*</label>
            <input type="email" className="contact-email" id="input-email" name="email" required />
          </div>
          <div>
            <label htmlFor="input-phone" id="label-phone">Phone Number:*</label>
            <input type="text" className="contact-phone" id="input-phone" name="phone" required />
          </div>
          <div>
            <label htmlFor="select-subject" id="label-subject">Subject:*</label>
            <select name="subject" className="contact-subject" id="select-subject" required>
              <option value="submit-a-balf-sample">Submit a BALF sample</option>
              <option value="schedule-environmental-consulting">Schedule an environmental evaluation</option>
              <option value="ask-a-question">Ask a question</option>
            </select>
          </div>
          <div>
            <label htmlFor="textarea-message" id="label-message">Message:*</label>
            <textarea className="contact-message" id="textarea-message" name="message" required />
          </div>
          <div className="submit-box">
            <span>* Required field</span>
            {message_box}
            <input type="submit" className="contact-submit" value={submit_message} disabled={is_submit_disabled} />
          </div>
        </form>
      </div>
    );
  }
}
