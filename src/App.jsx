import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator />
      </header>
    </div>
  );
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lhs: "",
            rhs: ""
        }
    }

    onLHSChange = event => {
        this.setState({lhs: event.target.value});
    }

    render() {
        return (
            <div>
                <input placeholder="lhs" onChange={this.onLHSChange} value={this.state.lhs}/>
                +
                <input placeholder="rhs" value={this.state.rhs}/>
                =
                <input placeholder="result" value={this.state.lhs + this.state.rhs} disabled />
            </div>
        )
    }
}

export default App;
