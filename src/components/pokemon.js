import React, {Component} from 'react'

export class Pokemon extends Component {
  render() {
    if (!this.props.name) {
      return (
        <div>
          <h3>Select a Pokemon.</h3>
          <div id="test"></div>
        </div>
      )
    }

    return (
      <div id="current-article">
        <div id="test"></div>
        <div id="loaded">
          <h2>Nombre: {this.props.name}</h2>
          <div className="article-date">
            Peso: {this.props.weight}
            / Altura: {this.props.height}
            / Exp. Base: {this.props.base_experience}
          </div>
          <div className="article-body">
            <img src={this.props.sprites.front_default} alt=""/>
            <img src={this.props.sprites.back_default} alt=""/>
          </div>
        </div>

      </div>
    );
  }
}
