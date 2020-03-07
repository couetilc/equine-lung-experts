import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HashLink as Link, NavHashLink as NavLink } from 'react-router-hash-link';
import GoogleAnalytics from 'react-ga';
import './App.css';
import withTracker from './components/withTracker.js';

import logoMini from './assets/logo-breath-mini-110w.png';
import logoSmall from './assets/logo-breath-small-360w.png';
import logoMedium from './assets/logo-breath-main-480w.png';
import imgBalf from './assets/bal-procedure.jpg';
import imgCytology from './assets/bal-cytology.jpg';
import imgAero from './assets/llc-aerohippus.jpg';
import picLaurent from './assets/picture-laurent-purple-ltr.jpg';
import picKathleen from './assets/picture-kathleen-orange-rtl.jpg';
import sampleFormBALF from './assets/Equine Lung Experts-BALF cytology request form.pdf';

GoogleAnalytics.initialize('UA-128468629-1');

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
                <Route exact path='/' component={withTracker(Home)} />
                <Route path='/balfsample' component={withTracker(BalfSample)} />
                <Route path='/environmentalconsulting' component={withTracker(EnvironmentalConsulting)} />
                <Route path='/resources' component={withTracker(Resources)} />
                <Route path='/contact' component={withTracker(Contact)} />
                <Route component={withTracker(PageNotFound)} />
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
                <div className="tagline-content">
                    <h1>BAL Cytology Services</h1>
                    <h5>Equine Lung Experts is pleased to offer bronchoalveolar lavage (BAL) cytology services to veterinarians.  We process bronchoalveolar lavage fluid (BALF) samples and provide cytology interpretation to diagnose respiratory diseases in your equine patients.</h5>
                    <a href="/#people-summary">Meet the experts →</a>
                </div>

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
                <span>As part of the service, we offer a free phone consultation (up to 15 min) for each horse sample submitted to Equine Lung Experts. Contact <a href="/contact">info@equinelungexperts.com</a> to set up an appointment.</span>
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
                        <li><a href={sampleFormBALF} target="_blank" rel="noopener noreferrer">Print and complete "the Cytology Sample Submission Form" (click to download).</a> Insert into package along with the sample, slides, and payment.</li>
                    </ol>
                </div>

                <figure>
                    <img src={imgBalf} alt="Dr. Ivester retrieving a BALF sample"/>
                    <figcaption>Dr. Ivester retrieving a BALF sample.</figcaption>
                    <img src={imgCytology} alt="BAL cytology samples" />
                    <figcaption>BAL cytology samples.</figcaption>
                </figure>
            </div>

            <div id="balf-ship-cost-sample">
                <div id="balf-shipping-sample">
                  <h3>Shipping a Sample<span>*</span></h3>
                    <span>Required Items</span>
                    <ul>
                        <li>1 BALF aliquot in EDTA tube (~ 5 ml) on ice pack(s) inside a Styrofoam box</li>
                        <li>2 air-dried smear slides placed in a small slide box</li>
                        <li><a href={sampleFormBALF} target="_blank" rel="noopener noreferrer">BALF cytology sample submission form (click to download)</a></li>
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
                    <h3>Cost for Service<span>**†</span></h3>
                    <span>
                      For more information contact <a href="mailto:equinelungexperts@gmail.com">equinelungexperts@gmail.com</a>
                    </span>
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
                <div className="tagline-content">
                    <h1>Environmental Assessment Services</h1>
                    <h5>Equine Lung Experts is pleased to offer environmental assessment services to veterinarians. We work with veterinarians to objectively assess barn and stall environments, and analyze potential sources of irritant or allergen exposure in horses.</h5>
                    <a href="/#people-summary">Meet the experts →</a>
                </div>

                <div className="table-of-contents">
                    <span>Key Information</span>
                    <a href="#env-what-we-do">What We Do</a>
                    <a href="#env-request-services">Request Services</a>
                    <a href="#env-cost-service">Pricing</a>
                </div>
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
                        <div>Please contact Equine Lung Experts by email (info@equinelungexperts.com) to discuss the type of service desired.  We will respond to the email within 1-2 working days.</div>
                    </div>
                </div>

                <figure id="env-image-aero" className="figure-with-caption">
                    <img src={imgAero} alt="Dr. Coeutil with a patient" />
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
        </div>);
    }
}

