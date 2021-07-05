import React, { Component } from 'react';

class Counter extends Component {
  /* Remove local state
 state = {
    value: this.props.counter.value,
    imageUrl: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3']
    //tags: []
  };*/

  styles = {
    fontSize: 50,
    fontWeight: 'bold'
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call to the server
    }
  }

  componentWillUnmount() {
    console.log('Counter-Unmount');
    //Allows for any type of clean up. Prevent memory leaks. Remove timers, listeners.
  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  /*renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }*/

  // handleIncrement() {
  //   this.state.value++;
  //   //console.log(this);
  //   //console.log('Increment clicked');
  // }

  /* Remove local state 
  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
    //At some point in the future the render method will get called.
  };*/

  /*handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };*/

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    console.log('props', this.props);
    return (
      <React.Fragment>
        {this.props.children}
        <span style={this.styles} className="badge bg-primary m-2">
          {this.formatCount()}
        </span>
        <span style={{ fontSize: 50 }} className="badge bg-primary m-2">
          {this.formatCount()}
        </span>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <br />
        <button
          //onClick={this.handleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/*<button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>*/}
        <br />
        {/*<img src={this.state.imageUrl} alt="" />*/}
        <br />
        {/*this.state.tags.length === 0 && 'Please create a new tag!'}*/}
        {/*this.renderTags()}*/}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 bg-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h1>Zero</h1> : value;
  }
}

export default Counter;
