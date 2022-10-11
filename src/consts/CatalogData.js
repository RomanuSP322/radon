import pneumatics from '../images/pump.svg';
import electrics from '../images/electric-meter.svg';
import mechanic from '../images/tactics.svg';
import defect from '../images/defect.svg';
import bench from '../images/circular-saw.svg';

import apkp02 from '../images/apkp02.png';
import apkp03 from '../images/apkp03.png';
import apkp04 from '../images/apkp04.png';

const catalog = [
  {
    title: 'Контроль пневматического оборудования',
    ico: pneumatics,
    id: '1',
    chapter: 'pneumatic',
    chaptertitle: 'Оборудование для контроля',
    chaptersubtitle: 'Пневматических узлов и агрегатов',
    cards: [
      {
        name: 'Стенд для проверки рукавов на герметичность',
        model: 'АПК-П-02',
        poster: apkp02,
        id: 'apkp02',
        description:
          'Стенд предназначен для проверки на герметичность воздухом под давлением 1,5 МПа (15 кгс/см2) соединительных рукавов вагонов метрополитена.',
        applicability:
          'Вагоны метро модели 81-760/761; 81-765/766/767; 81-775/776/777 ',
        characteristics: [
          {
            name: 'Номинальное давление воздуха мПа, (кгс/кв.см)',
            value: '0,63 (6,3)',
          },
          {
            name: 'Напряжение питания, В',
            value: '220',
          },
          {
            name: 'Род тока',
            value: 'переменный',
          },
          {
            name: 'Частота, Гц',
            value: '50',
          },
          {
            name: 'Напряжение питания пневмораспределителей стенда, В',
            value: '24',
          },
          {
            name: 'Электрическая мощность, потребляемая стендом, кВт',
            value: 'Не более 0,3',
          },
          {
            name: 'Масса стенда, кг',
            value: 'Не более  270',
          },
          {
            name: 'Габариты стенда (не более), мм  (д*ш*в)',
            value: '2000х500х1230',
          },
        ],
        code: 'БМВТ.441000.002',
        analog: 'АРМ 16519',
      },
      {
        name: 'Стенд для проверки крана машиниста усл.№013, РУ, РД ',
        model: 'АПК-П-03',
        poster: apkp03,
        id: 'apkp03',
      },
      {
        name:
          'Стенд для проверки регулятора положения кузова и быстродействующего клапана',
        model: 'АПК-П-04',
        poster: apkp04,
        id: 'apkp04',
      },
      {
        name:
          'Стенд для проверки регулятора положения кузова и быстродействующего клапана',
        model: 'АПК-П-04',
        poster: apkp04,
        id: 'apkp04',
      },
      {
        name: 'Стенд для проверки рукавов на герметичность',
        model: 'АПК-П-02',
        poster: apkp02,
        id: 'apkp02',
      },
      {
        name: 'Стенд для проверки крана машиниста усл.№013, РУ, РД ',
        model: 'АПК-П-03',
        poster: apkp03,
        id: 'apkp03',
      },
    ],
  },
  {
    title: 'Контроль механического оборудования',
    ico: mechanic,
    id: '2',
    chapter: 'mechanical',
    chaptertitle: 'Оборудование для контроля',
    chaptersubtitle: 'Механических узлов и агрегатов',
    cards: [
      {
        name: 'Стенд для проверки рукавов на герметичность',
        model: 'АПК-П-02',
        poster: apkp02,
      },
    ],
  },
  {
    title: 'Контроль электрического оборудования',
    ico: electrics,
    id: '3',
    chapter: 'electric',
    chaptertitle: 'Оборудование для контроля',
    chaptersubtitle: 'Электрических узлов и агрегатов',
    cards: [
      {
        name: 'Стенд для проверки рукавов на герметичность',
        model: 'АПК-П-02',
        poster: apkp02,
      },
    ],
  },
  {
    title: 'Оборудование для неразрушающего контроля',
    ico: defect,
    id: '4',
    chapter: 'ndestructive',
    chaptertitle: 'Оборудование для',
    chaptersubtitle: 'Неразрушающего контроля',
    cards: [
      {
        name: 'Стенд для проверки рукавов на герметичность',
        model: 'АПК-П-02',
        poster: apkp02,
      },
    ],
  },
  {
    title: 'Специализированные рабочие места',
    ico: bench,
    id: '5',
    chapter: 'workbench',
    chaptertitle: 'Специализированные',
    chaptersubtitle: 'Рабочие места',
    cards: [
      {
        name: 'Стенд для проверки рукавов на герметичность',
        model: 'АПК-П-02',
        poster: apkp02,
      },
    ],
  },
];

export { catalog };
