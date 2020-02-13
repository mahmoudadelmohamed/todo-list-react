import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import './App.css';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  };
  handlechange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updated = [...this.state.items, newItem];

    this.setState({
      items: updated,
      item: '',
      id: uuid(),
      editItem: false
    });

    e.preventDefault();
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const filterItems = this.state.items.filter(items => items.id !== id);
    this.setState({
      items: filterItems
    });
  };
  handleEdit = id => {
    const filterItems = this.state.items.filter(items => items.id !== id);
    const selectedItem = this.state.items.find(items => items.id === id);
    this.setState({
      items: filterItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              handlechange={this.handlechange}
              handleSubmit={this.handleSubmit}
              item={this.state.item}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
