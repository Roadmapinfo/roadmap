import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-image">
          <img src="/hero/hero.JPG" className="hero-bg" alt="A mechanic working on a vehicle in a workshop." title="Professional vehicle maintenance and repair at ROADMAP." />
        </div>
        <div className="hero-content">
          <h1>Keeping Your Wheels Running Smoothly</h1>
          <p>Consider us your go to guys for all things maintenance and repair.
             We are committed to keeping you safe and moving without breaking the bank.</p>
          <Link to="/contact" className="hero-button">Get in Touch</Link>
        </div>
      </section>
      <section className="About-Us">
        <h2 className="section-title">About Us</h2>
        <p>We are dedicated to providing quality vehicle services that ensure your safety and satisfaction on the road. With years of experience in the automotive industry, we specialize in tyre patching, wheel balancing, bearing pressing, and small welding jobs. We pride ourselves on our commitment to quality workmanship, customer service, and affordable pricing.</p>
      </section>
      <section className="services section-padding">
        <h2 className="section-title">Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>TYRE PATCHING</h3>
            <p>Expert, reliable tire repair to safely get you back on the road with minimal downtime.</p>
          </div>
          <div className="service-item" style={{ transitionDelay: '0.1s' }}>
            <h3>WHEEL BALANCING</h3>
            <p>Precision wheel balancing utilizing state-of-the-art equipment for a smoother, safer ride.</p>
          </div>
          <div className="service-item" style={{ transitionDelay: '0.2s' }}>
            <h3>BEARING PRESSING</h3>
            <p>Professional bearing installation and removal, ensuring optimal vehicle performance and longevity.</p>
          </div>
          <div className="service-item" style={{ transitionDelay: '0.3s' }}>
            <h3>SMALL WELDING JOBS</h3>
            <p>Specialized welding services for small-scale vehicle repairs and custom fabrication.</p>
          </div>
        </div>
      </section>

      <section className="gallery section-padding">
        <h2 className="section-title">Our Work</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/services/small-welding-jobs.png" alt="small welding job on a vehicle part." />
          </div>
          <div className="gallery-item">
            <img src="/services/tyre-patching.png" alt="Tyre patching process being performed by a technician." />
          </div>
          <div className="gallery-item">
            <img src="/services/bearing-pressing.png" alt="Bearing pressing process being performed by a technician." />
          </div>
          <div className="gallery-item">
            <img src="/services/wheel-balancing.png" alt="Wheel balancing being done with professional equipment." />
          </div>
        </div>
      </section>

      <section className="Contact-us">
        <h2 className="section-title">Contact Us</h2>
        <p>Reach out to us today to schedule an appointment or to learn more about how we can assist you.</p>
        <Link to="/contact" className="contact-button">Contact Us</Link>
      </section>
    </main>
  );
};

export default Home;