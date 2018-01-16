import React, { Component } from 'react'
import { View, Image, Dimensions, ToastAndroid, StatusBar, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Button, Icon, Form, Item, Text, Label, Input, Left, Body, Right, Title, List, ListItem, Container } from 'native-base'
import { Actions } from 'react-native-router-flux'
import globalStyles, { styleColor } from '../../GlobalStyles'

const window = Dimensions.get('window')
const ImageWidth = window.width
const ImageHeight = window.width / 9 * 16


class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container style={styles.container}>
                <StatusBar hidden={true} />
                <Image
                    source={{ uri: 'login_back' }}
                    style={styles.backgroundImage} />
                <View style={styles.connectContainer}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={{ uri: 'logo' }}
                            style={styles.logo} />
                    </View>
                    <View>
                        <Image
                            source={{ uri: 'app_name' }}
                            style={styles.appname} />
                    </View>
                    <View style={styles.formContainer}>
                        <Item rounded style={styles.item}>
                            <Icon active name='md-person' style={styles.itemIcon} />
                            <Input placeholder='请输入用户名'
                                placeholderTextColor='#9ECEF1'
                                style={[globalStyles.largeText, styles.input]}
                                onChangeText={(text) => console.log(text)}
                                value={''} />
                        </Item>
                        <Item rounded style={styles.item}>
                            <Icon active name='md-lock' style={styles.itemIcon} />
                            <Input placeholder='请输入密码'
                                placeholderTextColor='#9ECEF1'
                                style={[globalStyles.largeText, styles.input]}
                                secureTextEntry
                                onChangeText={(text) => console.log(text)}
                                value={''} />
                        </Item>
                        <Button style={[styles.itemButton, globalStyles.largeText, globalStyles.styleBackgroundColor]}
                            onPress={this.login}>
                            <Text style={[globalStyles.largeText, styles.buttonTittle]}>登录</Text>
                        </Button>
                    </View>
                    <TouchableOpacity style={styles.linkButton} onPress={() => Actions.retrievePassword()}>
                        <Text style={[globalStyles.midText, styles.linkButtonTittle]}>忘记密码？</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        width: window.width,
        height: window.width / 9 * 16
    },
    item: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        width: window.width / 4 * 3,
        borderWidth: 0,
        marginTop: 20
    },
    itemIcon: {
        color: '#9ECEF1',
        marginLeft: 10
    },
    itemButton: {
        marginTop: 50,
        width: window.width / 4 * 3,
        borderRadius: 25,
        justifyContent: 'center'
    },
    input: {
        color: '#9ECEF1'
    },
    buttonTittle: {
        color: '#fff'
    },
    linkButton: {
        alignSelf: 'flex-end',
        paddingTop: 10,
        paddingRight: 10
    },
    linkButtonTittle: {
        color: '#9ECEF1'
    },
    connectContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        borderRadius: 60,
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,0.5)',
        borderWidth: 20,
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 80,
        height: 80
    },
    appname: {
        width: 125,
        height: 38,
        marginTop: 20
    },
    formContainer:{
        marginTop:30
    }
})


const mapStateToProps = (state) => {
    return {
        loginReducer: state.loginReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
