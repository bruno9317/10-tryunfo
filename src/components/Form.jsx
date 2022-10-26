import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <>
        <div>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              name="name"
              data-testid="name-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Descrição:
            <textarea
              name="description"
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
              data-testid="image-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="rarity">
            Escolha a raridade:
            <select name="rarity" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="SuperTrunfo">
            <input
              type="checkbox"
              name="SuperTrunfo"
              data-testid="trunfo-input"
            />
            SuperTrunfo
          </label>
        </div>
        <div>
          <button type="button" data-testid="save-button">Salvar</button>
        </div>
      </>
    );
  }
}

export default Form;
