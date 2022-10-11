import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";

import "./CardsList.css";

function CardsList({ cards }) {
  const { path } = useRouteMatch();

  const params = useParams();
  const paramsChapter = params.chapter;
  return (
    <div className="cardslist-wrapper">
      <div className="cardslist">
        {cards.map((item) => (
          <div key={item.id} className="cardslist__item">
            <Link to={`${paramsChapter}/${item.id}`} className="cardslist__link">
              <div className="cardslist__image-wrapper">
                <img src={item.poster} className="cardslist__item-poster" />
                </div>
                <p className="cardslist__item_model">{item.model}</p>
             
              <h2 className="cardslist__item_name">{item.name}</h2>
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsList;
