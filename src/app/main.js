import React, {Component} from 'react';
import {Header} from './header';

export class Main extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
Main.propTypes = {
  children: React.PropTypes.node
};
