import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { fontSizeCoeff } from '../../../util/util'
import { connect } from 'react-redux'
import { Container, Content, List, Left, ListItem, Thumbnail, Separator, Body, Right, Icon } from 'native-base'
import globalStyles from '../../GlobalStyles'
import { Actions } from 'react-native-router-flux'

const renderListItem = props => {
    const { item, index } = props
    return (
        <TouchableOpacity style={styles.listItemContainer} onPress={Actions.demageInfo}>
            <View style={styles.listItemTopContainer}>
                <Text style={globalStyles.smallText}>编号：123456677</Text>
                <View style={styles.itemGroup}>
                    <Icon name='ios-clock-outline' style={styles.clockIcon} />
                    <Text style={[globalStyles.smallText, styles.text]}>2017-05-12 11:30</Text>
                </View>
                <Text style={globalStyles.smallText}>待处理</Text>
            </View>
            <View style={styles.listItemBodyContainer}>
                <View style={styles.itemGroup}>
                    <Icon name='ios-car' style={styles.carIcon} />
                    <Text style={[globalStyles.midText, styles.text]}>12345678901234567</Text>
                </View>
                <Text style={globalStyles.midText}>一汽大众</Text>
            </View>
            <View style={styles.listItemBottomContainer}>
                <Icon name='ios-alert' style={styles.alertIcon} />
                <Text style={[globalStyles.midText, styles.text]}>说明：<Text>右后门</Text></Text>
            </View>
        </TouchableOpacity>
    )
}

const renderEmpty = () => {
    return (
        <View style={styles.listEmptyContainer}>
            <Thumbnail square source={{ uri: 'emptylisticon' }} />
            <Text style={[globalStyles.largeText, styles.listEmptyText,{}]}>暂无质损记录</Text>
        </View>
    )
}

class DemageList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container style={globalStyles.listBackgroundColor}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={renderEmpty}
                    data={[1, 2, 3, 4, 5, 6, 7]}
                    renderItem={renderListItem} />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    listEmptyContainer: {
        alignItems: 'center',
        marginTop: 60
    },
    listEmptyText: {
        color: '#aaa',
        marginTop: 30
    },
    listItemContainer: {
        marginHorizontal: 10,
        marginTop: 10,
        borderWidth: 0.3,
        borderColor: '#777',
        backgroundColor:'#fff'
    },
    listItemTopContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 0.3,
        borderColor: '#777',
        alignItems: 'center'
    },
    listItemBodyContainer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    listItemBottomContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    text: {
        paddingLeft: 5
    },
    itemGroup: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    clockIcon:{
        fontSize: 15, 
        color: '#00cade'
    },
    carIcon:{
        fontSize: 20, 
        color: '#ccc'
    },
    alertIcon:{
        fontSize: 20, 
        color: '#fa7376'
    }
})

const mapStateToProps = (state) => {
    return {
        demageListReducer: state.demageListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DemageList)
