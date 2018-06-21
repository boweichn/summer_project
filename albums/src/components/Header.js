// Import libraries for making components
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',

        // vertical alignment
        justifyContent: 'center' ,

        // horizontal alignment
        alignItems: 'center',
        
        height: 60,
        paddingTop: 15,
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        fontSize:20
    }
};

// Make the component avail to other parts of the app
export default Header;