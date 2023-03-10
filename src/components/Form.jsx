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
        <div className="col form-control-lg">
          <label htmlFor="cardName">
            Nome
            <input
              type="text"
              name="cardName"
              id="cardName"
              className="form-control"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="cardDescription">
            Descrição
            <textarea
              name="cardDescription"
              id="cardDescription"
              rows="4"
              cols="50"
              className="form-control"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="cardAttr1">
            Atributo 1
            <input
              type="number"
              name="cardAttr1"
              id="cardAttr1"
              className="form-control"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="cardAttr2">
            Atributo 2
            <input
              type="number"
              name="cardAttr2"
              id="cardAttr2"
              className="form-control"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="cardAttr3">
            Atributo 3
            <input
              type="number"
              name="cardAttr3"
              id="cardAttr3"
              className="form-control"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="cardImage">
            imagem
            <input
              type="text"
              name="cardImage"
              id="cardImage"
              className="form-control"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="cardRare">
            Escolha a raridade
            <select
              name="cardRare"
              id="cardRare"
              className="form-control"
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
          {!hasTrunfo ? (
            <label htmlFor="cardTrunfo">
              <input
              // defaultChecked
                data-testid="trunfo-input"
                name="cardTrunfo"
                id="cardTrunfo"
                type="checkbox"
                // className="form-control"
                value={ cardTrunfo }
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              SuperTrunfo
            </label>
          ) : (
            <p>Você já tem um Super Trunfo em seu baralho</p>
          )}
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
