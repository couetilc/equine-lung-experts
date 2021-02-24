import Link from 'next/link';
import SocialTray, { Twitter, Instagram, Facebook } from './SocialTray';

const UL = (props) => <ul className="footer-listing" {...props} />;
/* eslint-disable-next-line jsx-a11y/heading-has-content */
const H1 = (props) => <li><h1 {...props} /></li>;
const LINK = (props) => <li><Link {...props} /></li>;
const iconStyle = {
  height: '2rem',
  width: '2rem',
  margin: '.25rem',
};

export default function Footer ({ children }) {
  return (
    <footer>
      <UL>
        <H1>
          Services
        </H1>
        <LINK href="/balfsample">
          Submit a Sample
        </LINK>
        <LINK href="/balfsample#balf-preparing-sample">
          Instructions for shipping sample
        </LINK>
        <LINK href="/environmentalconsulting">
          Environmental Consulting
        </LINK>
        <LINK href="/environmentalconsulting#env-request-services">
          Request Assessment Services
        </LINK>
      </UL>
      <UL>
        <H1>
          Learn About
        </H1>
        <LINK href="/#people-summary">
          Our Experts
        </LINK>
        <LINK href="/resources">
          Resources and Articles
        </LINK>
        <LINK href="/balfsample#balf-what-we-do">
          Bronchoalveolar Lavage Fluid (BALF) Interpretation
        </LINK>
        <LINK href="/environmentalconsulting#env-what-we-do">
          Environmental Exposure Counseling
        </LINK>
      </UL>
      <UL>
        <H1>
          Contact Us
        </H1>
        <LINK href="/contact">
          Send us an email
        </LINK>
        <LINK href="/contact">
          Request Phone Number/Schedule Evaluation
        </LINK>
        <SocialTray>
          <Twitter style={iconStyle} />
          <Instagram style={iconStyle} />
          <Facebook style={iconStyle} />
        </SocialTray>
      </UL>
      {children}
    </footer>
  );
}
