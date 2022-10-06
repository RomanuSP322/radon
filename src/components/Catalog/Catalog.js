import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import './Catalog.css';

import {catalog} from '../../consts/CatalogData'

function Catalog() {
  return (
    <section className='catalog'>
      <div className='catalog__content'>
        <h2 className='catalog__title'> Каталог</h2>
        <div className='catalog__menu'>
        {catalog.map((item) => (
          <div key={item.id} className="catalog__chapter">
            <Link to={`${item.path}`} className="catalog__chapter-link">
              <div className="catalog__chapter_image-wrapper">
                <img src={item.ico} className="catalog__chapter-ico" alt='Иконка раздела'/>                
              </div>
              <h2 className="catalog__chapter-title">{item.title}</h2>
            </Link>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Catalog;
