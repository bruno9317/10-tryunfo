import React from 'react';
import Card from './components/Card';
// eslint-disable-next-line import/no-named-as-default
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
