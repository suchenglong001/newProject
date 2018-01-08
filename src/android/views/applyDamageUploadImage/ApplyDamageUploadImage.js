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

class ApplyDamageUploadImage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        const { uploadDamageImageWating, uploadDamageImage } = this.props
        return (
            <Container>
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
            </Container>
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