class Resources extends Component {
    render() {
        return (
        <div id="resources-page" className="blank-page">
            <div id="resources-tagline" className="tagline">
                <div className="tagline-content">
                    <h1>Resources</h1>
                    <h5>Equine Lung Experts uses powerful diagnostic tools to provide high quality care for patients. Our experts are informed by decades of clinical experience and produce cutting-edge research on equine respiratory health.</h5>
                     <a href="/contact">Contact us →</a>
                </div>

                <div className="table-of-contents">
                    <span>Table of Contents</span>
                    <a href="#educational-resources">Educational Materials</a>
                    <a href="#articles-resources">Articles by the Experts</a>
                </div>
            </div>

            <div id="educational-resources">
                <h3>Educational Materials</h3>
                <ol>
                    <li className="resource">
                        <a className="resource-title" href="https://vet.purdue.edu/esmc/pulmonary-function.php">Pulmonary Function Testing</a>
                    </li>
                    <li className="resource">
                        <a className="resource-title" href="https://vet.purdue.edu/esmc/index.php">Purdue Equine Sports Medicine Center Website</a>
                    </li>
                </ol>
            </div>

            <div id="articles-resources">
                <h3>Articles by Dr. Couetil and Dr. Ivester</h3>
                <ol className="article-list">
                    <li className="article-title">
                        <a href="https://thehorse.com/19375/breathing-easy-managing-horses-with-asthma/">Breathing easy: Managing horses with asthma</a>
                    </li>
                    <li className="article-summary">Does your horse have asthma? Find out how you can help him through management and environmental changes.</li>
                    <li className="article-title">
                        <a href="https://thehorse.com/156894/how-pulmonary-disease-impacts-equine-performance">How pulmonary disease impacts equine performance</a>
                    </li>
                    <li className="article-summary">Understanding how pulmonary disease impacts performance can help veterinarians diagnose and treat issues that could be impairing horses’ athleticism.</li>
                    <li className="article-title">
                        <a href="https://www.haygain.us/blogs/news-and-events/equine-asthma-a-new-term-for-an-old-problem">Equine asthma: A new term for an old problem</a>
                    </li>
                    <li className="article-summary">For nearly as long as horses have been domesticated, the relationship between barn confinement and respiratory disease in the horse has been recognized. This relationship is intuitive, especially when we consider that deep in the lung, where the blood takes up oxygen, the barrier between the outside air and the horse’s circulation is as thin as a couple of cells. The surface area of this gas-exchange region of the lung has on average a surface area of 2500 m2, equal to nearly half a football field. The response of the lung’s immune system to inhaled air results in a number of diseases in both humans and horses.</li>
                    <li className="article-title">
                        <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/jvim.13824">Inflammatory airway disease of horse: Consensus statement</a>
                    </li>
                    <li className="article-summary">The purpose of this manuscript is to revise and update the previous consensus statement on inflammatory airway disease (IAD) in horses. Since 2007, a large number of scientific articles have been published on the topic and these new findings have led to a significant evolution of our understanding of IAD.</li>
                    <li className="article-title">
                        <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/jvim.12458">Investigating the link between particulate exposure and airway inflammation in the horse</a>
                    </li>
                    <li className="article-summary">Inhalant exposure to airborne irritants commonly encountered in horse stables is implicated in the pathogenesis of inflammatory airway disease (IAD) and recurrent airway obstruction (RAO), non‐infectious, inflammatory pulmonary disorders that impact the health and performance of horses across all equine disciplines. IAD and RAO have overlapping clinical, cytological, and functional manifestations of the pulmonary response to organic dust and noxious gases encountered in the barn environment.</li>
                </ol>
            </div>
        </div>);
    }
}

