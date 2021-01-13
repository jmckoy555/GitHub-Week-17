import React from 'react';
import './App.css';
import Person from './Basicinfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [{ name: 'Jordan McKoy', age: 22, dob: 'August 11, 1998' }, { name: 'Chris Dorehty', age: 25, dob: 'September 12, 1999' },
      { name: 'Mike Flynn', age: 19, dob: 'January 5, 1997' }]
    };
  }

  render() {
    return (

      <div className="App">
        <Person name={this.state.person[0].name} age={this.state.person[0].age} dob={this.state.person[0].dob} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} dob={this.state.person[1].dob} />
        <Person name={this.state.person[2].name} age={this.state.person[2].age} dob={this.state.person[2].dob} />

        <div>
        </div>
      </div>

    )
  }
}



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

export default App;
