import React, { Suspense } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Contacts from '../Contacts/Contacts'
import NotFound from '../NotFound/NotFound';
import './App.css';

const Main = React.lazy(() => import("../Main/Main"));
const Chapter = React.lazy(() => import("../Chapter/Chapter"));
const Card = React.lazy(() => import("../Card/Card"));

function App() {
  let history = useHistory();
  history.listen((location, action) => {
    if (action === `PUSH`) window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<Preloader />}>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Main />            
          </Route>
          <Route path='/catalog/:chapter' exact>
           <Chapter/>
          </Route>
          <Route path='/catalog/:chapter/:id' >
            <Card/>
          </Route>
          <Route path='/contacts' exact>
           <Contacts/>
          </Route>
          <Route path='*' >
            <NotFound />
          </Route>
          
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
