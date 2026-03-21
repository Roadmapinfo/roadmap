import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <main>
      <section className="services section-padding">
        <div className="services-container">
          <h1 className="services-title">Our Professional Automotive Services</h1>
          <div className="services-list">
            <div className="services-item">
              <img src="/services/tyre-patching.png" alt="A technician patching a tyre in our Kimberley workshop." className="service-img" />
              <h4>TYRE PATCHING</h4>
              <p>Expert, reliable tire repair to safely get you back on the road with minimal downtime. We use the latest techniques to ensure a durable and safe repair for your tires.</p>
            </div>
            <div className="services-item" style={{ transitionDelay: '0.1s' }}>
              <img src="/services/wheel-balancing.png" alt="State-of-the-art wheel balancing for a smooth ride." className="service-img" />
              <h4>WHEEL BALANCING</h4>
              <p>Precision wheel balancing utilizing state-of-the-art equipment for a smoother, safer ride. Proper wheel balancing helps prevent uneven tire wear and steering wheel vibrations.</p>
            </div>
            <div className="services-item" style={{ transitionDelay: '0.2s' }}>
              <img src="/services/bearing-pressing.png" alt="Professional bearing pressing service at ROADMAP." className="service-img" />
              <h4>BEARING PRESSING</h4>
              <p>Professional bearing installation and removal, ensuring optimal vehicle performance and longevity. Our hydraulic press ensures bearings are installed correctly without damage to the hub or bearing.</p>
            </div>
            <div className="services-item" style={{ transitionDelay: '0.3s' }}>
              <img src="/services/small-welding-jobs.png" alt="A skilled technician performing a small welding job on a vehicle." className="service-img" />
              <h4>SMALL WELDING JOBS</h4>
              <p>Specialized welding services for small-scale vehicle repairs and custom fabrication. From exhaust repairs to chassis reinforcements, we handle a variety of small welding tasks.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="service-guarantee section-padding">
        <div className="container">
          <h2 className="section-title">Our Service Guarantee</h2>
          <p>At ROADMAP, we stand behind our work. We are committed to providing the highest quality of service and ensuring our customers are completely satisfied. All our repairs and services are backed by a comprehensive guarantee, giving you peace of mind on the road. We use only the best parts and equipment, and our skilled technicians are dedicated to delivering excellence in every job.</p>
        </div>
      </section>

      <section className="Contact-us">
        <h2 className="section-title">Get a Free Quote</h2>
        <p>Contact us today to discuss your vehicle service needs or to get a free, no-obligation quote.</p>
        <Link to="/contact" className="contact-button">Contact Us</Link>
      </section>
    </main>
  );
};

export default Services;