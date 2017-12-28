import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { fontSizeCoeff } from '../../../../util/util'
import { connect } from 'react-redux'

class ImageListForDemageInfo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 5 * fontSizeCoeff }}>ImageListForDemageInfo</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        templateReducer: state.templateReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ImageListForDemageInfo)
