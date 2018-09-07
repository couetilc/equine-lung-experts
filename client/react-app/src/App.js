import React, { Component } from 'react';
import './App.css';

import logoMini from './assets/logo-breath-mini-110w.png';
import logoSmall from './assets/logo-breath-small-360w.png';
import logoMedium from './assets/logo-breath-main-480w.png';
import logoBig from './assets/logo-breath-main-680w.png';
import picLaurent from './assets/picture-laurent-purple-ltr.png';
import picKathleen from './assets/picture-kathleen-orange-rtl.png';

class App extends Component {
    render() {
        return (
            <HomePage />
        );
    }
}

class HomePage extends Component {
    render() {
        return (
        <div id="site-page">
            <Header />
            <NavMobile />
            <HomeBanner />
            <HomeContent />
            <Footer />
        </div>);
    }
}

class Header extends Component {
    render() {
        return (
        <header>
            <picture>
            <source srcSet={logoMini} media="(max-width: 320px)" />
            <source srcSet={logoSmall} media="(max-width: 480px)" />
            <img className='header-logo-wordmark' 
                src={logoMedium} 
                alt='Logo for Equine Lung Experts'
            />
            </picture>
        </header>);
    }
}

class NavMobile extends Component {
    render() {
        return (
        <nav id='menu-bar'>
            <Menu />
        </nav>);
    }
}

class NavDesktop extends Component {
    render() {
        return (
        <nav>
            <Menu />
        </nav>);
    }
}

class Menu extends Component {
    render() {
        return (
        <ul>
            <ListLink text='Services' link='#' />
            <ListLink text='About Us' link='#' />
            <ListLink text='Submit a Sample' link='#' />
            <ListLink text='Environmental Consulting' link='#' />
            <ListLink text='Contact Us' link='#' />
            <ListLink text='Resources/Articles' link='#' />
        </ul>);
    }
}

class HomeBanner extends Component {
    constructor(props) {
        super(props);
        this.state = { default: {
            titleA: "BREATH EASIER",
            titleB: "MOVE FASTER",
            content: "Respiratory diseases cause coughing and poor performance in racing, sport and recreational horses. Through diagnostic services, the veterinary scientists at Equine Lung Experts will help you diagnose and treat respiratory diseases caused by infections or environmental exposures.",
            action: {
                link: "#",
                text: "LEARN MORE"
            }
        }};
    }
    
    render() {
        return <Banner { ...this.state.default } />;
    }
}

class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = { default: { tagline: {
            title: "We solve respiratory problems.",
            content: "Veterinary diagnostic laboratories don't have the specialized knowledge in equine pulmonology to accurately diagnose respiratory diseases based on bronchoalveolar lavage fluid cytology samples. As leading specialists in horse asthma (heaves, RAO, IAD, COPD, and chronic bronchitis), exercise-induced pulmonary hemorrhage (EIPH or epistaxis), and other respiratory diseases affecting performance, we provide in-depth evaluations of pulmonary health and risk factors."
        }}};
    }

    render() {
        return (
        <main id="content">
            <Tagline { ...this.state.default.tagline } />
            <ServiceSummary />
            <PeopleSummary />
        </main>);
    }
}

class Tagline extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
        <section id="tagline">
            <h1>{ this.state.title }</h1>
            <h5>{ this.state.content }</h5>
        </section>);
    }
}

class ServiceSummary extends Component {
    constructor(props) {
        super(props);
        this.state = { default: {
            summaryBalf: {
                title: "BALF Interpretation and  Diagnostics",
                content: "Submit a sample and we will return a report describing the microscopic appearance of cytology including cellularity, differential cell count, mucus characteristics, and overall cytologic interpretation. When appropriate, comments regarding etiology will be provided.",
                action: {
                    link: "#",
                    text: "Submit Sample"
                }
            },
            summaryEval: {
                title: "Environmental Exposure Counseling",
                content: "Our experts can examine your horse's environment, measure stall or barn ventilation, and sample airborned irritants to identify potential causes of equine asthma and recommend appropriate interventions and treatments.",
                action: {
                    link: "#",
                    text: "Schedule Evaluation"
                }
            }
        }};
    }

    render() {
        return (
        <section id="service-summary">
            <ServiceItem { ...this.state.default.summaryBalf } />
            <ServiceItem { ...this.state.default.summaryEval } />
        </section>);
    }
}

