/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
export default function Resources() {
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
    </div>
  );
}