class Contact extends Component {
    render() {
        return (
        <div id="contact-page" className="blank-page">
            <div id="contact-tagline" className="tagline">
                <div className="tagline-content">
                    <h1>Contact Us</h1>
                    <h5>Equine Lung Experts can be contacted by filling out the form below. Otherwise, please direct inquiries to <a href="mailto:info@equinelungexperts.com">info@equinelungexperts.com</a></h5>
                </div>
            </div>

            <ContactForm />
        </div>);
    }
}

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pendingResponse: false,
            messageSent: false,
            messageStatus: ""
        };

        this.submitContactForm = this._submitContactForm.bind(this);
    }

    _submitContactForm(event) {
        event.preventDefault();
        const form = document.querySelector("#contact-form");
        const fdata = new FormData(form);
        let message = {};
        for (let [key, value] of fdata.entries()) {
            message[key] = value;
        }

        this.setState({
            pendingResponse: true
        });

        fetch('https://api.equinelungexperts.com/contact', {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(message)
        })
            .then(response => {
                this.setState({
                    pendingResponse: false,
                    messageSent: true,
                    messageStatus: "SUCCESS"
                });
            })
            .catch(error => {
                this.setState({
                    pendingResponse: false,
                    messageSent: true,
                    messageStatus: "ERROR"
                });
            });

    }

    componentDidMount() {
        const form = document.querySelector("#contact-form");
        form.addEventListener('submit', this.submitContactForm);
    }
    componentWillUnmount() {
        const form = document.querySelector("#contact-form");
        form.removeEventListener('subit', this.submitContactForm);
    }

    render() {
        const submit_message = (this.state.pendingResponse) 
            ? "Sending Form..." 
            : "Send Message";
        const is_submit_disabled = (this.state.pendingResponse) 
            ? true 
            : false;
        let message_box = (<></>);

        if (this.state.messageSent && !this.state.pendingResponse) {
            const alert = (this.state.messageStatus === "SUCCESS") 
                ? "Contact information submitted" 
                : "ERROR: information not submitted";
            const alert_style = {
                textAlign: "center",
                fontWeight: 700,
                color: (this.state.messageStatus === "SUCCESS") ? "green" : "red"
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
                    <input type="text" className="contact-name" id="input-fullname" name="fullname" required></input>
                </div>
                <div>
                    <label htmlFor="input-email" id="label-email">Email:*</label>
                    <input type="email" className="contact-email" id="input-email" name="email" required></input>
                </div>
                <div>
                    <label htmlFor="input-phone" id="label-phone">Phone Number:*</label>
                    <input type="text" className="contact-phone" id="input-phone" name="phone" required></input>
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
                    <textarea className="contact-message" id="textarea-message" name="message" required></textarea>
                </div>
                <div className="submit-box">
                    <span>* Required field</span>
                    {message_box}
                    <input type="submit" className="contact-submit" value={submit_message} disabled={is_submit_disabled}></input>
                </div>
            </form>
        </div>);
    }
}

