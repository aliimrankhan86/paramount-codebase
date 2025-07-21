import Layout from '../components/Layout';
import Link from 'next/link';
import { useState } from 'react';
import Counter from '../components/Counter';
import PortfolioGrid from '../components/PortfolioGrid';

export default function Home() {
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
      <section id="home-banner">
        <div id="carousel-example-generic" className="carousel slide banner-element-style margin-top-negative" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="banner-img-1"></div>
              <div className="carousel-caption-1">
                <div className="container">
                  <div className="col-lg-12">
                    <div className="row">
                      <h2>Video Production</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                      <a href="#fakelink" className="button button-wayra">Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="banner-img-2"></div>
              <div className="carousel-caption-1">
                <div className="container">
                  <div className="col-lg-12">
                    <div className="row">
                      <h2>Portrait Photography</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                      <a href="#fakelink" className="button button-wayra">Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="banner-img-3"></div>
              <div className="carousel-caption-1">
                <div className="container">
                  <div className="col-lg-12">
                    <div className="row">
                      <h2>Web Design Project</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                      <a href="#fakelink" className="button button-wayra">Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="banner-img-4"></div>
              <div className="carousel-caption-1">
                <div className="container">
                  <div className="col-lg-12">
                    <div className="row">
                      <h2>Marketing Campaigns</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                      <a href="#fakelink" className="button button-wayra">Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="banner-img-5"></div>
              <div className="carousel-caption-1">
                <div className="container">
                  <div className="col-lg-12">
                    <div className="row">
                      <h2>Interactive Project</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                      <a href="#fakelink" className="button button-wayra">Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-caption">
              <div className="container">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 padding-remove">
                  <h5>Follow us</h5>
                  <ul className="social-link icons-color">
                    <li><a href="#fakelink"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#fakelink"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#fakelink"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li><a href="#fakelink"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 padding-remove">
                  <h6>12345 Address #311, California - 123 456 7890 - <a href="mailto:info@web.com">info@web.com</a></h6>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active">01.</li>
              <li data-target="#carousel-example-generic" data-slide-to="1">02.</li>
              <li data-target="#carousel-example-generic" data-slide-to="2">03.</li>
              <li data-target="#carousel-example-generic" data-slide-to="3">04.</li>
              <li data-target="#carousel-example-generic" data-slide-to="4">05.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="about-section">
            <div className="container">          
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about-tab-box">
                        <h2 className="primary-heading">About Us</h2>
                        <h3 className="secondary-heading">Who We Are?</h3>
                        <p className="primary-paragraph">Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                        <div id="number-stats" className="stats-box">
                            <div className="box">	
                                <h4>Stats</h4>
                                <h5>Achievments</h5>
                            </div>
                            <div className="box">
                                <div className="counter"><Counter end={17} /></div>
                                <h6>Skills</h6>
                            </div>
                            <div className="box">
                                <div className="counter"><Counter end={143} /></div>
                                <h6>Clients</h6>
                            </div>
                            <div className="box">
                                <div className="counter"><Counter end={136} /></div>
                                <h6>Projects</h6>
                            </div>
                        </div>
                        <Link legacyBehavior href="/about-us">
                          <a className="button button-wayra">
                            <span>Learn More</span> <i className="fa fa-long-arrow-right"></i>
                          </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section id="services-section">
            <div className="container-fluid padding-remove">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 padding-remove">
                    <div className="grid">
                        <figure className="effect-julia">
                            <img src="/img/placeholder/service-img-1.jpg" alt="service-img-1-hover"/>
                            <figcaption>
                                <div>
                                    <h2>Photography</h2>
                                    <p>Lorem Ipsum has been the industry's standard dummy text.</p>
                                    <h4><b>125</b>Projects Completed</h4>                        
                                    <Link legacyBehavior href="/service">
                                        <a className="button button-wayra">View Service <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                    </Link>
                                </div>
                            </figcaption>			
                        </figure>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 padding-remove">
                    <div className="grid">
                        <figure className="effect-julia">
                            <img src="/img/placeholder/service-img-2.jpg" alt="service-img-2-hover"/>
                            <figcaption>
                                <div>
                                    <h2>Video Production</h2>
                                    <p>Lorem Ipsum has been the industry's standard dummy text.</p>
                                    <h4><b>130</b>Projects Completed</h4>
                                    <Link legacyBehavior href="/service">
                                        <a className="button button-wayra">View Service <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                    </Link>
                                </div>
                            </figcaption>			
                        </figure>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 padding-remove">
                    <div className="grid">
                        <figure className="effect-julia">
                            <img src="/img/placeholder/service-img-3.jpg" alt="service-img-3-hover"/>
                            <figcaption>
                                <div>
                                    <h2>Design</h2>
                                    <p>Lorem Ipsum has been the industry's standard dummy text.</p>
                                    <h4><b>175</b>Projects Completed</h4>
                                    <Link legacyBehavior href="/service">
                                        <a className="button button-wayra">View Service <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                    </Link>
                                </div>
                            </figcaption>			
                        </figure>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 padding-remove">
                    <div className="grid">
                        <figure className="effect-julia">
                            <img src="/img/placeholder/service-img-4.jpg" alt="service-img-4-hover"/>
                            <figcaption>
                                <div>
                                    <h2>Marketing</h2>
                                    <p>Lorem Ipsum has been the industry's standard dummy text.</p>
                                    <h4><b>105</b>Projects Completed</h4>
                                    <Link legacyBehavior href="/service">
                                        <a className="button button-wayra">View Service <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                    </Link>
                                </div>
                            </figcaption>			
                        </figure>
                    </div>
                </div>
            </div>    
        </section>

        <section id="process-section" className="process-section">
            <div className="container">          
                <div className="row">
                    <div className="col-lg-5 col-lg-offset-7 col-md-5 col-md-offset-7 col-sm-12 col-xs-12 process-tab-box">
                        <h2 className="primary-heading">Process</h2>
                        <h3 className="secondary-heading">How we Do?</h3>
                        <p className="primary-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="process-content-box">	
                            <h4>Research</h4>
                            <h4>Design</h4>
                            <h4>Devlopment</h4>
                            <h4>Testing</h4>
                        </div>
                        <div className="box-4">
                            <b>4</b>
                        </div>
                        <a href="#fakelink" className="button button-wayra" data-toggle="modal" data-target="#myModal" data-text="Start A Project">Start A Project <i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <PortfolioGrid />

        <section id="teamhome">
            <div className="team-section">
                <div className="container">          
                    <div className="row">
                        <div className="col-lg-5 col-lg-offset-7 col-md-5 col-md-offset-7 col-sm-12 col-xs-12 team-tab-box">
                            <h2 className="primary-heading">Our Team</h2>
                            <h3 className="secondary-heading">Who We Are?</h3>
                            <p className="primary-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="team-content-box">	
                                <h4>John Doe</h4>
                                <h4>Waqas Ahmed</h4>
                                <h4>Johana Doe</h4>
                            </div>
                            <div className="box-4">
                                <b>3</b>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row team-box">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 team-mem-container wow fadeInUp" data-wow-duration="2.5s">
                        <img className="img-responsive" src="/img/placeholder/team-person-img.jpg" alt="team-person-img" />
                        <h5>John Doe</h5>
                        <h6>Chief Operating Officer</h6> 
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 team-mem-container wow fadeInUp" data-wow-duration="2.5s">
                        <img className="img-responsive" src="/img/placeholder/team-person-img-3.jpg" alt="team-person-img-2" />
                        <h5>Waqas Ahmed</h5>
                        <h6>Creative Director</h6> 
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 team-mem-container wow fadeInUp" data-wow-duration="2.5s">
                        <img className="img-responsive" src="/img/placeholder/team-person-img-2.jpg" alt="team-person-img-3" />
                        <h5>Johana Doe</h5>
                        <h6>Marketing Manager</h6> 
                    </div>
                </div>
            </div>
        </section>

        <section id="news">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="primary-heading text-center">The Blog</h2>
                        <h3 className="secondary-heading text-center">Who We Write?</h3>
                    </div>
                    <div className="col-lg-12">
						<div className="blog-box-border">
                            <div className="col-lg-6 col-md-6 blog-big-box">
                                <h6>Website Developement / Design Updates</h6>
                                <h4>
                                    <Link legacyBehavior href="/blog"><a>Lorem Ipsum simply dummy text of the printing</a></Link>
                                </h4>
                                <div className="float-left">	
                                    <img src="/img/placeholder/blog-img.jpg" alt="blog-img" />
                                </div>
                                <p className="primary-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p className="primary-paragraph">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <a className="blog-big-box-a" href="#fakelink">Read More<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                            </div>
                            <div className="col-lg-3 col-md-3 blog-second-column padding-remove">
                                <div className="blog-box">
                                    <h6>Daily Updates</h6>
                                    <span><Link legacyBehavior href="/blog"><a>Lorem Ipsum is simply dummy text of the printing</a></Link></span>
                                    <a href="#fakelink">Read More<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                                <div className="blog-box">
                                    <h6>Marketing Updates</h6>
                                    <span><Link legacyBehavior href="/blog"><a>Lorem Ipsum is simply dummy text of the printing</a></Link></span>
                                    <a href="#fakelink">Read More<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 blog-second-column padding-remove">
                                <div className="blog-box">
                                    <h6>Design Updates</h6>
                                    <span><Link legacyBehavior href="/blog"><a>Lorem Ipsum is simply dummy text of the printing</a></Link></span>
                                    <a href="#fakelink">Read More<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                                <div className="blog-box">
                                    <h6>Daily Updates</h6>
                                    <span><Link legacyBehavior href="/blog"><a>Lorem Ipsum is simply dummy text of the printing</a></Link></span>
                                    <a href="#fakelink">Read More<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                    	</div>
                        <div className="col-lg-12">
                            <div className="text-center">	
                                <Link legacyBehavior href="/blog"><a>View All</a></Link>
                            </div>
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
                                            <img className="img-responsive full-display" src="/img/placeholder/modal-img.jpg" alt="modal-img"/> 
                                        </div>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="/img/close-icon.png" width="31" height="31" alt="close-icon"/></button>
                                        <div className="col-lg-6 right-content-model">
                                            <h4>Project Inquiry</h4>
                                            <h5>Solutions for Web and Digital Media</h5>
                                            <div id="response2">{projectResponse}</div>
                                            <form onSubmit={handleProjectSubmit}>
                                                <input type="text" placeholder="Your Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} required/>
                                                <input type="email" placeholder="Your Email" value={projectEmail} onChange={(e) => setProjectEmail(e.target.value)} required/>
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