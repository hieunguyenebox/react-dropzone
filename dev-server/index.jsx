import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from '../lib';

const App = () => {
  return (
    <div style={{ height: 500, width: 600 }}>
      <Dropzone defaultStyle />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
