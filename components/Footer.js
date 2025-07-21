import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div id="footer">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                <a href="#fakelink" className="button button-wayra" data-toggle="modal" data-target="#myModal">Lets Work Together <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
              <div className="col-lg-12">
                <img className="img-responsive footer_logo" src="/img/footer-logo.png" alt="footer-logo" />
              </div>
              <div className="col-lg-4 contact-width">
                <h5><span>Address :</span> 12345 Address #311, California</h5>
              </div>
              <div className="col-lg-4 contact-width">
                <h5><span>Phone Number :</span> 1234.567.2398</h5>
              </div>
              <div className="col-lg-4 contact-width">
                <h5><span>Email :</span> <a href="mailto:info@iconicgraphics.com">info@iconicgraphics.com</a></h5>
              </div>
              <div className="col-lg-12">
                <form className="subcribe">
                  <input type="email" placeholder="Enter your Email for Subscription" />
                  <input className="subscribe_btn" type="submit" value="" />
                </form>
              </div>
              <div className="col-lg-12">
                <ul>
                  <li className="wow fadeIn"><a href="#fakelink"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li className="wow fadeIn"><a href="#fakelink"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li className="wow fadeIn"><a href="#fakelink"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                  <li className="wow fadeIn"><a href="#fakelink"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                  <li className="wow fadeIn"><a href="#fakelink"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                  <li className="wow fadeIn"><a href="#fakelink"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                  <li className="wow fadeIn"><a href="#fakelink"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul>
                <li><Link legacyBehavior href="/"><a><span>Home</span></a></Link></li>
                <li><Link legacyBehavior href="/service"><a><span>Services</span></a></Link></li>
                <li><Link legacyBehavior href="/blog"><a><span>Blog</span></a></Link></li>
                <li><Link legacyBehavior href="/portfolio"><a><span>Portfolio</span></a></Link></li>
                <li><Link legacyBehavior href="/contact"><a><span>Contact</span></a></Link></li>
              </ul>
            </div>
            <div className="col-lg-12">
              <h6>© 2017 - All Rights Reserved</h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 