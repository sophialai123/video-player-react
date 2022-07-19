import React from 'react';
import { Child } from './Child';
import { Sibling } from './Sibling';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child

          onChange={this.changeName} />
        {/*  Sibling‘s job is to display the selected name. */}
        <Sibling name={this.state.name} />
      </div>
    );
  }
}