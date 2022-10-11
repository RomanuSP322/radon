import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='navigation__menu'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <NavLink to='/' className='navigation__link'>
            Продукция
          </NavLink>
        </li>
        <li className='navigation__item navigation__item_type_contact'>
          <NavLink
            to='/contacts'
            className='navigation__link navigation__link_type_contact'
          >
            Связаться с нами
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
