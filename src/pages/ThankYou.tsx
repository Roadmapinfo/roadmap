import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  return (
    <main>
      <section className="thank-you section-padding">
        <div className="thank-container">
          <h1 className="thank-section-title">Thank You!</h1>
          <p>Your message has been successfully sent. We will get back to you shortly.</p>
          <Link to="/" className="contact-button">Return to Home</Link>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;