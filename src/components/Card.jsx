import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
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
      hasButton,
      deleteCard,
    } = this.props;

    return (
      <>
        <h1 data-testid="name-card">{ cardName }</h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <h2 data-testid="rare-card">{ cardRare }</h2>
        {cardTrunfo && (
          <h1 data-testid="trunfo-card">Super Trunfo</h1>
        )}
        {!hasButton && (
          <button
            type="button"
            name={ cardName }
            onClick={ deleteCard }
            data-testid="delete-button"
          >
            Excluir
          </button>
        )}
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasButton: PropTypes.bool.isRequired,
};
