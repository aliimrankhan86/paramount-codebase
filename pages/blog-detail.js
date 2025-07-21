import Layout from '../components/Layout';
import Link from 'next/link';
import { useState } from 'react';

export default function BlogDetail() {
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
      <section className="banner-blog2">
        <img className="img-responsive" src="/img/placeholder/blog2-banner.jpg" alt="blog2-banner" />
      </section>

      <section id="blog-single-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog2-content">
                <ul className="icons-color-2">
                  <li className="heading-6">23 November 2016</li>
                  <li className="heading-6">share</li>
                  <li><a href="#fakelink"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#fakelink"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#fakelink"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                  <li><a href="#fakelink"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                </ul>
                <h2 className="primary-heading">Lorem Ipsum simply dummy text of the printing</h2>
                <h4>Website Developement / Design Updates</h4>
                <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</b></p>

                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>

                <p><span><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</b></span></p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid">
        <div className="row conclusion-top-margin">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 padding-remove">
            <img className="img-responsive blog-img-style-two" src="/img/placeholder/blog-page-img-3.jpg" alt="blog-img-3" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding-remove blog2-right-content">
            <h4>Conclusion</h4>
            <p className="primary-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <p className="primary-paragraph">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h5>Tags : <span>Design, Web, Photography</span></h5>
          </div>
        </div>
      </div>

      <section className="author-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="comment-box-1 wow slideInUp" data-wow-duration="3s">
                <div className="col-lg-9 col-md-9 col-sm-12">
                  <h4>John Doe</h4>
                  <p className="primary-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis commodo consequat.</p>
                  <ul>
                    <li><a href="#fakelink"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#fakelink"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#fakelink"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <img className="img-responsive blog2-man-img" src="/img/placeholder/blog2-man-img.jpg" alt="blog2-man" />
                </div>
                <h6>Author</h6>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="post-link">
                <a href="#fakelink"><i className="fa fa-arrow-left" aria-hidden="true"></i> Previous Post</a>
                <a href="#fakelink">View All</a>
                <a href="#fakelink">Next Post <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>

      <section className="comment-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 people-comments">
              <h4>Comments ( 3 )</h4>
              <div className="avatar-comment-container">
                <div className="col-lg-1 padding-remove">
                  <img src="/img/placeholder/comment-img-1.png" alt="comment-img-1" />
                </div>
                <div className="col-lg-11 col-md-11 col-sm-12 col-xs-12 padding-remove">
                  <h5>Denis Svetlov</h5>
                  <ul className="date">
                    <li><i className="fa fa-calendar" aria-hidden="true"></i>23 Nov 2016</li>
                    <li><a href="#fakelink"> <i className="fa fa-reply" aria-hidden="true"></i></a></li>
                  </ul>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui diam, venenatis non tempor id, sollicitudin id tortor. Donec sit amet dignissim enim. Donec bibendum vel magna ut aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui diam, venenatis non tempor id, sollicitudin id tortor. </p>
                </div>
              </div>
              <div className="avatar-comment-container style-comment">
                <div className="col-lg-1 padding-remove">
                  <img src="/img/placeholder/comment-img-2.png" alt="comment-img-2" />
                </div>
                <div className="col-lg-11 col-md-11 col-sm-12 col-xs-12 padding-remove">
                  <h5>Waqas Ahmed</h5>
                  <ul className="date">
                    <li><i className="fa fa-calendar" aria-hidden="true"></i>23 Nov 2016</li>
                    <li><a href="#fakelink"> <i className="fa fa-reply" aria-hidden="true"></i></a></li>
                  </ul>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui diam, venenatis non tempor id, sollicitudin id tortor. Donec sit amet dignissim enim. Donec bibendum vel magna ut aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui diam, venenatis non tempor id, sollicitudin id tortor.</p>
                </div>
              </div>
              <div className="avatar-comment-container">
                <div className="col-lg-1 padding-remove">
                  <img src="/img/placeholder/comment-img-3.png" alt="comment-img-3" />
                </div>
                <div className="col-lg-11 col-md-11 col-sm-12 col-xs-12 padding-remove">
                  <h5>Agatha Christie</h5>
                  <ul className="date">
                    <li><i className="fa fa-calendar" aria-hidden="true"></i>23 Nov 2016</li>
                    <li><a href="#fakelink"> <i className="fa fa-reply" aria-hidden="true"></i></a></li>
                  </ul>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui diam, venenatis non tempor id, sollicitudin id tortor. Donec sit amet dignissim enim. Donec bibendum vel magna ut aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui diam, venenatis non tempor id, sollicitudin id tortor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="form-comment">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4>Post Comments</h4>
            </div>
            <form id="comment-post-form">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <input type="text" placeholder="Name*" name="post-name" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <input type="email" placeholder="Email*" name="post-email" />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <input type="text" placeholder="Website URL" name="post-website" />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <label>Comments</label>
                <textarea placeholder="Your Message Goes Here..."></textarea>
                <button type="submit" className="submit">Submit Comments</button>
              </div>
            </form>
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