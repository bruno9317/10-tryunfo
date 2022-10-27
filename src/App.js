import React from 'react';
import Card from './components/Card';
// eslint-disable-next-line import/no-named-as-default
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: 'Bruno',
    cardDescription: 'estuda',
    cardAttr1: '2',
    cardAttr2: '2',
    cardAttr3: '2',
    cardImage: 'caminho',
    cardRare: 'muito raro',
    cardTrunfo: false,
    hasTrunfo: true,
    isSaveButtonDisabled: true,
    // onInputChange,
    // onSaveButtonClick,
  };

  onInputChange = (event) => {
    const { target } = event;
    // console.log(target.name === 'cardTrunfo');
    if (target.name === 'cardTrunfo') {
      this.setState({ cardTrunfo: target.value === 'false' });
    } else {
      this.setState({ [target.name]: target.value });
    }
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </div>
    );
  }
}

export default App;