class PeopleSummary extends Component {
    constructor(props) {
        super(props);
        this.state = { default: {
            bioLaurent: {
                name: "Dr. Laurent Couetil",
                image: picLaurent,
                qualifications: "DVM, PhD, Diplomate ACVIM-LAIM",
                content: "Dr. Couetil is a Professor of Large Animal Medicine at Purdue University, Director of the Equine Sports Medicine Center, and Director of Equine Research. A former practicing equine veterinarian, he has published extensively on respiratory diseases.",
                link: "https://vet.purdue.edu/directory/person.php?id=12"
            },
            bioKathleen: {
                name: "Dr. Kathleen Ivester",
                image: picKathleen,
                qualifications: "DVM, PhD, Diplomate ACVS",
                content: "Dr. Ivester is an equine research scientist at Purdue University. A boarded equine surgeon, she bridges research and practice with field research investigating the links between environmental factors, viruses, and bacteria to equine respiratory health and performance.",
                link: "https://www.vet.purdue.edu/directory/person.php?id=279",
                rtl: true
            }
        }};
    }

    render() {
        return (
        <section id="people-summary">
            <h2>Our Experts</h2>
            <h6>Discuss your case with us</h6>
            <div className="bio-showcase">
                <Bio { ...this.state.default.bioLaurent } />
                <Bio { ...this.state.default.bioKathleen } />
            </div>
        </section>);
    }
}

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { default: {
            listingServices: {
                header: { text: "Services" },
                links: [
                    { text: "Submit a Sample", link: "#" },
                    { text: "Instructions for shipping sample", link: "#" },
                    { text: "Make a Payment", link: "#" },
                    { text: "Track Status", link: "#" },
                    { text: "Log In", link: "#" },
                    { text: "Create Account", link: "#" } ]
            },
            listingLearn: {
                header: { text: "Learn About" },
                links: [
                    { text: "Our Experts", link: "#" },
                    { text: "Resources and Articles", link: "#" },
                    { text: "Bronchoalveolar Lavage Fluid (BALF) Interpretation", link: "#" },
                    { text: "Environmental Exposure Counseling", link: "#" },
                    { text: "Terminology Guide", link: "#" } ]
            },
            listingContact: {
                header: { text: "Contact Us" },
                links: [
                    { text: "Send us an email", link: "#" },
                    { text: "Request Phone Number/Schedule Evaluation", link: "#" } ]
            }
        }};
    }

    render() {
        return (
        <footer>
            <FooterListing { ...this.state.default.listingServices } />
            <FooterListing { ...this.state.default.listingLearn } />
            <FooterListing { ...this.state.default.listingContact } />
        </footer>);
    }
}

class FooterListing extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    renderAllLinks() {
        return this.state.links
            .map((link, idx) => <ListLink key={idx} {...link} />);
    }

    render() {
        return (
        <ul className="footer-listing col-4">
            <ListHeader { ...this.state.header } />
            { this.renderAllLinks() }
        </ul>);
    }
}

class Bio extends Component {
    constructor({ rtl, ...others  }) {
        super({ rtl, ...others });
        this.state = {
            classes: "bio" + (rtl ? " bio-rtl" : " bio-ltr"),
            ...others
        };
    }

    render() {
        return (
        <div className={ this.state.classes }>
            <img src={ this.state.image } alt="One of our Equine Experts" />
            <div>
                <h1>{ this.state.name }</h1>
                <h2>{ this.state.qualifications }</h2>
                <p>{ this.state.content }</p>
                <a href={ this.state.link }>(see full bio)</a>
            </div>
        </div>);
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
            <h3>{ this.state.title }</h3>
            <LinkAction { ...this.state.action } />
            <p>{ this.state.content }</p>
        </div>);
    }
}

const LinkAction = props => (
    <a className="link-action" href={ props.link }>
        <span>{ props.text }</span>
    </a>
);

class LinkMore extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
        <a className="link-more" href={ this.state.link }>
            <span>{ this.state.text }</span>
        </a>);
    }
}

class ListLink extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
        <li>
            <a href={ this.state.link }>{ this.state.text }</a>
        </li>);
    }
}

class ListHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
        <li>
            <h1>{ this.state.text }</h1>
        </li>);
    }
}

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
        <section id="home-banner" className='banner'>
            <div id="home-banner-message" className='banner-message'>
                <h1>
                    <span className="title-a">{ this.state.titleA }</span>
                    <span className="title-b">{ this.state.titleB }</span>
                </h1>
                <p>{ this.state.content }</p>
                <a href={ this.state.action.link }>{ this.state.action.text }</a>
            </div>
        </section>);
    }
}

export default App;
