import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { fontSizeCoeff } from '../../../../util/util'
import { connect } from 'react-redux'
import { Container, Header, Content, List, ListItem } from 'native-base'

class CarDetail extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <View>
                <ListItem >
                    <Text>vin：12345678901234567</Text>
                </ListItem>
                <ListItem>
                    <Text>品牌：奥迪</Text>
                </ListItem>
                <ListItem>
                    <Text>委托方：安盛船务</Text>
                </ListItem>
                <ListItem>
                    <Text>出发地：城市+地址</Text>
                </ListItem>
                <ListItem>
                    <Text>目的地：城市+经销商</Text>
                </ListItem>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carDetailReducer: state.carDetailReducer
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CarDetail)
