import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native'
import { fontSizeCoeff } from '../../../util/util'
import { connect } from 'react-redux'
import CheckStatistics from '../../components/home/checkStatistics/CheckStatistics'
import CheckVehicleList from '../../components/home/checkVehicleList/CheckVehicleList'
import { Container } from 'native-base'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flex:1}}>
                <CheckStatistics />
                <CheckVehicleList />
                {/* <Text style={{ fontSize: 5 * fontSizeCoeff }}>Home</Text>  */}
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
