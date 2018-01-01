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
import LinearGradient from 'react-native-linear-gradient';

class index extends React.Component {

    render() {
        return (
            <View style={styles.container}>

                <ElevatedView elevation={8} style={styles.stayElevated}/>

                {/* <View
                    style={{
                    shadowOpacity: 0.75,
                    shadowRadius: 5,
                    shadowColor: 'blue',
                    shadowOffset: {
                        height: 0,
                        width: 0
                    }
                }}> */}

                    <TouchableOpacity
                        style={{
                        width: 250,
                        height: 130,
                        padding: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                        onPress={() => alert("sfd")}>
                        <LinearGradient
                            colors={['#5E98D9', '#558ED2', '#487EC7']}
                            style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingLeft: 15,
                            paddingRight: 15,
                            borderRadius: 10
                        }}>
                            <ImageBackground
                                source={Images.learning}
                                resizeMode={Image.resizeMode.contain}
                                style={{
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text
                                    style={{
                                    color: 'white',
                                    zIndex: 0,
                                    fontSize: 38
                                }}>Learning</Text>
                            </ImageBackground>
                        </LinearGradient>
                    </TouchableOpacity>
                {/* </View> */}
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'

    },

    stayElevated: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: 'white'
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
