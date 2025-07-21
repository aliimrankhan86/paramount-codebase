import Layout from '../components/Layout';
import Link from 'next/link';
import { useState } from 'react';

export default function PortfolioDetail() {
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
      <div id="carousel-custom" className="carousel slide" data-ride="carousel">
        <div className="carousel-outer">
          <div className="carousel-inner">
            <div className="item active">
              <img className="img-responsive" src="/img/placeholder/portfolio-slider-1.jpg" alt="portfolio-banner" />
            </div>
            <div className="item">
              <img className="img-responsive" src="/img/placeholder/portfolio-slider-2.jpg" alt="portfolio-banner-2" />
            </div>
            <div className="item">
              <img className="img-responsive" src="/img/placeholder/portfolio-slider-3.jpg" alt="portfolio-banner-3" />
            </div>
            <div className="item">
              <img className="img-responsive" src="/img/placeholder/portfolio-slider-4.jpg" alt="portfolio-banner-4" />
            </div>
          </div>
        </div>

        <ol className="carousel-indicators mCustomScrollbar">
          <li data-target="#carousel-custom" data-slide-to="0" className="active wow fadeInUp" data-wow-duration="2s">
            <img className="img-responsive" src="/img/placeholder/thumbnail-img-1.jpg" alt="thumbnail-img-1" />
          </li>
          <li data-target="#carousel-custom" data-slide-to="1" className="wow fadeInUp" data-wow-duration="2.5s">
            <img className="img-responsive" src="/img/placeholder/thumbnail-img-2.jpg" alt="thumbnail-img-2" />
          </li>
          <li data-target="#carousel-custom" data-slide-to="2" className="wow fadeInUp" data-wow-duration="3s">
            <img className="img-responsive" src="/img/placeholder/thumbnail-img-3.jpg" alt="thumbnail-img-3" />
          </li>
          <li data-target="#carousel-custom" data-slide-to="3" className="wow fadeInUp" data-wow-duration="3.5s">
            <img className="img-responsive" src="/img/placeholder/thumbnail-img-4.jpg" alt="thumbnail-img-4" />
          </li>
        </ol>
      </div>

      <section className="portfolio-page-section padding-remove">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h2 className="primary-heading">Climbers Web Project</h2>
              <h3 className="secondary-heading">Website Developement / Design</h3>
              <p className="primary-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="primary-paragraph">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam.</p>
              <ul className="icons-color-2">
                <li>
                  <a href="#fakelink"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href="#fakelink"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href="#fakelink"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                </li>
                <li>
                  <a href="#fakelink"><i className="fa fa-rss" aria-hidden="true"></i></a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-2">
              <div className="box-4">
                <b>2</b>
                <h5 className="heading-3 text-center">Creative Stars</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 about-img-box padding-remove">
              <div className="about-img bg-color"></div>
              <img className="logo-portfolio" src="/img/portfolio-logo.png" alt="portfolio-logo" />
              <h4>Project Goals</h4>
              <ul>
                <li>Photography</li>
                <li>Logo Design</li>
                <li>Website Design</li>
                <li>Development</li>
                <li>Website Design</li>
                <li>Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="container portfolio-detail">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 padding-remove-responsive">
              <h2 className="primary-heading">Related Projects</h2>
              <h3 className="secondary-heading">Our Recent Projects</h3>
              <p className="primary-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a className="view-all" href="#fakelink">View All</a>
            </div>
            <div className="grid-portfolio">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 padding-remove-responsive">
                <Link legacyBehavior href="/portfolio">
                  <a>
                    <div className="grid">
                      <figure className="effect-portfolio">
                        <img className="img-responsive" src="/img/placeholder/portfolio-img-2.jpg" alt="portfolio-img-8" />
                        <figcaption>
                          <h4>Website Development</h4>
                        </figcaption>
                      </figure>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 padding-remove-responsive">
                <Link legacyBehavior href="/portfolio">
                  <a>
                    <div className="grid">
                      <figure className="effect-portfolio">
                        <img className="img-responsive" src="/img/placeholder/portfolio-img-3.jpg" alt="portfolio-img-8" />
                        <figcaption>
                          <h4>Branding</h4>
                        </figcaption>
                      </figure>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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