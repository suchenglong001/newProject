import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button } from 'native-base'

const ApplyDamageUploadImageSubmit = () => {
    return (
        <Button transparent onPress={() => Actions.popTo('carInfo')}>
            <Text style={styles.text}>完成</Text>
        </Button>
    )
}

export default ApplyDamageUploadImageSubmit

const styles = StyleSheet.create({
    text: {
        color: '#fff'
    }
})
