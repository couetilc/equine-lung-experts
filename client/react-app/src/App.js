import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HashLink as Link, NavHashLink as NavLink } from 'react-router-hash-link';
import './App.css';

import logoMini from './assets/logo-breath-mini-110w.png';
import logoSmall from './assets/logo-breath-small-360w.png';
import logoMedium from './assets/logo-breath-main-480w.png';
import logoBig from './assets/logo-breath-main-680w.png';
import homeIcon from './assets/home_white_18x18.png';
import imgBalf from './assets/bal-procedure.png';
import imgCytology from './assets/bal-cytology.png';
import picLaurent from './assets/picture-laurent-purple-ltr.png';
import picKathleen from './assets/picture-kathleen-orange-rtl.png';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <MainPage />
            </BrowserRouter>
        );
    }
}

class MainPage extends Component {
    render() {
        return (
        <div id="site-page">
            <Header />
            <NavMobile />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/balfsample' component={BalfSample} />
                <Route path='/environmentalconsulting' component={EnvironmentalConsulting} />
                <Route component={PageNotFound} />
            </Switch>

            <Footer />
        </div>);
    }
}

class Home extends Component {
    render() {
        return ([
            <HomeBanner key="homebanner" />,
            <HomeContent key="homecontent" />
        ]);
    }
}

class BalfSample extends Component {
    render() {
        return (
        <div id="balf-sample-page" className="blank-page">

            <div id="balf-tagline" className="tagline">
                <h1>BAL Cytology Services</h1>
                <h5>Equine Lung Experts is pleased to offer bronchoalveolar lavage (BAL) cytology services to veterinarians.  We process bronchoalveolar lavage fluid (BALF) samples and provide cytology interpretation to diagnose respiratory diseases in your equine patients.</h5>
                <a href="/#people-summary">Meet the experts →</a>

                <div className="table-of-contents">
                    <span>Key Information</span>
                    <a href="#balf-what-we-do">What We Do</a>
                    <a href="#balf-preparing-sample">Preparing Samples</a>
                    <a href="#balf-shipping-sample">Shipping Samples</a>
                    <a href="#balf-cost-sample">Pricing</a>
                </div>
            </div>

            <div id="balf-what-we-do">
                <h3>What We Do</h3>
                <span>BALF samples submitted in tubes containing EDTA are processed using a centrifuge. Cytospin and smear slides are stained using Wright’s stain (and additional stains as deemed appropriate).</span>
                <ul>
                    <li>A report is provided describing microscopic appearance of the submission including cellularity, differential cell count (based on minimum 400 cells), mucus characteristics, and overall cytologic interpretation. When appropriate, comments regarding etiology are provided.</li>
                    <li>Cytology interpretation will be reported within 1-2 working days after receipt of the sample.</li>
                </ul>
                <span>As part of the service, we offer a free phone consultation (up to 15 min) for each horse sample submitted to Equine Lung Experts. Call Dr. Laurent Couetil’s mobile at (765) 427-5617.</span>
            </div>

            <div id="balf-preparing-sample">
                <div>
                    <h3>Preparing a Sample</h3>
                    <ol>
                        <li>Pool BALF aliquots in one chilled container immediately after collection, gently homogenize the fluid sample by swirling the flask.</li>
                        <li>Pour one aliquot (minimum 3 ml – maximum 10 ml) in a plastic tube containing EDTA (e.g. vacutainer).</li>
                        <li>Store BALF sample immediately at 2-8 °C until shipped.</li>
                        <li>Pour second aliquot (10 ml) and centrifuge at 300 g for 10 minutes, pour off supernatant and transfer cell pellet on a slide to make a smear.</li>
                        <li>Prepare at least 2 smear slides and dry promptly.</li>
                        <li>Print and complete "the Cytology Sample Submission Form". Insert into package along with the sample, slides, and payment.</li>
                    </ol>
                </div>

                <figure>
                    <img src={imgBalf} />
                    <figcaption>Dr. Ivester retrieving a BALF sample from a patient.</figcaption>
                    <img src={imgCytology} />
                    <figcaption>BAL cytology samples.</figcaption>
                </figure>
            </div>

            <div id="balf-ship-cost-sample">
                <div id="balf-shipping-sample">
                    <h3>Shipping a Sample*</h3>
                    <span>Required Items</span>
                    <ul>
                        <li>1 BALF aliquot in EDTA tube (~ 5 ml) on ice pack(s) inside a Styrofoam box</li>
                        <li>2 air-dried smear slides placed in a small slide box</li>
                        <li>BALF cytology sample submission form</li>
                    </ul>
                    <span>Shipping Address</span>
                        <ul className="address">
                        <li>
                            Purdue University<br />
                            c/o Dr. Couetil, ELE, LLC.<br />
                            Room G408, Lynn Hall, 625 Harrison St.<br />
                            West Lafayette, IN 47907<br />
                        </li>
                    </ul>
                    <div>* <em><u>Ship all samples on-ice overnight,</u> Monday – Thursday. Do not send overnight packages on Fridays or Thursdays before holiday weekends.</em></div>
                </div>

                <div id="balf-cost-sample">
                    <h3>Cost for Service</h3>
                    <span>Fee: $150 per horse.**†</span>
                    <ul>
                        <li>** <em>Fee is payable at the time of sample submission or upon receipt of invoice. We accept checks made payable to “Equine Lung Experts, LLC”.</em></li>
                        <li>† <em>Invoices not paid within thirty (30) days of the invoice date shall be charged a late fee equal to 1.5 % per month of the total unpaid balance.</em></li>
                    </ul>
                </div>
            </div>
        </div>);
    }
}

