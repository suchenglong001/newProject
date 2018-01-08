import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Input, Label, Icon } from 'native-base'
import CameraButton from '../../components/share/CameraButton'
import globalStyles from '../../GlobalStyles'
import * as applyDamageUploadImageAction from './ApplyDamageUploadImageAction'
import ImageItem from '../../components/share/ImageItem'


const renderItem = props => {
    const { item, index, uploadDamageImageWating, uploadDamageImage } = props
    if (item == 'isCameraButton') {
        return renderItemCameraButton({ index, uploadDamageImageWating, uploadDamageImage })
    } else {
        return (
            <View key={index} style={styles.itemContainer}>
                <ImageItem imageUrl={`http://stg.myxxjs.com:9002/api/image/${item}`} />
            </View>
        )
    }
}

const renderItemCameraButton = props => {
    const { index, uploadDamageImageWating, uploadDamageImage } = props
    return (
        <View key={index} style={styles.itemCameraButton}>
            <CameraButton
                getImage={uploadDamageImage}
                _cameraStart={uploadDamageImageWating}
            />
        </View>
    )
}

const renderListEmpty = props => {
    const { uploadDamageImageWating, uploadDamageImage } = props
    return (
        <View>
            <View style={styles.cameraButtonContainer}>
                <CameraButton
                    getImage={uploadDamageImage}
                    _cameraStart={uploadDamageImageWating} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={[globalStyles.largeText, globalStyles.styleColor]}>点击按钮上传质损图片</Text>
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={[globalStyles.smallText, globalStyles.styleColor]}>若不进行此选项操作可直接点击“<Text style={styles.tagText}>完成</Text>”</Text>
            </View>
        </View>
    )
}

class ApplyDamageUploadImage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        const { uploadDamageImageWating, uploadDamageImage, applyDamageUploadImageReducer: { data: { imageList } } } = this.props
        console.log('imageList', imageList)
        return (
            <FlatList
                style={styles.flatList}
                showsVerticalScrollIndicator={false}
                data={imageList.length > 0 ? [...imageList, 'isCameraButton'] : imageList}
                numColumns={2}
                ListEmptyComponent={() => renderListEmpty({ uploadDamageImageWating, uploadDamageImage })}
                renderItem={({ item, index }) => renderItem({ item, index, uploadDamageImageWating, uploadDamageImage })} />
        )
    }
}

const styles = StyleSheet.create({
    cameraButtonContainer: {
        marginTop: 50
    },
    subtitleContainer: {
        marginTop: 10,
        alignItems: 'center'
    },
    titleContainer: {
        marginTop: 40,
        alignItems: 'center'
    },
    tagText: {
        color: 'red'
    },
    itemContainer: {
        margin: 5
    },
    listEmptyContainer: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatList: {
        padding: 5
    },
    itemCameraButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})

const mapStateToProps = (state) => {
    return {
        applyDamageUploadImageReducer: state.applyDamageUploadImageReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    uploadDamageImage: (param) => {
        dispatch(applyDamageUploadImageAction.uploadDamageImage(param))
    },
    uploadDamageImageWating: () => {
        dispatch(applyDamageUploadImageAction.uploadDamageImageWating())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplyDamageUploadImage)
