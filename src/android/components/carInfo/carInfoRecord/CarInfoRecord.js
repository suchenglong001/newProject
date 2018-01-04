import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    InteractionManager
} from 'react-native'
import { connect } from 'react-redux'
import { ListItem } from 'native-base'
import globalStyles from '../../../GlobalStyles'
import * as carInfoRecordAction from './CarInfoRecordAction'

const renderListItem = props => {
    const { item, index } = props
    return (
        <View key={index} style={styles.listItemContainer}>
            <Text style={globalStyles.midText}>操作记录</Text>
        </View>
    )
}

const renderListEmpty = () => {
    return (
        <View style={styles.listEmptyContainer}>
            <Text style={globalStyles.midText}>暂无记录</Text>
        </View>
    )
}

const renderListHeader = () => {
    return (
        <ListItem>
            <Text style={[globalStyles.midText, globalStyles.styleColor]}>操作记录</Text>
        </ListItem>
    )
}

const renderListFooter = () => {
    return (
        <View style={styles.listFooterContainer} />
    )
}

class CarInfoRecord extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { car_id } = this.props.initParam
        InteractionManager.runAfterInteractions(() => this.props.getCarInfoRecord({ car_id }))
    }

    render() {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                renderItem={renderListItem}
                ListEmptyComponent={renderListEmpty}
                ListHeaderComponent={renderListHeader}
                ListFooterComponent={renderListFooter}
            />
        )
    }
}

const styles = StyleSheet.create({
    listItemContainer: {
        marginLeft: 15,
        marginTop: 5
    },
    listEmptyContainer: {
        margin: 15
    },
    listFooterContainer: {
        height: 5
    }
})

const mapStateToProps = (state) => {
    return {
        carInfoRecordReducer: state.carInfoRecordReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCarInfoRecord: (param) => {
        dispatch(carInfoRecordAction.getCarInfoRecord(param))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CarInfoRecord)
