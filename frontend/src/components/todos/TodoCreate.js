import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos';
import TodoForm from './TodoForm';

class TodoCreate extends Component {
  onSubmit = formValues => {
    this.props.addTodo(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
          <h1> This worked</h1>
        <TodoForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoCreate);