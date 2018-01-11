import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { Content } from 'native-base'
import { connect } from 'react-redux'
import globalStyles from '../../../GlobalStyles'
import { moneyFormat } from '../../../../util/util'

const DemageOpResult = props => {
    const { demageOpResultReducer: { data: { demageOpResult: {
        op_user_name, company_cost, under_cost, profit, penalty_cost, reduction_cost, transport_cost, repair_cost, refund_user_name, under_user_name, damage_type, damage_link_type } } } } = props
    console.log(props)
    return (
        <Content showsVerticalScrollIndicator={false}>
            <View style={styles.body}>
                <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>质损类型：</Text>普通／严重 damage_type(a,b,c,d,f)</Text>
                <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>责任人：</Text>{under_user_name ? `${under_user_name}` : ''}</Text>
                <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>报销人：</Text>{refund_user_name ? `${refund_user_name}` : ''}</Text>
                <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>质损环节：</Text>普通／严重damage_link_type()</Text>
                <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>维修费：¥</Text> {repair_cost ? `${moneyFormat(repair_cost, 2)}` : '0.00'}元</Text>
                <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>运费：¥</Text> {transport_cost ? `${moneyFormat(transport_cost, 2)}` : '0.00'}元</Text>
                <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>降价费：¥</Text> {reduction_cost ? `${moneyFormat(reduction_cost, 2)}` : '0.00'}元</Text>
                <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>罚款：¥</Text> {penalty_cost ? `${moneyFormat(penalty_cost, 2)}` : '0.00'}元</Text>
                <Text style={[styles.text, globalStyles.midText]}><Text style={styles.title}>盈亏：¥</Text> {profit ? `${moneyFormat(profit, 2)}` : '0.00'}元</Text>
                <View style={[styles.text, styles.strikingItem]}>
                    <Text style={[styles.title, globalStyles.midText]}>责任人承担费用：</Text>
                    <Text style={globalStyles.largeText}>¥ <Text style={styles.strikingText}>{under_cost ? `${moneyFormat(under_cost, 2)}` : '0.00'}</Text> 元</Text>
                </View>
                <View style={[styles.text, styles.strikingItem]}>
                    <Text style={[styles.title, globalStyles.midText]}>公司承担费用：</Text>
                    <Text style={globalStyles.largeText}>¥ <Text style={styles.strikingText}>{company_cost ? `${moneyFormat(company_cost, 2)}` : '0.00'}</Text> 元</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={globalStyles.midText}><Text style={styles.title}>处理人：</Text>{op_user_name ? `${op_user_name}` : ''}</Text>
            </View>
        </Content>
    )
}

const mapStateToProps = (state) => {
    return {
        demageOpResultReducer: state.demageOpResultReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DemageOpResult)

const styles = StyleSheet.create({
    text: {
        padding: 5
    },
    title: {
        fontWeight: 'bold'
    },
    strikingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    strikingText: {
        color: 'red'
    },
    body: {
        paddingVertical: 15,
        borderBottomWidth: 0.3,
        borderColor: '#777',
        marginHorizontal: 15
    },
    footer: {
        paddingVertical: 15,
        marginHorizontal: 15,
        alignItems: 'flex-end'
    }
})


