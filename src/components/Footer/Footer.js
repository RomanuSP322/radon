import React from 'react';
import Logo from '../Logo/Logo';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__content-wrapper'>
        <div className='footer__content'>
        <div className='footer__logo-wrapper'>
          <Logo />
          <h3 className='footer__tagline'>
            Стендовое оборудование С 2014 года
          </h3>
        </div>
        <div className='footer__contact'>
          <h3 className='footer__contact_title'>Контакты</h3>
          <p className='footer__contact_item'>
            <a href='tel: +79199964363' className='footer__contact_link'>
              (+7) 919-996-43-63

            </a>
          </p>
          <p className='footer__contact_item'>
            <a href='mailto: ooo-radon@mail.ru' className='footer__contact_link'>
            ooo-radon@mail.ru

            </a>
          </p>
          {/* <button className='footer__contact_button'>Связаться с нами</button> */}
        </div>
      </div>
      <p className='footer__copyright'>© 2022 РАДОН</p>
      </div>
     
    </footer>
  );
}

export default Footer;
