import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

    // state level property; initial state is empty; state is a class. state = initializes the class
    state = { albums: [] };

    // componentWillMount method activates the following codeblock before the render happens
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data })); // this.setState is a attribute setter for state class
    }

    // Render() dipslays the following jsx code to the device screen
    render() {
        console.log(this.state);

        return (
            <View>
                <Text>AlbumList</Text>
            </View>
        );
    }
}

export default AlbumList;