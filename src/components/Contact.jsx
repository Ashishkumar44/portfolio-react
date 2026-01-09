import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>
            <div className="contact-methods">
              <a href="https://wa.me/917451915256?text=Hi%20Ashish!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer" className="contact-method whatsapp-method">
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp - Quick Chat</span>
              </a>
              <a href="mailto:ashishsahay5@gmail.com" className="contact-method">
                <i className="fas fa-envelope"></i>
                <span>ashishsahay5@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/ashish-kumar44/" target="_blank" rel="noopener noreferrer" className="contact-method">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/Ashishkumar44" target="_blank" rel="noopener noreferrer" className="contact-method">
                <i className="fab fa-github"></i>
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" action="https://formsubmit.co/ashishsahay5@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://ashishkumar44.github.io/thank-you.html" />
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
                <i className="fas fa-user"></i>
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
                <i className="fas fa-envelope"></i>
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                <i className="fas fa-comment"></i>
              </div>
              <button type="submit" className="btn btn-primary">
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
              <p className="form-note">Or send directly: <a href="mailto:ashishsahay5@gmail.com?subject=Portfolio Contact&body=Hi Ashish!" style={{ color: 'var(--primary-color)' }}>ashishsahay5@gmail.com</a></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