const MailtoForm = () => {
    return(
    <div id="mailto-form" className="mailto-form">
        <div>Discuss your case with us at <a href="mailto:info@equinelungexperts.com">info@equinelungexperts.com</a></div>
    </div>);
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
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            isClicked: false,
            inDesktopView: window.innerWidth > 760
        };

        this.toggleMenu = this._toggleMenu.bind(this);
        this.updateMenu = this._updateMenu.bind(this);
    }

    _toggleMenu() {
        if (!this.state.inDesktopView) {
            this.setState(prevState => ({
                isClicked: !prevState.isClicked
            }));
        }
    }

    _updateMenu() {
        const wasVisible = this.state.isVisible;
        const wasDesktopView = this.state.inDesktopView;
        const inDesktopView = window.innerWidth > 760;
        const isVisible = inDesktopView || this.state.isClicked;

        if (wasVisible !== isVisible) {
            this.setState({
                isVisible: isVisible
            });
        }

        if (wasDesktopView !== inDesktopView) {
            this.setState({
                inDesktopView: inDesktopView
            });
        }
    }

    componentWillMount() {
        this.updateMenu();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateMenu);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateMenu);
        document.querySelectorAll('.nav-menu-toggle-mobile')
            .forEach(li => li.removeEventListener('click', this.toggleMenu));
    }

    render() {
        this.updateMenu();

        const styles = {
            menu_item: {
                display: this.state.isVisible ? 'flex' : 'none'
            }
        };

        let mobile_toggle = null;
        let class_menu_toggle = 'home-icon';
        let class_menu_toggle_selected = 'selected-home';

        if (this.state.inDesktopView) {
            class_menu_toggle += ' home-icon-desktop';
        } else {
            if (this.state.isClicked) {
                mobile_toggle = (<li className="nav-menu-toggle-mobile">
                    <NavLink to='#' className='mobile-menu-toggle home-icon-close' onClick={this.toggleMenu}></NavLink>
                </li>);
            } else {
                mobile_toggle = (<li className='nav-menu-toggle-mobile'>
                    <NavLink to='#' className='mobile-menu-toggle home-icon-open' onClick={this.toggleMenu}></NavLink>
                </li>);
            }
        }

        return (
        <ul>
            {mobile_toggle}
            <li className="nav-menu-toggle">
                <NavLink exact className={class_menu_toggle} style={styles.menu_item} to='/' activeClassName={class_menu_toggle_selected}></NavLink>
            </li>
            <li className="nav-menu-item" style={styles.menu_item}>
                <NavLink to='/#service-summary' activeClassName='selected'>Services</NavLink>
            </li>
            <li className="nav-menu-item" style={styles.menu_item}>
                <NavLink to='/#people-summary' activeClassName='selected'>About Us</NavLink>
            </li>
            <li className="nav-menu-item" style={styles.menu_item}>
                <NavLink to='/contact' activeClassName='selected'>Contact Us</NavLink>
            </li>
            <li className="nav-menu-item" style={styles.menu_item}>
                <NavLink to='/balfsample' activeClassName='selected'>Submit a Sample</NavLink>
            </li>
            <li className="nav-menu-item" style={styles.menu_item}>
                <NavLink to='/environmentalconsulting' activeClassName='selected'>Environmental Consulting</NavLink>
            </li>
            <li className="nav-menu-item" style={styles.menu_item}>
                <NavLink to='/resources' activeClassName='selected'>Resources</NavLink>
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
                link: "#tagline-main",
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
            <ContactForm />
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
            <div id="tagline-main" className="tagline-content">
                <h1>{ this.state.title }</h1>
                <h5>{ this.state.content }</h5>
            </div>
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
                    link: "/balfsample",
                    text: "Submit Sample"
                }
            },
            summaryEval: {
                title: "Environmental Exposure Counseling",
                content: "Our experts can examine your horse's environment, measure stall or barn ventilation, and sample airborn irritants to identify potential causes of equine asthma and recommend appropriate interventions and treatments.",
                action: {
                    link: "/environmentalconsulting",
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
            <h2>The Experts</h2>
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
                    { text: "Submit a Sample", link: "/balfsample" },
                    { text: "Instructions for shipping sample", link: "/balfsample#balf-preparing-sample" },
                    { text: "Environmental Consulting", link: "/environmentalconsulting" },
                    { text: "Request Assessment Services", link: "/environmentalconsulting#env-request-services" } 
                ]
            },
            listingLearn: {
                header: { text: "Learn About" },
                links: [
                    { text: "Our Experts", link: "/#people-summary" },
                    { text: "Resources and Articles", link: "/resources" },
                    { text: "Bronchoalveolar Lavage Fluid (BALF) Interpretation", link: "/balfsample#balf-what-we-do" },
                    { text: "Environmental Exposure Counseling", link: "/environmentalconsulting#env-what-we-do" } ]
            },
            listingContact: {
                header: { text: "Contact Us" },
                links: [
                    { text: "Send us an email", link: "/contact" },
                    { text: "Request Phone Number/Schedule Evaluation", link: "/contact" } ]
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

const LinkMore = props => (
    <a className="link-more" href={ props.link }>
        <span>{ props.text }</span>
    </a>
);

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
