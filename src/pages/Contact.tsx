import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    // For now, just prevent default and redirect to thank-you
    e.preventDefault();
    window.location.href = '/thank-you';
  };

  return (
    <main>
      <section className="contact-section">
        <div className="contact-info">
          <h2>Get in Touch with Us</h2>
          <p>Feel free to reach out to us with any questions or inquiries. We are here to help!</p>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> <a href="https://www.google.com/maps/place/Roadmap+Vehicle+Service/@-28.7209449,24.7332118,17z/data=!4m15!1m8!3m7!1s0x1e9b1a9547a7a979:0xf66f6433b67d3a86!2sMalunga+Ave,+Galeshewe,+Kimberley,+8345!3b1!8m2!3d-28.7209496!4d24.7357867!16s%2Fg%2F1tf051fj!3m5!1s0x1e9b1b5662e7a2d5:0xf72b57d6cd48bcf2!8m2!1s0x1e9b1a9508abd451%3A0xa5522e0e6462545e!2s413%20Malunga%20Ave%2C%20Galeshewe%2C%20Kimberley%2C%208345!5e0!3m2!1sen!2sza!4v1686324882458!5m2!1sen!2sza" style={{ color: '#003366' }}> 413 Malunga Avenue, Kimberley, Northern Cape, South Africa</a></li>
            <li><i className="fas fa-envelope"></i> <a href="mailto:roadmapinfo25@gmail.com">roadmapinfo25@gmail.com</a></li>
          </ul>
          <p>You can also follow us on social media for the latest updates.</p>
          <a href="https://wa.me/+27685260463" target="_blank" rel="noopener" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          <a href="https://g.page/r/CfK8SM3WVyv3EBM/review">Leave us a review on Google!</a>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <button type="submit" className="form-btn">Send Message</button>
          </form>
        </div>
      </section>
      <section className="contact-map">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.9029138365368!2d24.7325!3d-28.7225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9b1a9508abd451%3A0xa5522e0e6462545e!2s413%20Malunga%20Ave%2C%20Galeshewe%2C%20Kimberley%2C%208345!5e0!3m2!1sen!2sza!4v1686324882458!5m2!1sen!2sza"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ROADMAP Location"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Contact;