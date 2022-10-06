import pneumatics from '../images/pump.svg';
import electrics from '../images/electric-meter.svg';
import mechanic from '../images/tactics.svg';
import defect from '../images/defect.svg';
import bench from '../images/circular-saw.svg';


const catalog=[
{
  title:"Контроль пневматического оборудования",
  ico: pneumatics,
  path: '/',
  id: '01',
},
{
  title:"Контроль механического оборудования",
  ico: mechanic,
  path: '/',
  id: '02',
  
},
{
  title:"Контроль электрического оборудования",
  ico: electrics,
  path: '/',
  id: '03',
},
{
  title:"Оборудование для неразрушающего контроля",
  ico: defect,
  path: '/',
  id: '04',
},
{
  title:"Специализированные рабочие места",
  ico: bench,
  path: '/',
  id: '05',
},
]

export {catalog}