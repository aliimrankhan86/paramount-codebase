import Link from 'next/link';

export default function Header() {
  return (
    <header className="header-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-8" data-wow-duration="2s">
            <h1>
              <Link legacyBehavior href="/">
                <a>
                  <img className="img-responsive normal-logo" src="/img/logo.png" alt="logo" />
                  <img className="logo-responsive" src="/img/logo-mobile.png" alt="logo-responsive" />
                </a>
              </Link>
            </h1>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-4">
            <div id="cd-main-content">
              <div className="cd-header">
                <a className="cd-menu-trigger" href="#main-nav"><span></span></a>
              </div>
              <nav id="main-nav">
                <ul>
                  <li><Link legacyBehavior href="/"><a><span><sup>01.</sup> Home</span></a></Link></li>
                  <li><Link legacyBehavior href="/service"><a><span><sup>03.</sup> Services</span></a></Link></li>
                  <li><Link legacyBehavior href="/blog"><a><span><sup>04.</sup> Blog</span></a></Link></li>
                  <li><Link legacyBehavior href="/portfolio"><a><span><sup>05.</sup> Portfolio</span></a></Link></li>
                  <li><Link legacyBehavior href="/contact"><a><span><sup>06.</sup> Contact</span></a></Link></li>
                </ul>
                <a href="#0" className="cd-close-menu">Close<span></span></a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 