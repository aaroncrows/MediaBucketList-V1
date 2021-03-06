'use strict';
var React = require('react');
var UserActions = require('../actions/user-actions');

//child of ControllerView
var UserNav = React.createClass({
  handleClick: function() {
    UserActions.signOut();
  },

  handleNav: function(event) {
    event.preventDefault();
    UserActions.navigate(event.target.name);
  },

  render: function() {
    return (
      <div className="centered-navigation" role="banner">
        <div className="centered-navigation-wrapper">
          <nav role="navigation">
            <div className="mediabucketlist">MediaBucketList</div>
            <ul id="js-centered-navigation-menu" className="centered-navigation-menu">
              <li className="nav-link"><a href="#" onClick={this.handleNav} name="lists">Lists</a></li>
              <li className="nav-link"><a href="#" onClick={this.handleNav} name="search">Search</a></li>
              <li className="nav-link"><a href="#" onClick={this.handleClick}>Sign Out</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
});

module.exports = UserNav;
