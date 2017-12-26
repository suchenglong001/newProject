import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { fontSizeCoeff } from '../../../../util/util'
import { connect } from 'react-redux'
import { Container, Header, Content, List, ListItem } from 'native-base'
import globalStyles from '../../../GlobalStyles'

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
                    <Text style={[globalStyles.xlText, globalStyles.styleColor]}><Text style={styles.label}>vin：</Text>12345678901234567</Text>
                </ListItem>
                <ListItem>
                    <Text style={globalStyles.midText}><Text style={styles.label}>品牌：</Text>奥迪</Text>
                </ListItem>
                <ListItem>
                    <Text style={globalStyles.midText}><Text style={styles.label}>委托方：</Text>安盛船务</Text>
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

})

export default connect(mapStateToProps, mapDispatchToProps)(CarDetail)
