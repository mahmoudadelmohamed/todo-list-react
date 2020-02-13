import React, { Component } from 'react';
import Item from './TodoItem';
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;

    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">todo list</h3>
          {items.map(item => {
            return (
              <Item
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}
          <button
            type="button"
            className="text-uppercase btn btn-danger btn-block mt-5"
            onClick={clearList}
          >
            clear list
          </button>
        </ul>
      </div>
    );
  }
}
