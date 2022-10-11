import React, {useEffect} from 'react';
import main from '../../images/main.png';
import Catalog from '../Catalog/Catalog';
import Footer from '../Footer/Footer';
import './Main.css';

function Main() {

  useEffect(() => {
    document.title = 'Радон';
  });


  return (
    <div className='main'>
      <section className='intro'>
        <div className='intro__content'>
          <div className='intro__columns'>
            <div className='intro__colum intro__column_left'>
              <h2 className='intro__subtitle'>
                Разработка, Поставка и Производство
              </h2>
              <h1 className='intro__title'>Стендового Оборудования</h1>
              <p className='intro__article'>
                С 2014 года наша компания занимается разработкой и внедрением
                нестандартного технологического оборудования предназначенного
                для упрощения проведения и одновременного улучшения качества
                технического обслуживания подвижного состава, ремонта узлов и
                агрегатов, проведения испытаний оборудования.
                <br></br>
                <br></br>
                Качество нашей продукции гарантируется высоким уровнем
                технологии производства, всеми необходимыми видами контроля и
                профессионализмом наших работников. Основными продуктами нашей
                компании являются стенды для испытания пневматического,
                механического и электрического оборудования а также
                специализированные рабочие места.
              </p>
            </div>
            <img
              alt='Стендовое Оборудование Радон'
              src={main}
              className='intro__colum intro__colum_right'
            />
          </div>
        </div>
      </section>

      <section className='about'>
        <div className='about__content'>
          <p className='about__content-title'>
            Общество с Ограниченной Ответственностью РАДОН{' '}
          </p>
          <p className='about__article'>
            Собственная производственная база<br></br> Богатый опыт разработки и
            изготовления<br></br> Наличие соответствующих лицензий<br></br>
          </p>
          <p className='about__article-span'>
            Позволяют нам качественно и в короткие сроки реализовывать самые
            сложные индивидуальные решения для предприятий рельсового транспорта
          </p>
        </div>
      </section>
      <Catalog />
      <section className='advantages'>
        <div className='advantages__content'>
          <div className='advantages__card'>
            <h3 className='advantages__card-subtitle'>Наша</h3>
            <h2 className='advantages__card-title'>КОМАНДА</h2>
            <p className='advantages__card-article'>
              Состоит из специалистов, имеющий большой опыт работы в ведущих
              научно-исследовательских и проектно-технологических предприятиях
              различный отраслей
            </p>
          </div>
          <div className='advantages__card'>
            <h3 className='advantages__card-subtitle'>Нацелены на</h3>
            <h2 className='advantages__card-title'>РАЗВИТИЕ</h2>
            <p className='advantages__card-article'>
              Освоение новых технологических решений позволяет нам использовать
              максимально эффективный набор технологических инструментов для
              достижения поставленных целей
            </p>
          </div>
          <div className='advantages__card'>
            <h3 className='advantages__card-subtitle'>Ориентируемся на</h3>
            <h2 className='advantages__card-title'>РЕЗУЛЬТАТ</h2>
            <p className='advantages__card-article'>
              Для этого постоянно прикладываем усилия для повышения качества
              нашей работы и модернизации разрабатываемой продукции
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Main;
