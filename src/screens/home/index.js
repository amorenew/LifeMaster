import React from 'react';
import {
    StyleSheet,
    View, Button, Text, TouchableOpacity
} from 'react-native';
import ElevatedView from './../../components/ElevatedView'

class index extends React.Component {


    render() {
        return (
            <View style={styles.container}>

                <ElevatedView
                    elevation={8}
                    style={styles.stayElevated}
                />
                <TouchableOpacity
                    style={{ backgroundColor: 'red', paddingHorizontal: 10, paddingVertical: 5 }}
                    onPress={() => alert("sfd")}>
                    <Text style={{ color: 'green' }}>Learning</Text>
                </TouchableOpacity>
                <View
                    style={{
                        height: 100,
                        width: 100,
                        shadowOpacity: 0.75,
                        shadowRadius: 5,
                        shadowColor: 'blue',
                        shadowOffset: { height: 0, width: 0 },
                    }}
                >
                    <View
                        style={{
                            height: 100,
                            width: 100,
                            shadowOpacity: 0.75,
                            shadowRadius: 5,
                            shadowColor: 'green',
                            backgroundColor:'linear-gradient(to right, red , yellow)',
                            shadowOffset: { height: -5, width: -5 },
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },

    stayElevated: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: 'white'
    }
})


export default index;

