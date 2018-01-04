import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    InteractionManager
} from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, List, ListItem } from 'native-base'
import globalStyles from '../../../GlobalStyles'
import * as carDetailAction from './CarDetailAction'

class CarDetail extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { car_id } = this.props.initParam
        InteractionManager.runAfterInteractions(() => this.props.getCarDetail({ car_id }))
    }

    render() {
        const { carDetail: { make_name, en_short_name, route_start, route_end, vin } } = this.props.carDetailReducer.data
        return (
            <View>
                <ListItem>
                    <Text style={[globalStyles.xlText, globalStyles.styleColor]}><Text style={styles.label}>vin：</Text>{vin ? `${vin}` : ''}</Text>
                </ListItem>
                <ListItem>
                    <Text style={globalStyles.midText}><Text style={styles.label}>品牌：</Text>{make_name ? `${make_name}` : ''}</Text>
                </ListItem>
                <ListItem>
                    <Text style={globalStyles.midText}><Text style={styles.label}>委托方：</Text>{en_short_name ? `${en_short_name}` : ''}</Text>
                </ListItem>
                <ListItem>
                    <Text style={globalStyles.midText}><Text style={styles.label}>出发地：</Text>城市+地址</Text>
                </ListItem>
                <ListItem>
                    <Text style={globalStyles.midText}><Text style={styles.label}>目的地：</Text>城市+经销商</Text>
                </ListItem>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold'
    }
})

const mapStateToProps = (state) => {
    return {
        carDetailReducer: state.carDetailReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCarDetail: (param) => {
        dispatch(carDetailAction.getCarDetail(param))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CarDetail)
