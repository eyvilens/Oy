import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {size: 50};

    this.increment = this.increment.bind(this);
}
    increment()
    {
      this.setState(previousState => {
        return { size: previousState.size + 20 };
      });
    }

  render() {
    return (
      <TouchableOpacity onPress={this.increment} style={[styles.CircleShapeView, {width: this.state.size, height: this.state.size ,borderRadius: this.state.size/2}]}><Text style={styles.TextStyle}>{this.props.username}</Text></TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({


  CircleShapeView: {

    backgroundColor: '#00BCD4',
    alignItems: 'center',
    justifyContent: 'center',
}
});

export default Circle
