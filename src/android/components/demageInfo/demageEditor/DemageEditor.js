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
import { Field, reduxForm } from 'redux-form'
import * as routerDirection from '../../../../util/RouterDirection'
import { Container, Content, Input, Label, Icon, Button } from 'native-base'
import globalStyles, { textColor } from '../../../GlobalStyles'
import * as selectDriverAction from '../../../views/select/driver/SelectDriverAction'
import * as demageEditorAction from './DemageEditorAction'
import moment from 'moment'

const DamageRemark = props => {
    const { input: { onChange, ...restProps }, meta: { error } } = props
    return (
        <View style={styles.item}>
            <Label style={[styles.label, globalStyles.midText, globalStyles.styleColor]}>质损描述</Label>
            <Input
                multiline={true}
                style={[styles.inputArea, globalStyles.midText]}
                onChangeText={onChange}
                {...restProps} />
            {error && <Text style={[globalStyles.errorText, { marginTop: 10 }]}>* {error}</Text>}
        </View>
    )
}

const SelectDriver = props => {
    const { input: { onChange, value }, meta: { error }, getSelectDriverList, getSelectDriverListWaiting, parent } = props
    return (
        <TouchableOpacity
            style={[styles.item, styles.itemSelectContainer]}
            onPress={() => {
                getSelectDriverListWaiting()
                routerDirection.selectDriver(parent)({ onChange })
                InteractionManager.runAfterInteractions(getSelectDriverList)
            }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Label style={globalStyles.midText}>货车司机：</Label>
                <View style={styles.itemSelect}>
                    <Label style={globalStyles.midText}>{value.drive_name ? `${value.drive_name}` : ''}</Label>
                    <Icon name='md-arrow-dropdown' style={globalStyles.formIcon} />
                </View>
            </View>
            {error && <Text style={[globalStyles.errorText, { marginTop: 10 }]}>* {error}</Text>}
        </TouchableOpacity>
    )
}

const DemageEditor = props => {
    const { getSelectDriverList, getSelectDriverListWaiting, updateDamage, parent, initParam: { id, created_on, car_id, vin } } = props
    return (
        <Container>
            <Content showsVerticalScrollIndicator={false}>
                <View style={[styles.item, styles.header]}>
                    <View style={styles.headerItem}>
                        <Text style={[globalStyles.largeText, globalStyles.styleColor]}>No.：{id ? `${id}` : ''}</Text>
                        <Text style={globalStyles.smallText}>{created_on ? `${moment(created_on).format('YYYY-MM-DD HH:mm')}` : ''}</Text>
                    </View>
                    <View style={styles.headerStatusItem}>
                        <Text style={[globalStyles.midText]}>处理中</Text>
                    </View>
                </View>
                <Field
                    name='damageRemark'
                    component={DamageRemark} />
                <Field
                    name='selectDriver'
                    component={SelectDriver}
                    getSelectDriverList={getSelectDriverList}
                    getSelectDriverListWaiting={getSelectDriverListWaiting}
                    parent={parent} />
                <Button full
                    style={[globalStyles.styleBackgroundColor, { margin: 15 }]}
                    onPress={() => updateDamage({
                        damageId: id,
                        carId: car_id,
                        vin
                    })}>
                    <Text style={[globalStyles.midText, { color: '#fff' }]}>修改</Text>
                </Button>
            </Content>
        </Container>
    )
}

const validate = values => {
    const errors = { damageRemark: '', selectDriver: '' }
    if (!values.damageRemark) {
        errors.damageRemark = '必填'
    }

    if (!values.selectDriver) {
        errors.selectDriver = '必选'
    } else {
        if (!values.selectDriver.truck_id) {
            errors.selectDriver = '该司机未绑定车头'
        }
    }
    return errors
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
        paddingBottom: 15
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
    },
    headerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        alignItems: 'flex-end'
    },
    header: {
        paddingVertical: 5,
        borderBottomWidth: 0.3,
        borderColor: '#777'
    },
    headerStatusItem: {
        alignItems: 'flex-end',
        paddingVertical: 5
    }
})

const mapStateToProps = (state, ownProps) => {
    const { initParam: { damage_explain, drive_name, drive_id, truck_id, truck_num } } = ownProps
    return {
        initialValues: {
            damageRemark: damage_explain,
            selectDriver: {
                id: drive_id,
                drive_name,
                truck_id,
                truck_num
            }
        },
        formReducer: state.form
    }
}

const mapDispatchToProps = (dispatch) => ({
    getSelectDriverList: () => {
        dispatch(selectDriverAction.getSelectDriverList())
    },
    getSelectDriverListWaiting: () => {
        dispatch(selectDriverAction.getSelectDriverListWaiting())
    },
    updateDamage: (param) => {
        dispatch(demageEditorAction.updateDamage(param))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'demageEditorForm',
    validate
})(DemageEditor))
