import React, {Component} from 'react';
import {Link} from 'react-router';

export class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-default">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://www.pfizer.com">
            <img id="nav-logo" className="img-responsive" src="http://www.pfizer.com/sites/default/files/images/common/pfizer.png"/>
          </a>
          <Link to="/jobs">Jobs</Link>
          <Link to="/emails">Emails</Link>
        </div>
      </header>
    );
  }
}
