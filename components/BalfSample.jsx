/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/jsx-one-expression-per-line */

const imgBalf = '/bal-procedure.jpg';
const imgCytology = '/bal-cytology.jpg';
const sampleFormBALF = '/Equine Lung Experts-BALF cytology request form.pdf';

function BalfSample () {
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
            <li><a href={sampleFormBALF} target="_blank" rel="noopener noreferrer">Print and complete &quot;the Cytology Sample Submission Form&quot; (click to download).</a> Insert into package along with the sample, slides, and payment.</li>
          </ol>
        </div>

        <figure>
          <img src={imgBalf} alt="Dr. Ivester retrieving a BALF sample" />
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
    </div>
  );
}

export default BalfSample;
