import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <>
        <div>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              name="name"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Descrição:
            <textarea
              name="description"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attribute1">
            Atributo 1:
            <input
              type="number"
              name="attribute1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attribute2">
            Atributo 2:
            <input
              type="number"
              name="attribute2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attribute3">
            Atributo 3:
            <input
              type="number"
              name="attribute3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="image">
            imagem:
            <input
              type="text"
              name="image"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="rarity">
            Escolha a raridade:
            <select
              name="rarity"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="SuperTrunfo">
            <input
              defaultChecked
              data-testid="trunfo-input"
              name="SuperTrunfo"
              type="checkbox"
              value={ cardTrunfo }
              onChange={ onInputChange }
            />
            SuperTrunfo
          </label>
        </div>
        <div>
          <button
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
