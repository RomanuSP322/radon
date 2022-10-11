import React from 'react';
import { useParams } from 'react-router-dom';
import { catalog } from '../../consts/CatalogData';
import Footer from '../Footer/Footer';
import './Card.css';

function Card() {
  const params = useParams();
  const paramsChapter = params.chapter;
  const paramsId = params.id;
  const ch = catalog.find((f) => f.chapter === paramsChapter);
  const card = ch.cards.find((f) => f.id === paramsId);

  return (
    <div className='card-wrapper'>
      {card && (
        <div className='card'>
          <div className='card__section '>
          <p className='card__model'>{card.model}</p>
          <h2 className='card__item_name'>{card.name}</h2>
          </div>
          <div className='card__section_blue'>
          <div className=' card__section card__about-wrapper'>
            <p className='card__about'>{card.description}</p>
            <p className='card__applicability'>
              <span className='card__applicability_span'>Применяемость:</span><br/>
              {card.applicability}
            </p>
          </div>
          </div>
          <div className='card__section card__content'>
            <img src={card.poster} className='card__poster' />
            <table>
              <tr>
                <th>Характеристика</th>
                <th>Значение</th>
              </tr>
              {card.characteristics.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default Card;
