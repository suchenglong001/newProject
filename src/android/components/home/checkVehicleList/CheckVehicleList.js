import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    InteractionManager
} from 'react-native'
import { connect } from 'react-redux'
import { Icon, Thumbnail } from 'native-base'
import globalStyles from '../../../GlobalStyles'
import { Actions } from 'react-native-router-flux'
import * as checkVehicleListAction from './CheckVehicleListAction'
import * as carDetailAction from '../../../components/carInfo/carDetail/CarDetailAction'
import * as carInfoRecordAction from '../../../components/carInfo/carInfoRecord/CarInfoRecordAction'
import moment from 'moment'
import { Field, reduxForm } from 'redux-form'

const renderListItem = props => {
    const { item: { vin, make_name, check_start_date, car_id }, index, getCarDetail, getCarInfoRecord, getCarInfoRecordWaiting, getCarDetailWaiting } = props
    return (
        <TouchableOpacity key={index} style={[styles.itemContainer]} onPress={() => {
            getCarInfoRecordWaiting()
            getCarDetailWaiting()
            Actions.carInfo()
            InteractionManager.runAfterInteractions(() => {
                getCarDetail({ car_id })
                getCarInfoRecord({ car_id })
            })

        }}>
            <View style={styles.itemHeaderContainer}>
                <Icon name="ios-time-outline" style={styles.itemHeaderIcon} />
                <Text style={[globalStyles.smallText, styles.text]}>{check_start_date ? `${moment(check_start_date).format('YYYY-MM-DD HH:mm')}` : ''}</Text>
            </View>
            <View style={styles.itemBodyContainer}>
                <View style={styles.itemBodyLeft}>
                    <Icon name="ios-car" style={[globalStyles.styleColor, styles.itemBodyIcon]} />
                    <Text style={[globalStyles.midText, styles.text]}>{vin ? `${vin}` : ''}</Text>
                </View>
                <Text style={globalStyles.midText}>{make_name ? `${make_name}` : ''}</Text>
            </View>
        </TouchableOpacity>
    )
}

const renderEmpty = () => {
    return (
        <View style={styles.listEmptyContainer}>
            <Thumbnail square source={{ uri: 'emptylisticon' }} />
            <Text style={[globalStyles.largeText, styles.listEmptyText]}>暂无检车记录</Text>
        </View>
    )
}

class CheckVehicleList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => this.props.getCheckVehicleList())
    }

    render() {
        const { checkVehicleList } = this.props.checkVehicleListReducer.data
        const { getCarDetail, getCarInfoRecord, getCarInfoRecordWaiting, getCarDetailWaiting } = this.props
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={renderEmpty}
                data={checkVehicleList}
                renderItem={({ item, index }) => renderListItem({ item, index, getCarDetail, getCarInfoRecord, getCarDetailWaiting, getCarInfoRecordWaiting })}
            />
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 10,
        borderBottomWidth: 0.3,
        borderColor: '#ddd',
        paddingVertical: 5
    },
    itemHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5
    },
    itemBodyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    itemHeaderIcon: {
        fontSize: 14,
        color: '#00cade'
    },
    itemBodyLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemBodyIcon: {
        fontSize: 20
    },
    text: {
        paddingLeft: 5
    },
    listEmptyContainer: {
        alignItems: 'center',
        marginTop: 60
    },
    listEmptyText: {
        color: '#aaa',
        marginTop: 30
    }
})

const mapStateToProps = (state) => {
    return {
        checkVehicleListReducer: state.checkVehicleListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCheckVehicleList: () => {
        dispatch(checkVehicleListAction.getCheckVehicleList())
    },
    getCarDetail: (param) => {
        dispatch(carDetailAction.getCarDetail(param))
    },
    getCarInfoRecord: (param) => {
        dispatch(carInfoRecordAction.getCarInfoRecord(param))
    },
    getCarInfoRecordWaiting: () => {
        dispatch(carInfoRecordAction.getCarInfoRecordWaiting())
    },
    getCarDetailWaiting: () => {
        dispatch(carDetailAction.getCarDetailWaiting())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckVehicleList)