class EnvironmentalConsulting extends Component {
    render() {
        return (
        <div id="env-consulting-page" className="blank-page">
            <div id="env-tagline" className="tagline">
                <h1>Environmental Assessment Services</h1>
                <h5>Equine Lung Experts is pleased to offer environmental assessment services to veterinarians. We work with veterinarians to objectively assess barn and stall environments, and analyze potential sources of irritant or allergen exposure in horses.</h5>
            
                <a href="/#people-summary">Meet the experts →</a>

                <div className="table-of-contents">
                    <span>Key Information</span>
                    <a href="#env-what-we-do">What We Do</a>
                    <a href="#env-request-service">Request Services</a>
                    <a href="#env-cost-service">Pricing</a>
                </div>
            </div>

            <div id="env-what-we-do">
                <h3>What We Do</h3>
                <ul>
                    <li>We sample and quantify airborne irritants and allergens using gravimetric air sampling techniques and real time particulate counters.</li>
                    <li>We assess dust and allergen sources by testing feedstuff and bedding samples.</li>
                </ul>
                <span>The service is tailored to each situation and the goals expressed by the horse’s owner and veterinarian.</span>
            </div>

            
        </div>);
    }
}

const PageNotFound = () => {
    return (
    <div id="page-404" className="blank-page">
        <h1>404</h1>
        <h3>Page Not Found</h3>
    </div>);
}

class Header extends Component {
    render() {
        return (
        <header>
            <Link to='/'>
                <picture>
                <source srcSet={logoMini} media="(max-width: 320px)" />
                <source srcSet={logoSmall} media="(max-width: 480px)" />
                <img className='header-logo-wordmark' 
                    src={logoMedium} 
                    alt='Logo for Equine Lung Experts'
                />
                </picture>
            </Link>
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
            <li>
                <NavLink exact className='home-icon' to='/' activeClassName='selected-home'></NavLink>
            </li>
            <li>
                <NavLink to='/#service-summary' activeClassName='selected'>Services</NavLink>
            </li>
            <li>
                <NavLink to='/#people-summary' activeClassName='selected'>About Us</NavLink>
            </li>
            <li>
                <NavLink to='/balfsample' activeClassName='selected'>Submit a Sample</NavLink>
            </li>
            <li>
                <NavLink to='/environmentalconsulting' activeClassName='selected'>Environmental Consulting</NavLink>
            </li>
            <li>
                <NavLink to='#' activeClassName='selected'>Contact Us</NavLink>
            </li>
            <li>
                <NavLink to='#' activeClassName='selected'>Resources/Articles</NavLink>
            </li>
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
        <main className="blank-page">
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
        <section className="tagline">
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
            <Link to={ this.state.link }>{ this.state.text }</Link>
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
