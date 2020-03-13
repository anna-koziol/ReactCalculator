import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Item from "./components/Item"
var data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [".", 0, "="],
];
var operator = ["C", "/", "*", "-", "+"];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: "",
      result: "",
    };
    this.click = this.click.bind(this);
  }

  click(x) {
    var x = String(x);
    if (x == "=") {
      this.setState({
        result: eval(this.state.expression),
      });
    }
    else if (x == "C") {
      this.setState({
        expression: this.state.expression.slice(0, -1),
        result: " ",
      });
    }
    else {
      this.setState({
        expression: this.state.expression + x,
        result: " ",
      });
    }
  }

  render() {
    var that = this;
    var array = data.map(function (element, i) {
      var array2 = element.map(function (element) {
        return (
          <Item key={"element" + element} data={element} click={that.click} />
        )
      })
      return (
        <View key={i} style={{ flex: 1, flexDirection: "row", }}>
          {array2}
        </View>
      );
    })

    var operatorArray = operator.map(function (element) {
      return (
        <Item key={"element" + element[0]} data={element} direction="column" click={that.click} />
      )
    })

    return (
      <View key="container" style={styles.container}>
        <View key="screen" style={styles.screen}>
          <Text style={{ flex: 1 }}></Text>
          <Text style={{ fontSize: 25, color: "#000000", flex: 1, textAlign: "right" }}>{this.state.expression}</Text>
          <Text style={{ fontSize: 25, color: "#000000", padding: 5, flex: 1, textAlign: "right" }}>{this.state.result}</Text>
        </View>
        <View key="buttons" style={styles.buttons}>
          <View key="number" style={styles.numbers}>
            {array}
          </View>
          <View key="operators" style={styles.operators}>
            {operatorArray}
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffffff',
  },
  screen: {
    flex: 1,
    backgroundColor: '#deecfc',
  },
  buttons: {
    flex: 2,
    // backgroundColor: '#45315d',
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#87a8d0',
  },
  operators: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#b9ceeb',
  },
});