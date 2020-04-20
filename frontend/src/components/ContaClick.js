import React from 'react';

export default class ContaClick extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    }
  }

  clicou = () => this.setState({clicks: this.state.clicks + 1});

  render() {
    return <div>
    <p>{this.state.clicks}</p>
    <button onClick={this.clicou}>Clica aqui!</button>
    </div>
  }
}
