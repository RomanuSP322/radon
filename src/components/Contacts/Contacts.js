import React, { useEffect } from 'react';
import ContacForm from '../ContactForm/ContactForm';
import './Contacts.css';

function Contacts() {
  useEffect(() => {
    document.title = 'Контакты | Радон';
  });

  return (
    <section className='contacts'>
      <div className='contacts__content'>
        <ContacForm />

        <div className='contacts__column'>
          <div className='contacts__detail-wrapper'>
            <h3 className='contacts__detail-title'>Адрес</h3>
            <a
              href='https://yandex.ru/maps/-/CCUNuFhyLA'
              className='contacts_detail-info contacts__link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Николоямской переулок,<br/> д.4-6, стр. 3, пом.IV
            </a>
          </div>
          <div className='contacts__detail-wrapper'>
            <h3 className='contacts__detail-title'>Телефон</h3>
            <a
              href='tel: +79199964363'
              className='contacts__detail-info contacts__link'
            >
              (+7) 919-996-43-63
            </a>
          </div>
          <div className='contacts__detail-wrapper'>
            <h3 className='contacts__detail-title'>Email</h3>
            <a
              href='mailto: ooo-radon@mail.ru'
              className='contacts_detail-info contacts__link'
            >
              ooo-radon@mail.ru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
