import React from 'react';
import './App.scss';
import ContextProvider from './ContextProvider';
import MainComponent from 'components/MainComponent';

const App = () => {
  return (
    <div className="App">
      <ContextProvider>
        <MainComponent />
      </ContextProvider>
    </div>
  );
};

export default App;
