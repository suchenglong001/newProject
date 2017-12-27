import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Button } from 'native-base'

const ApplyDamageUploadImageSubmit = props => {
    return (
        <Button transparent onPress={() => Actions.popTo('carInfo')}>
            <Text style={{ color: '#fff' }}>完成</Text>
        </Button>
    )
}

const mapStateToProps = (state) => {
    return {
        applyDamageUploadImageSubmitReducer: state.applyDamageUploadImageSubmitReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ApplyDamageUploadImageSubmit)
