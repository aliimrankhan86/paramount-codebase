import Layout from '../components/Layout';
import Link from 'next/link';
import { useState } from 'react';
import Counter from '../components/Counter';
import PortfolioGrid from '../components/PortfolioGrid';

export default function Service() {
  const [projectName, setProjectName] = useState('');
  const [projectEmail, setProjectEmail] = useState('');
  const [projectService, setProjectService] = useState('');
  const [projectBudget, setProjectBudget] = useState('');
  const [projectResponse, setProjectResponse] = useState('');

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setProjectResponse('Sending...');
    const res = await fetch('/api/sendProjectdetailEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'project-name': projectName,
        'project-email': projectEmail,
        'project-service': projectService,
        'project-budget': projectBudget,
      }),
    });
    const data = await res.json();
    if (data.success) {
      setProjectResponse('Inquiry sent successfully!');
      setProjectName('');
      setProjectEmail('');
      setProjectService('');
      setProjectBudget('');
    } else {
      setProjectResponse('Failed to send inquiry.');
    }
  };

  return (
    <Layout>
      <section id="blog-page-header-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="primary-heading">Services</h2>
              <ol className="breadcrumb minicon-breadcrumb">
                <li><a href="#fakelink">Home</a></li>
                <li className="active">Services</li>
              </ol>
            </div>
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 wow fadeInUp" data-wow-duration="2s">
              <div id="number-stats" className="stats-box">
                <div className="box">
                  <h4>Stats</h4>
                  <h5>Achievments</h5>
                </div>
                <div className="box">
                  <div className="counter"><Counter end={45} /></div>
                  <h6>Clients</h6>
                </div>

                <div className="box">
                  <div className="counter"><Counter end={1065} /></div>
                  <h6>Projects</h6>
                </div>
                <div className="box">
                  <div className="counter"><Counter end={15} /></div>
                  <h6>Services</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog-cotent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="text-center margin-top-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                <img className="down-arrow-icon" src="/img/down-arrow.png" alt="down-arrow" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service padding-remove">
        <div className="service1">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-lg-offset-7 col-md-5 col-md-offset-7 col-sm-12 col-xs-12 service-right-content-box">
                <h4>Photography</h4>
                <p className="primary-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Site ut enim ad minim veniam, ullamco laboris nisi ut aliquip ex ea.</p>
                <h6>9 Years of Experience</h6>
                <ul>
                  <li>Cameras</li>
                  <li>Abobe Photoshop</li>
                  <li>Abobe Lightroom</li>
                </ul>
                <a href="#fakelink" className="button button-wayra" data-toggle="modal" data-target="#myModal">Start A Project <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service padding-remove">
        <div className="service2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 service-left-content-box">
                <h4>Video Production</h4>
                <p className="primary-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Site ut enim ad minim veniam, ullamco laboris nisi ut aliquip ex ea.</p>
                <h6>7 Years of Experience</h6>
                <ul>
                  <li>Adobe After Effects</li>
                  <li>Autodesk Maya</li>
                  <li>Adobe Premier</li>
                </ul>
                <a href="#fakelink" className="button button-wayra" data-toggle="modal" data-target="#myModal">Start A Project <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service padding-remove">
        <div className="service3">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-lg-offset-7 col-md-5 col-md-offset-7 col-sm-12 col-xs-12 service-right-content-box">
                <h4>Design</h4>
                <p className="primary-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Site ut enim ad minim veniam, ullamco laboris nisi ut aliquip ex ea.</p>
                <h6>4 Years of Experience</h6>
                <ul>
                  <li>Adobe Photoshop</li>
                  <li>3Ds Max</li>
                  <li>Adobe Illustrator</li>
                </ul>
                <a href="#fakelink" className="button button-wayra" data-toggle="modal" data-target="#myModal">Start A Project <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service padding-remove">
        <div className="service4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 service-left-content-box">
                <h4>Marketing</h4>
                <p className="primary-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Site ut enim ad minim veniam, ullamco laboris nisi ut aliquip ex ea.</p>
                <h6>4 Years of Experience</h6>
                <ul>
                  <li>Advertisement Campaign</li>
                  <li>Design and Illustration</li>
                  <li>Sales Conversion</li>
                </ul>
                <a href="#fakelink" className="button button-wayra" data-toggle="modal" data-target="#myModal">Start A Project <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortfolioGrid />

      <section id="we-do">
        <div className="container-fluid">
          <div className="row">
            <h2 className="primary-heading">Like How We Do?</h2>
            <p className="primary-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <img className="img-responsive like-img" src="/img/placeholder/like-img.jpg" alt="like-img" />
          </div>
        </div>
      </section>

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
                        <div id="response2">{projectResponse}</div>
                        <form onSubmit={handleProjectSubmit}>
                          <input type="text" placeholder="Your Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
                          <input type="email" placeholder="Your Email" value={projectEmail} onChange={(e) => setProjectEmail(e.target.value)} required />
                          <select className="select-style" value={projectService} onChange={(e) => setProjectService(e.target.value)} required>
                            <option value="">Please select Service</option>
                            <option value="Branding">Branding</option>
                            <option value="Logo Designing">Logo Designing</option>
                            <option value="Web Designing">Web Designing</option>
                            <option value="Web Development">Web Development</option>
                          </select>
                          <select className="select-style" value={projectBudget} onChange={(e) => setProjectBudget(e.target.value)} required>
                            <option value="">Please select budget</option>
                            <option value="500$ - 999$">500$ - 999$</option>
                            <option value="1000$ - 2000$">1000$ - 2000$</option>
                            <option value="2001$ - 3000$">2001$ - 3000$</option>
                            <option value="Unspecified">Unspecified</option>
                          </select>
                          <button type="submit" className="button button-wayra">Submit Inquiry <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
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