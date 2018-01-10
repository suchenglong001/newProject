import React, { Component } from 'react'
import CheckStatistics from '../components/home/checkStatistics/CheckStatistics'
import CheckVehicleList from '../components/home/checkVehicleList/CheckVehicleList'
import { Container } from 'native-base'
import globalStyles from '../GlobalStyles'

const Home = props => {
    return (
        <Container style={globalStyles.listBackgroundColor}>
            <CheckStatistics />
            <CheckVehicleList parent={props.parent}/>
        </Container>
    )
}

export default Home
