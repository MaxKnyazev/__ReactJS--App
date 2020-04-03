import React, { Component } from 'react';
import './ItemAddForm.css'

class ItemAddForm extends Component {
  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label : ''
    })
    // console.log(e.target)
  }

  render () {
    return (
      <form 
        className = 'item-add-form d-flex'
        onSubmit = {this.onSubmit}
      >
        <input 
          type = 'text'
          className = 'form-control mr-2'
          onChange = {this.onLabelChange}
          placeholder = 'What needs to be done?'
          value = {this.state.label}
        />  

        <button 
          className = 'btn btn-outline-secondary'
        >Add Item</button>
      </form>
    )
  }
}

export default ItemAddForm;