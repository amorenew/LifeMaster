import React from 'react';
import {
    StyleSheet,
    View, Button,Text
} from 'react-native';

class index extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {
        return (
            <View style={styles.container}>
                <Button color="#841584"
                    title="Learning" style={styles.button} ><Text>Learning2</Text></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "300px",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    button: {
        textColor: "#F00",
        backgroundColor: '#0FF',
    }
})


export default index;

