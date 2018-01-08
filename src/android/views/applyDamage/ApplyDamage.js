import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    InteractionManager
} from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Input, Label, Icon } from 'native-base'
import globalStyles, { textColor } from '../../GlobalStyles'
import { Field, reduxForm, getFormValues } from 'redux-form'
import { Actions } from 'react-native-router-flux'
import * as selectDriverAction from '../select/driver/SelectDriverAction'
import * as applyDamageSubmitAction from '../../components/applyDamage/submit/ApplyDamageSubmitAction'

const DamageRemark = props => {
    console.log('DamageRemarkprops', props)
    const { input: { onChange, ...restProps }, meta: { error, touched } } = props
    return (
        <View style={styles.item}>
            <Label style={[styles.label, globalStyles.midText, globalStyles.styleColor]}>质损描述</Label>
            <Input
                multiline={true}
                style={[styles.inputArea, globalStyles.midText]}
                onChangeText={onChange}
                {...restProps} />
            {touched&&<Text>{error}</Text>}
        </View>
    )
}

const SelectDriver = props => {
    console.log('SelectDriverprops', props)

    const { input: { onChange, value }, meta: { error, touched }, getSelectDriverList, getSelectDriverListWaiting } = props
    return (
        <TouchableOpacity
            style={[styles.item, styles.itemSelectContainer]}
            onPress={() => {
                getSelectDriverListWaiting()
                Actions.selectDriver({ onChange })
                InteractionManager.runAfterInteractions(getSelectDriverList)
            }} >
            <Label style={globalStyles.midText}>货车司机：</Label>
            <View style={styles.itemSelect}>
                <Label style={globalStyles.midText}>{value.drive_name ? `${value.drive_name}` : ''}{value.tel ? `(${value.tel})` : ''}</Label>
                <Icon name='md-arrow-dropdown' style={globalStyles.formIcon} />
            </View>
            {touched&&<Text>{error}</Text>}
        </TouchableOpacity>
    )
}

class ApplyDamage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    static defaultProps = {
        initParam: {
            car_Id: 908
        }
    }

    render() {
        const { getSelectDriverList, getSelectDriverListWaiting } = this.props
        console.log(this.props)
        return (
            <Container>
                <Content>
                    <Field
                        name='damageRemark'
                        component={DamageRemark} />
                    <Field
                        name='selectDriver'
                        component={SelectDriver}
                        getSelectDriverList={getSelectDriverList}
                        getSelectDriverListWaiting={getSelectDriverListWaiting} />
                </Content>
            </Container >
        )
    }
}

const styles = StyleSheet.create({
    item: {
        margin: 15
    },
    label: {
        marginVertical: 15
    },
    itemSelectContainer: {
        borderBottomWidth: 0.3,
        borderColor: '#777',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15,
        alignItems: 'center'
    },
    itemSelect: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputArea: {
        height: 200,
        textAlignVertical: 'top',
        borderWidth: 0.3,
        borderColor: '#777'
    }
})

const validate = values => {
    const errors = { damageRemark: '', selectDriver: '' }
    if (!values.damageRemark) {
        errors.damageRemark = '必填'
    }

    if (!values.selectDriver) {
        errors.selectDriver =  '必选'
    } else {
        if (!values.selectDriver.truck_id) {
            errors.selectDriver = '该司机未绑定车头'
        }
    }
    console.log('errors', errors)
    return errors
}

const mapStateToProps = (state) => {
    return {
        applyDamageReducer: state.applyDamageReducer,
        selectDriverValues: getFormValues('applyDamage')(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    getSelectDriverList: () => {
        dispatch(selectDriverAction.getSelectDriverList())
    },
    getSelectDriverListWaiting: () => {
        dispatch(selectDriverAction.getSelectDriverListWaiting())
    },
    onSubmit: () => {
        dispatch(applyDamageSubmitAction.createDamage())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: 'applyDamage',
        validate
    })(ApplyDamage)
)
