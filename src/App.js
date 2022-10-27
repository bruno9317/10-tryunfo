import React from 'react';
import Card from './components/Card';
// eslint-disable-next-line import/no-named-as-default
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo: true,
    isSaveButtonDisabled: true,
    // onInputChange,
    // onSaveButtonClick,
  };

  onInputChange = (event) => {
    const { target } = event;
    if (target.name === 'cardTrunfo') {
      this.setState({ cardTrunfo: target.value === 'false' });
    } else {
      this.setState({ [target.name]: target.value });
    }
    const valorTotal = 210;
    const maiorValor = 90;
    const somaDosAtributos = parseInt(cardAttr1.value, 10)
    + parseInt(cardAttr2.value, 10)
    + parseInt(cardAttr3.value, 10);

    const newButtonState = cardName.value.length > 0
    && cardDescription.value.length > 0
    && cardImage.value.length > 0
    && somaDosAtributos <= valorTotal
    && parseInt(cardAttr1.value, 10) >= 0
    && parseInt(cardAttr1.value, 10) <= maiorValor
    && parseInt(cardAttr2.value, 10) >= 0
    && parseInt(cardAttr2.value, 10) <= maiorValor
    && parseInt(cardAttr3.value, 10) >= 0
    && parseInt(cardAttr3.value, 10) <= maiorValor;

    this.setState({ isSaveButtonDisabled: !newButtonState });
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
      // hasTrunfo,
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
