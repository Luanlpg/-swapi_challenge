import React from 'react';

export default class HelloWorld extends React.Component {
 render() {
 return <p>Olá {this.props.nome}!</p>;
 }
}
