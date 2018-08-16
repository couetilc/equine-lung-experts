import React, { Component } from 'react';
import './App.css';

import logoWordmark from './assets/main-logo-breath.png';
import picLaurent from './assets/picture-laurent-green-ltr.png';
import picKathleen from './assets/picture-kathleen-blue-rtl.png';

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
            <Header srcLogo={ logoWordmark } />
            <MenuBar />
            <HomeBanner />
            <HomeContent />
            <Footer />
        </div>);
    }
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
        <header>
            <img className='header-logo-wordmark'
                src={ this.state.srcLogo }
                alt='Logo for Equine Lung Experts'
            />
        </header>);
    }
}

class MenuBar extends Component {
    render() {
        return(
        <nav id='menu-bar'>
            <ul>
                <ListLink text='Services' link='#' />
                <ListLink text='About Us' link='#' />
                <ListLink text='Submit a Sample' link='#' />
                <ListLink text='Contact Us' link='#' />
                <ListLink text='Resources and Articles' link='#' />
            </ul>
        </nav>);
    }
}

class HomeBanner extends Component {
    constructor(props) {
        super(props);
        this.state = { default: {
            titleA: "BREATH EASIER",
            titleB: "MOVE FASTER",
            content: "Respiratory diseases cause poor performance in racing, sport and recreational horses. Through testing and diagnostic services, the veterinary scientists at Equine Lung Experts will help you solve respiratory disease caused by health or environmental exposures.",
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
            content: "Local diagnostic labs (even referral practices) don't have the specialized knowledge in equine pulmonology to do a proper diagnosis of respiratory diseases. As leading specialists in horse asthma (heaves, RAO, IAD, COPD, and chronic bronchitis), exercise-induced pulmonary hemorrhage (EIPH or epistaxis), and other respiratory diseases affecting performance, we provide in-depth evaluations of pulmonary health and risk factors."
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
                title: "BALF Interpretation + Diagnostic Reporting",
                content: "Submit a sample and we will return a report describing the microscopic appearance of cytology including cellularity, differential cell count, mucus characteristics, and overall cytologic interpretation. When appropriate, comments regarding etiology will be provided.",
                action: {
                    link: "#",
                    text: "Submit Sample"
                },
                more: {
                    link: "#",
                    text: "Learn More"
                },
            },
            summaryEval: {
                title: "Environmental Exposure Counseling",
                content: "Our experts can examine your horse environment to identify potential causes of XXXX and recommend potential interventions and treatments.",
                action: {
                    link: "#",
                    text: "Schedule Evaluation"
                },
                more: {
                    link: "#",
                    text: "Learn More"
                },
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
                content: "Dr. Couetil is a Professor of Large Animal Medicine at Purdue University, Directory of the Equine Sports Medicine Center, and Director of Equine Research. A former practicing equine veterinarian, he has published extensively on respiratory diseases.",
                link: "#"
            },
            bioKathleen: {
                name: "Dr. Kathleen Ivester",
                image: picKathleen,
                qualifications: "DVM, PhD, Diplomate XXXX",
                content: "Dr. Ivester is an equine research scientist at Purdue University. A boarded equine surgeon, she bridges research and practice with field research investigating the links between environmental factors, viruses, and bacteria to equine respiratory health and performance.",
                link: "#",
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
        return this.state.links.map(link => <ListLink {...link} />);
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
            <LinkMore { ...this.state.more } />
        </div>);
    }
}

class LinkAction extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
        <a className="link-action" href={ this.state.link }>
            <span>{ this.state.text }</span>
        </a>);
    }
}

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
