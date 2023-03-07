import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
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

// const obj = {
//   fname: "Azhar",
//   lName: "Shaikh",
//   fullName: function () {
//     return this.fname + " " + this.lName;
//   },
// };

class App extends Component {
  test = "23456543";
  // where state varialbles are initialized
  constructor() {
    super();
    console.log(this.props);
    this.state = {
      color: "red",
      fname: "Azhar",
      lname: "Shaikh",
    };
    console.log("Construnctor Method", this.state, this.test);
  }
  // static getDerivedStateFromProps() {
  //   console.log("getDerivedStateFromprops called");
  // }
  // shouldComponentUpdate() {
  //   console.log("shouldComponentUpdate called");
  //   return true;
  // }
  // getSnapshotBeforeUpdate() {
  //   console.log("getSnapshotBeforeUpdate called");
  // }

  componentDidMount() {
    console.log("componentDidMount called");
    setTimeout(() => {
      this.setState({ ...this.state, color: "yellow" });
    }, 15000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("Unmoutiing ");
  }

  render() {
    console.log("Render Called");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.color}
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
