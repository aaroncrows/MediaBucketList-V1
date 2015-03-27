'use strict';
var React = require('react');
var UserActions = require('../actions/user-actions');

module.exports = React.createClass({
  componentDidMount: function() {
    UserActions.isValid(this.props.signedIn);
  },

  render: function() {
    var filler = (
      <div>
        <img src="./img/logo.png" className="filler" alt="Logo image"></img>
      </div>
    );
    return (
      <div>
        <p>THIS IS THE PROFILE VIEW</p>
        {filler}
      </div>
    );
  }
});
