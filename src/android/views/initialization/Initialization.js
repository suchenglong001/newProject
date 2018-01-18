import React, { Component } from 'react'
import {
    Linking,
    ToastAndroid,
    Platform,
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Button } from 'native-base'
import SplashScreen from 'react-native-splash-screen'
import * as initializationAction from './InitializationAction'

const window = Dimensions.get('window')
const ImageWidth = window.width
const ImageHeight = window.height

class Initialization extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.initApp()
        setTimeout(SplashScreen.hide, 2000)
    }

    render() {
        //const { data, initAPP, loadLocalStorage, validateToken, validateVersion } = this.props.InitializationReducer
        // {(validateVersion.isResultStatus == 3 || validateToken.isResultStatus == 3) && 
        // }
        //                 {(validateVersion.isResultStatus == 5 || validateToken.isResultStatus == 5) && }

        //                 {initAPP.isResultStatus == 2 && data.version.force_update == 1 && }
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <Image source={{ uri: 'init_back' }}
                    style={styles.image}
                />
                <Button block onPress={() => { }} style={styles.button}>
                    <Text style={styles.buttonTiltle}>联系管理员</Text>
                </Button>
                <Button block onPress={() => this.initApp()} style={styles.button}>
                    <Text style={styles.buttonTiltle}>重试</Text>
                </Button>
                <Button block onPress={() => this.linkDownload(data.version.url)} style={styles.button}>
                    <Text style={styles.buttonTiltle}>立即更新</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: ImageWidth,
        height: ImageHeight
    },
    buttonTiltle: {
        fontSize: 18,
        color: '#0078a7'
    },
    button: {
        position: 'absolute',
        bottom: 50, width: window.width / 4 * 3,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 25
    }
})



const mapStateToProps = (state) => {
    return {
        initializationReducer: state.initializationReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    initApp: () => {
        dispatch(initializationAction.initApp())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Initialization)
