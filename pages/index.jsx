import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';

const picLaurent = '/picture-laurent-purple-ltr.jpg';
const picKathleen = '/picture-kathleen-orange-rtl.jpg';

export default function Home () {
  return (
    <>
      <HomeBanner />
      <HomeContent />
    </>
  );
}

class HomeBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: {
        titleA: 'BREATHE EASIER',
        titleB: 'MOVE FASTER',
        content:
          'Respiratory diseases cause coughing and poor performance in racing, sport and recreational horses. Through diagnostic services, the veterinary scientists at Equine Lung Experts will help you diagnose and treat respiratory diseases caused by infections or environmental exposures.',
        action: {
          link: '#tagline-main',
          text: 'LEARN MORE',
        },
      },
    };
  }

  render() {
    return <Banner {...this.state.default} />;
  }
}

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: {
        tagline: {
          title: 'We solve respiratory problems.',
          content:
            "Veterinary diagnostic laboratories don't have the specialized knowledge in equine pulmonology to accurately diagnose respiratory diseases based on bronchoalveolar lavage fluid cytology samples. As leading specialists in horse asthma (heaves, RAO, IAD, COPD, and chronic bronchitis), exercise-induced pulmonary hemorrhage (EIPH or epistaxis), and other respiratory diseases affecting performance, we provide in-depth evaluations of pulmonary health and risk factors.",
        },
      },
    };
  }

  render() {
    return (
      <main className="blank-page">
        <Tagline {...this.state.default.tagline} />
        <ServiceSummary />
        <PeopleSummary />
        <ContactForm />
      </main>
    );
  }
}

class Tagline extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <section className="tagline">
        <div id="tagline-main" className="tagline-content">
          <h1>{this.state.title}</h1>
          <h5>{this.state.content}</h5>
        </div>
      </section>
    );
  }
}

class ServiceSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: {
        summaryBalf: {
          title: 'BALF Interpretation and  Diagnostics',
          content:
            'Submit a sample and we will return a report describing the microscopic appearance of cytology including cellularity, differential cell count, mucus characteristics, and overall cytologic interpretation. When appropriate, comments regarding etiology will be provided.',
          action: {
            link: '/balfsample',
            text: 'Submit Sample',
          },
        },
        summaryEval: {
          title: 'Environmental Exposure Counseling',
          content:
            "Our experts can examine your horse's environment, measure stall or barn ventilation, and sample airborn irritants to identify potential causes of equine asthma and recommend appropriate interventions and treatments.",
          action: {
            link: '/environmentalconsulting',
            text: 'Schedule Evaluation',
          },
        },
      },
    };
  }

  render() {
    return (
      <section id="service-summary">
        <ServiceItem {...this.state.default.summaryBalf} />
        <ServiceItem {...this.state.default.summaryEval} />
      </section>
    );
  }
}

class PeopleSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: {
        bioLaurent: {
          name: 'Dr. Laurent Couetil',
          image: picLaurent,
          qualifications: 'DVM, PhD, Diplomate ACVIM-LAIM',
          content:
            'Dr. Couetil is a Professor of Large Animal Medicine at Purdue University, Director of the Equine Sports Medicine Center, and Director of Equine Research. A former practicing equine veterinarian, he has published extensively on respiratory diseases.',
          link: 'https://vet.purdue.edu/directory/person.php?id=12',
        },
        bioKathleen: {
          name: 'Dr. Kathleen Ivester',
          image: picKathleen,
          qualifications: 'DVM, PhD, Diplomate ACVS',
          content:
            'Dr. Ivester is an equine research scientist at Purdue University. A boarded equine surgeon, she bridges research and practice with field research investigating the links between environmental factors, viruses, and bacteria to equine respiratory health and performance.',
          link: 'https://www.vet.purdue.edu/directory/person.php?id=279',
          rtl: true,
        },
      },
    };
  }

  render() {
    return (
      <section id="people-summary">
        <h2>The Experts</h2>
        <div className="bio-showcase">
          <Bio {...this.state.default.bioLaurent} />
          <Bio {...this.state.default.bioKathleen} />
        </div>
      </section>
    );
  }
}

class Bio extends Component {
  constructor(props) {
    super(props);
    const { rtl, ...rest } = props;
    this.state = {
      classes: `bio${rtl ? ' bio-rtl' : ' bio-ltr'}`,
      ...rest,
    };
  }

  render() {
    return (
      <div className={this.state.classes}>
        <img src={this.state.image} alt="One of our Equine Experts" />
        <div>
          <h1>{this.state.name}</h1>
          <h2>{this.state.qualifications}</h2>
          <p>{this.state.content}</p>
          <a href={this.state.link}>(see full bio)</a>
        </div>
      </div>
    );
  }
}

class ServiceItem extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div className="summary-item">
        <h3>{this.state.title}</h3>
        <LinkAction {...this.state.action} />
        <p>{this.state.content}</p>
      </div>
    );
  }
}

const LinkAction = (props) => (
  <a className="link-action" href={props.link}>
    <span>{props.text}</span>
  </a>
);

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <section id="home-banner" className="banner">
        <div id="home-banner-message" className="banner-message">
          <h1>
            <span className="title-a">{this.state.titleA}</span>
            <span className="title-b">{this.state.titleB}</span>
          </h1>
          <p>{this.state.content}</p>
          <a href={this.state.action.link}>{this.state.action.text}</a>
        </div>
      </section>
    );
  }
}
