import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples.jsx';
import { Fragment } from 'react';

function App() {



  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </Fragment>
  );
}

export default App;
