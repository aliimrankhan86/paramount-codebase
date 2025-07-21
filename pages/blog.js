import Layout from '../components/Layout';
import Link from 'next/link';
import { useState } from 'react';
import Counter from '../components/Counter';

export default function Blog() {
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
              <h2 className="primary-heading">Minicon Blog</h2>
              <ol className="breadcrumb minicon-breadcrumb">
                <li><Link legacyBehavior href="/"><a>Home</a></Link></li>
                <li className="active">Blog</li>
              </ol>
            </div>
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 wow fadeInUp" data-wow-duration="2s">
              <div id="number-stats" className="stats-box">
                <div className="box">
                  <h4>Stats</h4>
                  <h5>Achievments</h5>
                </div>
                <div className="box">
                  <div className="counter"><Counter end={17} /></div>
                  <h6>Authors</h6>
                </div>

                <div className="box">
                  <div className="counter"><Counter end={143} /></div>
                  <h6>Posts</h6>
                </div>
                <div className="box">
                  <div className="counter"><Counter end={175} /></div>
                  <h6>Comments</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog-top-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <p className="text-center margin-top-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                <img className="down-arrow-icon" src="/img/down-arrow.png" alt="down-arrow" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-page padding-top-remove">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blog-img-push-left padding-remove wow fadeInUp" data-wow-duration="2s">
              <Link legacyBehavior href="/blog-detail">
                <a>
                  <img className="img-responsive blog-img-style" src="/img/placeholder/blog-page-img-1.jpg" alt="blog-img" />
                </a>
              </Link>
            </div>
            <div className="col-lg-4 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-12 col-xs-12 right-content-box padding-remove text-center">
              <img src="/img/john-doe-sign.png" alt="john-doe-sign" />
              <h5>23 Nov 2016</h5>
              <h4>
                <Link legacyBehavior href="/blog-detail">
                  <a>Lorem Ipsum simply dummy texT of the printing</a>
                </Link>
              </h4>
              <h6>Website Developement / Design Updates</h6>
              <p className="primary-paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit lorem ipsum dolor sit amet.</p>
              <ul className="icons-color-2">
                <li><a href="#fakelink"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#fakelink"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#fakelink"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                <li><a href="#fakelink"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
              </ul>
              <span>05 Comments</span>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-page padding-top-remove">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blog-img-push-right padding-remove wow fadeInUp" data-wow-duration="2s">
              <Link legacyBehavior href="/blog-detail">
                <a>
                  <img className="img-responsive blog-img-style" src="/img/placeholder/blog-page-img-2.jpg" alt="blog-img" />
                </a>
              </Link>
            </div>
            <div className="col-lg-4 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-12 col-xs-12 padding-remove left-content-box text-center">
              <img src="/img/john-doe-sign.png" alt="john-doe-sign" />
              <h5>15 Nov 2016</h5>
              <h4>
                <Link legacyBehavior href="/blog-detail">
                  <a>Lorem Ipsum simply dummy texT of the printing</a>
                </Link>
              </h4>
              <h6>Website Developement / Design Updates</h6>
              <p className="primary-paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit lorem ipsum dolor sit amet.</p>
              <ul className="icons-color-2">
                <li><a href="#fakelink"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#fakelink"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#fakelink"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                <li><a href="#fakelink"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
              </ul>
              <span>05 Comments</span>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-page padding-top-remove">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 padding-remove wow fadeInUp" data-wow-duration="2s">
              <Link legacyBehavior href="/blog-detail">
                <a>
                  <img className="img-responsive blog-img-style" src="/img/placeholder/blog-page-img-3.jpg" alt="blog-img" />
                </a>
              </Link>
            </div>
            <div className="col-lg-4 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-12 col-xs-12 right-content-box padding-remove text-center">
              <img src="/img/john-doe-sign.png" alt="john-doe-sign" />
              <h5>23 Oct 2016</h5>
              <h4>
                <Link legacyBehavior href="/blog-detail">
                  <a>Lorem Ipsum simply dummy texT of the printing</a>
                </Link>
              </h4>
              <h6>Website Developement / Design Updates</h6>
              <p className="primary-paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit lorem ipsum dolor sit amet.</p>
              <ul className="icons-color-2">
                <li><a href="#fakelink"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#fakelink"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#fakelink"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                <li><a href="#fakelink"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
              </ul>
              <span>05 Comments</span>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-page padding-top-remove">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 blog-img-push-right padding-remove wow fadeInUp" data-wow-duration="2s">
              <Link legacyBehavior href="/blog-detail">
                <a>
                  <img className="img-responsive blog-img-style" src="/img/placeholder/blog-page-img-4.jpg" alt="blog-img" />
                </a>
              </Link>
            </div>
            <div className="col-lg-4 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-12 col-xs-12 padding-remove left-content-box text-center">
              <img src="/img/john-doe-sign.png" alt="john-doe-sign" />
              <h5>17 Oct 2016</h5>
              <h4>
                <Link legacyBehavior href="/blog-detail">
                  <a>Lorem Ipsum simply dummy texT of the printing</a>
                </Link>
              </h4>
              <h6>Website Developement / Design Updates</h6>
              <p className="primary-paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit lorem ipsum dolor sit amet.</p>
              <ul className="icons-color-2">
                <li><a href="#fakelink"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#fakelink"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#fakelink"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                <li><a href="#fakelink"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
              </ul>
              <span>05 Comments</span>
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