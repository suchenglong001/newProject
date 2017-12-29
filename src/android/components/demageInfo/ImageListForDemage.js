import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native'
import ImageItem from '../share/ImageItem'
import globalStyles from '../../GlobalStyles'

const renderItem = props => {
    return (
        <View style={styles.itemContainer}>
            <ImageItem />
        </View>
    )
}

const renderListEmpty = () => {
    return (
        <View style={styles.listEmptyContainer}>
            <Text style={globalStyles.midText}>暂无照片</Text>
        </View>
    )
}

export default class ImageListForDemageInfo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <FlatList
                style={styles.flatList}
                data={[]}
                numColumns={2}
                ListEmptyComponent={renderListEmpty}
                renderItem={renderItem} />
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        margin: 5
    },
    flatList: {
        padding: 5
    },
    listEmptyContainer: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

