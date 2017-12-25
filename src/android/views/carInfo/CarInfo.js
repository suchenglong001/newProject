import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { fontSizeCoeff } from '../../../util/util'
import { connect } from 'react-redux'
import CarDetail from '../../components/carInfo/carDetail/CarDetail'
import CarInfoRecord from '../../components/carInfo/carInfoRecord/CarInfoRecord'
import { Button } from 'native-base'

class CarInfo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={{flex:1}}>
                <CarDetail />
                <View style={{flexDirection:'row',margin:5}}>
                    <Button full onPress={() => { }} style={{margin:5}}>
                        <Text>质损申报</Text>
                    </Button>
                    <Button full onPress={() => { }} style={{margin:5}}>
                        <Text>已检</Text>
                    </Button>
                </View>
                <CarInfoRecord />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carInfoReducer: state.carInfoReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CarInfo)
