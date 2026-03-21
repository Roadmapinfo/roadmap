import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <main>
      <section className="about-hero section-padding">
        <div className="about-hero-content">
          <h1 className="about-section-title">Your Trusted Automotive Partner in Kimberley</h1>
          <p>We are your trusted partner for professional vehicle maintenance and repair, dedicated to ensuring your safety and satisfaction on the road.</p>
        </div>
      </section>

      <section className="about-intro section-padding">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <p>ROADMAP was founded with a simple mission: to provide Kimberley with reliable, high-quality automotive services at a fair price. Our founder, a seasoned mechanic with a passion for cars, saw a need for a local workshop that drivers could trust. From humble beginnings, we have grown into a respected local business, known for our technical expertise and our commitment to our customers. We are proud to be a part of the Kimberley community and to contribute to keeping our neighbors safe on the road.</p>
          <br />
          <h2 className="section-title">Our Mission</h2>
          <p>We believe in providing quality, reliable, and affordable vehicle services. Our mission is to keep you moving forward with confidence, knowing that your vehicle is in the hands of experienced professionals. We pride ourselves on our commitment to quality, exceptional customer service, and fair pricing.</p>
        </div>
      </section>

      <section className="about-details section-padding">
        <div className="container">
          <div className="detail-grid">
            <div className="detail-item fade-in-up">
              <i className="fas fa-tools icon"></i>
              <h3>Our Expertise</h3>
              <p>With years of experience in the automotive industry, we specialize in a range of essential services. From tyre patching and wheel balancing to bearing pressing and small welding jobs.</p>
            </div>
            <div className="detail-item fade-in-up" style={{ transitionDelay: '0.2s' }}>
              <i className="fas fa-check-circle icon"></i>
              <h3>Why Choose Us?</h3>
              <p>We use quality parts and the latest equipment to ensure every repair and service meets the highest standards of safety and performance. Your trust is our priority, and we work hard to earn it with every vehicle we service.</p>
            </div>
            <div className="detail-item fade-in-up" style={{ transitionDelay: '0.4s' }}>
              <i className="fas fa-map-marker-alt icon"></i>
              <h3>Our Location</h3>
              <p>You can find us conveniently located at <strong>413 Malunga Avenue, Kimberley, Northern Cape, South Africa</strong>. We are a proud local business serving our community with integrity and dedication.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="Contact-us section-padding">
        <h2 className="section-title">Ready to Get Started?</h2>
        <p>Whether you need a quick repair or a detailed service, we are ready to help. Contact us today to schedule your appointment.</p>
        <Link to="/contact" className="contact-button">Contact Us</Link>
      </section>
    </main>
  );
};

export default About;