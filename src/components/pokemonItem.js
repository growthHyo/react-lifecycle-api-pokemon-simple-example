import React, {Component} from 'react'

export class PokemonItem extends Component{
  handledClick = (e) => {
    e.preventDefault();
    this.props.onClick(this.props.url);
  }

  render(){
    return(
      <div className="article-row link" onClick={this.handledClick}>
        <div className="article-title">{this.props.name}</div>
        <div className="article-date">{this.props.url}</div>
      </div>
    )
  }
}
