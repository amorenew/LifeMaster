import React from 'react';
import {
    StyleSheet,
    View, Button,Text
} from 'react-native';
import { log } from 'util';

class index extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {
        return (
            <View style={styles.container}>
                <Button color="#841584" onPress={()=>alert("sfd")}
                    title="Learning" style = {{textColor:'red',color:'green'}} ><Text>Learning2</Text></Button>
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
    }
})


export default index;

