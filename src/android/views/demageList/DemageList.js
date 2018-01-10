import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, List, Left, ListItem, Thumbnail, Separator, Body, Right, Icon, Spinner } from 'native-base'
import globalStyles, { styleColor } from '../../GlobalStyles'
import { Actions } from 'react-native-router-flux'
import * as demageListAction from './DemageListAction'
import moment from 'moment'

//damage_status cancel :    ready_process : 1, in_process : 2, completed : 3
const renderListItem = props => {
    const { item: { id, vin, damage_explain, make_name, created_on, damage_status }, index } = props
    return (
        <TouchableOpacity style={styles.listItemContainer} onPress={Actions.demageInfo}>
            <View style={styles.listItemTopContainer}>
                <Text style={globalStyles.smallText}>编号：{id ? `${id}` : ''}</Text>
                <View style={styles.itemGroup}>
                    <Icon name='ios-clock-outline' style={styles.clockIcon} />
                    <Text style={[globalStyles.smallText, styles.text]}>{created_on ? `${moment(created_on).format('YYYY-MM-DD HH:mm')}` : ''}</Text>
                </View>
                <Text style={globalStyles.smallText}>
                    {damage_status == 1 && '待处理'}
                    {damage_status == 2 && '处理中'}
                    {damage_status == 3 && '已处理'}
                </Text>
            </View>
            <View style={styles.listItemBodyContainer}>
                <View style={styles.itemGroup}>
                    <Icon name='ios-car' style={styles.carIcon} />
                    <Text style={[globalStyles.midText, styles.text]}>{vin ? `${vin}` : ''}</Text>
                </View>
                <Text style={globalStyles.midText}>{make_name ? `${make_name}` : ''}</Text>
            </View>
            <View style={styles.listItemBottomContainer}>
                <Icon name='ios-alert' style={styles.alertIcon} />
                <Text style={[globalStyles.midText, styles.text]}>说明：<Text>{damage_explain ? `${damage_explain}` : ''}</Text></Text>
            </View>
        </TouchableOpacity>
    )
}

const renderEmpty = () => {
    return (
        <View style={styles.listEmptyContainer}>
            <Thumbnail square source={{ uri: 'emptylisticon' }} />
            <Text style={[globalStyles.largeText, styles.listEmptyText]}>暂无质损记录</Text>
        </View>
    )
}
const ListFooterComponent=()=>{
    return (
        <View>
            <Text>footer</Text>
        </View>
    )
}

const DemageList = props => {
    const { demageListReducer: { data: { demageList, isComplete }, getDemageList },getDemageListMore } = props
    if (getDemageList.isResultStatus == 1) {
        return (
            <Container>
                <Spinner color={styleColor} />
            </Container>
        )
    }
    else {
        return (
            <Container style={globalStyles.listBackgroundColor}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={renderEmpty}
                    data={demageList}
                    onEndReachedThreshold={0.2}
                    onEndReached={() => {
                        if (getDemageList.isResultStatus == 2) {
                            getDemageListMore()
                        }
                    }}
                    ListFooterComponent={ListFooterComponent}
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
        backgroundColor: '#fff'
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
    clockIcon: {
        fontSize: 15,
        color: '#00cade'
    },
    carIcon: {
        fontSize: 20,
        color: '#ccc'
    },
    alertIcon: {
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
    getDemageListMore: () => {
        dispatch(demageListAction.getDemageListMore())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DemageList)
