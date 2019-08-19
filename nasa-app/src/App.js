import React, { Component } from 'react';
import './App.css';

export class App extends Component {

  // define state
  state = {
    api: [{ hdurl: "https://via.placeholder.com/150"}],
    load: true
  };

  // invoked immediately after a component is mounted
  componentDidMount = () => {
    // test the mount
    console.log("component did mount");

    // fetch from Nasa API
    const getNasaData = () => {
      fetch('https://api.nasa.gov/planetary/apod?api_key=IMZ7kSouj4eaATj8uFbuhfjSCKUenhfpg28PYnCf')
        .then(res => res.json())
        .then(data => {
          // console.log(data);

          this.setState({api: [data]})
          this.setState({loading: false})

          console.log(this.state.api);
        })
    }

    getNasaData();
  }





















  render() {
    return (
      <div>
        <h1>{this.state.api[0].title}</h1>
        <img src={this.state.api[0].url} alt="hd-img" />
      </div>
    )
  }



} // export class app

export default App





// Default stuff... saved for reference

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
