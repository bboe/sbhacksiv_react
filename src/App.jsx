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

    onChange = event => {
        let value = parseInt(event.target.value) || "";
        this.setState({[event.target.name]: value});
    }

    render() {
        return (
            <div>
                <input placeholder="lhs" name="lhs" onChange={this.onChange} value={this.state.lhs}/>
                +
                <input placeholder="rhs" name="rhs" onChange={this.onChange} value={this.state.rhs}/>
                =
                <input placeholder="result" value={this.state.lhs + this.state.rhs} disabled />
            </div>
        )
    }
}

export default App;
