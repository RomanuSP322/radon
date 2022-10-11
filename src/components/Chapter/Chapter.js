import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { catalog } from '../../consts/CatalogData';
import CardsList from '../CardsList/CardsList';

import Footer from '../Footer/Footer';
import './Chapter.css';

function Chapter() {
  let { chapter } = useParams();

  const chapterdata = catalog.find((f) => f.chapter === chapter);

  useEffect(() => {
    document.title = `${chapterdata.chaptertitle} | Радон`;
  });

  return (
    <section className='chapter'>
      
        <div className='chapter__content'>
          <h2 className='chapter__title'>{chapterdata.chaptertitle}</h2>
          <h3 className='chapter__subtitle'>
            {chapterdata.chaptersubtitle}
          </h3>
     <CardsList cards={chapterdata.cards }/>
      </div>

      <Footer />
    </section>
  );
}

export default Chapter;
