import React, { Component } from 'react'
import { Text, View, TextInput, ToastAndroid, Alert, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Icon, Button, Container } from 'native-base'
import { Actions } from 'react-native-router-flux'
import globalStyles, { styleColor } from '../../GlobalStyles'
import { Field, reduxForm } from 'redux-form'
import SendSMS from '../../components/retrievePassword/sendSMS/SendSMS'

const TextBox = props => {
    const { input: { onChange, ...restProps } } = props
    return (
        <TextInput
            style={[globalStyles.midText, styles.itemInput]}
            onChangeText={onChange}
            {...restProps }
            placeholder='请输入验证码'
            underlineColorAndroid='transparent'
            placeholderTextColor='#ccc' />
    )
}

class RetrievePassword extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container style={styles.container}>
                <View>
                    <SendSMS />
                    <View style={styles.item}>
                        <Icon name='ios-key' style={[styles.itemIcon, globalStyles.styleColor]} />
                        <Text style={[globalStyles.midText, styles.itemText]}>验证码：</Text>
                        <Field name='vCode' component={TextBox} />
                    </View>
                    <View style={styles.item}>
                        <Icon name='ios-lock' style={[styles.itemIcon, globalStyles.styleColor]} />
                        <Text style={[globalStyles.midText, styles.itemText]}>新密码：</Text>
                        <Field name='firstPassword' component={TextBox} />
                    </View>
                    <View style={styles.item}>
                        <Icon name='ios-lock' style={[styles.itemIcon, globalStyles.styleColor]} />
                        <Text style={[globalStyles.midText, styles.itemText]}>确认密码：</Text>
                        <Field name='secondPassword' component={TextBox} />
                    </View>
                </View>
                <View>
                    <Button
                        full
                        //disabled={!(this.state.firstPassword && this.state.secondPassword && this.state.vCode && this.state.mobile)}
                        //style={this.state.firstPassword && this.state.secondPassword && this.state.vCode && this.state.mobile ? { backgroundColor: '#00cade' } : {}}
                        onPress={() => { }}>
                        <Text style={{ color: '#fff' }}>确认</Text>
                    </Button>
                    <Button
                        full
                        style={{ backgroundColor: '#00cade', marginTop: 10 }} onPress={Actions.pop}>
                        <Text style={{ color: '#fff' }}>返回</Text>
                    </Button>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        padding: 10
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    itemIcon: {
        fontSize: 14
    },
    itemText: {
        marginLeft: 5
    },
    itemInput: {
        flex: 1,
        marginLeft: 5
    }
})

const mapStateToProps = (state) => {
    return {
        retrievePasswordReducer: state.retrievePasswordReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: 'retrievePasswordForm'
    })(RetrievePassword))
