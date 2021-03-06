'use strict';
var React = require('react');
var MovieActions = require('../actions/movie-actions');

//child of SearchView
var MovieSearch = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      formType: 'Movie'
    };
  },

  handleChange: function(event){
    var state = this.state;
    state.name = event.target.value;
    this.setState(state);
  },

  changeFormType: function(event) {
    var state = this.state;
    state.formType = event.target.value;
    this.setState(state);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    if (this.state.formType === 'Movie') {
      MovieActions.getMoviesByName(this.state.name);
    } else {
      MovieActions.getTvShowsByName(this.state.name);
    }

    this.setState({
      name: '',
      formType: 'Movie'
    });
  },

  handleClick: function() {
    MovieActions.searchListSaveNew(this.props.searchData);
  },

  render: function() {
    var submitButton = 'Find ' + this.state.formType;
    var placeholder = 'Search by ' + this.state.formType + ' name';
    var movieChecked = this.state.formType === 'Movie' ? 'true' : null;
    var tvShowChecked = this.state.formType !== 'Movie' ? 'true' : null;
    var makeList = this.props.searchData[0] ? <input type="button" value="Make List" onClick={this.handleClick}/> : '';
    return (
      <form className="searchBar" onSubmit={this.handleSubmit}>
        <input className="searchbox" type="text" onChange={this.handleChange} value={this.state.name}
          placeholder={placeholder}/>
        <div className="button-group horizontal-spacing">
          <label>
            <input type="radio" name="searchSelect" value="Movie" 
              checked={movieChecked} onChange={this.changeFormType} />
            <span className="button-group-item">Movie</span>
          </label>
          <label>
            <input type="radio" name="searchSelect" value="TV Show" 
              checked={tvShowChecked} onChange={this.changeFormType} />
            <span className="button-group-item">TV Show</span>
          </label>
        </div>
        <input className="horizontal-spacing" type="submit" value={submitButton}/>
        {makeList}
      </form>
    );
  }
});

module.exports = MovieSearch;
