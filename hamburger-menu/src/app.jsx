import { Fragment } from 'react';
import './app.css';
import Header from './components/header';
import Content from './containers/content';

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className='App__box'>
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </Fragment>
  );
};

export default App;
