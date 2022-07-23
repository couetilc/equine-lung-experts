import ContactForm from '../components/ContactForm';
import Link from '../components/Link';

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

function HomeBanner () {
  return (
    <section id="home-banner" className="banner">
      <div id="home-banner-message" className="banner-message">
        <h1>
          <span className="title-a">
            BREATHE EASIER
          </span>
          <span className="title-b">
            MOVE FASTER
          </span>
        </h1>
        <p>
          Respiratory diseases cause coughing and poor performance in racing,
          sport and recreational horses. Through diagnostic services, the
          veterinary scientists at Equine Lung Experts will help you diagnose
          and treat respiratory diseases caused by infections or
          environmental exposures.
        </p>
        <a href="#tagline-main">
          LEARN MORE
        </a>
      </div>
    </section>
  );
}

function HomeContent () {
  return (
    <main className="blank-page">
      <Tagline title="We solve respiratory problems.">
        Veterinary diagnostic laboratories don&apos;t have the specialized
        knowledge in equine pulmonology to accurately diagnose respiratory
        diseases based on bronchoalveolar lavage fluid cytology samples. As
        leading specialists in horse asthma (heaves, RAO, IAD, COPD, and
        chronic bronchitis), exercise-induced pulmonary hemorrhage (EIPH or
        epistaxis), and other respiratory diseases affecting performance, we
        provide in-depth evaluations of pulmonary health and risk factors.
      </Tagline>
      <ServiceSummary />
      <PeopleSummary />
      <ContactForm />
    </main>
  );
}

function Tagline ({ title, children }) {
  return (
    <section className="tagline">
      <div id="tagline-main" className="tagline-content">
        <h1>{title}</h1>
        <h5>{children}</h5>
      </div>
    </section>
  );
}

function ServiceSummary () {
  return (
    <section id="service-summary">
      <div className="service-item">
        <h3>
          BALF Interpretation and  Diagnostics
        </h3>
        <Link className="service-link" href="/balfsample.html">
          Submit Sample
        </Link>
        <p>
          Submit a sample and we will return a report describing the
          microscopic appearance of cytology including cellularity,
          differential cell count, mucus characteristics, and overall
          cytologic interpretation. When appropriate, comments regarding
          etiology will be provided.
        </p>
      </div>
      <div className="service-item">
        <h3>
          Environmental Exposure Counseling
        </h3>
        <Link className="service-link" href="/environmentalconsulting.html">
          Schedule Evaluation
        </Link>
        <p>
          Our experts can examine your horse&apos;s environment, measure stall or
          barn ventilation, and sample airborn irritants to identify
          potential causes of equine asthma and recommend appropriate
          interventions and treatments.
        </p>
      </div>
    </section>
  );
}

function PeopleSummary () {
  return (
    <section id="people-summary">
      <h2>The Experts</h2>
      <div className="bio-showcase">
        <Bio
          name="Dr. Laurent Couetil"
          image={picLaurent}
          qualifications="DVM, PhD, Diplomate ACVIM-LAIM"
          link="https://vet.purdue.edu/directory/person.php?id=12"
        >
          Dr. Couetil is a Professor of Large Animal Medicine at Purdue
          University, Director of the Equine Sports Medicine Center, and
          Director of Equine Research. A former practicing equine
          veterinarian, he has published extensively on respiratory diseases.
        </Bio>
        <Bio
          name="Dr. Kathleen Ivester"
          image={picKathleen}
          qualifications="DVM, PhD, Diplomate ACVS"
          link="https://www.vet.purdue.edu/directory/person.php?id=279"
          rtl
        >
          Dr. Ivester is an equine research scientist at Purdue University. A
          boarded equine surgeon, she bridges research and practice with
          field research investigating the links between environmental
          factors, viruses, and bacteria to equine respiratory health and
          performance.
        </Bio>
      </div>
    </section>
  );
}

function Bio ({ rtl, image, name, qualifications, children, link }) {
  return (
    <div className={`bio ${rtl ? 'bio-rtl' : 'bio-ltr'}`}>
      <img src={image} alt={`Equine Expert ${name}`} />
        <div>
          <h1>{name}</h1>
          <h2>{qualifications}</h2>
          <p>{children}</p>
          <Link href={link}>(see full bio)</Link>
        </div>
    </div>
  );
}
