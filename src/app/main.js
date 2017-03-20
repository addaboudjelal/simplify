import React, {Component} from 'react';
import {Link} from 'react-router';
export class Main extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/jobs">About</Link></li>
          <li><Link to="/emails">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
Main.propTypes = {
  children: React.PropTypes.node
};
