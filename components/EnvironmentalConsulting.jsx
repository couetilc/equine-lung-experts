import { EMAIL } from './ContactForm';
import TOC from './TOC';

const imgAero = '/llc-aerohippus.jpg';

export default function EnvironmentalConsulting() {
  return (
    <div id="env-consulting-page" className="blank-page">
      <div id="env-tagline" className="tagline">
        <div className="tagline-content">
          <h1>Environmental Assessment Services</h1>
          <h5>Equine Lung Experts is pleased to offer environmental assessment services to veterinarians. We work with veterinarians to objectively assess barn and stall environments, and analyze potential sources of irritant or allergen exposure in horses.</h5>
          <a href="/#people-summary">Meet the experts →</a>
        </div>

        <TOC title="Key Information">
          <a href="#env-what-we-do">What We Do</a>
          <a href="#env-request-services">Request Services</a>
          <a href="#env-cost-service">Pricing</a>
        </TOC>
      </div>

      <div className="inline-image">
        <div>
          <div id="env-what-we-do">
            <h3>What We Do</h3>
            <ul>
              <li>Sample and quantify airborne irritants and allergens using gravimetric air sampling techniques and real time particulate counters.</li>
              <li>Assess dust and allergen sources by testing feedstuff and bedding samples.</li>
            </ul>
            <span>The service is tailored to each situation and the goals expressed by the horse’s owner and veterinarian.</span>
          </div>

          <div id="env-request-services">
            <h3>How to Request Counseling Services</h3>
            <div>
              Please contact Equine Lung Experts by email (
              <a href="/contact">{EMAIL}</a>
              ) to discuss the type of service desired.  We will respond to the
              email within 1-2 working days.
            </div>
          </div>
        </div>

        <figure id="env-image-aero" className="figure-with-caption">
          <img src={imgAero} alt="Dr. Couetil with a patient" />
          <figcaption>Dr. Couetil with a patient.</figcaption>
        </figure>
      </div>

      <div id="env-cost-service">
        <h3>Cost of Services</h3>
        <div>The fee for environmental counseling services is based on the type of assistance needed. A quote will be sent following an inquiry and discussion of services requested.</div>
        <ul>
          <li>Fee is payable at the time of service.</li>
          <li>We accept checks made payable to “Equine Lung Experts, LLC”.</li>
          <li>Invoices not paid within thirty (30) days of the invoice date shall be charged a late fee equal to 1.5 % per month of the total unpaid balance.</li>
        </ul>

      </div>
    </div>
  );
}
