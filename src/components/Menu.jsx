import React from 'react';

export class Menu extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  //need to wrap chooseVideo in a new function that
  // can take an event object as an argument.
  handleClick(e) {
    var text = e.target.value;
    //equal the text of a clicked radio button.
    //call the chooseVideo from App 
    this.props.chooseVideo(text);
  }



  render() {
    return (
      //passed-in handleClick function .
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}