import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import NavBar from './component/navbar';
import Counters from './component/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super(); //Add props if passing into the constructor
    console.log('App constructor');
    //Setting the state to props on load, don't need to call setState.
    //Will not have access to props unless it is passed into the constructor.
    //this.state = this.props.something;
  }

  componentDidMount() {
    //Perfect place to make AJAX calls to get data from the server.
    //this.setState({})
    console.log('App mounted');
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter[index] = { ...counter };
    counters[index].value > 0 && counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log('Event Handler Called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters }); //when key value is same only one variable is required
  };

  render() {
    console.log('App rendered');
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
