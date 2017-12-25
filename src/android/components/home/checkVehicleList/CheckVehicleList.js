import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { fontSizeCoeff } from '../../../../util/util'
import { connect } from 'react-redux'
import { Icon, Thumbnail } from 'native-base'
import globalStyles from '../../../GlobalStyles'
import { Actions } from 'react-native-router-flux'

const renderListItem = props => {
    const { item, index } = props
    return (
        <TouchableOpacity key={index} style={styles.itemContainer} onPress={()=>Actions.carInfo()}>
            <View style={styles.itemHeaderContainer}>
                <Icon name="ios-time-outline" style={styles.itemHeaderIcon} />
                <Text style={[globalStyles.smallText, styles.text]}>2017-06-10 11:30</Text>
            </View>
            <View style={styles.itemBodyContainer}>
                <View style={styles.itemBodyLeft}>
                    <Icon name="ios-car" style={[globalStyles.styleColor, styles.itemBodyIcon]} />
                    <Text style={[globalStyles.midText, styles.text]}>12345678901234567</Text>
                </View>
                <Text style={globalStyles.midText}>一汽大众</Text>
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

    }

    render() {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={renderEmpty}
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={renderListItem}
            />
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 10,
        borderBottomWidth: 1,
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

})

export default connect(mapStateToProps, mapDispatchToProps)(CheckVehicleList)
