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
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardColection: [],
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

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled } = this.state;

    this.setState((prevState) => ({
      cardColection: [...prevState.cardColection, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        isSaveButtonDisabled,
      }],
    }));

    // if (isSaveButtonDisabled === false) {
    //   this.setState({ hasButton: true });
    // }

    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }

    this.setState({ cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true });
  };

  deleteCard = (event) => {
    const { cardColection } = this.state;
    const { name } = event.target;
    if (cardColection.filter((p) => p.cardName === name)[0].cardTrunfo === true) {
      this.setState({ cardColection: cardColection.filter((p) => p.cardName !== name),
        hasTrunfo: false });
    } else {
      this.setState({ cardColection: cardColection.filter((p) => p.cardName !== name) });
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
      cardColection,
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
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
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
          hasButton
        />
        <section>
          {cardColection.map((p) => (
            <Card
              key={ p.cardName }
              cardName={ p.cardName }
              cardDescription={ p.cardDescription }
              cardAttr1={ p.cardAttr1 }
              cardAttr2={ p.cardAttr2 }
              cardAttr3={ p.cardAttr3 }
              cardImage={ p.cardImage }
              cardRare={ p.cardRare }
              cardTrunfo={ p.cardTrunfo }
              isSaveButtonDisabled={ p.isSaveButtonDisabled }
              hasButton={ false }
              deleteCard={ this.deleteCard }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
