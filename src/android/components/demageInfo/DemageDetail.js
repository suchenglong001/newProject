import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import globalStyles from '../../GlobalStyles'
import { Icon } from 'native-base'
import { connect } from 'react-redux'

const DemageDetail = props => {
    console.log('props', props)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerItem}>
                    <Text style={[globalStyles.largeText, globalStyles.styleColor, {}]}>No.:123456789</Text>
                    <Text style={globalStyles.smallText}>2017-05-12 11:30</Text>
                </View>
                <View style={styles.headerStatusItem}>
                    <Text style={[globalStyles.midText]}>处理中</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyItem}>
                    <Text style={[globalStyles.midText, globalStyles.styleColor]}>质损描述</Text>
                </View>
                <View style={styles.bodyItem}>
                    <Text style={globalStyles.midText}>右后门,右后叶子板凹坑变形</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={globalStyles.midText}><Text style={globalStyles.styleColor}>货车司机：</Text>张宝全（辽B12345）</Text>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        demageListReducer: state.demageListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DemageDetail)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    header: {
        paddingVertical: 5,
        borderBottomWidth: 0.3,
        borderColor: '#777'
    },
    headerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        alignItems: 'flex-end'
    },
    headerStatusItem: {
        alignItems: 'flex-end',
        paddingVertical: 5
    },
    body: {
        paddingVertical: 15,
        borderBottomWidth: 0.3,
        borderColor: '#777',
    },
    bodyItem: {
        paddingVertical: 5
    },
    footer: {
        marginVertical: 15
    }
})

