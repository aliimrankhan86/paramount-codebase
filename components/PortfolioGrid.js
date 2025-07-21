import { useState, useEffect } from 'react';
import Link from 'next/link';

const portfolioItems = [
  { id: 1, category: 'Branding', image: '/img/placeholder/portfolio-img-1.jpg', title: 'Branding' },
  { id: 2, category: 'Branding Design', image: '/img/placeholder/portfolio-img-2.jpg', title: 'Branding and Design' },
  { id: 3, category: 'Development', image: '/img/placeholder/portfolio-img-3.jpg', title: 'Website Development' },
  { id: 4, category: 'Marketing', image: '/img/placeholder/portfolio-img-4.jpg', title: 'Marketing' },
  { id: 5, category: 'Design', image: '/img/placeholder/portfolio-img-5.jpg', title: 'Design' },
  { id: 6, category: 'Design Marketing Development', image: '/img/placeholder/portfolio-img-6.jpg', title: 'Design and Marketing' },
  { id: 7, category: 'Branding', image: '/img/placeholder/portfolio-img-7.jpg', title: 'Branding' },
  { id: 8, category: 'Design Development', image: '/img/placeholder/portfolio-img-8.jpg', title: 'Design and Development' },
];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState('*');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  useEffect(() => {
    if (filter === '*') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category.includes(filter)));
    }
  }, [filter]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 padding-remove-responsive">
            <h2 className="primary-heading">Portfolio</h2>
            <h3 className="secondary-heading">What We Did?</h3>
            <p className="primary-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 padding-remove-responsive">
            <div id="filters" className="button-group">
              <button className={`button-portfolio ${filter === '*' ? 'is-checked' : ''}`} onClick={() => setFilter('*')}>All</button>
              <button className={`button-portfolio ${filter === 'Branding' ? 'is-checked' : ''}`} onClick={() => setFilter('Branding')}>Branding</button>
              <button className={`button-portfolio ${filter === 'Design' ? 'is-checked' : ''}`} onClick={() => setFilter('Design')}>Design</button>
              <button className={`button-portfolio ${filter === 'Development' ? 'is-checked' : ''}`} onClick={() => setFilter('Development')}>Development</button>
              <button className={`button-portfolio ${filter === 'Marketing' ? 'is-checked' : ''}`} onClick={() => setFilter('Marketing')}>Marketing</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row padding-remove">
          <div className="grid-portfolio">
            {filteredItems.map(item => (
              <Link legacyBehavior href="/portfolio-detail" key={item.id}>
                <a>
                  <div className="grid">
                    <figure className={`element-item effect-portfolio ${item.category}`}>
                      <img className="img-responsive" src={item.image} alt={item.title} />
                      <figcaption>
                        <h4>{item.title}</h4>
                      </figcaption>
                    </figure>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="row view-all">
          <Link legacyBehavior href="/portfolio-detail"><a className="">View All</a></Link>
        </div>
      </div>
    </section>
  );
} 