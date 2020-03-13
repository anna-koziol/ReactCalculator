import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { a: 1 };
        console.log(this.props);
    }

    onPress = () => {
        // this.props.suma2(this.props.text)
        this.props.click(this.state.a)
    }
    componentDidMount() {
        this.setState({
            a: this.props.data,
        });
    }

    render() {
        const styles = StyleSheet.create({
            text: { fontSize: 30, alignSelf: 'center', justifyContent: 'center', color: 'white' }
        });

        return (
            <TouchableOpacity key={this.props.data} onPress={this.onPress} style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }}>
                <Text style={styles.text} > {this.props.data} </Text>
            </TouchableOpacity>
        );
    }
}



export default Item;

