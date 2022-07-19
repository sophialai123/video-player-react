import React from 'react';

export class Video extends React.Component {
  render() {
    return (
      <div>
        {/* give a src attribute from parent App */}
        <video src={this.props.src} controls autostart autoPlay muted />
      </div>
    );
  }
}