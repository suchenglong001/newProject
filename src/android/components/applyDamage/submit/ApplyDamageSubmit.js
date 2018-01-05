import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Button } from 'native-base'

 const ApplyDamageSubmit = props => {
    return (
        <Button transparent onPress={Actions.applyDamageUploadImage}>
            <Text style={{ color: '#fff' }}>下一步</Text>
        </Button>
    )
}


const mapStateToProps = (state) => {
    return {
        applyDamageSubmitReducer: state.applyDamageSubmitReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    
})

export default  connect(mapStateToProps, mapDispatchToProps)(ApplyDamageSubmit)
