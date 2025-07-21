import Link from 'next/link';
import Layout from '../components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse('Sending...');
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    });
    const data = await res.json();
    if (data.success) {
      setResponse('Message sent successfully!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      setResponse('Failed to send message.');
    }
  };

  return (
    <Layout>
      <section className="contact-page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="breadcrumb-ul">
                <li><Link legacyBehavior href="/"><a>Home</a></Link></li>
                <li className="breadcrumb-li-style">&gt;</li>
                <li><Link legacyBehavior href="/contact"><a>Contact</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 contact-content">
              <h4>Minicon Agency</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <div className="margin-top"></div>
              <span>Monday - Friday :</span>
              <h6>8:00 AM - 5:00 PM</h6>
              <span>Address :</span>
              <h6>12345 Address #311, California</h6>
              <span>Phone :</span>
              <h6>1234.567.2398</h6>
              <span>Email :</span>
              <a href="mailto:info@iconicgraphics.com"><h6>info@iconicgraphics.com</h6></a>
            </div>
            <div className="col-lg-6 col-lg-offset-2 col-md-6 col-md-offset-2 col-xs-12 col-sm-12 contact-form contact-tab-box">
              <h2 className="primary-heading">Contact</h2>
              <h3 className="secondary-heading">Solutions for Web and Digital Media</h3>
              <div id="response">{response}</div>
              <form onSubmit={handleSubmit}>
                <div><input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required /></div>
                <div><input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
                <div><input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required /></div>
                <div><textarea rows="3" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea></div>
                <div><input className="contact_button button btn btn-primary btn-block" type="submit" value="Send Message" /></div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div id="map"></div>

      <div className="project-model">
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="col-lg-6 padding-remove">
                        <img className="img-responsive full-display" src="/img/placeholder/modal-img.jpg" alt="modal-img" />
                      </div>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="/img/close-icon.png" width="31" height="31" alt="close-icon" /></button>
                      <div className="col-lg-6 right-content-model">
                        <h4>Project Inquiry</h4>
                        <h5>Solutions for Web and Digital Media</h5>
                        <div id="response2"></div>
                        <form action="sendProjectdetailEmail.php" method="post" name="project-inquiry" id="project-inquiry" onSubmit={() => false}>
                          <input type="text" placeholder="Your Name" value="" name="project-name" id="project-name" />
                          <input type="text" placeholder="Your Email" value="" name="project-email" id="project-email" />
                          <select className="select-style" name="project-service" id="project-service">
                            <option value="">Please select Service</option>
                            <option value="Branding">Branding</option>
                            <option value="Logo Designing">Logo Designing</option>
                            <option value="Web Designing">Web Designing</option>
                            <option value="Web Development">Web Development</option>
                          </select>
                          <select className="select-style" name="project-budget" id="project-budget">
                            <option value="">Please select budget</option>
                            <option value="500$ - 999$">500$ - 999$</option>
                            <option value="1000$ - 2000$">1000$ - 2000$</option>
                            <option value="2001$ - 3000$">2001$ - 3000$</option>
                            <option value="Unspecified">Unspecified</option>
                          </select>
                          <button type="submit" id="submit2" className="button button-wayra">Submit Inquiry <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                        </form>
                      </div>
                    </div>
                    <div className="modal-footer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 