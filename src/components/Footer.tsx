

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h4>Contact Info</h4>
        <a href="tel:+27685260463"><i className="fas fa-phone"></i> +27 68 526 0463</a>
        <p><i className="fas fa-map-marker-alt"></i> 413 Malunga Avenue, Kimberley, 8301, South Africa</p>
      </div>
      <div className="footer-social">
        <h4>Follow Us</h4>
        <a href="https://wa.me/+27685260463" target="_blank" rel="noopener" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
      </div>
      <div className="footer-bottom">
        <p>&copy; <span id="current-year">{new Date().getFullYear()}</span> ROADMAP.</p>
      </div>
    </footer>
  );
};

export default Footer;