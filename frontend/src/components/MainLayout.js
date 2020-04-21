import React from 'react';
import '../App.css';

import CategorySelector from './CategorySelector';
import OrderBySelector from './OrderBySelector';
import PagSelector from './PagSelector';

export default class Layout extends React.Component {

  onChildChanged() {
        this.props.callbackParent()
    }

  render() {
    return (
      <div>
        <CategorySelector callbackParent={() => this.onChildChanged()}/>
        <PagSelector callbackParent={() => this.onChildChanged()}/>
        <OrderBySelector callbackParent={() => this.onChildChanged()}/>
      </div>
    )
  }
}
