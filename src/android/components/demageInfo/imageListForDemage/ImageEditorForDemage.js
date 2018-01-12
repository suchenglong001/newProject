import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native'
import ImageItem from '../../share/ImageItem'
import globalStyles from '../../../GlobalStyles'
import { connect } from 'react-redux'
import { file_host } from '../../../../config/Host'

const renderItem = props => {
    const { item, index } = props
    return (
        <View key={index} style={styles.itemContainer}>
            <ImageItem imageUrl={`${file_host}/image/${item.url}`} />
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

const ImageEditorForDemage = props => {
    const { imageListForDemageReducer: { data: { demageImageList } } } = props
    console.log(props)
    return (
        <FlatList
            style={styles.flatList}
            data={demageImageList}
            numColumns={2}
            ListEmptyComponent={renderListEmpty}
            renderItem={renderItem} />
    )
}

const mapStateToProps = (state) => {
    return {
        imageListForDemageReducer: state.imageListForDemageReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ImageEditorForDemage)

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

