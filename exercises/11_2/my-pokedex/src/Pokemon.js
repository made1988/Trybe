import React, { Component } from 'react';

class Pokemon extends Component {
  render () {
    const { id, name, type, averageWeight, image } = this.props;
    return (
      <div className="poke-tag">
        <ul className="poke-info">
          <li key='name'>{name}</li>
          <li key='type'>{type}</li>
          <li key='weight'>{averageWeight.value} {averageWeight.measurementUnit}</li>
        </ul>
        <img src={image} alt={`Image of the Pokemon ${name}`} className="poke-image" />
      </div>
    )
  }
}

export default Pokemon;
