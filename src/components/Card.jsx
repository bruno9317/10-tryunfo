import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import foto from '../.'

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
      <div className="carta">
        <img
          className="card-img-top"
          src={ cardImage }
          alt={ cardName }
          width="10px"
          height="200px"
          data-testid="image-card"
        />
        <h1 className="text" data-testid="name-card">{ cardName }</h1>
        <p className="text" data-testid="description-card">{ cardDescription }</p>
        <p className="text" data-testid="attr1-card">
          <strong>Atributo1 </strong>
          --------------------------
          <strong>{ cardAttr1 }</strong>
        </p>
        <p data-testid="attr2-card">
          <strong>Atributo2 </strong>
          --------------------------
          <strong>{ cardAttr2 }</strong>
        </p>
        <p data-testid="attr3-card">
          <strong>Atributo3 </strong>
          --------------------------
          <strong>{ cardAttr3 }</strong>
        </p>
        <h3 data-testid="rare-card">{ cardRare }</h3>
        {cardTrunfo && (
          <h2 className="card-footer" data-testid="trunfo-card">Super Trunfo</h2>
        )}
        {!hasButton && (
          <button
            type="button"
            className="btn btn-primary"
            name={ cardName }
            onClick={ deleteCard }
            data-testid="delete-button"
          >
            Excluir
          </button>
        )}
      </div>
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
