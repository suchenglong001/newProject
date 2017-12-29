import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native'
import globalStyles from '../../GlobalStyles'
import { Icon } from 'native-base'

const ListHeader = () => {
    return (
        <View style={styles.header}>
            <Icon name='ios-paper-outline' style={[styles.headerIcon, globalStyles.styleColor]} />
            <Text style={[globalStyles.midText, globalStyles.styleColor, styles.headerText, {}]}>操作记录</Text>
        </View>
    )
}

const renderListEmpty = () => {
    return (
        <View style={styles.item}>
            <Text style={globalStyles.smallText}>暂无记录</Text>
        </View>
    )
}

const renderItem = props => {
    return (
        <View style={styles.item}>
            <Text >记录</Text>
        </View>
    )
}

export default class RecordForDemageInfo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ListHeader />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={[]}
                    renderItem={renderItem}
                    ListEmptyComponent={renderListEmpty} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderColor: '#777',
        paddingVertical: 10,
        marginHorizontal: 15
    },
    headerText: {
        paddingLeft: 10
    },
    headerIcon: {
        fontSize: 20
    },
    item: {
        marginHorizontal: 15,
        paddingVertical: 5
    }
})

