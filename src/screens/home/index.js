import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native';
import ElevatedView from './../../components/ElevatedView'
import Images from './../../constants/Images'
import LinearGradient from './../../components/LinearGradient';

class index extends React.Component {

    render() {
        return (
            <LinearGradient
                        colors={['#5683FF', '#568355', '#568300']}
                        style={[styles.linearGradient,styles.container]}>
            <View style={styles.container}>

                <ElevatedView elevation={8} style={styles.stayElevated}/>
                <TouchableOpacity
                    style={{
                    backgroundColor: 'red',
                    paddingHorizontal: 10,
                    paddingVertical: 5
                }}
                    onPress={() => alert("sfd")}>
                    <Text style={{
                        color: 'green'
                    }}>Learning</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#4c669f', '#3b5998', '#192f6a']}
                        style={styles.linearGradient}>
                        <Text style={styles.buttonText}>Sign in with Facebook</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View
                    style={{
                    height: 100,
                    width: 100,
                    shadowOpacity: 0.75,
                    shadowRadius: 5,
                    shadowColor: 'blue',
                    shadowOffset: {
                        height: 0,
                        width: 0
                    }
                }}>
                    <View
                        style={{
                        height: 100,
                        width: 100,
                        shadowOpacity: 0.75,
                        shadowRadius: 5,
                        shadowColor: 'green',
                        shadowOffset: {
                            height: -5,
                            width: -5
                        }
                    }}/>
                </View>
            </View>
            </LinearGradient>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        position:'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'col'

    },

    stayElevated: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: 'white'
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 0
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent'
    }
})

export default index;
