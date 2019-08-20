import React, { Component } from 'react';
import './App.css';
import spinner from './components/spinner/spinner';
export class App extends Component {

  // define state
  state = {
    api: [{ hdurl: "https://via.placeholder.com/150"}],
    loading: true
  };

  // invoked immediately after a component is mounted
  componentDidMount = () => {
    // test the mount
    console.log("component did mount");

    // fetch from Nasa API
    fetch('https://api.nasa.gov/planetary/apod?api_key=IMZ7kSouj4eaATj8uFbuhfjSCKUenhfpg28PYnCf')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({api: [data]})
        this.setState({loading: false})
        console.log(this.state.api);
      })
  }

  // Render to page
  render() {
    return (
      (this.state.loading) ? <spinner/> :
      <div className="container">
        <div className="card">
          <h1>{this.state.api[0].title}</h1>
          <img src={this.state.api[0].url} alt="hd-img" />
          <p>{this.state.api[0].explanation}</p>
        </div>
      </div>
    )
  }

} // export class app

export default App
