import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native'
import { connect } from 'react-redux'
import CheckStatistics from '../../components/home/checkStatistics/CheckStatistics'
import CheckVehicleList from '../../components/home/checkVehicleList/CheckVehicleList'
import { Container } from 'native-base'
import globalStyles from '../../GlobalStyles'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container style={globalStyles.listBackgroundColor}>
                <CheckStatistics />
                <CheckVehicleList />
            </Container>
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
