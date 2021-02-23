import { Component } from 'react';
import FooterListing from './FooterListing';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: {
        listingServices: {
          header: { text: "Services" },
          links: [
            { text: "Submit a Sample", link: "/balfsample" },
            { text: "Instructions for shipping sample", link: "/balfsample#balf-preparing-sample" },
            { text: "Environmental Consulting", link: "/environmentalconsulting" },
            { text: "Request Assessment Services", link: "/environmentalconsulting#env-request-services" },
          ],
        },
        listingLearn: {
          header: { text: "Learn About" },
          links: [
            { text: "Our Experts", link: "/#people-summary" },
            { text: "Resources and Articles", link: "/resources" },
            { text: "Bronchoalveolar Lavage Fluid (BALF) Interpretation", link: "/balfsample#balf-what-we-do" },
            { text: "Environmental Exposure Counseling", link: "/environmentalconsulting#env-what-we-do" }],
        },
        listingContact: {
          header: { text: "Contact Us" },
          links: [
            { text: "Send us an email", link: "/contact" },
            { text: "Request Phone Number/Schedule Evaluation", link: "/contact" }],
        },
      },
    };
  }

  render() {
    return (
      <footer>
        <FooterListing {...this.state.default.listingServices} />
        <FooterListing {...this.state.default.listingLearn} />
        <FooterListing {...this.state.default.listingContact} />
      </footer>
    );
  }
}
