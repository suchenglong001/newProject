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
import { Container, Content, Input, Label, Icon } from 'native-base'
import globalStyles, { textColor } from '../../../GlobalStyles'
import * as selectDriverAction from '../../../views/select/driver/SelectDriverAction'

const DamageRemark = props => {
    const { input: { onChange, ...restProps }, meta: { error, touched } } = props
    return (
        <View style={styles.item}>
            <Label style={[styles.label, globalStyles.midText, globalStyles.styleColor]}>质损描述</Label>
            <Input
                multiline={true}
                style={[styles.inputArea, globalStyles.midText]}
                onChangeText={onChange}
                {...restProps} />
            {touched && error && <Text style={[globalStyles.errorText, { marginTop: 10 }]}>* {error}</Text>}
        </View>
    )
}

const SelectDriver = props => {
    const { input: { onChange, value }, meta: { error, touched }, getSelectDriverList, getSelectDriverListWaiting, parent } = props
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
                    <Label style={globalStyles.midText}>{value.drive_name ? `${value.drive_name}` : ''}{value.tel ? `(${value.tel})` : ''}</Label>
                    <Icon name='md-arrow-dropdown' style={globalStyles.formIcon} />
                </View>
            </View>

            {touched && error && <Text style={[globalStyles.errorText, { marginTop: 10 }]}>* {error}</Text>}
        </TouchableOpacity>
    )
}

const DemageEditor = props => {

    console.log(props)
    const { getSelectDriverList, getSelectDriverListWaiting, parent } = props
    return (
        <Container>
            <Content>
                <View style={[styles.item, styles.header]}>
                    <View style={styles.headerItem}>
                        <Text style={[globalStyles.largeText, globalStyles.styleColor, {}]}>No.:123456789</Text>
                        <Text style={globalStyles.smallText}>2017-05-12 11:30</Text>
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
                {/* 
                <View style={styles.item}>
                    <Label style={[styles.label, globalStyles.midText, globalStyles.styleColor]}>质损描述</Label>
                    <Input multiline={true} style={[styles.inputArea, globalStyles.midText]} />
                </View>
                <View style={[styles.item, styles.itemSelectContainer]}>
                    <Label style={globalStyles.midText}>货车司机：</Label>
                    <View style={styles.itemSelect}>
                        <Label style={globalStyles.midText}>王大雷(13838385438)</Label>
                        <Icon name='md-arrow-dropdown' style={globalStyles.formIcon} />
                    </View>
                </View> */}
            </Content>
        </Container>
    )
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
    console.log('ownProps', ownProps)
    return {
        applyDamageReducer: state.applyDamageReducer,
        initialValues: {
            damageRemark: '1111',
            selectDriver: {
                drive_name: '111',
                tel: '1111'
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
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'demageEditorForm'
})(DemageEditor))
