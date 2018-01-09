import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { connect } from 'react-redux'
import CarDetail from '../components/carInfo/carDetail/CarDetail'
import CarInfoRecord from '../components/carInfo/carInfoRecord/CarInfoRecord'
import { Button, Container, Spinner } from 'native-base'
import globalStyles, { styleColor } from '../GlobalStyles'
import { Actions } from 'react-native-router-flux'

const CarInfo = props => {
    const { getCarDetail, data: { carDetail: { id } } } = props.carDetailReducer
    const { getCarInfoRecord } = props.carInfoRecordReducer
    if (getCarDetail.isResultStatus == 1 || getCarInfoRecord.isResultStatus == 1) {
        return (
            <Container>
                <Spinner color={styleColor} />
            </Container>
        )
    } else {
        return (
            <Container>
                <CarDetail />
                <View style={styles.buttonContainer}>
                    <Button full onPress={() => Actions.applyDamage({ initParam: { car_Id: id } })} style={[styles.applyButton, styles.button]}>
                        <Text style={styles.buttonTitle}>质损申报</Text>
                    </Button>
                    <Button full onPress={() => { }} style={[globalStyles.styleBackgroundColor, styles.button]}>
                        <Text style={styles.buttonTitle}>已检</Text>
                    </Button>
                </View>
                <CarInfoRecord />
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    button: {
        margin: 5,
        flex: 1
    },
    applyButton: {
        backgroundColor: '#fa7376'
    },
    buttonTitle: {
        color: '#fff'
    },
    buttonContainer: {
        flexDirection: 'row',
        margin: 5
    }
})

const mapStateToProps = (state) => {
    return {
        carInfoReducer: state.carInfoReducer,
        carDetailReducer: state.carDetailReducer,
        carInfoRecordReducer: state.carInfoRecordReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CarInfo)
