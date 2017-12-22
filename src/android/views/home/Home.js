import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native'
import { fontSizeCoeff } from '../../../util/util'
import { connect } from 'react-redux'
import { Actions, ActionConst } from 'react-native-router-flux'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        //
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 5 * fontSizeCoeff }}>Home</Text> 
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        homeReducer: state.homeReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
