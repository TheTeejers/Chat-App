// import React, { Component } from 'react';
//
// import { subscribeToTimer, getStock } from './api';
//
// class App extends Component {
//   constructor(props) {
//   super(props);
//
//   subscribeToTimer((err, timestamp) => this.setState({
//     timestamp
//   }));
//
//   getStock((err, message) => this.setState({
//     message
//   }));
//
//
//   this.state = {
//     timestamp: 'no timestamp yet',
//     message: 'no message yet'
//   };
// }
//
//
//
//   render() {
//     console.log(this.state.message);
//     console.log(this.state.timestamp);
//     return (
//       <div className="App">
//         <p className="App-intro">
//           This is the timer value: {this.state.timestamp}
//         </p>
//         <p className="App-intro">
//           This is the message value: {this.state.message}
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;


import React, { Component } from 'react';

import Layout from './components/Layouts';
import './index.css'
// import { subscribeToTimer, getStock } from './api';

class App extends Component {





  render() {

    return (

        <Layout title="Chat App" />

    );
  }
}

export default App;
